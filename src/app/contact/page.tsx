import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free quote from Toughline Metal Works. Contact us for custom metal fabrication, security gates, window well covers, and more in the GTA.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Get a free, no-obligation quote for your metalwork project. We respond within 1 business day."
        backgroundClass="bg-gradient-to-br from-navy-950 via-navy-900 to-steel-700"
      />

      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection animation="slide-in-left">
                <h2 className="font-heading font-bold text-navy-900 text-2xl mb-2">
                  Send Us a Message
                </h2>
                <p className="text-steel-500 text-sm mb-8">
                  Fill out the form below and we will get back to you promptly.
                </p>
                <ContactForm />
              </AnimatedSection>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection animation="slide-in-right">
                <div className="bg-navy-950 text-white rounded-2xl p-8 sticky top-28">
                  <h3 className="font-heading font-bold text-xl mb-6">
                    Get In Touch
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-steel-700 rounded-xl flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-silver-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Address</h4>
                        <p className="text-silver-400 text-sm">
                          {siteConfig.address.street}<br />
                          {siteConfig.address.city}, {siteConfig.address.province} {siteConfig.address.postalCode}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-steel-700 rounded-xl flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-silver-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Phone</h4>
                        <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="text-silver-400 text-sm hover:text-white transition-colors">
                          {siteConfig.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-steel-700 rounded-xl flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-silver-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Email</h4>
                        <a href={`mailto:${siteConfig.email}`} className="text-silver-400 text-sm hover:text-white transition-colors">
                          {siteConfig.email}
                        </a>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-navy-800">
                      <h4 className="font-semibold text-sm mb-3">Business Hours</h4>
                      <div className="text-silver-400 text-sm space-y-1">
                        <p>{siteConfig.hours.weekdays}</p>
                        <p>{siteConfig.hours.saturday}</p>
                        <p>{siteConfig.hours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-silver-100 h-80 flex items-center justify-center">
        <div className="text-center text-steel-400">
          <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <p className="text-sm">Google Maps embed placeholder</p>
        </div>
      </section>
    </>
  );
}
