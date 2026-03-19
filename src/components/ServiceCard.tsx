import Link from "next/link";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group relative bg-white rounded-2xl border border-silver-200 p-8 hover:border-steel-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 stagger-${index + 1}`}
    >
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="font-heading font-bold text-navy-900 text-xl mb-3 group-hover:text-steel-600 transition-colors">
        {service.name}
      </h3>
      <p className="text-steel-600 text-sm leading-relaxed mb-4">
        {service.shortDescription}
      </p>
      <span className="inline-flex items-center text-sm font-semibold text-navy-900 group-hover:text-steel-500 transition-colors">
        Learn More
        <svg
          className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>

      {/* Hover accent line */}
      <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-steel-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
    </Link>
  );
}
