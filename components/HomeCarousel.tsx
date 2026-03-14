"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Lightbox from "@/components/Lightbox";

function useVisibleCount() {
  const [count, setCount] = useState(4);
  useEffect(() => {
    function update() {
      if (window.innerWidth < 640) setCount(1);
      else if (window.innerWidth < 1024) setCount(2);
      else setCount(4);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return count;
}

export default function HomeCarousel({ images }: { images: string[] }) {
  const [offset, setOffset] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const visible = useVisibleCount();
  const gap = 30; // px
  const max = Math.max(0, images.length - visible);

  // Clamp offset when visible count changes
  useEffect(() => {
    setOffset((o) => Math.min(o, max));
  }, [max]);

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(max, o + 1));

  const lightboxImages = images.map((f) => ({
    src: `/photos/gallery/${f}`,
    alt: f.replace(/[-_]/g, " ").replace(/\.[^.]+$/, ""),
  }));

  return (
    <div className="relative">
      {/* Track */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            gap: `${gap}px`,
            transform: `translateX(calc(-${offset} * (${100 / visible}% + ${gap / visible}px)))`,
          }}
        >
          {images.map((file, i) => (
            <button
              key={file}
              className="flex-shrink-0 overflow-hidden rounded-xl cursor-pointer"
              style={{ width: `calc(${100 / visible}% - ${((visible - 1) * gap) / visible}px)` }}
              onClick={() => setLightboxIndex(i)}
            >
              <Image
                src={`/photos/gallery/${file}`}
                alt={file.replace(/[-_]/g, " ").replace(/\.[^.]+$/, "")}
                width={600}
                height={400}
                className="h-[380px] w-full object-cover object-center transition-all duration-300 ease-in-out hover:brightness-115 hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Left Arrow — overlapping */}
      {images.length > visible && (
        <button
          onClick={prev}
          disabled={offset === 0}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 transition-colors hover:bg-white disabled:opacity-30 cursor-pointer"
          style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
          aria-label="Previous"
        >
          <svg className="h-5 w-5 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Right Arrow — overlapping */}
      {images.length > visible && (
        <button
          onClick={next}
          disabled={offset === max}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 transition-colors hover:bg-white disabled:opacity-30 cursor-pointer"
          style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
          aria-label="Next"
        >
          <svg className="h-5 w-5 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i))}
          onNext={() => setLightboxIndex((i) => (i !== null && i < images.length - 1 ? i + 1 : i))}
        />
      )}
    </div>
  );
}
