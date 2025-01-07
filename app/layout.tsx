import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Asliddin Mirakhmedov',
  description:
    'Asliddin Mirakhmedov is a software engineer dedicated to creating accessible and inclusive digital experiences and web-based products.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="./porticon.png" />
        <link rel="canonical" href="https://mirakhmedov.uz/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Asliddin',
              jobTitle: 'Frontend Developer',
              url: 'https://mirakhmedov.uz',
              sameAs: [
                'https://linkedin.com/in/mirakhmedov7',
                'https://github.com/mirakhmedov7',
              ],
            }),
          }}
        />
        <meta name="yandex-verification" content="b664473cbfb8a3bf" />
        <meta name="robots" content="index, follow"></meta>
        <meta property="og:title" content="Asliddin Mirakhmedov"></meta>
        <meta
          property="og:description"
          content="Asliddin Mirakhmedov is a software engineer dedicated to creating accessible and inclusive digital experiences and web-based products."
        ></meta>
        <meta
          property="og:image"
          content="https://www.mirakhmedov.uz/porticon.png"
        ></meta>
        <meta property="og:url" content="https://mirakhmedov.uz"></meta>
        <meta
          name="google-site-verification"
          content="_7-N8cPugPZRvpzoqALvtizYDYMD-mURaJiE_zV-Qjw"
        />
      </head>
      <body className={`${inter.className} bg-slate-900 `}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
