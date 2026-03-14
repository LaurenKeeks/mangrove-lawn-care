import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Tree Debris Removal Jacksonville FL | Mangrove Lawn Care",
  description:
    "Professional tree debris removal and yard cleanup in Jacksonville, FL. Branches, logs, and debris cleared fast. Get a free estimate from Mangrove Lawn Care.",
};

export default function TreeDebrisRemovalPage() {
  return (
    <ServicePageLayout
      heroImage="tree-debris-removal.jpg"
      headline="Tree Debris Removal in Jacksonville, FL"
      subline="After the tree work is done, we handle the cleanup so your yard looks right again."
      intro="Tree trimming and removal companies do the hard work of cutting and hauling, but they do not always leave your yard in great shape. Branches, logs, sawdust piles, and scattered debris often get left behind for the homeowner to deal with. Mangrove Lawn Care provides professional tree debris removal and full yard cleanup after tree work so your property goes from a job site back to a clean, well-kept yard as quickly as possible."
      includedItems={[
        "Removal of tree limbs, branches, and cut sections",
        "Cleanup of logs and large wood debris",
        "Leaf and sawdust pile removal",
        "Storm and post-tree-cutting debris clearing",
        "Full yard walkthrough after cleanup",
        "Fast turnaround with upfront pricing",
      ]}
      whyItMatters={[
        "Debris left after tree work does not just look bad. Branches and logs sitting on your lawn block sunlight, trap moisture, and can damage turf over time. Large piles of debris also attract pests and create tripping hazards. Getting the yard cleared quickly after tree work protects your lawn and restores the appearance of your property.",
      ]}
      whyMangrove="We work quickly and clean up completely. Our goal is to leave your yard looking like the tree work never happened. Fair, upfront pricing and no surprises."
    />
  );
}
