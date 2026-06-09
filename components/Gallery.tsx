"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryPhoto } from "@/lib/photos";

interface GalleryProps {
  photos: GalleryPhoto[];
}

export function Gallery({ photos }: GalleryProps) {
  const [idx, setIdx] = useState<number | null>(null);

  const close = useCallback(() => setIdx(null), []);
  const prev = useCallback(
    () => setIdx((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null)),
    [photos.length]
  );
  const next = useCallback(
    () => setIdx((i) => (i !== null ? (i + 1) % photos.length : null)),
    [photos.length]
  );

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = idx !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [idx]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            onClick={() => setIdx(i)}
            className="relative aspect-[4/3] rounded-xl overflow-hidden group border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            aria-label={`Открыть фото: ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
          </button>
        ))}
      </div>

      {idx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 z-10 text-white bg-white/10 hover:bg-white/25 rounded-full p-2.5 transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Counter */}
          <span className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm tabular-nums pointer-events-none">
            {idx + 1} / {photos.length}
          </span>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition-colors"
            aria-label="Предыдущее фото"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="relative"
            style={{ width: "min(90vw, 1200px)", height: "min(82vh, 880px)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[idx].src}
              alt={photos[idx].alt}
              fill
              className="object-contain"
              sizes="min(90vw, 1200px)"
              quality={90}
              priority
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition-colors"
            aria-label="Следующее фото"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  );
}
