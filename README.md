# Ballet Studio Website 🩰

A modern, elegant static website for a ballet studio — built with Next.js 16, Tailwind CSS v4, and Framer Motion. This is a personal project showcasing my sister's ballet studio with a premium pink/purple aesthetic.

## ✨ Features

- **Modern Design** — Premium pink/purple color scheme with gradient effects, glassmorphism, and smooth animations
- **Dark/Light Mode** — Theme toggle with system preference detection
- **Multi-language** — Supports English (GB), Russian, Ukrainian, and Bulgarian
- **Responsive** — Mobile-first design with elegant mobile navigation drawer
- **Animations** — Scroll reveal animations and page transitions powered by Framer Motion
- **SEO Ready** — Open Graph tags, Twitter cards, and JSON-LD structured data
- **Image Gallery** — Lightbox gallery with keyboard navigation
- **Contact Form** — Styled with shadcn/ui components (frontend only)

## 🛠 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)
- **Animations:** [Framer Motion](https://motion.dev)
- **Icons:** [Lucide React](https://lucide.dev)
- **Fonts:** Playfair Display & Inter (Google Fonts)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── [lang]/             # Localized routes
│   │   ├── about/
│   │   ├── classes/
│   │   └── contact/
│   ├── globals.css         # Global styles & theme variables
│   └── layout.tsx          # Root layout
├── components/
│   ├── layout/             # Navbar, Footer, etc.
│   ├── providers/          # Theme, Translation, PageTransition
│   ├── sections/           # Page sections (Home, About, etc.)
│   └── ui/                 # Reusable UI components
└── lib/                    # Utilities, translations, schema
```

## 🎨 Customization

- **Theme colors:** Edit CSS variables in `src/app/globals.css`
- **Translations:** Update `src/lib/translations.json`
- **Content:** Modify section components in `src/components/sections/`

## 📝 License

This is a personal project. Feel free to use it as inspiration for your own projects.

---

Made with ❤️ for ballet
