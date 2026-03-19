import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center py-20">
      <div className="text-center px-4">
        <h1 className="font-heading font-bold text-navy-900 text-7xl sm:text-8xl mb-4">
          404
        </h1>
        <h2 className="font-heading font-bold text-navy-900 text-2xl mb-4">
          Page Not Found
        </h2>
        <p className="text-steel-500 text-base mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-navy-900 text-white font-semibold rounded-xl hover:bg-navy-800 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
