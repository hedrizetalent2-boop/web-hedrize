import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { token, name, email, phone, company, message } = await request.json()
    const secret = process.env.RECAPTCHA_SECRET_KEY
    if (!token || !secret) {
      return NextResponse.json({ success: false, error: 'Captcha not configured' }, { status: 400 })
    }
    const params = new URLSearchParams({ secret, response: token })
    const verify = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    })
    const result = await verify.json()
    if (!result.success) {
      return NextResponse.json({ success: false, error: 'Captcha verification failed' }, { status: 400 })
    }

    const subject = 'New Contact Form Submission'
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="margin:0 0 12px;">Contact Form</h2>
        <p><strong>Name:</strong> ${escapeHtml(name || '')}</p>
        <p><strong>Email:</strong> ${escapeHtml(email || '')}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || '')}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || '')}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(message || '')}</p>
      </div>
    `

    if (process.env.NODE_ENV !== 'production') {
      return NextResponse.json({ success: true, skipped: true })
    }

    const apiKey = process.env.SENDGRID_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL || 'info@hedrize.com'
    const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'no-reply@hedrize.com'
    if (!apiKey) {
      return NextResponse.json({ success: false, error: 'Email service not configured' }, { status: 500 })
    }

    const body = {
      personalizations: [{ to: [{ email: toEmail }] }],
      from: { email: fromEmail },
      subject,
      content: [{ type: 'text/html', value: html }],
    }

    const sendRes = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    if (!sendRes.ok) {
      return NextResponse.json({ success: false, error: 'Email send failed' }, { status: 500 })
    }
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 })
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
