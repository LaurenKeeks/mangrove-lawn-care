import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Lawn Edging and Trimming Jacksonville FL | Mangrove Lawn Care",
  description:
    "Professional lawn edging and trimming in Jacksonville, FL. Sharp borders along every driveway, walkway, and bed. Get a free estimate from Mangrove Lawn Care.",
};

export default function EdgingTrimmingPage() {
  return (
    <ServicePageLayout
      heroImage="edging.jpg"
      heroImagePosition="center 60%"
      headline="Clean Lawn Edging & Trimming in Jacksonville, FL"
      subline="Sharp borders that give your entire lawn a finished, professional look."
      intro="Mowing alone does not make a lawn look great. The difference between an average yard and a sharp, well-maintained property almost always comes down to the edges. Mangrove Lawn Care edges carefully along every driveway, sidewalk, curb, and landscape bed, and trims precisely around trees, fences, and any obstacle in the yard. We never rush the finishing work because we know it is what makes the biggest visual impression."
      includedItems={[
        "Crisp edging along all driveways, sidewalks, and curbs",
        "String trimming around trees, fence posts, and utility fixtures",
        "Precision trimming along landscape beds and garden borders",
        "Cleanup and removal of all trimmings after service",
        "Included with every mowing visit at no extra charge",
      ]}
      whyItMatters={[
        "Defined edges instantly signal that a property is cared for. They keep grass from creeping into landscape beds, protect mulch and plantings from being overtaken, and give the entire yard a finished, intentional appearance. Homes with clean lawn edges consistently have stronger curb appeal than those without, and it is one of the most visible things a lawn care company can do to add real value to your property.",
        "In Jacksonville's climate, grass along edges grows fast and can get unruly within a couple of weeks. Staying on top of it consistently is far easier than trying to restore overgrown borders later.",
      ]}
      whyMangrove="We treat edging and trimming as a core part of the job, not an add-on. Every visit from Mangrove Lawn Care includes full edging, trimming, and cleanup so your property always looks sharp from the street. You will never hear us say we skipped the edges because we were running behind."
    />
  );
}
