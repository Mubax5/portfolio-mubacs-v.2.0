import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";

export interface GalleryMedia {
  src?: string;
  embedUrl?: string;
  title: string;
  eyebrow?: string;
  sourceUrl?: string;
  platform?: string;
  mediaType?: "image" | "video" | "pdf" | "external";
  fit?: "cover" | "contain";
  objectPosition?: string;
}

interface MediaLightboxProps {
  items: GalleryMedia[];
  activeIndex: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}

export default function MediaLightbox({ items, activeIndex, onClose, onChange }: MediaLightboxProps) {
  const item = activeIndex === null ? null : items[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onChange((activeIndex + 1) % items.length);
      if (event.key === "ArrowLeft") onChange((activeIndex - 1 + items.length) % items.length);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, items.length, onChange, onClose]);

  if (!item || activeIndex === null) return null;

  const prev = () => onChange((activeIndex - 1 + items.length) % items.length);
  const next = () => onChange((activeIndex + 1) % items.length);
  const isImagePreview = Boolean(item.src && (!item.mediaType || item.mediaType === "image"));

  const lightbox = (
    <div className="fixed inset-0 z-[90] bg-black/75 px-4 py-5 text-white backdrop-blur-md md:px-8 md:py-8" role="dialog" aria-modal="true" aria-label={item.title}>
      <button type="button" onClick={onClose} className="absolute right-4 top-4 z-30 grid h-11 w-11 place-items-center border border-white/20 bg-black/80 text-white transition-colors hover:border-white md:right-8 md:top-8" aria-label="Close preview">
        <X className="h-5 w-5" />
      </button>

      {items.length > 1 && (
        <>
          <button type="button" onClick={prev} className="absolute left-4 top-1/2 z-30 grid h-11 w-11 -translate-y-1/2 place-items-center border border-white/20 bg-black/80 text-white transition-colors hover:border-white md:left-8" aria-label="Previous media">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button type="button" onClick={next} className="absolute right-4 top-1/2 z-30 grid h-11 w-11 -translate-y-1/2 place-items-center border border-white/20 bg-black/80 text-white transition-colors hover:border-white md:right-8" aria-label="Next media">
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      <div className="mx-auto flex h-full max-w-[min(94vw,88rem)] flex-col justify-center gap-4">
        <div className={`relative mx-auto flex max-h-[calc(100vh-13rem)] min-h-0 items-center justify-center overflow-hidden ${isImagePreview ? "w-fit max-w-full" : "w-full border border-white/10 bg-base-950"}`}>
          {item.embedUrl ? (
            <iframe
              src={item.embedUrl}
              title={item.title}
              className="h-[calc(100vh-14rem)] w-full max-w-5xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : item.src && item.mediaType === "pdf" ? (
            <iframe src={item.src} title={item.title} className="h-[calc(100vh-14rem)] w-full max-w-5xl" />
          ) : item.src ? (
            <img src={item.src} alt={item.title} className="block h-auto max-h-[calc(100vh-14rem)] max-w-[min(92vw,88rem)] object-contain shadow-[0_28px_120px_rgba(0,0,0,0.55)]" />
          ) : (
            <div className="grid min-h-[52vh] w-full place-items-center p-8 text-center">
              <div>
                <p className="mono-label mb-4 text-base-500">{item.mediaType === "video" ? "Video Source" : "External Source"}</p>
                <h2 className="text-3xl font-semibold uppercase text-white md:text-6xl">{item.title}</h2>
                <p className="mt-4 text-base-400">{item.platform ?? "External media"}</p>
              </div>
            </div>
          )}
          {item.mediaType === "video" && (
            <div className="absolute left-4 top-4 border border-white/20 bg-black/70 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white">
              Video / Open Source
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            {item.eyebrow && <p className="mono-label mb-2 text-base-500">{item.eyebrow}</p>}
            <h2 className="text-xl font-semibold uppercase text-white md:text-3xl">{item.title}</h2>
            {item.platform && <p className="mt-1 text-sm text-base-500">{item.platform}</p>}
          </div>
          {item.sourceUrl && (
            <a href={item.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 border border-white/20 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-base-200 transition-colors hover:border-white hover:text-white">
              Open Source <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return typeof document !== "undefined" ? createPortal(lightbox, document.body) : lightbox;
}
