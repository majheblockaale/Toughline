"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt={siteConfig.name}
              width={44}
              height={44}
              className="h-9 lg:h-11 w-auto"
              priority
            />
            <span className="font-heading font-bold text-brand-950 text-lg lg:text-xl hidden sm:block">
              Toughline
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-brand-700 hover:text-brand-950 transition-colors rounded-lg hover:bg-brand-50"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2.5 bg-brand-950 text-white text-sm font-semibold rounded-lg hover:bg-brand-800 transition-colors"
            >
              Get Free Quote
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-brand-50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6 text-brand-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-brand-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-brand-100 animate-fade-in">
          <nav className="max-w-6xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-base font-medium text-brand-800 hover:bg-brand-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-brand-100">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-3 bg-brand-950 text-white font-semibold rounded-lg hover:bg-brand-800 transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
