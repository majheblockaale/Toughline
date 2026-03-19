import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} — trusted metal fabrication and custom welding experts serving the Greater Toronto Area.`,
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Toughline Metal Works"
        subtitle="A family-owned metal fabrication shop built on quality, integrity, and hard work — serving the Greater Toronto Area."
        backgroundClass="bg-gradient-to-br from-navy-950 via-navy-900 to-steel-700"
      />

      {/* Story */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-in-left">
              <p className="text-steel-500 font-semibold text-sm uppercase tracking-wider mb-3">
                Our Story
              </p>
              <h2 className="font-heading font-bold text-navy-900 text-3xl sm:text-4xl mb-6">
                Craftsmanship Meets Modern Fabrication
              </h2>
              <div className="space-y-4 text-steel-600 leading-relaxed">
                <p>
                  Toughline Metal Works was founded with a simple mission: deliver exceptional quality metalwork that stands the test of time. Based in the Greater Toronto Area, we have grown from a small welding shop into a full-service metal fabrication company trusted by homeowners, contractors, and businesses alike.
                </p>
                <p>
                  Our team combines traditional metalworking craftsmanship with modern fabrication technology. Every project — whether it is a custom security gate, a set of window well covers, or a full structural steel installation — receives the same meticulous attention to detail.
                </p>
                <p>
                  We believe in doing things right the first time. That means using premium materials, employing certified welders, and standing behind every piece of work that leaves our shop.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="bg-silver-100 rounded-2xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center text-steel-400">
                  <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">Shop photo placeholder</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-24 bg-silver-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-heading font-bold text-navy-900 text-3xl sm:text-4xl">
              Our Values
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Quality First",
                description: "We never cut corners. Every joint, finish, and installation meets our exacting standards.",
                icon: "🛡️",
              },
              {
                title: "Honest Pricing",
                description: "Transparent, detailed quotes with no hidden fees. What we quote is what you pay.",
                icon: "💰",
              },
              {
                title: "On-Time Delivery",
                description: "We respect your schedule. Projects are completed on time, every time.",
                icon: "⏱️",
              },
              {
                title: "Customer Focus",
                description: "Your vision drives our work. We listen, advise, and deliver exactly what you need.",
                icon: "🤝",
              },
            ].map((value, i) => (
              <AnimatedSection key={value.title} animation="fade-in-up" delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-silver-200 text-center h-full">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="font-heading font-bold text-navy-900 text-lg mb-3">
                    {value.title}
                  </h3>
                  <p className="text-steel-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-steel-500 font-semibold text-sm uppercase tracking-wider mb-3">
              How We Work
            </p>
            <h2 className="font-heading font-bold text-navy-900 text-3xl sm:text-4xl">
              Our Process
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "We visit your site, discuss your needs, take measurements, and understand your vision." },
              { step: "02", title: "Design & Quote", description: "We create a detailed design and provide a transparent, fixed-price quote for your approval." },
              { step: "03", title: "Fabrication", description: "Our skilled team fabricates your project in our shop using premium materials and techniques." },
              { step: "04", title: "Installation", description: "Professional installation at your location, followed by a thorough quality inspection." },
            ].map((item, i) => (
              <AnimatedSection key={item.step} animation="fade-in-up" delay={i * 0.15}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-navy-900 text-white font-heading font-bold text-lg rounded-2xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-bold text-navy-900 text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-steel-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
