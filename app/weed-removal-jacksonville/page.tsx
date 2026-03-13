import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Weed Removal and Bed Cleanup Jacksonville FL | Mangrove Lawn Care",
  description:
    "Hand-pulled weed removal and landscape bed cleanup in Jacksonville, FL. Clean beds, no shortcuts. Get a free estimate from Mangrove Lawn Care.",
};

export default function WeedRemovalPage() {
  return (
    <ServicePageLayout
      heroImage="weed-pulling.jpg"
      heroImagePosition="center bottom 35%"
      headline="Weed Removal & Landscape Bed Cleanup in Jacksonville, FL"
      subline="Clean beds, pulled weeds, and no shortcuts."
      intro="Weeds are persistent, fast-growing, and relentless in Jacksonville's warm climate. Left unchecked, they crowd out your plants, drain nutrients from your soil, and turn a well-designed landscape bed into a mess. Mangrove Lawn Care removes weeds by hand and thoroughly cleans landscape beds so your plants have the space and resources they need to thrive. We do the work properly so the results actually last."
      includedItems={[
        "Hand-pulling of weeds from all landscape beds and borders",
        "Removal of dead plant material, debris, and buildup",
        "Defined edging along bed borders for a clean, finished appearance",
        "Cleanup and disposal of all pulled material",
        "Available as a one-time deep clean or recurring maintenance add-on",
        "Can be combined with mulching for a completely refreshed bed",
      ]}
      whyItMatters={[
        "Weeds compete directly with your plants for water, sunlight, and nutrients. In Jacksonville's heat and humidity, they can take over a bed surprisingly quickly. Catching them early and staying on top of regular removal is far more effective and less damaging to surrounding plants than waiting until beds are overrun.",
        "Manual removal also gets to the root in a way that surface-level treatments often do not. When weeds are pulled correctly, they are less likely to return quickly, which means your beds stay cleaner for longer between service visits.",
      ]}
      whyMangrove="We rely on careful, thorough manual removal rather than excessive herbicide applications, which protects your ornamental plants and minimizes chemical use around your home. Our clients notice the difference between a quick spray-and-go treatment and beds that have actually been worked properly."
    />
  );
}
