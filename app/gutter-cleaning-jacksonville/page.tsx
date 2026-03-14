import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Gutter Cleaning Jacksonville FL | Mangrove Lawn Care",
  description:
    "Professional gutter cleaning and debris removal in Jacksonville, FL. Protect your home from water damage. Get a free estimate from Mangrove Lawn Care.",
};

export default function GutterCleaningPage() {
  return (
    <ServicePageLayout
      heroImage="gutter-cleaning.jpg"
      headline="Gutter Cleaning in Jacksonville, FL"
      subline="Protect your home from water damage with professional gutter and debris cleanup."
      intro="Clogged gutters are one of the most overlooked maintenance issues homeowners face, and in Jacksonville's rainy season, they can cause serious damage fast. When gutters fill up with leaves, debris, and buildup, water has nowhere to go except over the edge or back toward your home. Mangrove Lawn Care provides thorough gutter cleaning and debris removal to protect your roof, fascia, and foundation from costly water damage."
      includedItems={[
        "Complete cleanout of gutters and downspouts",
        "Downspout flush and flow test to confirm drainage",
        "Removal of leaves, debris, and buildup from gutters",
        "Roof and valley debris removal",
        "Full leaf cleanup and haul-away",
        "Before and after documentation available on request",
      ]}
      whyItMatters={[
        "Overflowing gutters do not just look bad. They can lead to roof leaks, damaged fascia boards, foundation erosion, and basement or crawl space flooding. In a climate like Jacksonville's where heavy rain is common, gutters that are not functioning properly put your home at real risk. Routine cleaning is far less expensive than the repairs that follow when gutters fail.",
        "Most homeowners should have their gutters cleaned at least twice a year. Properties near large trees may need it more frequently.",
      ]}
      whyMangrove="We approach gutter cleaning the same way we approach every job: thoroughly and without shortcuts. We flush downspouts to confirm they are draining properly, remove all debris from the roof and valley areas, and clean up the ground below so your property looks right when we leave."
    />
  );
}
