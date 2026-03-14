import Image from "next/image";
import CTAButton from "@/components/CTAButton";

interface CalloutBlock {
  headline: string;
  body: string;
}

interface ServicePageLayoutProps {
  heroImage: string;
  heroImagePosition?: string;
  headline: string;
  subline: string;
  intro: string;
  includedItems: string[];
  callout?: CalloutBlock;
  whyItMatters: string[];
  whyMangrove: string;
}

export default function ServicePageLayout({
  heroImage,
  heroImagePosition,
  headline,
  subline,
  intro,
  includedItems,
  callout,
  whyItMatters,
  whyMangrove,
}: ServicePageLayoutProps) {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[650px] items-center justify-center">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url('/photos/services/${heroImage}')`,
            backgroundPosition: heroImagePosition || "center",
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(27, 67, 50, 0.75)" }} />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-28 text-center text-white lg:px-8">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            {headline}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            {subline}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white" style={{ padding: "100px 0 30px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 40px" }}>
          <p
            className="text-lg leading-relaxed text-dark/80"
            style={{ borderLeft: "4px solid #2d5a27", paddingLeft: "20px" }}
          >
            {intro}
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-white" style={{ padding: "30px 0 90px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 40px" }}>
          <h2 className="text-2xl font-bold sm:text-3xl" style={{ color: "#2d5a27" }}>
            What&apos;s Included
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {includedItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <svg
                  className="mt-0.5 flex-shrink-0 text-forest"
                  style={{ width: "24px", height: "24px" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-dark/80" style={{ fontSize: "15px", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Callout */}
      {callout && (
        <section style={{ backgroundColor: "#f0f4f0", padding: "70px 0" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 40px" }}>
            <h2
              className="text-2xl font-bold sm:text-3xl"
              style={{ color: "#2d5a27", borderLeft: "4px solid #2d5a27", paddingLeft: "16px" }}
            >
              {callout.headline}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-dark/80">
              {callout.body}
            </p>
          </div>
        </section>
      )}

      {/* Why It Matters */}
      <section style={{ backgroundColor: callout ? "#ffffff" : "#f0f4f0", padding: "90px 0" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 40px" }}>
          <h2
            className="text-2xl font-bold sm:text-3xl"
            style={{ color: "#2d5a27", borderLeft: "4px solid #2d5a27", paddingLeft: "16px" }}
          >
            Why It Matters
          </h2>
          <div className="mt-6 space-y-5">
            {whyItMatters.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-dark/80">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mangrove */}
      <section className="bg-white" style={{ padding: "80px 0 90px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ marginBottom: "8px" }}>
            <Image
              src="/logo.png"
              alt="Mangrove Lawn Care"
              width={80}
              height={80}
              style={{ height: "80px", width: "auto" }}
            />
          </div>
          <h2 className="text-2xl font-bold sm:text-3xl" style={{ color: "#2d5a27" }}>
            Why Mangrove
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-dark/80">
            {whyMangrove}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24" style={{ borderBottom: "4px solid rgba(255,255,255,0.15)" }}>
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: "url('/photos/hero/cta-bg.jpg')", backgroundPosition: "center bottom" }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(27, 67, 50, 0.70)" }} />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Your Lawn Deserves Consistent Care
          </h2>
          <p className="mt-3 text-lg text-white/80">
            We provide reliable lawn care for Jacksonville homeowners who want clean cuts, sharp edges, and a yard that always looks maintained.
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
