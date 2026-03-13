import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Bush and Shrub Trimming Jacksonville FL | Mangrove Lawn Care",
  description:
    "Professional bush and shrub trimming in Jacksonville, FL. Neat, shaped hedges that keep your landscaping looking clean. Get a free estimate from Mangrove Lawn Care.",
};

export default function ShrubTrimmingPage() {
  return (
    <ServicePageLayout
      heroImage="shrub-trimming.jpg"
      heroImagePosition="top"
      headline="Bush & Shrub Trimming in Jacksonville, FL"
      subline="Neat, shaped hedges that keep your landscaping looking clean and intentional."
      intro="Overgrown bushes and shrubs can make even a healthy, well-mowed lawn look neglected. When hedges get too large or uneven, they start to dominate the landscape and pull attention away from everything else. Mangrove Lawn Care carefully trims and shapes hedges, bushes, and ornamental shrubs to keep your landscaping balanced, defined, and looking its best. Whether you need a seasonal cleanup or want trimming added to your regular maintenance schedule, we handle it."
      includedItems={[
        "Trimming and shaping of hedges, bushes, and ornamental shrubs",
        "Careful sizing and leveling for a natural, clean appearance",
        "Removal and disposal of all clippings",
        "Edging and cleanup around shrub beds after trimming",
        "Available as a one-time service or recurring maintenance add-on",
        "Seasonal reshaping available for plants that require specific timing",
      ]}
      whyItMatters={[
        "Well-maintained shrubs define the structure and character of your landscaping. They frame your home, create visual boundaries, and dramatically improve curb appeal when kept in good shape. Left untrimmed, hedges overgrow walkways and windows, crowd out nearby plants, and make a property look like no one is paying attention to it.",
        "In Jacksonville's growing climate, shrubs can put on significant new growth in a matter of weeks. Staying on top of trimming regularly is much easier and less disruptive to the plant than trying to cut back years of overgrowth all at once.",
      ]}
      whyMangrove="We take the time to shape your shrubs correctly rather than giving them a quick, rough buzz cut. Our goal is natural-looking, well-proportioned plants that complement your home and landscape rather than shrubbery that looks hacked at. We also clean up thoroughly after every trimming so your beds look finished when we leave."
    />
  );
}
