import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.name}.`,
};

export default function TermsOfServicePage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading font-bold text-navy-900 text-3xl sm:text-4xl mb-8">
          Terms of Service
        </h1>
        <p className="text-steel-500 text-sm mb-8">Last updated: March 2026</p>

        <div className="space-y-6 text-steel-600 text-sm leading-relaxed">
          <div>
            <h2 className="font-heading font-bold text-navy-900 text-xl mb-3">Agreement</h2>
            <p>
              By accessing and using the {siteConfig.name} website, you agree to be bound by these terms of service. If you do not agree with any part of these terms, please do not use our website.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-navy-900 text-xl mb-3">Services</h2>
            <p>
              {siteConfig.name} provides metal fabrication, welding, and related services in the Greater Toronto Area. All project work is subject to a separate written agreement including scope, timeline, and pricing.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-navy-900 text-xl mb-3">Quotes & Pricing</h2>
            <p>
              All quotes are valid for 30 days from the date of issue unless otherwise stated. Prices are subject to change based on material costs and project scope modifications. A deposit is required to begin work, with terms outlined in your project agreement.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-navy-900 text-xl mb-3">Warranty</h2>
            <p>
              We provide a workmanship warranty on all fabrication and installation. Specific warranty terms, durations, and exclusions are detailed in your project agreement. Warranty does not cover damage from misuse, neglect, or unauthorized modifications.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-navy-900 text-xl mb-3">Limitation of Liability</h2>
            <p>
              {siteConfig.name} shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website. Our total liability shall not exceed the amount paid for the specific service in question.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-navy-900 text-xl mb-3">Contact</h2>
            <p>
              For questions about these terms, contact us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-navy-900 underline">
                {siteConfig.email}
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
