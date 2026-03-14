import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Landscape Bed Installation Jacksonville FL | Mangrove Lawn Care",
  description:
    "Rock and landscape bed installation in Jacksonville, FL. Fresh beds, clean edging, and sharp borders. Get a free estimate from Mangrove Lawn Care.",
};

export default function LandscapeBedInstallationPage() {
  return (
    <ServicePageLayout
      heroImage="landscape-bed-installation.jpg"
      headline="Rock and Landscape Bed Installation in Jacksonville, FL"
      subline="Fresh beds, clean edging, and new rock that instantly transforms your property's curb appeal."
      intro="A well-designed landscape bed changes the way a property looks. New rock, defined borders, and properly spaced plants give your yard a sharp, intentional appearance that stands out in any neighborhood. Mangrove Lawn Care installs landscape beds and rock features for Jacksonville homeowners who want a clean, low-maintenance upgrade that improves curb appeal and adds real value to their property."
      includedItems={[
        "New landscape bed layout and installation",
        "White rock, river rock, and decorative stone installation",
        "Defined bed edging for clean, sharp borders",
        "Removal of old mulch or material before installation",
        "Plant spacing and placement guidance",
        "Full cleanup after installation",
      ]}
      whyItMatters={[
        "A fresh landscape bed installation is one of the highest-impact upgrades you can make to a property's appearance. Clean rock beds require less maintenance than mulch, suppress weeds effectively, and give your yard a polished, professional look that holds up over time. Defined edging keeps grass out of beds and maintains the clean lines that make a property stand out.",
      ]}
      whyMangrove="We take the same detail-focused approach to installation work that we bring to our maintenance services. Clean lines, proper edging, and careful placement make the difference between a bed that looks professionally done and one that just looks like rock was dumped and spread. We want the finished result to look intentional and sharp."
    />
  );
}
