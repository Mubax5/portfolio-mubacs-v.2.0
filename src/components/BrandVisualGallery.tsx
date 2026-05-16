import { useState } from "react";
import { ExternalLink } from "lucide-react";
import MediaLightbox, { GalleryMedia } from "./MediaLightbox";

export default function BrandVisualGallery({ items }: { items: GalleryMedia[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
        {items.map((item, index) => (
          <article key={`${item.title}-${index}`} className="mb-4 break-inside-avoid overflow-hidden border border-base-900 bg-base-950/80">
            {item.mediaType === "pdf" && item.src ? (
              <div className="h-[30rem] overflow-hidden bg-white" data-lenis-prevent>
                <iframe src={item.src} title={item.title} className="h-full w-full" />
              </div>
            ) : (
              <button type="button" onClick={() => setActiveIndex(index)} className="group block w-full p-5 text-left" data-cursor-label="VIEW">
                {item.src && (
                  <img src={item.src} alt={item.title} loading="lazy" className="mx-auto max-h-[21rem] w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]" />
                )}
              </button>
            )}
            <div className="flex items-start justify-between gap-3 border-t border-base-900 p-4">
              <button type="button" onClick={() => setActiveIndex(index)} className="text-left" data-cursor-label="PREVIEW">
                <p className="text-sm font-semibold uppercase text-base-100">{item.title}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-base-600">{item.eyebrow ?? item.platform}</p>
              </button>
              {item.sourceUrl && <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-base-600" />}
            </div>
          </article>
        ))}
      </div>
      <MediaLightbox items={items} activeIndex={activeIndex} onClose={() => setActiveIndex(null)} onChange={setActiveIndex} />
    </>
  );
}
