import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import { services, newServices } from "@/components/ServiceCard";
import type { ServiceData } from "@/components/ServiceCard";
import HomeCarousel from "@/components/HomeCarousel";

export const metadata: Metadata = {
  title: "Jacksonville Lawn Care Done Right | Mangrove Lawn Care",
  description:
    "Mangrove Lawn Care delivers reliable, detail-driven lawn mowing, edging, trimming, and mulching for Jacksonville, FL homeowners. Get a free estimate today.",
  openGraph: {
    title: "Jacksonville Lawn Care Done Right | Mangrove Lawn Care",
    description:
      "Locally founded. Detail-driven. Built on the idea that your yard deserves better.",
    images: ["/photos/hero/hero.jpg"],
  },
};

const reviews = [
  {
    quote: "Mangrove Lawn Care did a great job. They showed up on time, communicated clearly, and left the yard looking clean and sharp. Even better, they're local, which makes supporting them an easy choice. Highly recommend.",
    name: "Sean Packer, Google Review",
  },
  {
    quote: "Very professional, very dependable, and great follow up. I love the attention to detail. With Mangrove I get the same team, someone who genuinely cares and does what they say they will do. I am so pleased.",
    name: "Nellie M, Google Review",
  },
  {
    quote: "Extremely professional and flexible. Austin does an amazing job. Highly recommend.",
    name: "Shaunn Lobo, Google Review",
  },
];

const allServices = [...services, ...newServices];
function findService(anchor: string): ServiceData {
  return allServices.find((s) => s.anchor === anchor)!;
}

const homepageServices = [
  findService("mowing"),
  findService("edging"),
  findService("shrubs"),
  findService("mulching"),
  findService("tree-trimming"),
  findService("maintenance"),
  findService("leaf-removal"),
  { ...findService("landscape-bed-installation"), shortDesc: "Fresh rock, defined edging, and clean bed layouts for a sharp, low-maintenance look." },
];

export default function HomePage() {
  const galleryDir = path.join(process.cwd(), "public/photos/gallery");
  const galleryFiles = fs.existsSync(galleryDir)
    ? fs
        .readdirSync(galleryDir)
        .filter((f) =>
          [".jpg", ".jpeg", ".png", ".webp"].includes(
            path.extname(f).toLowerCase()
          )
        )
        .sort()
    : [];

  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center justify-center bg-forest">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/photos/hero/hero.jpg')" }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.45)" }} />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 pt-14 pb-16 sm:pt-32 sm:pb-24 text-center text-white">
          <img
            src="/logo.png"
            alt="Mangrove Lawn Care"
            className="mx-auto"
            style={{ width: "80px", marginBottom: "6px", filter: "brightness(0) invert(1) drop-shadow(0 2px 8px rgba(0,0,0,0.4))" }}
          />
          <p className="font-sans font-semibold text-[0.85rem] sm:text-base" style={{ letterSpacing: "0.15em", textTransform: "uppercase", color: "#fff", textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>
            Mangrove Lawn Care
          </p>
          <h1 className="mt-2 text-4xl font-bold leading-tight sm:mt-3 sm:text-5xl lg:text-6xl">
            Jacksonville&apos;s Reliable Lawn Care Team
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90 sm:text-xl">
            Full-service lawn care and landscaping delivered with precision,
            consistency, and attention to detail.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton variant="white">Get a Free Estimate</CTAButton>
            <Link
              href="/our-work"
              className="rounded-full border-2 border-white px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-forest"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition Strip */}
      <section className="bg-white py-16 sm:py-[120px]">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3 lg:px-8">
          {[
            {
              icon: (
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Always On Time",
              desc: "We show up when we say we will, every single time. No more waiting around or rescheduling your day.",
            },
            {
              icon: (
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              ),
              title: "A Crew That Knows Your Lawn",
              desc: "We keep crews consistent so you always get someone who knows your property and your preferences.",
            },
            {
              icon: (
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              ),
              title: "Detail-First, Every Time",
              desc: "From crisp edges to a clean blowout, every visit ends with a yard you're proud to show off.",
            },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-forest/10 text-forest">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-dark">{item.title}</h3>
              <p className="mt-2 text-dark/70 text-[15px] leading-[1.4] sm:text-base sm:leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="pt-16 pb-12 sm:pt-[100px] sm:pb-[80px]" style={{ backgroundColor: "#f7f7f7" }}>
        <div className="mx-auto" style={{ maxWidth: "1300px", padding: "0 40px" }}>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-dark sm:text-4xl">
              Complete Lawn Care in Jacksonville &amp; St. Johns County
            </h2>
            <p className="mx-auto mt-3 text-center text-dark/70" style={{ fontSize: "15px", lineHeight: 1.4, maxWidth: "600px" }}>
              From mowing and edging to gutter cleaning, irrigation checkups, rock bed installation, and more. Mangrove Lawn Care handles it all.{" "}
              <Link href="/services" className="font-semibold underline" style={{ color: "#2d5a27" }}>View all services</Link> to see the full list.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4" style={{ columnGap: "30px", rowGap: "45px" }}>
            {homepageServices.map((s) => (
              <Link
                key={s.title}
                href={s.slug}
                className="group transition-all duration-200 ease-in-out hover:-translate-y-1"
              >
                <img
                  src={`/photos/services/${s.image}`}
                  alt={s.title}
                  className="h-[280px] w-full object-cover rounded-xl"
                  style={{ objectPosition: s.imagePosition || "center" }}
                />
                <div className="pt-2">
                  <h3 className="font-bold font-sans text-base" style={{ color: "#1a1a1a" }}>{s.title}</h3>
                  <p className="mt-1 text-sm text-dark/70">{s.shortDesc}</p>
                  <span className="inline-block font-semibold" style={{ color: "#2d5a27", fontSize: "0.9rem", marginTop: "6px" }}>
                    Learn More &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-block rounded-full bg-forest border-2 border-forest px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white hover:text-forest"
            >
              View All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Carousel */}
      {galleryFiles.length > 0 && (
        <section className="bg-white py-16 sm:py-[100px]">
          <div className="mx-auto" style={{ maxWidth: "1300px", padding: "0 40px" }}>
            <h2 className="text-center text-3xl font-bold text-dark sm:text-4xl">
              Our Work in Jacksonville &amp; St. Johns County
            </h2>
            <p className="mx-auto mt-3 text-center text-dark/70" style={{ fontSize: "15px", lineHeight: 1.4, maxWidth: "600px" }}>
              From routine maintenance to detailed landscape work, every property
              reflects our standard of quality and reliability.
            </p>
            <div className="mt-10">
              <HomeCarousel images={galleryFiles} />
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/our-work"
                className="inline-block rounded-full bg-forest border-2 border-forest px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white hover:text-forest"
              >
                View Full Gallery &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Social Proof Bar */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-dark sm:text-4xl">
            Trusted by Jacksonville &amp; St. Johns County Homeowners
          </h2>
          <p className="mx-auto mt-3 text-center text-dark/70" style={{ fontSize: "15px", lineHeight: 1.4, maxWidth: "600px" }}>
            See what local homeowners are saying about Mangrove Lawn Care and the
            difference consistent, detail-focused service makes.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="rounded-xl bg-white p-6"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
              >
                <div className="mb-3 flex text-gold">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-lg">&#9733;</span>
                  ))}
                </div>
                <p className="text-dark/80 italic">&ldquo;{r.quote}&rdquo;</p>
                <p className="mt-3 text-sm font-semibold text-dark">
                  — {r.name}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/reviews"
              className="inline-block rounded-full border-2 border-forest px-8 py-3 text-base font-semibold text-forest transition-colors hover:bg-forest hover:text-white"
            >
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="bg-white py-16 sm:py-[140px]">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-dark sm:text-4xl">
            Founded by Two Jacksonville Teens Who Wanted to Do It Right
          </h2>
          <p className="mt-4 text-lg text-dark/70">
            Mangrove Lawn Care was founded by Austin and Caeden, two
            Jacksonville teenagers who believed homeowners deserved more
            reliable, detail-focused lawn service. What began as a small
            neighborhood operation quickly grew through hard work, consistency,
            and a commitment to doing every job the right way.
          </p>
          <div className="mt-8">
            <Link
              href="/about"
              className="inline-block rounded-full border-2 border-forest px-8 py-3 text-base font-semibold text-forest transition-colors hover:bg-forest hover:text-white"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="relative py-24" style={{ borderBottom: "4px solid rgba(255,255,255,0.15)" }}>
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: "url('/photos/hero/cta-bg.jpg')", backgroundPosition: "center bottom" }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(27, 67, 50, 0.70)" }} />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Want to See the Difference?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-lg text-white/80">
            No contracts. No pressure. Just a lawn you&apos;re proud of, backed
            by a team that actually cares.
          </p>
          <div className="mt-8">
            <CTAButton variant="white">
              Get a Free Estimate
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
