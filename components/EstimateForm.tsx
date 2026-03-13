"use client";

import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function EstimateForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-lg bg-forest/10 p-6 text-center">
        <div className="text-3xl mb-2">&#10003;</div>
        <h3 className="text-lg font-semibold text-forest font-serif">
          Thanks! We&apos;ll be in touch within 24 hours.
        </h3>
        <p className="mt-2 text-sm text-dark/70">
          We&apos;ll review your request and get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-dark mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-dark focus:border-forest focus:ring-1 focus:ring-forest outline-none"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-dark focus:border-forest focus:ring-1 focus:ring-forest outline-none"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-dark focus:border-forest focus:ring-1 focus:ring-forest outline-none"
        />
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-dark mb-1">
          Street Address or Neighborhood
        </label>
        <input
          type="text"
          id="address"
          name="address"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-dark focus:border-forest focus:ring-1 focus:ring-forest outline-none"
        />
      </div>

      <div>
        <label htmlFor="contact_method" className="block text-sm font-medium text-dark mb-1">
          Preferred Contact Method
        </label>
        <select
          id="contact_method"
          name="contact_method"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-dark focus:border-forest focus:ring-1 focus:ring-forest outline-none bg-white"
        >
          <option value="call">Call me</option>
          <option value="text">Text me</option>
          <option value="email">Email me</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark mb-1">
          Message / Notes
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-dark focus:border-forest focus:ring-1 focus:ring-forest outline-none resize-y"
        />
      </div>

      {status === "error" && (
        <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
          Something went wrong — please call us at{" "}
          <a href="tel:9044770490" className="font-semibold underline">
            (904) 477-0490
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full px-6 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60 cursor-pointer"
        style={{ backgroundColor: "#2d5a27" }}
      >
        {status === "sending" ? "Sending..." : "Send My Request"}
      </button>
      <p className="text-center text-xs text-dark/50 mt-3">
        We typically respond within a few hours during business hours.
      </p>
    </form>
  );
}
