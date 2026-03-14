import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "About Mangrove Lawn Care | Jacksonville FL",
  description:
    "Mangrove Lawn Care was founded in 2023 by two Jacksonville teenagers who believed homeowners deserved better. Learn our story.",
  openGraph: {
    title: "About Mangrove Lawn Care | Jacksonville FL",
    description:
      "Mangrove Lawn Care was founded in 2023 by two Jacksonville teenagers who believed homeowners deserved better.",
  },
};

const whyChoose = [
  {
    title: "Always On Time",
    desc: "It sounds basic, but we hear it constantly from new clients: their last lawn care company was unreliable. We text, we confirm, and we're there when we say we'll be. Every time.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "A Crew That Knows Your Lawn",
    desc: "With bigger companies, you never know who's showing up. We keep our crews consistent so you always get someone who knows your property, your preferences, and how you like things done.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Responsive Communication",
    desc: "Have a question? Need to adjust your schedule? Just text us. We respond quickly and keep you informed every step of the way.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    title: "Attention to Detail",
    desc: "We don't just mow and go. We edge, trim, blow, and clean up — treating every yard like it's our own. If something looks off, we fix it.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Locally Owned and Operated",
    desc: "Founded right here in Jacksonville. When you hire Mangrove, your money stays in the community. We're your neighbors and we're invested in this city just like you are.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Push Mower Precision",
    desc: "We use push mowers rather than heavy commercial riding equipment, giving your lawn a more precise cut that's easier on your turf, fence, and landscaping.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        {/* Mower body */}
        <rect x="4" y="10" width="12" height="6" rx="1.5" />
        {/* Handle */}
        <path d="M16 13h3.5a1 1 0 011 1v0a1 1 0 01-1 1H16" />
        <path d="M19.5 11V8.5a1 1 0 011-1v0" />
        {/* Wheels */}
        <circle cx="7" cy="18" r="2" />
        <circle cx="13" cy="18" r="2" />
        {/* Axle connections */}
        <path d="M7 16v-0.5M13 16v-0.5" />
        {/* Grass blades */}
        <path d="M3 21l1.5-3M8.5 21l1-2M14 21l1.5-3" strokeWidth={1} />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[450px] sm:min-h-[650px] items-center justify-center bg-forest">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/photos/hero/about-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-forest/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Jacksonville &amp; St. Johns County&apos;s Most Reliable Lawn Care Team
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Built from the ground up. Detail is the standard.
          </p>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-20" style={{ backgroundColor: "#F4F7F4" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 40px" }}>
          <div className="space-y-6" style={{ fontSize: "18px", lineHeight: 1.8, color: "#2C2C2C", borderLeft: "4px solid #2d5a27", paddingLeft: "20px" }}>
            <p>
              Mangrove Lawn Care was founded in 2023 by Austin and Caeden, two
              Jacksonville teenagers who decided to build something real while
              still in high school. They saw a simple problem: homeowners were
              paying good money for lawn care and getting inconsistent crews,
              drive-by mows, and zero accountability.
            </p>
            <p>
              They built Mangrove to be different. No franchise backing, no
              shortcuts. Just two guys who take genuine pride in the work and
              hold themselves to a standard most companies don&apos;t bother with.
              Every review they&apos;ve earned has been five stars, and they intend
              to keep it that way.
            </p>
            <p>
              That commitment shows in every visit. They show up on time,
              communicate clearly, and leave every lawn better than they found
              it. They use push mowers over heavy riding equipment because the
              details matter, and so does your turf.
            </p>
          </div>
        </div>
      </section>


      {/* Why Choose Mangrove */}
      <section className="bg-white py-20" style={{ borderTop: "1px solid #e0e4e0" }}>
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="text-center text-3xl font-bold sm:text-4xl" style={{ color: "#2d5a27" }}>
            Why Jacksonville Homeowners Choose Mangrove
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-6 text-center" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-forest/10 text-forest">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-dark">{item.title}</h3>
                <p className="mt-2 text-sm text-dark/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
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
