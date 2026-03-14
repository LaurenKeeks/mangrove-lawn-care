import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Artificial Turf Cleaning Jacksonville FL | Mangrove Lawn Care",
  description:
    "Professional artificial turf debris removal in Jacksonville, FL. Restore your turf to a clean, sharp appearance. Get a free estimate from Mangrove Lawn Care.",
};

export default function ArtificialTurfCleaningPage() {
  return (
    <ServicePageLayout
      heroImage="artificial-turf-cleaning.jpg"
      headline="Artificial Turf Debris Removal in Jacksonville, FL"
      subline="Professional cleaning that restores your artificial turf without damaging the fibers."
      intro="Artificial turf is low-maintenance, but it is not no-maintenance. Leaves, dirt, pollen, and organic debris accumulate over time and can make even quality turf look dull and unkempt. Mangrove Lawn Care provides professional artificial turf debris removal using commercial-grade equipment that clears buildup thoroughly without damaging the turf fibers. The result is clean, sharp-looking turf that performs and looks the way it was designed to."
      includedItems={[
        "Removal of leaves, dirt, pollen, and loose debris from turf surface",
        "Commercial-grade equipment that cleans without fiber damage",
        "Clearing of debris from turf edges and borders",
        "Final inspection to confirm clean, even appearance",
        "Available as a one-time service or recurring seasonal maintenance",
      ]}
      whyItMatters={[
        "Debris that sits on artificial turf for extended periods can compact into the fibers, hold moisture, and create conditions for mold and odor. Regular removal keeps your turf looking its best and extends its usable life. In Jacksonville's environment, where pollen, oak debris, and leaf fall are significant, seasonal cleaning makes a real visual difference.",
      ]}
      whyMangrove="We use the right equipment for artificial turf so the cleaning is thorough without causing any wear or damage to the surface. Fast service, professional results, and pricing that makes regular maintenance practical."
    />
  );
}
