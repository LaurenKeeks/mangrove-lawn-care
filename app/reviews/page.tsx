import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import ReviewGrid from "@/components/ReviewGrid";

export const metadata: Metadata = {
  title: "Customer Reviews | Mangrove Lawn Care Jacksonville FL",
  description:
    "See what Jacksonville homeowners are saying about Mangrove Lawn Care. Real reviews from real clients.",
  openGraph: {
    title: "Customer Reviews | Mangrove Lawn Care Jacksonville FL",
    description:
      "See what Jacksonville homeowners are saying about Mangrove Lawn Care.",
  },
};

const reviews = [
  {
    quote:
      "They showed up on time, communicated clearly, and left the yard looking clean and sharp. Even better, they're local, which makes supporting them an easy choice. Highly recommend.",
    name: "Jacksonville Homeowner",
  },
  {
    quote:
      "The attention to detail is amazing! I have used a few companies since we moved back to Florida and the workmanship was non-existent. Austin and Caeden come when they say, go above and beyond and leave my lawn looking amazing! Hire them, you will not be disappointed.",
    name: "Sarah M.",
  },
  {
    quote:
      "Mangrove Lawn Care is excellent. My lawn looks much better after they started their service. They are reasonable, flexible and professional. Austin and Kaeden will take good care of your needs!",
    name: "L.K., Local Guide",
  },
  {
    quote:
      "The two men showed up to my house and were extremely professional. I've had landscapers in the past who never showed up on time and scalped my lawn. Mangrove FAR exceeded what I had in the past and I would highly recommend these fellas.",
    name: "Caden U.",
  },
  {
    quote:
      "Professional young men did an excellent job with our yard and even went above and beyond to trim an out-of-control bush growing at the river's edge. They responded quickly and arrived exactly when they said they would. I plan on using their services again.",
    name: "David P.",
  },
  {
    quote:
      "Very professional, very dependable, and great follow-up. I love the attention to detail. I hired bigger companies in the past and always felt like I got a drive-by service with a new guy every time. With Mangrove I'm getting someone who genuinely cares and does what they say they're going to do. They've also done additional work at my request — trimming trees and laying mulch. I also appreciate that they use a push mower, which is much kinder to my lawn and vinyl fence.",
    name: "Mark T.",
  },
  {
    quote:
      "Amazing service! We walked the property before the first cut, addressed our issues and specifications, and have been so happy!",
    name: "Nick D.",
  },
  {
    quote:
      "This company is the best! They go above and beyond what is asked of them. I highly recommend them to anyone needing total attention to detail for their lawn maintenance needs.",
    name: "Jeanette R.",
  },
  {
    quote:
      "Very polite and professional. Great communication, and came exactly when he said he would. Excellent service and clean up after.",
    name: "Kimberly C.",
  },
  {
    quote:
      "Extremely professional and flexible. Austin does an amazing job. Highly recommend.",
    name: "Shaunn L.",
  },
  {
    quote:
      "Amazing service! Highly recommended for everyone! Everything looks perfect!",
    name: "Aida S.",
  },
  {
    quote:
      "Great communication. Happy to have them doing my yard for a while!",
    name: "Ryan S.",
  },
];

export default function ReviewsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-forest py-20">
        <div className="mx-auto max-w-4xl px-4 text-center text-white lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">
            What Jacksonville Homeowners Are Saying About Mangrove
          </h1>
          <p className="mt-4 text-lg text-white/85">
            We let our work and our clients do the talking.
          </p>

          {/* Star Rating Summary */}
          <div className="mt-8">
            <div className="text-5xl font-bold font-sans">5.0</div>
            <div className="mt-2 flex items-center justify-center gap-1 text-gold text-3xl">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s}>&#9733;</span>
              ))}
            </div>
            <p className="mt-2 text-white/70 text-sm font-sans">
              Based on {reviews.length} Google Reviews
            </p>

            {/* Google Badge */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-sm font-semibold text-white">5-Star Rated on Google</span>
            </div>
          </div>
        </div>
      </section>

      {/* Review Cards */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <ReviewGrid reviews={reviews} />

          {/* Read All Reviews Button */}
          <div className="mt-12 text-center">
            <a
              href="https://www.google.com/maps/place/Mangrove+Lawn+and+Landscape+Management+LLC/@30.2215215,-81.6576015,10z/data=!4m8!3m7!1s0x6230a9535428ea1d:0x14dad8c0c06e2831!8m2!3d30.2215214!4d-81.6576015!9m1!1b1!16s%2Fg%2F11zj2lyvff?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 px-8 py-3.5 text-base font-semibold transition-colors hover:bg-forest hover:text-white hover:border-forest"
              style={{ borderColor: "#1B4D2E", color: "#1B4D2E" }}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Read All Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24" style={{ borderBottom: "4px solid rgba(255,255,255,0.15)" }}>
        <div className="absolute inset-0 bg-cover" style={{ backgroundImage: "url('/photos/hero/cta-bg.jpg')", backgroundPosition: "center bottom" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(27, 67, 50, 0.70)" }} />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to See What We Can Do for Your Yard?
          </h2>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CTAButton variant="white">
              Get a Free Estimate
            </CTAButton>
            <Link
              href="https://www.google.com/maps/place/Mangrove+Lawn+and+Landscape+Management+LLC/@30.2215215,-81.6576015,10z/data=!4m8!3m7!1s0x6230a9535428ea1d:0x14dad8c0c06e2831!8m2!3d30.2215214!4d-81.6576015!9m1!1b1!16s%2Fg%2F11zj2lyvff?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-white px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-forest"
            >
              Leave Us a Review
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
