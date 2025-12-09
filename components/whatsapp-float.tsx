"use client"

export function WhatsappFloat() {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""
  const cc = (process.env.NEXT_PUBLIC_WHATSAPP_COUNTRY_CODE || "").replace(/[^\d]/g, "")
  let digits = raw.replace(/[^\d]/g, "")
  if (digits.startsWith("0") && cc) digits = cc + digits.slice(1)
  const valid = digits.length >= 8
  const text = encodeURIComponent("Hello Hedrize")
  const webHref = valid ? `https://wa.me/${digits}?text=${text}` : undefined
  const deepHref = valid ? `whatsapp://send?phone=${digits}&text=${text}` : undefined
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!valid) return
    try {
      window.location.href = deepHref as string
      setTimeout(() => {
        window.open(webHref as string, "_blank")
      }, 600)
    } catch {}
  }
  return valid ? (
    <a
      href={webHref}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#28a71a] text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105"
    >
      <img src="/whatsapp.png" alt="WhatsApp" className="w-7 h-7 object-contain" />
    </a>
  ) : null
}
