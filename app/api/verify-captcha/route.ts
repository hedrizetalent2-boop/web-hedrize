import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { token } = await request.json()
    const secret = process.env.RECAPTCHA_SECRET_KEY
    if (!token || !secret) {
      return NextResponse.json({ success: false }, { status: 400 })
    }
    const params = new URLSearchParams({ secret, response: token })
    const verify = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    })
    const result = await verify.json()
    return NextResponse.json({ success: !!result.success })
  } catch {
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
