import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, message } = await req.json()
  try {
    const { data, error } = await resend.emails.send({
      from: 'mirakhmedov@resend.dev',
      to: ['mirakhmedov09@gmail.com'],
      subject: `New message from ${name}`,
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data, { status: 200 })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}