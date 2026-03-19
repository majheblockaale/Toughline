import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  backgroundClass?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText = "Get Free Quote",
  ctaHref = "/contact",
  secondaryCtaText,
  secondaryCtaHref,
  backgroundClass = "bg-gradient-to-br from-navy-950 via-navy-900 to-steel-800",
}: HeroProps) {
  return (
    <section className={`relative ${backgroundClass} overflow-hidden`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <AnimatedSection animation="fade-in-up">
            <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
              {title}
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={0.15}>
            <p className="mt-6 text-silver-300 text-lg sm:text-xl leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-semibold rounded-xl hover:bg-silver-100 transition-all hover:shadow-lg hover:-translate-y-0.5 text-base"
              >
                {ctaText}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              {secondaryCtaText && secondaryCtaHref && (
                <Link
                  href={secondaryCtaHref}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-silver-400 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-base"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Bottom decorative bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-steel-500 via-silver-400 to-steel-500" />
    </section>
  );
}
