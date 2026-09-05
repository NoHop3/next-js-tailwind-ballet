import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactSection from '../ContactSection';
import { renderWithTranslations } from '@/test/utils';

vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

vi.mock('next/image', () => ({
  default: (props: Record<string, unknown>) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...(props as React.ImgHTMLAttributes<HTMLImageElement>)} alt={(props.alt as string) || ''} />;
  },
}));

vi.mock('@hcaptcha/react-hcaptcha', () => ({
  default: ({ onVerify }: { onVerify: (token: string) => void }) => (
    <button type="button" onClick={() => onVerify('test-captcha-token')}>
      solve captcha
    </button>
  ),
}));

vi.mock('@/lib/ThemeContext', () => ({
  useTheme: () => ({ theme: 'light', setTheme: vi.fn(), resolvedTheme: 'light' }),
}));

vi.mock('@/components/ui/motion', () => ({
  ScrollReveal: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={className}>{children}</div>
  ),
  StaggerContainer: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={className}>{children}</div>
  ),
  StaggerItem: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={className}>{children}</div>
  ),
  fadeInLeft: {},
  fadeInRight: {},
  fadeInUp: {},
  motion: { div: ({ children, className }: { children: React.ReactNode; className?: string }) => <div className={className}>{children}</div> },
}));

import { toast } from 'sonner';

describe('ContactSection form', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  async function fillAndSubmit() {
    const user = userEvent.setup();
    renderWithTranslations(<ContactSection />);

    await user.type(screen.getByLabelText('Full Name'), 'Test User');
    await user.type(screen.getByLabelText('Email Address'), 'test@example.com');
    await user.type(screen.getByLabelText('Message'), 'Hello world');
    await user.click(screen.getByRole('button', { name: /solve captcha/i }));
    await user.click(screen.getByRole('button', { name: /send message/i }));
  }

  it('renders the form fields', () => {
    renderWithTranslations(<ContactSection />);
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('disables the submit button while submitting', async () => {
    let resolveFetch!: (value: unknown) => void;
    const fetchPromise = new Promise((resolve) => { resolveFetch = resolve; });
    (global.fetch as ReturnType<typeof vi.fn>).mockReturnValue(fetchPromise);

    const user = userEvent.setup();
    renderWithTranslations(<ContactSection />);

    await user.type(screen.getByLabelText('Full Name'), 'Test User');
    await user.type(screen.getByLabelText('Email Address'), 'test@example.com');
    await user.type(screen.getByLabelText('Message'), 'Hello world');
    await user.click(screen.getByRole('button', { name: /solve captcha/i }));

    const button = screen.getByRole('button', { name: /send message/i });

    // Don't await — fire the click and immediately check the disabled state
    user.click(button);

    await waitFor(() => expect(button).toBeDisabled());

    // Now resolve the fetch and wait for it to finish
    resolveFetch({ ok: true, json: async () => ({ success: true }) });

    await waitFor(() => expect(button).not.toBeDisabled());
  });

  it('shows success toast and clears form on 200 response', async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });

    await fillAndSubmit();

    await waitFor(() => expect(toast.success).toHaveBeenCalledWith(
      'Message sent successfully!',
      expect.objectContaining({ description: "We'll get back to you soon." })
    ));

    expect((screen.getByLabelText('Full Name') as HTMLInputElement).value).toBe('');
  });

  it('shows error toast when fetch returns non-ok response', async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: false,
      json: async () => ({ success: false }),
    });

    await fillAndSubmit();

    await waitFor(() => expect(toast.error).toHaveBeenCalledWith(
      'Failed to send message. Please try again.'
    ));
  });

  it('blocks submission and does not call fetch when the captcha is unsolved', async () => {
    const user = userEvent.setup();
    renderWithTranslations(<ContactSection />);

    await user.type(screen.getByLabelText('Full Name'), 'Test User');
    await user.type(screen.getByLabelText('Email Address'), 'test@example.com');
    await user.type(screen.getByLabelText('Message'), 'Hello world');
    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => expect(toast.error).toHaveBeenCalledWith(
      'Please complete the captcha before sending.'
    ));
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('sends the captcha token to Web3Forms', async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });

    await fillAndSubmit();

    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
    const [, init] = (global.fetch as ReturnType<typeof vi.fn>).mock.calls[0];
    expect(JSON.parse(init.body)['h-captcha-response']).toBe('test-captcha-token');
  });

  it('shows error toast when fetch throws a network error', async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockRejectedValue(new Error('Network error'));

    await fillAndSubmit();

    await waitFor(() => expect(toast.error).toHaveBeenCalledWith(
      'Failed to send message. Please try again.'
    ));
  });
});
