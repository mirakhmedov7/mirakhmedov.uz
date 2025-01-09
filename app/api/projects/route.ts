import { NextResponse } from 'next/server'
import { client } from '@/sanity/client'

export async function GET() {
  const query = `*[_type == 'projects']`
  const posts = await client.fetch(query)
  return NextResponse.json(posts)
}
