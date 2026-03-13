"use client";

import { useEffect } from "react";
import EstimateForm from "./EstimateForm";

export default function EstimateModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Slide-in drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl animate-slide-in overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-forest">
              Get a Free Estimate
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-dark cursor-pointer"
              aria-label="Close"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <p className="mb-6 text-sm text-dark/70">
            Fill out the form below and we&apos;ll get back to you within 24 hours.
            No contracts, no pressure.
          </p>

          <EstimateForm />

          <p className="mt-6 text-center text-sm text-dark/60">
            Or call us directly:{" "}
            <a href="tel:9044770490" className="font-semibold text-forest hover:underline">
              (904) 477-0490
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
