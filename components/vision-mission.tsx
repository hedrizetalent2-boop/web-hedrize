export function VisionMission() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Vision & Mission</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence and innovation guides every decision we make
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="animate-slide-in-left p-8 rounded-xl neumorphic bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/40 transition-all hover-lift relative card-line-animate">
            <div className="w-16 h-16 border-soft rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl"><img src="/vision-hedrize.png"/></span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To be the most trusted partner in connecting visionary leaders with organizations that shape the future.
            </p>
            {/*<ul className="space-y-2 text-sm text-muted-foreground">*/}
            {/*  <li>✓ Global excellence in talent matching</li>*/}
            {/*  <li>✓ Innovation in recruitment practices</li>*/}
            {/*  <li>✓ Lasting impact on careers and organizations</li>*/}
            {/*</ul>*/}
          </div>

          {/* Mission */}
          <div className="animate-slide-in-right p-8 rounded-xl neumorphic bg-gradient-to-br from-secondary/5 to-transparent hover:border-secondary/40 transition-all hover-lift relative card-line-animate card-line-secondary">
            <div className="w-16 h-16 border-soft rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl"><img src="/mission-hedrize.png"/></span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            {/*<p className="text-muted-foreground leading-relaxed mb-4">*/}
            {/*  To connect exceptional talent with visionary organizations by leveraging our expertise, network, and*/}
            {/*  unwavering commitment to creating meaningful career matches that drive mutual success.*/}
            {/*</p>*/}
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block w-5 h-5 bg-primary rounded-[4px] border border-primary/50 shadow-sm flex-shrink-0"></span>
                <span className="leading-relaxed"><strong>Find Great Leaders –</strong> Identify and connect visionary leaders with bold companies ready to make history. We tap into an exclusive network of top talent, ensuring each candidate not only meets the technical requirements but also brings leadership spirit, integrity, and a long term vision.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block w-5 h-5 bg-primary rounded-[4px] border border-primary/50 shadow-sm flex-shrink-0"></span>
                <span className="leading-relaxed"><strong>Shape Tomorrow –</strong> Every placement is designed
                to spark innovation, accelerate growth, and
                shape the future of industries. We believe placing
                the right leader means paving the way for
                sustainable progress and creating a measurable,
                positive impact.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block w-5 h-5 bg-primary rounded-[4px] border border-primary/50 shadow-sm flex-shrink-0"></span>
                <span className="leading-relaxed"><strong>Build Trust –</strong> Trust is at the heart of every
                relationship we forge. We cultivate long-term
                partnerships with both clients and candidates,
                going beyond recruitment to foster connections
                built on transparency, commitment, and shared
                success.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
