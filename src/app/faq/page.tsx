import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import FAQAccordion from "@/components/FAQAccordion";
import { faqItems } from "@/data/faq";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Toughline Metal Works — service areas, pricing, materials, warranties, and more.",
};

export default function FAQPage() {
  return (
    <>
      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      <Hero
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about our services, process, and pricing."
        backgroundClass="bg-gradient-to-br from-navy-950 via-navy-900 to-steel-700"
      />

      <section className="py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <FAQAccordion items={faqItems} />
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={0.3}>
            <div className="mt-14 text-center bg-silver-50 rounded-2xl p-8 border border-silver-200">
              <h3 className="font-heading font-bold text-navy-900 text-xl mb-2">
                Still have questions?
              </h3>
              <p className="text-steel-500 text-sm mb-4">
                We are happy to help. Contact us anytime.
              </p>
              <a
                href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                className="inline-flex items-center px-6 py-3 bg-navy-900 text-white font-semibold rounded-xl hover:bg-navy-800 transition-colors text-sm"
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
