"use client"

import { useState } from "react"

export function Industries() {
  const industries = [
    { name: "Technology & Digital", icon: "technology-icon.png", desc: "From pioneering startups to established tech giants, we place visionary leaders who drive \n" +
          "innovation, transformation, and digital growth." },
    { name: "Financial Services & Banking", icon: "financial-service-banking.png", desc: "Connecting institutions with leaders who ensure sustainable growth, regulatory \n" +
          "compliance, and operational excellence." },
    { name: "Manufacturing & Industrial", icon: "manufacturing.png", desc: "Placing executives who enhance operational efficiency, supply chain resilience, and market competitiveness." },
    { name: "Retail & Consumer Goods", icon: "goods.png", desc: "Identifying leaders who understand market trends, elevate customer experience, and \n" +
          "strengthen brand presence." },
    { name: "Energy & Natural Resources", icon: "natural-resources.png", desc: "PProviding talent capable of leading in traditional and renewable energy sectors with a \n" +
          "focus on sustainability and innovation." },
    { name: "Healthcare & Life Sciences", icon: "healthcare.png", desc: "Finding leaders who advance patient care, medical innovation, and organizational \n" +
          "performance." },
    { name: "Professional Services", icon: "reliable.png", desc: "Matching firms with leaders who strengthen client relationships, service delivery, and \n" +
          "business growth." },
    { name: "Startups & High Growth Ventures", icon: "startup.png", desc: "Partnering with entrepreneurs to build leadership teams that scale fast and smart." },
  ]
  const [active, setActive] = useState(0)
  const moreDesc = 'Wherever exceptional leadership is needed, Hedrize is ready to find them, \n' +
      'connect them, and help them rise'

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 from-primary/5 to-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At Hedrize, we understand that each industry has its own unique leadership challenges, market
            dynamics, and growth opportunities. Our expertise spans multiple sectors, enabling us to
            identify and place leaders who can navigate complexity, drive innovation, and deliver
            measurable results.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-9 gap-4">
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
              <div className="text-center text-xs sm:text-[13px] leading-tight font-medium text-foreground break-words whitespace-normal">{industry.name}</div>
            </button>
          ))}
          <button
            type="button"
            onClick={() => setActive(-1)}
            className={`rounded-xl border-2 px-3 py-4 text-center transition-all ${active === -1 ? "border-primary shadow-md bg-primary/5" : "border-secondary bg-background shadow-sm"}`}
            role="tab"
            aria-selected={active === -1}
          >
            <div className="text-center text-sm sm:text-base font-semibold text-primary">And many more</div>
            <div className="mt-1 text-xs text-muted-foreground">Explore broader industry coverage</div>
          </button>
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-background p-6" role="tabpanel">
          <h3 className="text-xl font-bold text-primary">{active === -1 ? 'And many more' : industries[active].name}</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed text-sm">{active === -1 ? moreDesc : industries[active].desc}</p>
        </div>
      </div>
    </section>
  )
}
