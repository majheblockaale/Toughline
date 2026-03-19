import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import { services, getServiceBySlug } from "@/data/services";
import { cities, getCityBySlug } from "@/data/cities";
import { siteConfig } from "@/data/siteConfig";

interface PageData {
  service: (typeof services)[number];
  city: (typeof cities)[number];
}

function parseSlug(slug: string): PageData | null {
  // Pattern: {service-slug}-in-{city-slug}
  const match = slug.match(/^(.+)-in-(.+)$/);
  if (!match) return null;

  const service = getServiceBySlug(match[1]);
  const city = getCityBySlug(match[2]);
  if (!service || !city) return null;

  return { service, city };
}

export function generateStaticParams() {
  const params: { slug: string }[] = [];
  for (const service of services) {
    for (const city of cities) {
      params.push({ slug: `${service.slug}-in-${city.slug}` });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = parseSlug(slug);
  if (!data) return {};

  const title = `${data.service.name} in ${data.city.name}`;
  const description = `Professional ${data.service.name.toLowerCase()} services in ${data.city.name}, ${data.city.region}. Custom metal fabrication by ${siteConfig.name}. Free estimates.`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}

export default async function ServiceCityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = parseSlug(slug);
  if (!data) notFound();

  const { service, city } = data;
  const title = `${service.name} in ${city.name}`;
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: title,
            description: `Professional ${service.name.toLowerCase()} in ${city.name} by ${siteConfig.name}.`,
            provider: {
              "@type": "LocalBusiness",
              name: siteConfig.name,
              telephone: siteConfig.phone,
              address: {
                "@type": "PostalAddress",
                addressLocality: siteConfig.address.city,
                addressRegion: siteConfig.address.province,
                addressCountry: siteConfig.address.country,
              },
            },
            areaServed: {
              "@type": "City",
              name: city.name,
            },
          }),
        }}
      />

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
              { "@type": "ListItem", position: 4, name: `${service.name} in ${city.name}`, item: `${siteConfig.url}/${slug}` },
            ],
          }),
        }}
      />

      <Hero
        title={title}
        subtitle={`Professional ${service.name.toLowerCase()} services for homes and businesses in ${city.name}, ${city.region}. Custom-built by ${siteConfig.name} with free on-site estimates.`}
        backgroundClass="bg-gradient-to-br from-navy-950 via-navy-900 to-steel-700"
      />

      {/* Breadcrumb */}
      <nav className="bg-silver-50 border-b border-silver-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-steel-500">
            <li><Link href="/" className="hover:text-navy-900 transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/services" className="hover:text-navy-900 transition-colors">Services</Link></li>
            <li>/</li>
            <li><Link href={`/services/${service.slug}`} className="hover:text-navy-900 transition-colors">{service.name}</Link></li>
            <li>/</li>
            <li className="text-navy-900 font-medium">{city.name}</li>
          </ol>
        </div>
      </nav>

      {/* Content */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="font-heading font-bold text-navy-900 text-3xl mb-6">
                  Expert {service.name} in {city.name}
                </h2>
                <p className="text-steel-600 leading-relaxed mb-6">
                  {siteConfig.name} provides professional {service.name.toLowerCase()} services to residential and commercial clients in {city.name} and the surrounding {city.region} area. {city.description}
                </p>
                <p className="text-steel-600 leading-relaxed mb-8">
                  {service.description}
                </p>

                <h3 className="font-heading font-semibold text-navy-900 text-xl mb-4">
                  What We Offer in {city.name}
                </h3>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-steel-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-steel-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-heading font-semibold text-navy-900 text-xl mb-4">
                  Why Choose Toughline in {city.name}?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {service.benefits.map((b) => (
                    <div key={b.title} className="bg-silver-50 rounded-xl p-5 border border-silver-200">
                      <h4 className="font-heading font-semibold text-navy-900 text-sm mb-2">{b.title}</h4>
                      <p className="text-steel-500 text-xs leading-relaxed">{b.description}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div>
              <AnimatedSection animation="slide-in-right">
                <div className="bg-navy-950 text-white rounded-2xl p-8 sticky top-28">
                  <h3 className="font-heading font-bold text-lg mb-4">
                    Free Quote in {city.name}
                  </h3>
                  <p className="text-silver-400 text-sm mb-6">
                    Get a free on-site estimate for {service.name.toLowerCase()} in {city.name}.
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 bg-white text-navy-900 font-semibold rounded-xl hover:bg-silver-100 transition-colors text-sm mb-3"
                  >
                    Request Quote
                  </Link>
                  <a
                    href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                    className="block w-full text-center px-6 py-3 border border-silver-500 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm"
                  >
                    Call {siteConfig.phone}
                  </a>

                  <div className="mt-8 pt-6 border-t border-navy-800">
                    <h4 className="font-semibold text-sm mb-3">Other Services in {city.name}</h4>
                    <ul className="space-y-2">
                      {otherServices.slice(0, 4).map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/${s.slug}-in-${city.slug}`}
                            className="text-silver-400 text-sm hover:text-white transition-colors"
                          >
                            {s.icon} {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-silver-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-navy-900 text-2xl mb-8 text-center">
            More Services We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.slice(0, 3).map((s, i) => (
              <AnimatedSection key={s.slug} animation="fade-in-up" delay={i * 0.1}>
                <ServiceCard service={s} index={i} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
