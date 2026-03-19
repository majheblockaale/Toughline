import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Services",
  description: `Metal fabrication services by ${siteConfig.name} — security gates, window well covers, sheds, enclosures, welding, and ornamental ironwork in the GTA.`,
};

const services = [
  {
    title: "Security Gates",
    description:
      "Custom-built steel security gates for driveways, walkways, and commercial properties. Swing, sliding, and automated options with powder-coated finishes for weather resistance.",
    features: ["Custom designs", "Heavy-gauge steel", "Manual & automated", "Professional installation"],
  },
  {
    title: "Window Well Covers",
    description:
      "Custom-fitted steel window well covers for basement safety and protection. Steel grating or polycarbonate-topped frames that support heavy snow loads.",
    features: ["Custom-measured fit", "Snow load rated", "Egress compliant", "Rust-resistant coating"],
  },
  {
    title: "Metal Sheds & Structures",
    description:
      "Steel-framed buildings engineered for Canadian conditions. Storage sheds, workshops, and agricultural structures that outlast wood with zero maintenance.",
    features: ["Custom sizes", "Steel frame", "Insulation options", "Roll-up & walk-through doors"],
  },
  {
    title: "Metal Enclosures",
    description:
      "Secure enclosures for HVAC equipment, dumpsters, pool equipment, and utilities. Designed for security, ventilation, and bylaw compliance.",
    features: ["HVAC protection", "Dumpster corrals", "Lockable access", "Bylaw compliant"],
  },
  {
    title: "Welding & Fabrication",
    description:
      "Certified MIG, TIG, and stick welding for steel, stainless steel, and aluminum. Custom brackets, frames, structural work, and on-site repairs.",
    features: ["MIG / TIG / Stick", "Multi-metal capable", "On-site service", "Repairs & restoration"],
  },
  {
    title: "Ornamental & Decorative Metalwork",
    description:
      "Custom railings, fences, gates, garden features, fireplace screens, and decorative panels. Traditional craftsmanship meets modern precision.",
    features: ["Stair & balcony railings", "Decorative fences", "Garden gates", "Custom furniture"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-950 text-white py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl">Our Services</h1>
          <p className="mt-4 text-brand-300 text-lg max-w-2xl">
            Full-service metal fabrication for residential and commercial projects across the GTA.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-xl border border-brand-100 hover:border-brand-200 transition-colors"
              >
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-brand-950 mb-3">
                  {service.title}
                </h2>
                <p className="text-brand-500 leading-relaxed mb-5 max-w-3xl">
                  {service.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-xs font-medium text-brand-600 bg-brand-50 px-3 py-1.5 rounded-full"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-brand-500 text-lg mb-6">
              Have a project in mind? We&apos;d love to hear about it.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-950 text-white font-semibold rounded-lg hover:bg-brand-800 transition-colors text-base"
            >
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
