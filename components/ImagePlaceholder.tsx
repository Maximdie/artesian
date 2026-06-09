interface ImagePlaceholderProps {
  label?: string;
  className?: string;
  aspectRatio?: "square" | "video" | "wide" | "portrait";
}

export function ImagePlaceholder({
  label = "Фото",
  className = "",
  aspectRatio = "video",
}: ImagePlaceholderProps) {
  const aspects = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
    portrait: "aspect-[3/4]",
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-linear-to-br from-primary to-accent ${aspects[aspectRatio]} ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white/80 gap-2">
        <svg
          className="w-12 h-12 opacity-60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
          <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5" />
          <path d="m21 15-5-5L5 21" strokeWidth="1.5" />
        </svg>
        <span className="text-sm font-medium text-center px-4 opacity-80">{label}</span>
      </div>
    </div>
  );
}
