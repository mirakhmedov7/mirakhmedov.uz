import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import Scroll from '@/components/scroll'
import localFont from 'next/font/local'

const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/Satoshi-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/general sans/GeneralSans-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
})

export const metadata: Metadata = {
  title: 'Asliddin Mirakhmedov | Frontend Developer',
  description:
    'Asliddin Mirakhmedov is a software engineer specializing in building exceptional digital experiences',
  keywords:
    'Asliddin, Mirakhmedov, Frontend Developer, Front End Engineer, Portfolio, Programmer, Frontend Portfolio',
  authors: [{ name: 'Asliddin Mirakhmedov' }],
  openGraph: {
    type: 'website',
    title: 'Asliddin Mirakhmedov | Frontend Developer',
    description:
      'Asliddin Mirakhmedov is a software engineer specializing in building exceptional digital experiences',
    locale: 'en-US',
    url: 'https://mirakhmedov.uz',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./assets/favicon.ico" type="image/x-icon" />
        <link
          rel="icon"
          href="/assets/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/assets/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link rel="apple-touch-icon" href="assets/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/assets/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/assets/android-chrome-512x512.png"
        />

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
        <meta
          property="og:image"
          content="https://www.mirakhmedov.uz/og-image.png"
        ></meta>
        <meta
          name="google-site-verification"
          content="_7-N8cPugPZRvpzoqALvtizYDYMD-mURaJiE_zV-Qjw"
        />
      </head>
      <body className={`${satoshi.className} bg-slate-900 antialiased`}>
        <Scroll>{children}</Scroll>
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-HNKMR4SKGY" />
      </body>
    </html>
  )
}
