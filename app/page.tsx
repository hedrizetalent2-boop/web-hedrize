import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { VisionMission } from "@/components/vision-mission"
import { CoreValues } from "@/components/core-values"
import { Services } from "@/components/services"
import { WhyChoose } from "@/components/why-choose"
import { Industries } from "@/components/industries"
import { Footer } from "@/components/footer"
import { ClientFloats } from "@/components/client-floats"

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

      {/* Skip Navigation Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main id="main-content">
          <Hero />
          <About />
          <VisionMission />
          <CoreValues />
          <Services />
          <WhyChoose />
          <Industries />
        </main>
        <Footer />
        <ClientFloats />
      </div>
    </>
  )
}

