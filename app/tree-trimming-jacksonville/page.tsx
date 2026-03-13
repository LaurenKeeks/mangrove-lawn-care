import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Tree Trimming Jacksonville FL | Mangrove Lawn Care",
  description:
    "Light to moderate tree trimming and pruning in Jacksonville, FL. Keep branches trimmed and your property safe. Get a free estimate from Mangrove Lawn Care.",
};

export default function TreeTrimmingPage() {
  return (
    <ServicePageLayout
      heroImage="tree-trimming.jpg"
      heroImagePosition="center 20%"
      headline="Tree Trimming & Pruning in Jacksonville, FL"
      subline="Keep low branches trimmed, your yard looking clean, and your property protected."
      intro="Low-hanging branches, limbs growing toward rooflines, and overgrown canopy growth at the edge of your yard are more than cosmetic issues. They can block walkways, scrape structures, damage fences, and create real safety risks during Florida's storm season. Mangrove Lawn Care handles light to moderate tree trimming and pruning to keep your trees looking clean, your property tidy, and your yard safe."
      includedItems={[
        "Trimming of low-hanging and overextended branches",
        "Pruning of limbs growing near rooflines, gutters, and structures",
        "Canopy cleanup along fence lines and property edges",
        "Removal and cleanup of all cuttings after service",
        "Available as a one-time service or recurring seasonal maintenance",
        "Honest assessment of work scope before any service begins",
      ]}
      whyItMatters={[
        "Jacksonville's storm season puts real stress on trees with heavy, overgrown limbs. Branches that hang over your roof or push against your home can cause damage during high winds. Keeping trees properly trimmed reduces that risk significantly.",
        "Beyond safety, clean trees simply make a yard look better. Overgrown canopy growth can shade out grass beneath it, drop debris constantly, and make a property feel cluttered and unkempt. Regular light pruning keeps trees healthy and your yard looking well managed.",
      ]}
      whyMangrove="We handle light to moderate tree trimming as part of our full-service lawn care offering. We will always be upfront about the scope of the work before we start. If a job requires large-scale or high-risk tree removal that is outside our scope, we will tell you honestly and point you toward the right specialist rather than taking on work we are not set up to do safely."
    />
  );
}
