import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Irrigation System Checkup Jacksonville FL | Mangrove Lawn Care",
  description:
    "Irrigation system inspection and adjustment in Jacksonville, FL. Catch problems before the heat hits. Get a free estimate from Mangrove Lawn Care.",
};

export default function IrrigationCheckupPage() {
  return (
    <ServicePageLayout
      heroImage="irrigation-checkup.jpg"
      heroImagePosition="center bottom"
      headline="Irrigation System Checkups in Jacksonville, FL"
      subline="Catch small problems before Florida's heat turns them into big ones."
      intro="A sprinkler system that is not working properly wastes water, leaves dry patches, and can quietly stress your lawn before you even notice the damage. Before Jacksonville's intense summer heat arrives, having your irrigation system inspected and adjusted ensures your lawn gets the consistent, even coverage it needs to stay healthy all season. Mangrove Lawn Care provides thorough irrigation checkups to identify issues and get your system running the way it should."
      includedItems={[
        "Inspection of all sprinkler heads for damage, misalignment, or blockage",
        "Coverage adjustment to eliminate dry spots and overlap",
        "Leak and pressure check throughout the system",
        "Zone-by-zone testing to confirm even watering",
        "Downspout and drainage assessment",
        "Written summary of any issues found",
      ]}
      whyItMatters={[
        "Florida's summer heat is hard on lawns. A sprinkler system that has a single clogged head, a misaligned zone, or a slow leak can mean the difference between a healthy lawn and a stressed, patchy one. Catching these issues in spring before the heat peaks gives you time to fix them before they cause visible damage.",
        "Water bills are also a real concern. A system running inefficiently can waste significant water every week without you realizing it.",
      ]}
      whyMangrove="We test every zone carefully and document what we find so you have a clear picture of your system's condition. If we find something that needs attention, we will tell you exactly what it is and what it will take to fix it. No vague reports, no upselling work that is not needed."
    />
  );
}
