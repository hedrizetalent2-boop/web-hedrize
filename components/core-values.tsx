export function CoreValues() {
  const values = [
    {
      title: "Excellence",
      description: "We aim higher in every search, delivering results \n" +
          "that set new standards.",
      icon: "excellent-herdrize.png",
      color: "from-blue-500 to-primary",
    },
    {
      title: "Integrity",
      description: "Trust is our foundation; transparency and ethics \n" +
          "guide every decision.",
      icon: "integration.png",
      color: "from-primary to-accent",
    },
    {
      title: "Partnership",
      description: "We work as an extension of our clients, not just as \n" +
          "a service provider.",
      icon: "partnership.png",
      color: "from-accent to-secondary",
    },
    {
      title: "Agility",
      description: "Fast, adaptive, and precise in a changing talent \n" +
          "landscape.",
      icon: "agility.png",
      color: "from-secondary to-primary",
    },
    {
      title: "Insight",
      description: "Driven by data, market intelligence, and deep \n" +
          "industry knowledge.",
      icon: "insight.png",
      color: "from-secondary to-primary",
    },
    {
      title: "Impact",
      description: "Every placement is designed to create long term \n" +
          "organizational success.",
      icon: "impact.png",
      color: "from-secondary to-primary",
    },
    {
      title: "Diversity",
      description: "We believe the best leadership reflects varied \n" +
          "perspectives and backgrounds.",
      icon: "diversity.png",
      color: "from-secondary to-primary",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Core Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These principles define who we are and guide our actions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Decorative arcs */}
              <div
                aria-hidden
                className="absolute left-[-38px] top-1/2 -translate-y-1/2 w-28 h-28 rounded-full border-[10px] border-primary/70 opacity-80 -z-10"
                style={{ clipPath: "inset(0 40% 50% 0)", filter: "blur(0.2px)" }}
              ></div>
              <div
                aria-hidden
                className="absolute left-[-58px] top-1/2 -translate-y-1/2 w-36 h-36 rounded-full border-[10px] border-secondary/70 opacity-70 -z-10"
                style={{ clipPath: "inset(50% 40% 0 0)", filter: "blur(0.2px)" }}
              ></div>

              {/* Pill card */}
              <div className="relative flex items-center gap-6 p-6 pl-28 rounded-[70px] border-2 border-border bg-gradient-to-r from-white/90 to-gray-50/70 shadow-sm hover:shadow-md transition-all hover-lift">
                {/* Left circle with icon */}
                <div className="absolute left-[20px] top-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white shadow-lg border border-border flex items-center justify-center">
                  <span className="text-3xl text-primary">
                    {typeof value.icon === "string" && (value.icon.endsWith(".png") || value.icon.endsWith(".svg")) ? (
                      <img src={value.icon} alt={`${value.title} icon`} className="w-12 h-12 object-contain" />
                    ) : (
                      value.icon
                    )}
                  </span>
                </div>

                <div className="pl-4">
                  <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                  <p className="mt-1 text-muted-foreground leading-relaxed text-base">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
