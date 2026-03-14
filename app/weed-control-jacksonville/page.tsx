import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Weed Control Services Jacksonville FL | Mangrove Lawn Care",
  description:
    "Targeted weed control for lawns and landscape beds in Jacksonville, FL. Keep your grass and plants healthy. Get a free estimate from Mangrove Lawn Care.",
};

export default function WeedControlPage() {
  return (
    <ServicePageLayout
      heroImage="weed-control.jpg"
      headline="Weed Control Services in Jacksonville, FL"
      subline="Keep weeds out of your lawn and beds so your grass and plants can actually grow."
      intro="Jacksonville's warm, humid climate is ideal for weed growth almost year-round. Without consistent control, weeds spread quickly through lawn areas and landscape beds, competing directly with your grass and plants for water, nutrients, and sunlight. Mangrove Lawn Care provides targeted weed control in both lawn areas and beds to keep your property clean, your plants healthy, and your turf looking its best."
      includedItems={[
        "Targeted weed treatment in lawn areas and landscape beds",
        "Hand-pulling in beds where chemical treatment is not appropriate",
        "Spot treatment of broadleaf and grassy weeds in turf",
        "Pre-emergent application timing recommendations",
        "Cleanup of treated areas after service",
        "Available as a one-time treatment or recurring maintenance",
      ]}
      whyItMatters={[
        "Weeds do not just look bad. They actively compete with your grass and landscape plants for the resources they need to thrive. In a climate like Jacksonville's, where weeds can establish and spread within a couple of weeks, staying ahead of them with consistent treatment is far more effective than trying to reclaim a yard that has been overtaken.",
        "Early intervention also means less chemical use over time. Catching weeds while they are small requires less treatment than dealing with a fully established population.",
      ]}
      whyMangrove="We approach weed control carefully, using the right treatment method for each area of your property. We do not apply blanket chemical treatments where hand removal or targeted spot treatment is more appropriate. The goal is effective control that protects your lawn and landscape rather than just knocking things back temporarily."
    />
  );
}
