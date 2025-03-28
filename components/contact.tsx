'use client'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { LuSend } from 'react-icons/lu'
import { useForm } from 'react-hook-form'
import type { FieldValues } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { SectionHeading } from '@/components/ui/section-heading'
import Reveal from './reveal'

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const promiseHandler = async (dataForm: FieldValues) => {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify(dataForm),
          next: { revalidate: 3600 },
        })

        const data = await response.json()

        if (data) {
          reset()
          resolve()
        } else {
          reject(new Error('Failed to send message.'))
        }
      } catch (error) {
        reject(error)
      }
    })
  }
  const onSubmit = async (dataForm: FieldValues) => {
    toast.promise(promiseHandler(dataForm), {
      loading: 'Sending...',
      success: 'Message sent successfully.',
      error: 'Failed to send message.',
    })
  }
  return (
    <section
      id="contact"
      className="pt-24 flex flex-col justify-between h-full lg:pb-24 pb-12"
    >
      <SectionHeading text="CONTACT" />
      <div className="sm:max-w-2xl mx-auto">
        <Reveal>
          <h2 className="sm:text-lg text-grey mb-5 text-base">
            I am always open to interesting opportunities and collaborations.
            Contact me directly at{' '}
            <a className="underline" href="mailto:mirakhmedov09@gmail.com">
              mirakhmedov09@gmail.com{' '}
            </a>
            or through this form.
          </h2>
        </Reveal>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 items-start form"
          noValidate
        >
          <Toaster />
          <Reveal className='w-full'>
            <Input
              {...register('name', {
                required: { value: true, message: 'Name is required' },
                minLength: {
                  value: 3,
                  message: 'Name should be at least 3 characters',
                },
              })}
              type="text"
              placeholder="Your name"
            />
          </Reveal>
          {errors.name && (
            <p className="text-red-500">{String(errors.name.message)}</p>
          )}
          <Reveal className='w-full'>
            <Input
              {...register('email', {
                required: { value: true, message: 'Email is required' },
                minLength: {
                  value: 3,
                  message: 'Enter a valid email',
                },
                validate: (value) => {
                  return value.includes('@') || 'Enter a valid email'
                },
              })}
              type="email"
              placeholder="Your email"
            />
          </Reveal>
          {errors.email && (
            <p className="text-red-500">{String(errors.email.message)}</p>
          )}
          <Reveal className='w-full'>
            <Textarea
              {...register('message', {
                required: { value: true, message: 'Message is required' },
                minLength: {
                  value: 15,
                  message: 'Message should be at least 15 characters',
                },
              })}
              placeholder="Your message"
              className="min-h-32"
            />
          </Reveal>
          {errors.message && (
            <p className="text-red-500">{String(errors.message.message)}</p>
          )}
          <Reveal className='w-full'>
            <Button className="bg-green-foreground text-green hover:bg-green hover:text-[#144E5E]">
              Submit <LuSend />
            </Button>
          </Reveal>
        </form>
        <Reveal>
          <footer className="text-gray-500 mt-20 max-w-md w-full">
            <small className="mb-2 block text-xs">
              &copy; 2025 Asliddin. All rights reserved.
            </small>
            <p className="text-xs">
              <span className="font-semibold">About this website:</span> built
              with React & Next.js (App Router & Server Actions), TypeScript,
              Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
            </p>
          </footer>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
