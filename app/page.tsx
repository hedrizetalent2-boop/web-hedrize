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
  // JSON-LD for WebSite with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hedrize",
    url: "https://hedrize.com", // TODO: Replace with your actual domain
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://hedrize.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  // JSON-LD for Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Head Hunting & Executive Search",
    provider: {
      "@type": "Organization",
      name: "Hedrize",
    },
    areaServed: "Worldwide",
    description:
      "Premium head hunting solutions connecting top talent with innovative companies across industries.",
  }

  return (
    <>
      {/* JSON-LD Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <Hero />
          <About />
          <VisionMission />
          <CoreValues />
          <Services />
          <WhyChoose />
          <Industries />
        </main>
        <Footer />
      </div>
    </>
  )
}
