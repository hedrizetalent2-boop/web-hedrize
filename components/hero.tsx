export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 -z-10"></div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Welcome to Hedrize
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Your Trusted <span className="text-primary">Head Hunting</span> Partner
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Connect with top talent and innovative companies. Hedrize specializes in matching the right people with
              the right opportunities across industries.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover-lift">
                Start Your Journey
              </button>
              <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl"
                style={{ borderRadius: "100px 0px 100px 0px" }}
              ></div>
              <div
                className="relative overflow-hidden shadow-2xl"
                style={{ borderRadius: "100px 0px 100px 0px" }}
              >
                <img
                  src="/professional-headhunting-office-building.jpg"
                  alt="Hedrize Office"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
