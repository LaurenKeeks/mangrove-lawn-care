import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Leaf Removal Services Jacksonville FL | Mangrove Lawn Care",
  description:
    "Complete leaf removal and yard cleanup for Jacksonville homeowners. Keep your lawn healthy and your property clean year-round. Get a free estimate.",
};

export default function LeafRemovalPage() {
  return (
    <ServicePageLayout
      heroImage="leaf-removal.jpg"
      headline="Leaf Removal Services in Jacksonville, FL"
      subline="Fast, thorough leaf cleanup so your yard stays clean and your lawn stays healthy."
      intro="Leaves pile up fast in Jacksonville, especially during fall and winter when oak and other deciduous trees drop heavily. Left on your lawn, a thick layer of leaves blocks sunlight, traps moisture, and creates conditions for mold, pests, and dead patches. Mangrove Lawn Care provides complete leaf removal services to keep your property clean, your grass healthy, and your yard looking well-maintained no matter the season."
      includedItems={[
        "Full leaf removal from lawn areas, beds, and borders",
        "Blowing of leaves from hard surfaces including driveways and walkways",
        "Leaf cleanup from patios, porches, and outdoor living spaces",
        "Bagging and removal of all collected leaves",
        "Final walkthrough to make sure nothing is left behind",
        "Available as a one-time cleanup or recurring seasonal service",
      ]}
      whyItMatters={[
        "A heavy layer of leaves sitting on your lawn does real damage. It blocks sunlight from reaching the grass, traps moisture against the soil, and creates the perfect environment for fungal growth and pest activity. Jacksonville lawns are already sensitive to moisture-related issues given the heat and humidity. Staying on top of leaf removal protects your turf investment and keeps your yard looking sharp year-round.",
        "Leaves also accumulate in gutters, beds, and along fence lines where they decompose and create maintenance problems. Getting them cleared out regularly prevents buildup that becomes much harder to deal with later.",
      ]}
      whyMangrove="We treat leaf cleanup with the same attention to detail we bring to every service. We do not just blow leaves to the curb and call it done. We remove them completely, clean up the hard surfaces, and leave your property looking genuinely clean. Same reliable crew, same professional finish every time."
    />
  );
}
