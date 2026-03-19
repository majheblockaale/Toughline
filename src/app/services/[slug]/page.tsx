import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { services, getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} in the GTA`,
    description: service.description,
    openGraph: {
      title: `${service.name} | ${siteConfig.name}`,
      description: service.shortDescription,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            description: service.description,
            provider: {
              "@type": "LocalBusiness",
              name: siteConfig.name,
              telephone: siteConfig.phone,
            },
            areaServed: "Greater Toronto Area",
          }),
        }}
      />

      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
              { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
              { "@type": "ListItem", position: 3, name: service.name, item: `${siteConfig.url}/services/${service.slug}` },
            ],
          }),
        }}
      />

      <Hero
        title={service.name}
        subtitle={service.shortDescription}
        backgroundClass="bg-gradient-to-br from-navy-950 via-navy-900 to-steel-700"
      />

      {/* Breadcrumb nav */}
      <nav className="bg-silver-50 border-b border-silver-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-steel-500">
            <li><Link href="/" className="hover:text-navy-900 transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/services" className="hover:text-navy-900 transition-colors">Services</Link></li>
            <li>/</li>
            <li className="text-navy-900 font-medium">{service.name}</li>
          </ol>
        </div>
      </nav>

      {/* Description */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection animation="slide-in-left">
              <h2 className="font-heading font-bold text-navy-900 text-3xl mb-6">
                About This Service
              </h2>
              <p className="text-steel-600 leading-relaxed mb-8">
                {service.description}
              </p>
              <h3 className="font-heading font-semibold text-navy-900 text-xl mb-4">
                What&apos;s Included
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-steel-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-steel-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="bg-silver-100 rounded-2xl aspect-[4/3] flex items-center justify-center mb-8">
                <div className="text-center text-steel-400">
                  <div className="text-6xl mb-3">{service.icon}</div>
                  <p className="text-sm">Service photo placeholder</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-24 bg-silver-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-heading font-bold text-navy-900 text-3xl">
              Key Benefits
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.benefits.map((b, i) => (
              <AnimatedSection key={b.title} animation="fade-in-up" delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-silver-200 text-center h-full">
                  <h3 className="font-heading font-bold text-navy-900 text-lg mb-3">
                    {b.title}
                  </h3>
                  <p className="text-steel-600 text-sm leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-navy-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-3xl mb-4">
              Get a Free {service.name} Quote
            </h2>
            <p className="text-silver-300 text-lg mb-8">
              Contact us today for a free on-site estimate. We serve the entire Greater Toronto Area.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-navy-900 font-semibold rounded-xl hover:bg-silver-100 transition-all hover:shadow-lg text-base"
            >
              Request Free Quote
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
