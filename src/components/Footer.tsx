import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company */}
          <div>
            <h3 className="font-heading font-bold text-white text-lg mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-sm leading-relaxed text-brand-400">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-brand-400">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                {siteConfig.address.street}<br />
                {siteConfig.address.city}, {siteConfig.address.province}{" "}
                {siteConfig.address.postalCode}
              </li>
              <li className="pt-1">
                <p>{siteConfig.hours.weekdays}</p>
                <p>{siteConfig.hours.saturday}</p>
                <p>{siteConfig.hours.sunday}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-800 text-center text-xs text-brand-500">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
