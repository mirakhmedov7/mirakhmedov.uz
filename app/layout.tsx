import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
      </head>
      <body
        className={`${inter.className} antialiased bg-slate-900 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0 scroll-smooth`}
      >
        {children}
      </body>
    </html>
  )
}
