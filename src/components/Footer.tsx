import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-silver-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-steel-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">T</span>
              </div>
              <div>
                <div className="font-heading font-bold text-white text-lg leading-tight">
                  Toughline
                </div>
                <div className="font-heading text-steel-400 text-xs uppercase tracking-widest">
                  Metal Works
                </div>
              </div>
            </div>
            <p className="text-silver-400 text-sm leading-relaxed mb-4">
              {siteConfig.description}
            </p>
            <div className="flex gap-3">
              {Object.entries(siteConfig.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-navy-900 rounded-lg flex items-center justify-center text-silver-400 hover:bg-steel-500 hover:text-white transition-colors"
                  aria-label={platform}
                >
                  <span className="text-xs uppercase font-bold">
                    {platform.charAt(0).toUpperCase()}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-silver-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About Us" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
                { href: "/faq", label: "FAQ" },
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/terms-of-service", label: "Terms of Service" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-silver-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-silver-400">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-steel-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}, {siteConfig.address.province} {siteConfig.address.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-steel-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-steel-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="pt-2 text-silver-500 text-xs">
                <div>{siteConfig.hours.weekdays}</div>
                <div>{siteConfig.hours.saturday}</div>
                <div>{siteConfig.hours.sunday}</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-silver-500">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Serving the Greater Toronto Area with premium metalwork.</p>
        </div>
      </div>
    </footer>
  );
}
