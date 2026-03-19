import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} — trusted metal fabrication experts serving the Greater Toronto Area.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-950 text-white py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl">About Us</h1>
          <p className="mt-4 text-brand-300 text-lg max-w-2xl">
            Precision metalwork rooted in craftsmanship, built for Canadian conditions.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-950 mb-6">
              Who We Are
            </h2>
            <div className="space-y-5 text-brand-600 leading-relaxed">
              <p>
                Toughline Metal Works is a full-service metal fabrication shop serving
                residential and commercial clients across the Greater Toronto Area.
                We specialize in custom steel work — from security gates and window
                well covers to ornamental ironwork and structural fabrication.
              </p>
              <p>
                Every project starts with a conversation. We listen to your needs,
                take precise measurements, and deliver finished metalwork that meets
                the highest standards of quality and durability.
              </p>
              <p>
                We source Canadian steel and materials, ensuring our products stand
                up to harsh winters and demanding conditions. Our certified welders
                bring years of experience to every weld, cut, and bend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-24 bg-brand-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-950 mb-10">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Precision Craftsmanship",
                description:
                  "Every weld, cut, and bend is executed with meticulous attention to detail by certified professionals.",
              },
              {
                title: "Canadian Materials",
                description:
                  "We source high-quality Canadian steel, ensuring durability in our harsh climate.",
              },
              {
                title: "GTA-Wide Service",
                description:
                  "From Toronto to Hamilton, Oshawa to Newmarket — we serve the entire Greater Toronto Area.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-8 border border-brand-100">
                <h3 className="font-heading font-bold text-lg text-brand-950 mb-3">
                  {item.title}
                </h3>
                <p className="text-brand-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-brand-950 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-brand-300 text-lg mb-8">
            Tell us about your project and get a free quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-950 font-semibold rounded-lg hover:bg-brand-100 transition-colors text-base"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
