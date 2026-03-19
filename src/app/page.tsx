import Link from "next/link";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/siteConfig";

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: siteConfig.name,
            description: siteConfig.description,
            url: siteConfig.url,
            telephone: siteConfig.phone,
            email: siteConfig.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: siteConfig.address.street,
              addressLocality: siteConfig.address.city,
              addressRegion: siteConfig.address.province,
              postalCode: siteConfig.address.postalCode,
              addressCountry: siteConfig.address.country,
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: siteConfig.geo.latitude,
              longitude: siteConfig.geo.longitude,
            },
            openingHours: ["Mo-Fr 07:00-18:00", "Sa 08:00-15:00"],
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: siteConfig.geo.latitude,
                longitude: siteConfig.geo.longitude,
              },
              geoRadius: "80000",
            },
          }),
        }}
      />

      {/* Hero */}
      <Hero
        title="Custom Metal Fabrication Built to Last"
        subtitle="From security gates and window well covers to custom sheds and ornamental ironwork — Toughline Metal Works delivers precision-crafted steel solutions across the Greater Toronto Area."
        ctaText="Get Free Quote"
        ctaHref="/contact"
        secondaryCtaText="View Our Work"
        secondaryCtaHref="/gallery"
      />

      {/* Why Choose Us */}
      <section className="py-20 sm:py-24 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-steel-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Why Toughline
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl">
              Built Different. Built Better.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Precision Craftsmanship",
                description:
                  "Every weld, cut, and bend is executed with meticulous attention to detail by certified professionals.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: "Canadian Materials",
                description:
                  "We source high-quality Canadian steel and materials, ensuring durability in our harsh climate.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
              },
              {
                title: "GTA-Wide Service",
                description:
                  "From Toronto to Hamilton, Oshawa to Newmarket — we serve the entire Greater Toronto Area.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <AnimatedSection key={item.title} animation="fade-in-up">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-steel-700 rounded-2xl text-silver-300 mb-5">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-silver-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24 bg-silver-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-steel-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Testimonials
            </p>
            <h2 className="font-heading font-bold text-navy-900 text-3xl sm:text-4xl">
              What Our Clients Say
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <AnimatedSection key={i} animation="fade-in-up" delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-silver-200 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-steel-600 text-sm leading-relaxed flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-6 pt-4 border-t border-silver-100">
                    <div className="font-heading font-semibold text-navy-900 text-sm">
                      {t.name}
                    </div>
                    <div className="text-steel-400 text-xs">
                      {t.location} — {t.service}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-navy-900 to-steel-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-silver-300 text-lg mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation quote for your metalwork project. We serve the entire Greater Toronto Area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-semibold rounded-xl hover:bg-silver-100 transition-all hover:shadow-lg text-base"
              >
                Request Free Quote
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-base"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
