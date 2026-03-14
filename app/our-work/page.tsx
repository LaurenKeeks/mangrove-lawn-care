import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import CTAButton from "@/components/CTAButton";
import GalleryGrid from "@/components/GalleryGrid";
import type { GalleryCategory, GalleryPhoto } from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Lawn Care Gallery | Mangrove Lawn Care Jacksonville FL",
  description:
    "See the results Mangrove Lawn Care delivers for Jacksonville homeowners. Browse our lawn care photo gallery.",
  openGraph: {
    title: "Lawn Care Gallery | Mangrove Lawn Care Jacksonville FL",
    description:
      "See the results Mangrove Lawn Care delivers for Jacksonville homeowners.",
  },
};

/* Category mapping — null means "All only" (no specific filter) */
const categoryMap: Record<string, GalleryCategory> = {
  // Lawn Mowing — freshly mowed lawns, clean edging, mow lines
  "551354867_122145605198813364_8200476976717869148_n.jpg": "Lawn Mowing",
  "579680180_122150939282813364_171760724997158231_n.jpg": "Lawn Mowing",
  "601479383_122155033532813364_8571075959163200626_n.jpg": "Lawn Mowing",
  "603041374_122155033598813364_6667557086420651834_n.jpg": "Lawn Mowing",
  "603856790_122155558436813364_2521576013533013309_n.jpg": "Lawn Mowing",
  "605121543_122155460756813364_574793769256484288_n.jpg": "Lawn Mowing",
  "611183040_122156787716813364_3378616182010680776_n.jpg": "Lawn Mowing",
  "611238740_122156707802813364_43058194579447723_n.jpg": "Lawn Mowing",
  "618022792_122157774080813364_682682378710802066_n.jpg": "Lawn Mowing",
  "623786306_122158736732813364_4140782463402283624_n.jpg": "Lawn Mowing",
  "640410394_17866103811584377_3020803320362143400_n.jpg": "Lawn Mowing",
  "641181665_17866103820584377_3295983278069066478_n.jpg": "Lawn Mowing",
  "lawn_gallery10.jpeg": "Lawn Mowing",
  "lawn_gallery11.png": "Lawn Mowing",
  "lawn_gallery12.jpeg": "Lawn Mowing",
  "lawn_gallery13.jpeg": "Lawn Mowing",
  "lawn_gallery14.jpeg": "Lawn Mowing",

  // Shrubs & Hedges — hedge trimming, shaped shrubs, boxwoods
  "551382537_122145606110813364_3248806646172863167_n.jpg": "Shrubs & Hedges",
  "552888823_122145606464813364_9210274602584555502_n.jpg": "Shrubs & Hedges",
  "586158204_122151811484813364_5110169826311509405_n.jpg": "Shrubs & Hedges",
  "586297474_122151811514813364_3131770740286436774_n.jpg": "Shrubs & Hedges",
  "lawn_gallery1.png": "Shrubs & Hedges",
  "lawn_gallery6.png": "Shrubs & Hedges",
  "lawn_gallery7.png": "Shrubs & Hedges",
  "lawn_gallery8.jpeg": "Shrubs & Hedges",
  "lawn_gallery15.jpeg": "Shrubs & Hedges",

  // Mulching — fresh mulch application, mulch rings
  "604877457_122156142290813364_7557052745560944232_n.jpg": "Mulching",
  "605904696_122156142242813364_7447782379553128760_n.jpg": "Mulching",
  "lawn_gallery2.png": "Mulching",
  "lawn_gallery3.png": "Mulching",
  "lawn_gallery5.png": "Mulching",
  "tree-trimming copy.jpeg": "Mulching",

  // Landscaping & Beds — planting beds, rock/stone, landscape design
  "553790281_122145606446813364_6347760948194781855_n.jpg": "Landscaping & Beds",
  "642497226_17866258428584377_6620252600738237372_n.jpg": "Landscaping & Beds",
  "Screenshot 2026-03-13 at 5.38.11 PM.png": "Landscaping & Beds",
  "Screenshot 2026-03-13 at 5.38.18 PM.png": "Landscaping & Beds",
  "Screenshot 2026-03-13 at 5.39.50 PM.png": "Landscaping & Beds",

  // All only — doesn't clearly fit a specific category
  "604534303_122155849184813364_67047708145723371_n.jpg": null,
  "605664822_122156292788813364_9055083956354490192_n.jpg": null,
  "607692932_122156292722813364_9190629053183440278_n.jpg": null,
  "624544491_122158814600813364_3752004700889406877_n.jpg": null,
  "625091757_122158814594813364_8886346229310084474_n.jpg": null,
  "634363018_17864411427584377_5238400742585462716_n.jpg": null,
  "640242015_122161095482813364_7471007148393653414_n.jpg": null,
  "641130763_122161095410813364_3059119192937031637_n.jpg": null,
  "641625752_122161095404813364_7142840818561380720_n.jpg": null,
};

export default function OurWorkPage() {
  const photosDir = path.join(process.cwd(), "public/photos/gallery");
  const files = fs.existsSync(photosDir)
    ? fs
        .readdirSync(photosDir)
        .filter((f) =>
          [".jpg", ".jpeg", ".png", ".webp"].includes(
            path.extname(f).toLowerCase()
          )
        )
        .sort()
    : [];

  const photos: GalleryPhoto[] = files.map((file) => ({
    file,
    category: file in categoryMap ? categoryMap[file] : null,
  }));

  return (
    <main>
      {/* Hero */}
      <section className="bg-forest py-20">
        <div className="mx-auto max-w-4xl px-4 text-center text-white lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">
            See Our Work Across Jacksonville
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
            Every yard we touch gets the same level of care and attention to detail.
          </p>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="bg-white pt-10 pb-20">
        <div className="mx-auto max-w-7xl px-2 lg:px-4">
          {files.length > 0 ? (
            <GalleryGrid photos={photos} />
          ) : (
            <div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="flex h-64 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "#E8F0E8" }}
                  >
                    <svg
                      className="h-16 w-16 text-forest/30"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </div>
                ))}
              </div>
              {process.env.NODE_ENV === "development" && (
                <p className="mt-6 text-center text-sm text-dark/40">
                  Add photos to /public/photos/gallery/ to populate this gallery
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24" style={{ borderBottom: "4px solid rgba(255,255,255,0.15)" }}>
        <div className="absolute inset-0 bg-cover" style={{ backgroundImage: "url('/photos/hero/cta-bg.jpg')", backgroundPosition: "center bottom" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(27, 67, 50, 0.70)" }} />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Your Lawn Deserves Consistent Care
          </h2>
          <p className="mt-3 text-lg text-white/80">
            We provide reliable lawn care for Jacksonville homeowners who want clean cuts, sharp edges, and a yard that always looks maintained.
          </p>
          <div className="mt-8">
            <CTAButton variant="white">
              Get a Free Estimate
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
