"use client";

import { useState, type FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const serviceOptions = [
  "Security Gates",
  "Window Well Covers",
  "Metal Sheds & Structures",
  "Metal Enclosures",
  "Welding & Fabrication",
  "Ornamental & Decorative",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function validate(): boolean {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Name is required (min 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "A valid email address is required.";
    }

    if (formData.phone && !/^[\d\s()+-]{7,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Message is required (min 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="font-heading font-bold text-green-900 text-xl mb-2">Message Sent!</h3>
        <p className="text-green-700 text-sm">Thank you for contacting us. We will get back to you within 1 business day.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-green-700 underline hover:no-underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full px-4 py-3 rounded-xl border ${
            errors.name ? "border-red-400 bg-red-50" : "border-silver-300"
          } text-navy-900 placeholder-steel-400 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition-colors`}
          placeholder="John Smith"
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.email ? "border-red-400 bg-red-50" : "border-silver-300"
            } text-navy-900 placeholder-steel-400 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition-colors`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-1.5">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.phone ? "border-red-400 bg-red-50" : "border-silver-300"
            } text-navy-900 placeholder-steel-400 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition-colors`}
            placeholder="(416) 555-0123"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-navy-900 mb-1.5">
          Service Interested In
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-silver-300 text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition-colors bg-white"
        >
          <option value="">Select a service...</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`w-full px-4 py-3 rounded-xl border ${
            errors.message ? "border-red-400 bg-red-50" : "border-silver-300"
          } text-navy-900 placeholder-steel-400 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition-colors resize-vertical`}
          placeholder="Tell us about your project — dimensions, materials, timeline, etc."
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full px-8 py-4 bg-navy-900 text-white font-semibold rounded-xl hover:bg-navy-800 transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
      >
        {status === "sending" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>

      {status === "error" && (
        <p className="text-center text-sm text-red-600">
          Something went wrong. Please try again or call us directly.
        </p>
      )}
    </form>
  );
}
