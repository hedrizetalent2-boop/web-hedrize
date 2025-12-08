"use client"

import type React from "react"

import { useState } from "react"
import Script from "next/script"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const gre = (window as any)?.grecaptcha
    const token = gre?.getResponse?.()
    if (!token) {
      alert("Please complete the captcha before submitting.")
      return
    }
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
      }),
    })
    const data = await res.json().catch(() => ({ success: false }))
    if (!data?.success) {
      alert(data?.error || 'Submission failed. Please try again.')
      try { gre?.reset?.() } catch {}
      return
    }
    setFormData({ name: "", email: "", phone: "", company: "", message: "" })
    try { gre?.reset?.() } catch {}
    alert("Thank you! Your message has been sent.")
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Script src="https://www.google.com/recaptcha/api.js" async defer />
      <Navigation />

      <div className="flex-1">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Get In Touch</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-20">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                {/* Address */}
                <div className="p-6 bg-muted/50 rounded-xl border border-border hover-lift animate-slide-in-left">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Address</h3>
                      <p className="text-muted-foreground">
                        Skynindo Building 3rd Floor
                        <br />
                        Jl. DR. Susilo Raya No. 23,
                        <br />
                        Jakarta Barat - Indonesia
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div
                  className="p-6 bg-muted/50 rounded-xl border border-border hover-lift animate-slide-in-left"
                  style={{ animationDelay: "100ms" }}
                >
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                      <p className="text-muted-foreground">+62-8177-6900-656</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div
                  className="p-6 bg-muted/50 rounded-xl border border-border hover-lift animate-slide-in-left"
                  style={{ animationDelay: "200ms" }}
                >
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Email</h3>
                      <p className="text-muted-foreground">info@hedrize.com</p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div
                  className="p-6 bg-muted/50 rounded-xl border border-border hover-lift animate-slide-in-left"
                  style={{ animationDelay: "300ms" }}
                >
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2 animate-slide-in-right">
                <form
                  onSubmit={handleSubmit}
                  className="p-8 bg-muted/30 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all"
                >
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="+1 (800) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-foreground mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your recruitment needs..."
                    ></textarea>
                  </div>

                  <div className="mb-6">
                    <div
                      className="g-recaptcha"
                      data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
                    ></div>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover-lift"
                  >
                    Send Message
                  </button>

                  <p className="text-sm text-muted-foreground text-center mt-4">
                    We'll get back to you within 24 hours
                  </p>
                </form>
              </div>
            </div>

            {/* Map Section */}
            {/*<div className="rounded-xl overflow-hidden shadow-lg border-2 border-border animate-scale-in">*/}
            {/*  <iframe*/}
            {/*    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290255!2d-74.00576!3d40.71278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb7ae8b%3A0x5c69b1e6b3b6b3b6!2s123%20Business%20Avenue%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1234567890"*/}
            {/*    width="100%"*/}
            {/*    height="400"*/}
            {/*    style={{ border: 0 }}*/}
            {/*    allowFullScreen={true}*/}
            {/*    loading="lazy"*/}
            {/*  ></iframe>*/}
            {/*</div>*/}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
