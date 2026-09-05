import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { ImageResponse } from 'next/og';

export const alt = 'Балетна школа Па-па-па де труа | Смолян';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), 'public/assets/logo-full.png'));
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #fdf2f8 0%, #fae8ff 45%, #ede9fe 100%)',
          position: 'relative',
        }}
      >
        {/* Soft brand blobs, echoing the section backgrounds on the site */}
        <div
          style={{
            position: 'absolute',
            top: -160,
            left: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: 'radial-gradient(circle, rgba(236,72,153,0.28) 0%, rgba(236,72,153,0) 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -200,
            right: -140,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: 'radial-gradient(circle, rgba(168,85,247,0.28) 0%, rgba(168,85,247,0) 70%)',
          }}
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={560} height={415} />

        <div
          style={{
            display: 'flex',
            width: 360,
            height: 3,
            marginTop: 4,
            marginBottom: 26,
            background:
              'linear-gradient(90deg, rgba(236,72,153,0) 0%, #ec4899 50%, rgba(168,85,247,0) 100%)',
          }}
        />
        <div style={{ display: 'flex', fontSize: 40, color: '#6b21a8' }}>
          Балетна школа · Смолян
        </div>
        <div
          style={{ display: 'flex', fontSize: 27, color: '#7e22ce', marginTop: 14, opacity: 0.8 }}
        >
          Класически балет за всички нива
        </div>
      </div>
    ),
    size,
  );
}
