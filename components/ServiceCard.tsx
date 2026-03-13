import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import ServiceEstimateLink from "./ServiceEstimateLink";

export interface ServiceData {
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string; // filename in /public/photos/services/
  imagePosition?: string; // CSS object-position value, defaults to "center"
  anchor: string;
  slug: string; // URL path for the individual service page
}

export const services: ServiceData[] = [
  {
    title: "Lawn Mowing & Maintenance",
    anchor: "mowing",
    slug: "/lawn-mowing-jacksonville",
    shortDesc: "Consistent, precise cuts on a schedule you can count on.",
    fullDesc:
      "Regular mowing is the foundation of a healthy lawn. We use push mowers to deliver a precise, even cut that's gentler on your turf and fence line. No scalping, no ruts, no missed strips. We service your yard on a consistent schedule so it never gets away from you.",
    image: "mowing.jpg",
  },
  {
    title: "Edging & Trimming",
    anchor: "edging",
    slug: "/edging-trimming-jacksonville",
    shortDesc: "Sharp, clean borders along every driveway, walkway, and bed.",
    fullDesc:
      "Clean edges make all the difference. We edge along driveways, walkways, and curbs to give your lawn that sharp, finished look. String trimming around trees, fences, and garden beds ensures every inch is accounted for.",
    image: "edging.jpg",
    imagePosition: "center 60%",
  },
  {
    title: "Blowing & Cleanup",
    anchor: "cleanup",
    slug: "/lawn-cleanup-jacksonville",
    shortDesc: "We leave your property spotless at the end of every visit.",
    fullDesc:
      "We don't leave clippings on your driveway or sidewalk. Every visit ends with a full blowout so your property looks spotless when we're done.",
    image: "cleanup.jpg",
  },
  {
    title: "Bush & Shrub Trimming",
    anchor: "shrubs",
    slug: "/shrub-trimming-jacksonville",
    shortDesc: "Neat, shaped hedges that keep your curb appeal strong.",
    fullDesc:
      "Overgrown hedges and shrubs can make even a healthy lawn look untidy. We trim and shape your bushes and shrubs to keep your landscaping clean and well-maintained.",
    image: "shrub-trimming.jpg",
    imagePosition: "top",
  },
  {
    title: "Weed Pulling & Bed Cleanup",
    anchor: "weeds",
    slug: "/weed-removal-jacksonville",
    shortDesc: "Clean beds, pulled weeds, no shortcuts.",
    fullDesc:
      "Weeds don't stand a chance. We offer hand-pulling and bed cleanup to keep your flower beds and landscape borders clear and neat. Can't manage the weeds yourself? Just add it to your regular service.",
    image: "weed-pulling.jpg",
    imagePosition: "center bottom 35%",
  },
  {
    title: "Mulching",
    anchor: "mulching",
    slug: "/mulching-jacksonville",
    shortDesc: "Fresh mulch to protect your beds and polish your landscape.",
    fullDesc:
      "Fresh mulch improves moisture retention, suppresses weeds, and gives your landscape beds a polished, finished appearance. We spread and layer mulch around trees, beds, and borders to keep your yard looking its best.",
    image: "mulching.jpg",
  },
  {
    title: "Tree Trimming & Pruning",
    anchor: "tree-trimming",
    slug: "/tree-trimming-jacksonville",
    shortDesc: "Tidy up low-hanging branches and overgrown limbs.",
    fullDesc:
      "We handle low-hanging branches, overgrown limbs near the roofline, and unruly growth at the yard's edge. Keeping your trees trimmed protects your property and keeps your yard looking clean and well-maintained.",
    image: "tree-trimming.jpg",
    imagePosition: "center 20%",
  },
  {
    title: "Recurring Maintenance Plans",
    anchor: "maintenance",
    slug: "/lawn-maintenance-plans-jacksonville",
    shortDesc:
      "Weekly or bi-weekly service tailored to your lawn and budget.",
    fullDesc:
      "Set it and forget it. We offer recurring weekly and bi-weekly maintenance plans so your lawn stays in top shape year-round. We'll recommend a schedule that fits your lawn's needs and your budget, no contracts required.",
    image: "maintenance-plans.jpg",
  },
];

function imageExists(filename: string): boolean {
  const filePath = path.join(process.cwd(), "public/photos/services", filename);
  return fs.existsSync(filePath);
}

function ServicePhoto({ image, title, position = "center", height = "h-[350px]" }: { image: string; title: string; position?: string; height?: string }) {
  const hasPhoto = imageExists(image);

  if (hasPhoto) {
    return (
      <Image
        src={`/photos/services/${image}`}
        alt={title}
        width={600}
        height={400}
        className={`${height} w-full object-cover`}
        style={{ objectPosition: position }}
      />
    );
  }

  // Solid green placeholder
  return (
    <div className={`flex ${height} w-full items-center justify-center bg-forest`}>
      <svg
        className="h-12 w-12 text-white/20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    </div>
  );
}

export function ServiceCardCompact({ service }: { service: ServiceData }) {
  return (
    <Link href={service.slug} className="block service-card overflow-hidden bg-white transition-all duration-200 ease-in-out hover:-translate-y-1" style={{ borderRadius: "12px" }}>
      <ServicePhoto image={service.image} title={service.title} position={service.imagePosition} height="h-[200px]" />
      <div className="p-5">
        <h3 className="font-bold font-sans text-base" style={{ color: "#1B4D2E" }}>
          {service.title}
        </h3>
        <p className="mt-1 text-sm text-dark/70">{service.shortDesc}</p>
      </div>
    </Link>
  );
}

export function ServiceCardFull({ service }: { service: ServiceData }) {
  return (
    <Link
      href={service.slug}
      id={service.anchor}
      className="block service-card overflow-hidden rounded-2xl bg-white transition-all duration-200 ease-in-out hover:-translate-y-1 scroll-mt-20"
    >
      <ServicePhoto image={service.image} title={service.title} position={service.imagePosition} height="h-[280px]" />
      <div className="flex flex-col p-8" style={{ minHeight: "220px" }}>
        <h2 className="text-2xl font-bold text-dark">{service.title}</h2>
        <p className="mt-3 text-dark/70 leading-relaxed flex-grow">{service.fullDesc}</p>
        <span className="mt-4 inline-flex items-center text-sm font-semibold text-forest">
          Learn More &rarr;
        </span>
      </div>
    </Link>
  );
}
