import React from 'react'

const Footer = () => {
  return (
    <footer className="px-4 text-center text-gray-500 mt-20">
      <small className="mb-2 block text-xs">
        &copy; 2025 Asliddin. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  )
}

export default Footer
