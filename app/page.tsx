import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { VisionMission } from "@/components/vision-mission"
import { CoreValues } from "@/components/core-values"
import { Services } from "@/components/services"
import { WhyChoose } from "@/components/why-choose"
import { Industries } from "@/components/industries"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <VisionMission />
      <CoreValues />
      <Services />
      <WhyChoose />
      <Industries />
      <Footer />
    </main>
  )
}
