import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Mulching Services Jacksonville FL | Mangrove Lawn Care",
  description:
    "Professional mulching services in Jacksonville, FL. Fresh mulch that protects your plants, suppresses weeds, and polishes your yard. Get a free estimate.",
};

export default function MulchingPage() {
  return (
    <ServicePageLayout
      heroImage="mulching.jpg"
      headline="Professional Mulching Services in Jacksonville, FL"
      subline="Fresh mulch that protects your plants, suppresses weeds, and gives your yard a polished look."
      intro="Mulching is one of the most practical and impactful things you can do for your landscape beds. It retains moisture, regulates soil temperature, suppresses weed growth, and gives your property a clean, finished appearance that instantly improves curb appeal. Mangrove Lawn Care spreads and layers fresh mulch around trees, garden beds, and landscape borders to protect your plants and make your yard look its absolute best."
      includedItems={[
        "Fresh mulch installation around trees, beds, and landscape borders",
        "Proper depth layering for effective weed suppression and moisture retention",
        "Cleanup of any overspill onto lawn or hardscaping",
        "Optional edging of bed borders before mulch installation",
        "Standard and premium mulch options available",
        "One-time installations or seasonal refreshes",
      ]}
      whyItMatters={[
        "Florida's intense heat can dry out landscape beds quickly and stress plant roots. A proper layer of mulch acts as insulation for your soil, slowing moisture evaporation and keeping root zones cooler during the hottest months. It also creates a physical barrier that makes it significantly harder for weeds to germinate and establish.",
        "Beyond the practical benefits, fresh mulch is one of the fastest visual upgrades you can make to a property. Dark, even mulch in well-defined beds instantly makes a yard look intentional and well-maintained, even between service visits.",
      ]}
      whyMangrove="We take the time to install mulch correctly. Proper depth and coverage are what determine how long it lasts and how effective it is at suppressing weeds. We do not just dump and spread. We edge the beds cleanly, layer the mulch at the right depth, and clean up any overspill before we leave."
    />
  );
}
