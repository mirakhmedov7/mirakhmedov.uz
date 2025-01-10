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
      <body className={`${satoshi.className} bg-slate-900 antialiased`}>
        <Scroll>{children}</Scroll>
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-HNKMR4SKGY" />
      </body>
    </html>
  )
}
