import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { LuSend } from 'react-icons/lu'
import Footer from './footer'
// import { Resend } from 'resend'
// import { sendEmail } from '@/action/sendEmail'

const Contact = () => {
  // const SubmitHandler = (e: React.FormEvent) => {
  //   const name = ((e.currentTarget as HTMLFormElement)[0] as HTMLInputElement)
  //     .value
  //   const email = ((e.currentTarget as HTMLFormElement)[1] as HTMLInputElement)
  //     .value
  //   const message = (
  //     (e.currentTarget as HTMLFormElement)[2] as HTMLInputElement
  //   ).value
  //   // sendEmail({ name, email, message })
  //   const resend = new Resend(process.env.RESEND_API_KEY)

  //   resend.emails.send({
  //     from: email,
  //     to: 'asliddingpt@gmail.com',
  //     subject: name,
  //     html: '<p>' + message + '</p>',
  //   })
  //   e.preventDefault()
  // }
  return (
    <section
      id="contact"
      className="pt-24 flex flex-col justify-between h-full pb-24"
    >
      <div>
        <h2 className="text-lg text-grey text-center mb-5">
          Please contact me directly at{' '}
          <a className="underline" href="mailto:mirakhmedov09@gmail.com">
            mirakhmedov09@gmail.com{' '}
          </a>
          or through this form.
        </h2>
        <form
          // onSubmit={SubmitHandler}
          className="flex flex-col gap-3 items-start"
        >
          <Input type="text" placeholder="Your name" />
          <Input type="email" placeholder="Your email" />
          <Textarea placeholder="Your message" className="min-h-32" />
          <Button className="bg-green-foreground text-green hover:bg-green hover:text-[#144E5E]">
            Submit <LuSend />
          </Button>
        </form>
      </div>
      <Footer />
    </section>
  )
}

export default Contact
