import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} for a free quote on custom metal fabrication in the Greater Toronto Area.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-950 text-white py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-brand-300 text-lg max-w-2xl">
            Get a free, no-obligation quote for your metalwork project.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-brand-950 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-brand-950 text-sm uppercase tracking-wider mb-2">
                    Phone
                  </h3>
                  <a
                    href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                    className="text-brand-600 hover:text-brand-950 transition-colors text-lg"
                  >
                    {siteConfig.phone}
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-brand-950 text-sm uppercase tracking-wider mb-2">
                    Email
                  </h3>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-brand-600 hover:text-brand-950 transition-colors text-lg"
                  >
                    {siteConfig.email}
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-brand-950 text-sm uppercase tracking-wider mb-2">
                    Address
                  </h3>
                  <p className="text-brand-600 text-lg">
                    {siteConfig.address.street}<br />
                    {siteConfig.address.city}, {siteConfig.address.province}{" "}
                    {siteConfig.address.postalCode}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-brand-950 text-sm uppercase tracking-wider mb-2">
                    Hours
                  </h3>
                  <div className="text-brand-600">
                    <p>{siteConfig.hours.weekdays}</p>
                    <p>{siteConfig.hours.saturday}</p>
                    <p>{siteConfig.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-brand-50 rounded-xl p-8 border border-brand-100">
              <h2 className="font-heading font-bold text-xl text-brand-950 mb-6">
                Request a Free Quote
              </h2>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-700 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-brand-200 bg-white text-brand-950 placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-brand-200 bg-white text-brand-950 placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent text-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-700 mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-brand-200 bg-white text-brand-950 placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent text-sm"
                    placeholder="(416) 555-0000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-700 mb-1.5">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-brand-200 bg-white text-brand-950 placeholder-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent text-sm resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-brand-950 text-white font-semibold rounded-lg hover:bg-brand-800 transition-colors text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
