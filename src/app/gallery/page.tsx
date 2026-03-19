import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Gallery",
  description: `See examples of custom metalwork by ${siteConfig.name} — security gates, railings, sheds, and more.`,
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-brand-950 text-white py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl">Gallery</h1>
          <p className="mt-4 text-brand-300 text-lg max-w-2xl">
            A look at some of our recent projects and craftsmanship.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero image showcase */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8">
            <Image
              src="/images/hero.png"
              alt="Toughline Metal Works — fabrication, welding, and ornamental ironwork"
              fill
              className="object-cover"
              quality={85}
            />
          </div>

          <div className="text-center mt-12 p-12 rounded-xl bg-brand-50 border border-brand-100">
            <h2 className="font-heading font-bold text-2xl text-brand-950 mb-3">
              More Photos Coming Soon
            </h2>
            <p className="text-brand-500 mb-6 max-w-lg mx-auto">
              We&apos;re adding more project photos. In the meantime, get in touch and we&apos;ll share examples relevant to your project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-950 text-white font-semibold rounded-lg hover:bg-brand-800 transition-colors text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
