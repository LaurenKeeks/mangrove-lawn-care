"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

export type GalleryFilter = "All" | "Lawn Mowing" | "Landscaping & Beds" | "Mulching" | "Shrubs & Hedges";
export type GalleryCategory = GalleryFilter | null;

export interface GalleryPhoto {
  file: string;
  category: GalleryCategory;
}

const FILTERS: GalleryFilter[] = [
  "All",
  "Lawn Mowing",
  "Landscaping & Beds",
  "Mulching",
  "Shrubs & Hedges",
];

const PAGE_SIZE = 12;

export default function GalleryGrid({ photos }: { photos: GalleryPhoto[] }) {
  const [active, setActive] = useState<GalleryFilter>("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      active === "All"
        ? photos
        : photos.filter((p) => p.category === active),
    [active, photos]
  );

  const visible = filtered.slice(0, visibleCount);

  const images = filtered.map((p) => ({
    src: `/photos/gallery/${p.file}`,
    alt: p.file.replace(/[-_]/g, " ").replace(/\.[^.]+$/, ""),
  }));

  const handleFilter = (cat: GalleryFilter) => {
    setActive(cat);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <>
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {FILTERS.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className="rounded-full px-5 py-2 text-sm font-semibold transition-colors cursor-pointer"
            style={
              active === cat
                ? { backgroundColor: "#1B4D2E", color: "#ffffff" }
                : { backgroundColor: "#f0f0f0", color: "#333333" }
            }
            onMouseEnter={(e) => {
              if (active !== cat) {
                e.currentTarget.style.backgroundColor = "#e0e0e0";
              }
            }}
            onMouseLeave={(e) => {
              if (active !== cat) {
                e.currentTarget.style.backgroundColor = "#f0f0f0";
              }
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Photo grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "30px" }}>
        {visible.map((photo, i) => (
          <button
            key={photo.file}
            onClick={() => setLightboxIndex(i)}
            className="group relative overflow-hidden rounded-lg cursor-pointer"
            style={{ aspectRatio: "3/4" }}
          >
            <Image
              src={`/photos/gallery/${photo.file}`}
              alt={photo.file.replace(/[-_]/g, " ").replace(/\.[^.]+$/, "")}
              width={600}
              height={800}
              className="h-full w-full object-cover object-center transition-all duration-300 ease-in-out group-hover:scale-[1.03] group-hover:brightness-110"
            />
          </button>
        ))}
      </div>

      {/* Load More */}
      {visibleCount < filtered.length && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="rounded-full border-2 px-8 py-3 text-base font-semibold transition-colors cursor-pointer"
            style={{ borderColor: "#1B4D2E", color: "#1B4D2E", backgroundColor: "transparent" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1B4D2E";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#1B4D2E";
            }}
          >
            Load More
          </button>
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((prev) =>
              prev === null ? 0 : (prev - 1 + images.length) % images.length
            )
          }
          onNext={() =>
            setLightboxIndex((prev) =>
              prev === null ? 0 : (prev + 1) % images.length
            )
          }
        />
      )}
    </>
  );
}
