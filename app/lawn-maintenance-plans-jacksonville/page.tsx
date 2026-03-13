import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Recurring Lawn Care Jacksonville FL | Mangrove Lawn Care",
  description:
    "Weekly and bi-weekly lawn care maintenance plans in Jacksonville, FL. No contracts, consistent crew, reliable service. Get a free estimate from Mangrove Lawn Care.",
};

export default function MaintenancePlansPage() {
  return (
    <ServicePageLayout
      heroImage="maintenance-plans.jpg"
      headline="Recurring Lawn Care Plans in Jacksonville, FL"
      subline="Set it and forget it. Your lawn, on a schedule that works for you, with a team you can count on."
      intro="The best-looking lawns in Jacksonville are not the result of occasional one-off service. They are the result of consistent, scheduled care from a team that knows the property and shows up reliably every single time. Mangrove Lawn Care offers weekly and bi-weekly maintenance plans designed to keep your yard healthy, clean, and well-maintained all year long without you having to think about it. No contracts, no hassle, just dependable service from a team that genuinely takes pride in the work."
      includedItems={[
        "Weekly or bi-weekly mowing on a fixed, reliable schedule",
        "Full edging along driveways, sidewalks, and curbs every visit",
        "String trimming around all trees, fences, beds, and features",
        "Complete blowout of hard surfaces after every service",
        "Consistent crew that gets to know your property over time",
        "Text notifications when we are on our way",
        "Flexible scheduling with easy, direct communication",
        "No contracts required",
      ]}
      whyItMatters={[
        "Jacksonville lawns grow aggressively for most of the year. Without a consistent service schedule, it does not take long for a yard to get out of hand. Once grass gets too long between cuts, the mowing process becomes harder on your turf and harder to get looking right. Staying on schedule protects the health of your lawn and keeps your property looking sharp every single week.",
        "There is also a real practical benefit to working with a consistent crew rather than rotating through different providers. A team that knows your property notices things. They know where the tricky spots are, how your lawn behaves in different conditions, and what your expectations are without being told every time.",
      ]}
      whyMangrove="Our recurring clients get the same small, dedicated team every visit. We are not a large franchise operation rotating through dozens of crews. We keep our client list focused so we can do every job properly and build real familiarity with each property we maintain. Every review we have earned has been five stars, and our recurring clients are the reason for that."
    />
  );
}
