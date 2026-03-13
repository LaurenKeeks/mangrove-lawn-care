import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Yard Cleanup Services Jacksonville FL | Mangrove Lawn Care",
  description:
    "Full property cleanup after every lawn care visit in Jacksonville, FL. No clippings left behind. Get a free estimate from Mangrove Lawn Care.",
};

export default function LawnCleanupPage() {
  return (
    <ServicePageLayout
      heroImage="cleanup.jpg"
      headline="Full Property Cleanup After Every Visit"
      subline="No clippings on the driveway. No mess left behind. Ever."
      intro="A lawn service is not finished when the mower stops. At Mangrove Lawn Care, every single visit ends with a full blowout of your hard surfaces so your driveway, sidewalks, and patio are completely clear of clippings and debris. We treat the final cleanup as an essential part of the job, not an optional extra. Your property should look noticeably better when we leave than it did when we arrived."
      includedItems={[
        "Full blowout of driveways, sidewalks, and front walkways",
        "Clearing of grass clippings from patios, porches, and outdoor living areas",
        "Removal of debris and material created during the service visit",
        "Final walkthrough of the property before we leave",
        "Included with every mowing, edging, and trimming visit",
      ]}
      whyItMatters={[
        "Leaving clippings scattered across a driveway or sidewalk is one of the most common signs of a careless lawn care company. It looks sloppy, it tells your neighbors that no one took pride in the work, and it reflects poorly on your home. A proper cleanup at the end of every visit is what separates a professional service from a crew that just wants to move on to the next job.",
        "In a neighborhood setting, how your property looks after a service visit matters. A clean finish makes the whole job look polished and intentional.",
      ]}
      whyMangrove="We do not leave until the property looks right. Our standard is that every customer should be able to walk outside after we leave and feel good about what they see. That means clean edges, no clippings in the driveway, and a yard that looks genuinely well cared for."
    />
  );
}
