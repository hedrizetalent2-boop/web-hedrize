export function WhyChoose() {

  const checklist = [
    {
      title: "Tailored Search",
      description:
        "Every search is uniquely crafted to your organization’s needs, ensuring precision and cultural fit—no copy-paste solutions.",
    },
    {
      title: "Speed & Precision",
      description:
        "Agile, efficient processes with discreet delivery to meet urgent leadership needs without compromising quality.",
    },
    {
      title: "Next-Gen Network",
      description:
        "Exclusive access to both emerging leaders and proven executives across diverse industries.",
    },
    {
      title: "Advisory Approach",
      description:
        "We act as strategic partners, working like insiders who understand your business, not just as vendors.",
    },
    {
      title: "Delivering Excellence Through Speed and Precision",
      description:
        "Shortlist of top candidates delivered in less than 15 days.",
    },
    {
      title: "Guarantee Period",
      description:
          "90-day replacement guarantee if the appointed\n" +
          "candidate resigns or is terminated for cause.",
    },
    {
      title: "Service Fee",
      description:
          "Competitive rate of 20% of the candidate’s firstyear guaranteed compensation (gross base \n" +
          "salary plus fixed allowances/bonuses).",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Hedrize?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what sets us apart from the competition
          </p>
        </div>

        <div className="mt-16">
          <div
            className="relative overflow-hidden min-h-[420px] md:min-h-[520px] rounded-2xl bg-cover bg-center"
            style={{ backgroundImage: "url('/tailored-hedrize.png')" }}
          >
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background/0 via-background/30 to-background/70"></div>
            <div id="checklist-ourservices" className="relative z-10 md:max-w-[45%] lg:max-w-[40%] ml-auto bg-background/85 p-4 shadow-lg">
              <ul className="space-y-4">
                {checklist.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="inline-flex w-4 h-4 rounded-full bg-accent text-white items-center justify-center text-[10px] leading-none shrink-0">✓</span>
                    <div>
                      <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                      <p className="mt-1 text-muted-foreground text-sm leading-snug">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
