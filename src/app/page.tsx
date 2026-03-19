import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

const services = [
  {
    title: "Security Gates",
    description: "Custom steel gates for driveways, walkways, and commercial properties.",
  },
  {
    title: "Window Well Covers",
    description: "Durable steel covers for safety, drainage, and protection.",
  },
  {
    title: "Metal Sheds & Structures",
    description: "Steel-framed buildings that outlast wood — no rot, no pests.",
  },
  {
    title: "Enclosures",
    description: "HVAC, dumpster, and equipment enclosures built to code.",
  },
  {
    title: "Welding & Fabrication",
    description: "MIG, TIG, and stick welding for custom projects and repairs.",
  },
  {
    title: "Ornamental Ironwork",
    description: "Railings, fences, gates, and decorative metalwork.",
  },
];

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
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-brand-950 overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="Toughline Metal Works shop and fabrication"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-brand-950/65" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 lg:py-44">
          <div className="max-w-2xl">
            <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Custom Metal Fabrication Built to Last
            </h1>
            <p className="mt-6 text-brand-200 text-lg sm:text-xl leading-relaxed">
              Precision-crafted steel solutions for residential and commercial
              properties across the Greater Toronto Area.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-950 font-semibold rounded-lg hover:bg-brand-100 transition-colors text-base"
              >
                Get Free Quote
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-base"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-950">
              What We Do
            </h2>
            <p className="mt-3 text-brand-500 text-lg max-w-xl mx-auto">
              From concept to installation — we handle it all.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-xl border border-brand-100 hover:border-brand-300 hover:shadow-md transition-all"
              >
                <h3 className="font-heading font-bold text-lg text-brand-950 mb-2">
                  {service.title}
                </h3>
                <p className="text-brand-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center text-brand-600 font-semibold hover:text-brand-950 transition-colors text-sm"
            >
              View all services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-brand-950 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-brand-300 text-lg mb-8">
            Get a free, no-obligation quote. We serve the entire GTA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-950 font-semibold rounded-lg hover:bg-brand-100 transition-colors text-base"
            >
              Request Free Quote
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-base"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
