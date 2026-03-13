import type { Metadata } from "next";
import EstimateForm from "@/components/EstimateForm";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Contact Mangrove Lawn Care | Jacksonville FL",
  description:
    "Get in touch with Mangrove Lawn Care for a free lawn care estimate in Jacksonville, FL. Call, text, or fill out our contact form.",
  openGraph: {
    title: "Contact Mangrove Lawn Care | Jacksonville FL",
    description:
      "Get in touch with Mangrove Lawn Care for a free lawn care estimate in Jacksonville, FL.",
  },
};

const faqs = [
  {
    q: "Do you offer free estimates?",
    a: "Yes. We'll walk your property, assess what it needs, and put together a quote at no cost and no obligation.",
  },
  {
    q: "Do you require contracts?",
    a: "No. We don't lock you into anything. You can start, pause, or stop service at any time.",
  },
  {
    q: "How do I get a quote?",
    a: "Just call or text us at (904) 477-0490 or fill out the form above. We'll get back to you quickly and can usually walk your property within a day or two.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Jacksonville, FL and surrounding Duval County communities. See our full service area.",
  },
  {
    q: "How often will you service my lawn?",
    a: "Most clients are on a weekly or bi-weekly schedule. We'll recommend what makes sense for your lawn and your budget.",
  },
  {
    q: "How quickly do you respond?",
    a: "We typically respond within a few hours during business hours. For urgent requests, call or text us directly at (904) 477-0490.",
  },
  {
    q: "Do you work with new customers right away?",
    a: "Absolutely. Just reach out and we can usually schedule a property walkthrough within a day or two.",
  },
  {
    q: "What makes Mangrove different from other lawn companies?",
    a: "We're locally owned, we use push mowers that are gentler on your turf, and we keep the same crew on your property so someone always knows your yard and your preferences.",
  },
  {
    q: "Do you use riding mowers?",
    a: "We primarily use push mowers, which are more precise and gentler on your turf, fence, and landscaping than heavy commercial equipment.",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex items-center justify-center bg-forest" style={{ minHeight: "500px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/photos/hero/contact-hero.jpg')" }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(27, 67, 50, 0.72)" }} />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white lg:px-8" style={{ paddingBottom: "60px" }}>
          <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl">
            Get a Free Estimate
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Getting started is easy. Reach out and we&apos;ll walk your
            property, understand your needs, and put together a plan that works
            for you. No contracts. No pressure.
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="py-5" style={{ backgroundColor: "#F4F7F4", borderBottom: "1px solid #e0e8e0" }}>
        <div className="mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 text-sm font-semibold text-dark/80">
          <span className="inline-flex items-center gap-2">
            <svg className="h-4 w-4 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Licensed &amp; Insured
          </span>
          <span className="inline-flex items-center gap-2">
            <svg className="h-4 w-4 text-forest" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            5-Star Rated
          </span>
          <span className="inline-flex items-center gap-2">
            <svg className="h-4 w-4 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            Jacksonville, FL
          </span>
        </div>
      </div>

      {/* Contact Info + Form — Split Layout */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Left: Contact Details + Steps */}
            <div>
              <h2 className="text-2xl font-bold text-dark">Get in Touch</h2>
              <p className="mt-3 text-dark/70" style={{ fontSize: "16px", lineHeight: 1.7 }}>
                The easiest way to get started is to fill out the form or give us
                a call. We&apos;ll get back to you quickly and can usually schedule
                a property walkthrough within a day or two.
              </p>

              <div className="mt-8 space-y-5">
                <a href="tel:9044770490" className="flex items-center gap-3 font-semibold text-dark hover:text-forest transition-colors">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  (904) 477-0490
                </a>
                <div className="flex items-center gap-3 text-dark">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  Jacksonville, FL
                </div>
                <a
                  href="https://www.facebook.com/Mangrovelawncare/photos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-semibold text-dark hover:text-forest transition-colors"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  Follow Us on Facebook
                </a>
              </div>

              <hr className="my-10" style={{ borderColor: "rgba(0,0,0,0.08)" }} />

              {/* What happens next */}
              <div>
                <h3 className="text-lg font-bold text-dark font-sans">
                  What happens next?
                </h3>
                <ol className="mt-5 space-y-4">
                  {[
                    { step: "1", text: "We\u2019ll respond within a few hours to schedule a time." },
                    { step: "2", text: "We walk your property and discuss what you\u2019re looking for." },
                    { step: "3", text: "You get a clear quote \u2014 no surprises, no pressure." },
                  ].map((item) => (
                    <li key={item.step} className="flex items-start gap-3">
                      <div className="flex flex-shrink-0 items-center justify-center rounded-full text-white text-sm font-bold" style={{ width: "40px", height: "40px", backgroundColor: "#2d5a27" }}>
                        {item.step}
                      </div>
                      <span className="text-dark/80 pt-2">{item.text}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Call Us Callout */}
              <a
                href="tel:9044770490"
                className="mt-10 block rounded-xl p-6 text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#2d5a27" }}
              >
                <p className="text-sm font-medium text-white">Prefer to talk?</p>
                <p className="mt-1 text-lg font-bold">
                  Call us directly &rarr; (904) 477-0490
                </p>
              </a>
            </div>

            {/* Right: Form */}
            <div className="bg-white" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)", borderRadius: "12px", padding: "32px" }}>
              <h2 className="mb-6 text-2xl font-bold text-dark">
                Send Us a Message
              </h2>
              <EstimateForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "#F4F7F4" }}>
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-dark sm:text-4xl">
            Common Questions
          </h2>
          <div className="mt-12">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>
    </main>
  );
}
