"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/our-work", label: "Our Work" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/service-area", label: "Service Area" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar({
  onOpenEstimate,
}: {
  onOpenEstimate: () => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white" style={{ borderBottom: "1px solid #e8e8e8" }}>
      <div className="mx-auto flex items-center justify-between px-6 py-3 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Mangrove Lawn Care"
            width={44}
            height={44}
            priority
            className="w-auto"
            style={{ height: "44px" }}
          />
          <span className="text-lg font-bold" style={{ color: "#2d5a27" }}>
            Mangrove Lawn Care
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base transition-colors ${
                  isActive
                    ? "text-forest"
                    : "text-dark hover:text-forest"
                }`}
                style={{
                  fontWeight: 500,
                  paddingBottom: "7px",
                  borderBottom: isActive ? "2px solid #2d5a27" : "2px solid transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop right: phone + CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:9044770490"
            className="text-base font-medium text-dark hover:text-forest"
          >
            (904) 477-0490
          </a>
          <button
            onClick={onOpenEstimate}
            className="rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-forest-light cursor-pointer"
          >
            Get a Free Estimate
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-dark"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 lg:hidden">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 text-base font-medium border-b border-gray-50 ${
                  isActive ? "text-forest font-semibold" : "text-dark hover:text-forest"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="tel:9044770490"
            className="mt-3 block py-2 text-base font-semibold text-forest"
          >
            (904) 477-0490
          </a>
          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenEstimate();
            }}
            className="mt-3 w-full rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white hover:bg-forest-light cursor-pointer"
          >
            Get a Free Estimate
          </button>
        </div>
      )}
    </nav>
  );
}
