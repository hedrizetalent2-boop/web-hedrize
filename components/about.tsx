export function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-cover bg-center"></div>
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <img
          src="/background-about.png"
          className="w-full h-full object-cover"
          style={{ transform: "skew(-21deg, \n" +
                "-3deg)", transformOrigin: "center" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="bg-background rounded-2xl p-6 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-slide-in-left">
            <img
              src="/modern-office-building-architecture.jpg"
              alt="Hedrize Building"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>

          <div className="animate-slide-in-right">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 mt-2.5">About Hedrize</h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Hedrize is a modern executive search firm built for companies who don’t just want to hire
              they want to rise. We specialize in connecting organizations with next-generation leaders
              who drive impact, spark innovation, and scale success.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With a fresh, strategic, and people-first approach, Hedrize goes beyond traditional
              recruitment by focusing on senior level talent acquisition that’s smart, precise, and
              aligned with your growth.
              We partner with forward-thinking companies, startups, and established enterprises to
              uncover hidden leadership potential because we believe great leaders aren’t just found,
              they’re matched.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            At Hedrize, we believe great companies are built by great leaders. Our mission is to <strong>Find
              Them, Connect Them, and Watch Them Rise.</strong>
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We partner with bold organizations to uncover exceptional talent, shaping leaders who
            will transform industries and inspire change. Every search is more than a placement it’s
            the start of a long-term relationship built on trust, precision, and shared ambition.
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
