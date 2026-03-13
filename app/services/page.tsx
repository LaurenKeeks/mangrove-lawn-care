import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import { services, ServiceCardFull } from "@/components/ServiceCard";

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

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-forest pt-20 pb-14">
        <div className="mx-auto max-w-5xl px-4 text-center text-white lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Lawn Care Services in Jacksonville, FL
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/85">
            At Mangrove Lawn Care, we specialize in keeping Jacksonville
            residential lawns healthy, manicured, and looking their absolute best
            year-round. Florida&apos;s climate is demanding. The heat, humidity,
            and year-round growth cycle mean your lawn needs consistent,
            knowledgeable care. That&apos;s exactly what we deliver.
          </p>
          <div className="mt-8">
            <CTAButton variant="white">
              Get a Free Estimate
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Service Detail Cards — 4x2 grid */}
      <section className="bg-white pt-10 pb-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <ServiceCardFull key={service.title} service={service} />
            ))}
          </div>

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
