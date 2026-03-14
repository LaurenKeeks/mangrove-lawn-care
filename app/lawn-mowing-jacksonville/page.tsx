import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Lawn Mowing Services in Jacksonville FL | Mangrove Lawn Care",
  description:
    "Reliable lawn mowing services for Jacksonville homeowners. Push mower precision, consistent schedules, and a team that shows up on time. Get a free estimate.",
};

export default function LawnMowingPage() {
  return (
    <ServicePageLayout
      heroImage="mowing.jpg"
      headline="Lawn Mowing Services in Jacksonville, FL"
      subline="Reliable mowing, clean edges, and a lawn care team that shows up when they say they will."
      intro="Regular mowing is the foundation of a healthy, well-maintained lawn. Mangrove Lawn Care provides dependable lawn mowing services for homeowners across Jacksonville using push mowers that deliver cleaner cuts and reduce stress on your grass. We are not a large franchise operation sending out rotating crews. We are a small, detail-focused team that schedules carefully, communicates clearly, and treats every yard like it matters. The result is a lawn that looks even, healthy, and consistently maintained week after week."
      includedItems={[
        "Weekly or bi-weekly lawn mowing on a reliable schedule",
        "Precision push-mower cuts that are gentler on turf and fence lines",
        "Alternating mowing patterns to promote upright grass growth and prevent ruts",
        "Clipping dispersal or bagging based on your preference and lawn conditions",
        "Full edging along driveways, sidewalks, and curbs after every mow",
        "String trimming around trees, beds, fences, and landscape features",
        "Complete blowout of hard surfaces so your driveway and walkways are clean when we leave",
      ]}
      callout={{
        headline: "Every Visit Ends Clean",
        body: "A lawn service is not finished when the mower stops. Every visit ends with a full blowout of your driveways, sidewalks, and hard surfaces so your property looks spotless when we leave. No clippings on the driveway. No mess left behind. Ever.",
      }}
      whyItMatters={[
        "Jacksonville's warm, humid climate means grass grows aggressively for most of the year. Without a consistent mowing schedule, lawns become uneven, overgrown, and harder to manage over time. Grass that is allowed to grow too tall before cutting gets stressed, which weakens the root system and creates conditions for weeds and pests to take hold. Staying on a regular schedule keeps your lawn healthier, prevents it from ever getting out of control, and protects the long-term appearance of your property.",
        "Push mowers make a real difference too. Heavy commercial riding equipment compacts soil, leaves ruts along fence lines, and can scalp uneven terrain. Push mowers give a more precise, even cut that is kinder to your turf, your landscaping, and your property.",
      ]}
      whyMangrove="Mangrove Lawn Care was founded in 2023 by Austin and Caeden, two Jacksonville locals who built this business while still in high school because they saw how often homeowners were let down by unreliable lawn care companies. Every review we have earned has been five stars, and we intend to keep it that way. We show up on time, text when we are on our way, and leave your property better than we found it. No drive-by mows, no shortcuts, no excuses."
    />
  );
}
