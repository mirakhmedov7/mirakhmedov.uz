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
  metadataBase: new URL('https://mirakhmedov.uz'),
  title: {
    default: 'Asliddin Mirakhmedov',
    template: ' %s | Asliddin Mirakhmedov',
  },
  description:
    'Asliddin Mirakhmedov is a software engineer specializing in building exceptional digital experiences',
  keywords: [
    'Asliddin',
    'Mirakhmedov',
    'Frontend Developer',
    'Front End Engineer',
    'Portfolio',
    'Programmer',
    'Frontend Portfolio',
  ],
  authors: [{ name: 'Asliddin Mirakhmedov' }],
  openGraph: {
    type: 'website',
    title: 'Asliddin Mirakhmedov',
    description:
      'Asliddin Mirakhmedov is a software engineer specializing in building exceptional digital experiences',
    locale: 'en-US',
    url: 'https://mirakhmedov.uz',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: [
    {
      url: '/favicon.ico',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="./favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
        <link rel="shortcut icon" href="./favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Asliddin" />
        <link rel="manifest" href="/site.webmanifest" />
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
          content="https://www.mirakhmedov.uz/og.png"
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
