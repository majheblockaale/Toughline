import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import AnimatedSection from "@/components/AnimatedSection";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Toughline Metal Works services — security gates, window well covers, metal sheds, enclosures, welding & fabrication, and ornamental metalwork across the GTA.",
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            provider: {
              "@type": "LocalBusiness",
              name: "Toughline Metal Works",
            },
            areaServed: "Greater Toronto Area",
            serviceType: services.map((s) => s.name),
          }),
        }}
      />

      <Hero
        title="Our Services"
        subtitle="From custom security gates to ornamental ironwork — we deliver precision metal fabrication for residential and commercial projects across the GTA."
      />

      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.slug} animation="fade-in-up" delay={i * 0.1}>
                <ServiceCard service={service} index={i} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
