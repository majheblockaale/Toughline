import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our portfolio of custom metal fabrication projects — security gates, window well covers, sheds, enclosures, railings, and more.",
};

// Placeholder gallery items — replace with real photos later
const galleryItems = services.flatMap((service) =>
  Array.from({ length: 3 }, (_, i) => ({
    id: `${service.slug}-${i + 1}`,
    title: `${service.name} Project ${i + 1}`,
    service: service.name,
    icon: service.icon,
  }))
);

export default function GalleryPage() {
  return (
    <>
      <Hero
        title="Our Work"
        subtitle="Browse our portfolio of completed projects across the Greater Toronto Area. Every piece is custom-built with precision and pride."
        backgroundClass="bg-gradient-to-br from-navy-950 via-steel-800 to-navy-900"
      />

      {/* Filter hint */}
      <section className="py-6 bg-silver-50 border-b border-silver-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-navy-900 text-white text-sm font-medium rounded-full">
              All
            </span>
            {services.map((s) => (
              <span
                key={s.slug}
                className="px-4 py-2 bg-white text-steel-600 text-sm font-medium rounded-full border border-silver-200 hover:border-navy-900 hover:text-navy-900 transition-colors cursor-pointer"
              >
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, i) => (
              <AnimatedSection key={item.id} animation="fade-in-up" delay={(i % 6) * 0.08}>
                <div className="group relative bg-silver-100 rounded-2xl overflow-hidden aspect-[4/3] hover:shadow-xl transition-all">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-steel-400">
                      <div className="text-5xl mb-2">{item.icon}</div>
                      <p className="text-xs">Photo placeholder</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                    <h3 className="font-heading font-bold text-white text-base">
                      {item.title}
                    </h3>
                    <p className="text-silver-300 text-xs mt-1">{item.service}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
