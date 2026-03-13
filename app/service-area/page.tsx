import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Lawn Care Service Area | Jacksonville FL | Mangrove Lawn Care",
  description:
    "Mangrove Lawn Care serves residential homeowners throughout Jacksonville, FL and surrounding Duval County communities. Get a free estimate today.",
  openGraph: {
    title: "Lawn Care Service Area | Jacksonville FL | Mangrove Lawn Care",
    description:
      "Mangrove Lawn Care serves residential homeowners throughout Jacksonville, FL and surrounding Duval County communities.",
  },
};

const areas = [
  "All of Jacksonville, FL",
  "Ponte Vedra",
  "Fleming Island",
  "Orange Park",
  "Southside Jacksonville",
  "Northside Jacksonville",
  "Mandarin",
  "San Marco",
  "Riverside / Avondale",
  "Atlantic Beach",
  "Neptune Beach",
  "Jacksonville Beach",
];

export default function ServiceAreaPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[650px] items-center justify-center bg-forest">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/photos/hero/service-area-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-forest/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white lg:px-8">
          <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl">
            Serving Jacksonville, FL and Surrounding Areas
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Local lawn care for Jacksonville homeowners.
          </p>
        </div>
      </section>

      {/* Areas Served */}
      <section className="bg-cream pt-28 pb-20">
        <div className="mx-auto max-w-5xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-dark sm:text-4xl">
            Jacksonville&apos;s Lawn Care Crew
          </h2>
          <p className="mx-auto mt-4 text-left" style={{ maxWidth: "700px", fontSize: "18px", lineHeight: 1.8, color: "#2C2C2C" }}>
            We serve residential homeowners across Duval and St. Johns County.
            We know North Florida&apos;s climate, its grass types, and what it
            takes to keep a lawn looking sharp year-round. Not sure if we cover
            your area? Send us a message and we&apos;ll get back to you quickly.
          </p>

          {/* Areas list */}
          <div className="mx-auto mt-16" style={{ maxWidth: "700px" }}>
            <p className="text-forest font-semibold font-sans mb-4" style={{ fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Areas We Serve
            </p>
            <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "12px 32px" }}>
              {areas.map((area) => (
                <div key={area} className="flex items-center gap-2.5">
                  <svg
                    className="h-4 w-4 flex-shrink-0 text-forest"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <span className="text-dark" style={{ fontSize: "16px" }}>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d224484.19765997!2d-81.66!3d30.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus"
        width="100%"
        height="600"
        style={{ border: 0, display: "block" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mangrove Lawn Care Service Area — Jacksonville, FL"
      />

      {/* Local Knowledge */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-dark sm:text-4xl">
            We Know Jacksonville Lawns
          </h2>
          <p className="mt-4" style={{ fontSize: "18px", lineHeight: 1.8, color: "#2C2C2C" }}>
            Florida&apos;s climate is unlike anywhere else. The year-round
            growing season, summer heat and humidity, and frequent rain create
            unique demands on your lawn. We know how to care for St. Augustine
            grass, when to adjust mow height through the seasons, and how to
            keep North Florida yards looking sharp all year long.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24" style={{ borderBottom: "4px solid rgba(255,255,255,0.15)" }}>
        <div className="absolute inset-0 bg-cover" style={{ backgroundImage: "url('/photos/hero/cta-bg.jpg')", backgroundPosition: "center bottom" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(27, 67, 50, 0.70)" }} />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            In Our Service Area? Let&apos;s Talk.
          </h2>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton variant="white">
              Get a Free Estimate
            </CTAButton>
            <a
              href="tel:9044770490"
              className="rounded-full border-2 border-white px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-forest"
            >
              (904) 477-0490
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
