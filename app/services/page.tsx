import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import { services, newServices, ServiceCardFull } from "@/components/ServiceCard";
import type { ServiceData } from "@/components/ServiceCard";
import ServiceFilter from "@/components/ServiceFilter";

export const metadata: Metadata = {
  title: "Lawn Care Services in Jacksonville, FL | Mangrove Lawn Care",
  description:
    "Mangrove Lawn Care offers professional lawn mowing, edging, trimming, mulching, and more for Jacksonville, FL homeowners. Get a free estimate today.",
  openGraph: {
    title: "Lawn Care Services in Jacksonville, FL | Mangrove Lawn Care",
    description:
      "Mangrove Lawn Care offers professional lawn mowing, edging, trimming, mulching, and more for Jacksonville, FL homeowners.",
  },
};

const allServices = [...services, ...newServices];

/* Helper to find a service by anchor */
function findService(anchor: string): ServiceData {
  return allServices.find((s) => s.anchor === anchor)!;
}

const lawnAndYardCare = [
  findService("mowing"),
  findService("edging"),
  findService("weed-control"),
  findService("leaf-removal"),
  findService("maintenance"),
];

const landscapeAndProperty = [
  findService("shrubs"),
  findService("weeds"),
  findService("mulching"),
  findService("landscape-bed-installation"),
  findService("tree-trimming"),
  findService("tree-debris-removal"),
  findService("gutter-cleaning"),
  findService("irrigation-checkup"),
  findService("artificial-turf-cleaning"),
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-forest pt-20 pb-14">
        <div className="mx-auto max-w-5xl px-4 text-center text-white lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Lawn Care Services
          </h1>
          <p className="mt-3 text-xl text-white/85 sm:text-2xl">
            Jacksonville &amp; St. Johns County, FL
          </p>
          <div className="mt-8">
            <CTAButton variant="white">
              Get a Free Estimate
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Service Cards with Filter */}
      <section className="bg-white" style={{ padding: "60px 0 80px" }}>
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ServiceFilter
            lawnCards={lawnAndYardCare.map((service) => (
              <ServiceCardFull key={service.title} service={service} />
            ))}
            landscapeCards={landscapeAndProperty.map((service) => (
              <ServiceCardFull key={service.title} service={service} />
            ))}
          />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24" style={{ borderBottom: "4px solid rgba(255,255,255,0.15)" }}>
        <div className="absolute inset-0 bg-cover" style={{ backgroundImage: "url('/photos/hero/cta-bg.jpg')", backgroundPosition: "center bottom" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(27, 67, 50, 0.70)" }} />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Not Sure What Your Lawn Needs?
          </h2>
          <p className="mt-3 text-lg text-white/80">
            We&apos;ll walk your property and put together a plan that works for
            you. Free, no pressure, no obligation.
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
