import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Asliddin Mirakhmedov',
  description: 'Asliddin Mirakhmedov is a software engineer who builds accessible, inclusive products and digital experiences for the web.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href='./porticon.png' />
      </head>
      <body className={`${inter.className} antialiased bg-slate-900 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0 scroll-smooth`}>{children}</body>
    </html>
  )
}
