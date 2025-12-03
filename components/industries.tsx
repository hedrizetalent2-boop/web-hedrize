"use client"

import { useState } from "react"

export function Industries() {
  const industries = [
    { name: "Technology & Digital", icon: "technology-icon.png", desc: "From pioneering startups to established tech giants, we place visionary leaders who drive \n" +
          "innovation, transformation, and digital growth." },
    { name: "Financial Services & Banking", icon: "⚡", desc: "Talenta strategis untuk energi dan sumber daya." },
    { name: "Manufaktur", icon: "🏭", desc: "Pemimpin operasional untuk manufaktur modern." },
    { name: "Healthcare", icon: "🏥", desc: "Kepemimpinan klinis dan manajemen kesehatan." },
    { name: "Media & Tourism", icon: "�", desc: "Profesional kreatif dan pariwisata." },
    { name: "Pemerintah & BUMN", icon: "🏛️", desc: "Kepemimpinan untuk institusi publik dan BUMN." },
    { name: "Maritim & Logistik", icon: "�", desc: "Manajemen rantai pasok dan maritim." },
    { name: "Edukasi", icon: "🎓", desc: "Pemimpin akademik dan pengelolaan institusi." },
    { name: "Smart Building", icon: "�️", desc: "Talenta untuk infrastruktur cerdas dan real estat." },
    { name: "Perdagangan & Distribusi", icon: "📦", desc: "Eksekutif penjualan, perdagangan, dan distribusi." },
  ]
  const [active, setActive] = useState(0)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise spanning diverse sectors and specializations
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-10 gap-4">
          {industries.map((industry, index) => (
            <button
              key={industry.name}
              type="button"
              onClick={() => setActive(index)}
              className={`rounded-xl border-2 px-3 py-4 text-center transition-all ${active === index ? "border-primary shadow-md bg-primary/5" : "border-secondary bg-background shadow-sm"}`}
              role="tab"
              aria-selected={active === index}
            >
              <div className="mb-2 flex items-center justify-center">
                {typeof industry.icon === "string" && industry.icon.match(/\.(png|svg|jpg|jpeg|webp)$/) ? (
                  <img src={industry.icon} alt={`${industry.name} icon`} className="w-6 h-6 object-contain" />
                ) : (
                  <span className="text-2xl">{industry.icon}</span>
                )}
              </div>
              <div className="text-[13px] font-medium text-foreground">{industry.name}</div>
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-background p-6" role="tabpanel">
          <h3 className="text-xl font-bold text-primary">{industries[active].name}</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed text-sm">{industries[active].desc}</p>
        </div>
      </div>
    </section>
  )
}
