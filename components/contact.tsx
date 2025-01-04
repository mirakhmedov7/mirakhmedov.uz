import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { LuSend } from 'react-icons/lu'
import Footer from './footer'

const Contact = () => {
  return (
    <section id="contact" className="pt-24 flex flex-col justify-between h-full pb-24">
      <div>
        <h2 className="text-lg text-white text-center mb-5">
          Please contact me directly at{' '}
          <a className="underline" href="mailto:mirakhmedov09@gmail.com">
            mirakhmedov09@gmail.com{' '}
          </a>
          or through this form.
        </h2>
        <form action="" className="flex flex-col gap-3 items-start">
          <Input type="email" placeholder="Your email" />
          <Textarea placeholder="Your message" className="min-h-32" />
          <Button variant="secondary" className="bg-white hover:bg-slate-200">
            Submit <LuSend />
          </Button>
        </form>
      </div>
      <Footer />
    </section>
  )
}

export default Contact
