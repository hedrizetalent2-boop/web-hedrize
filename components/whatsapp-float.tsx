export function WhatsappFloat() {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""
  const num = raw.replace(/[^\d]/g, "")
  const valid = num.length >= 8
  const href = valid
    ? `https://api.whatsapp.com/send?phone=${num}&text=${encodeURIComponent("Hello Hedrize Admin")}`
    : undefined
  return (
    valid ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#28a71a] text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105"
      >
        <img src="/whatsapp.png" alt="WhatsApp" className="w-7 h-7 object-contain" />
      </a>
    ) : null
  )
}
