export function Services() {
  const services = [
    {
      title: "Executive Search",
      description:
        "We specialize in C-Level and senior leadership placements, connecting organizations with proven executives who can lead transformation, inspire teams, and deliver results. Our search process ensures not just a skills match, but a leadership and cultural fit.",
    },
    {
      title: "Strategic Hiring",
      description:
        "For critical roles that directly impact business strategy and growth, we identify and attract top-tier talent with the expertise, vision, and adaptability to navigate complex challenges and seize new opportunities.",
    },
    {
      title: "Specialized Hiring",
      description:
        "We provide targeted recruitment for niche and highly specialized positions, ensuring you gain access to rare talent that meets your exact technical and industry-specific requirements.",
    },
  ]

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
      title: "Guarantee Period",
      description:
          "90-day replacement guarantee if the appointed\n" +
          "candidate resigns or is terminated for cause.",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive recruitment solutions tailored to your needs
          </p>
        </div>

        

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white border-4 border-primary flex items-center justify-center shadow-md">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
              <div className="mt-4 w-full bg-background/90 rounded-2xl p-6 border border-border shadow-sm">
                <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  )
}
