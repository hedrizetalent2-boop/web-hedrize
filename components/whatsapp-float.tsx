export function WhatsappFloat() {
  const num = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""
  const href = num
    ? `https://wa.me/${num}?text=${encodeURIComponent("Hello Hedrize")}`
    : "https://wa.me/"
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#28a71a] text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105"
    >
      <img src="/whatsapp.png" alt="WhatsApp" className="w-7 h-7 object-contain" />
    </a>
  )
}
