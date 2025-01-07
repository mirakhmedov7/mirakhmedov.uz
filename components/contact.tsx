'use client'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { LuSend } from 'react-icons/lu'
import Footer from './footer'
import { useForm } from 'react-hook-form'
import type { FieldValues } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

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
        const response = await fetch('http://localhost:3000/api/contact', {
          method: 'POST',
          body: JSON.stringify(dataForm),
        })

        const data = await response.json()

        if (data) {
          reset()
          resolve() // Resolve the promise if successful
        } else {
          reject(new Error('Failed to send message.')) // Reject the promise if unsuccessful
        }
      } catch (error) {
        reject(error) // Reject the promise if there is an error
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
      className="pt-24 flex flex-col justify-between h-full pb-24"
    >
      <h2 className="lg:hidden text-white sm:text-2xl text-xl font-bold mb-5">
        CONTACT
      </h2>
      <div className="sm:max-w-2xl mx-auto">
        <h2 className="sm:text-lg text-grey text-center mb-5 text-base">
          Feel free to contact me - I am always open to interesting
          opportunities and collaborations. Contact me directly at{' '}
          <a className="underline" href="mailto:mirakhmedov09@gmail.com">
            mirakhmedov09@gmail.com{' '}
          </a>
          or through this form.
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 items-start"
          noValidate
        >
          <Toaster />
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
          {errors.name && (
            <p className="text-red-500">{String(errors.name.message)}</p>
          )}
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
          {errors.email && (
            <p className="text-red-500">{String(errors.email.message)}</p>
          )}
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
          {errors.message && (
            <p className="text-red-500">{String(errors.message.message)}</p>
          )}
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
