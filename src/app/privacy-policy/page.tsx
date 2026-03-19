import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-steel">
        <h1 className="font-heading font-bold text-navy-900 text-3xl sm:text-4xl mb-8">
          Privacy Policy
        </h1>
        <p className="text-steel-500 text-sm mb-8">Last updated: March 2026</p>

        <div className="space-y-6 text-steel-600 text-sm leading-relaxed">
          <div>
            <h2 className="font-heading font-bold text-navy-900 text-xl mb-3">Information We Collect</h2>
            <p>
              When you use our website or contact us, we may collect personal information including your name, email address, phone number, and details about your project. This information is provided voluntarily through our contact form or direct communication.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-navy-900 text-xl mb-3">How We Use Your Information</h2>
            <p>We use the information collected to:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Respond to your inquiries and provide quotes</li>
              <li>Communicate about your projects and services</li>
              <li>Improve our website and customer experience</li>
              <li>Send relevant service updates (with your consent)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading font-bold text-navy-900 text-xl mb-3">Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist in operating our website or conducting our business, provided they agree to keep this information confidential.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-navy-900 text-xl mb-3">Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect site functionality.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-navy-900 text-xl mb-3">Contact</h2>
            <p>
              If you have questions about this privacy policy, contact us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-navy-900 underline">
                {siteConfig.email}
              </a>{" "}
              or call{" "}
              <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="text-navy-900 underline">
                {siteConfig.phone}
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
