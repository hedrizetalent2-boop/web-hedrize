"use client"

export function WhatsappFloat() {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""
  const num = raw.replace(/[^\d]/g, "")

  if (!num) return null

  const formattedNum = num.startsWith("0") ? `62${num.slice(1)}` : num
  const message = "Hello Hedrize"
  const encodedMessage = encodeURIComponent(message)

  const href = `https://wa.me/${formattedNum}?text=${encodedMessage}`

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      e.preventDefault()

      const whatsappURL = `whatsapp://send?phone=${formattedNum}&text=${encodedMessage}`
      window.location.href = whatsappURL

      setTimeout(() => {
        window.open(href, '_blank', 'noopener,noreferrer')
      }, 1000)
    }
  }

  return (
      <a
          href={href}
          onClick={handleClick}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#28a71a] text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          aria-label="Chat via WhatsApp"
      >
        <img
            src="/whatsapp.png"
            alt="WhatsApp"
            className="w-7 h-7 object-contain"
        />
      </a>
  )
}