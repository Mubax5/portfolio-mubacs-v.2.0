import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";
import MediaLightbox, { GalleryMedia } from "./MediaLightbox";

interface MasonryGalleryProps {
  items: GalleryMedia[];
  sourceLabel?: string;
}

export default function MasonryGallery({ items, sourceLabel }: MasonryGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5">
        {items.map((item, index) => (
          <button
            key={`${item.title}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group mb-4 block w-full break-inside-avoid overflow-hidden border border-base-900 bg-base-950/80 text-left transition-[border-color,transform,background-color] duration-500 hover:-translate-y-1 hover:border-base-500 hover:bg-base-900"
            data-cursor-label={item.mediaType === "video" ? "PLAY" : "VIEW"}
          >
            <div className="relative overflow-hidden bg-base-900">
              {item.src && item.mediaType === "pdf" ? (
                <div className="h-[28rem] overflow-hidden bg-white">
                  <iframe src={item.src} title={item.title} className="h-full w-full" />
                </div>
              ) : item.src ? (
                <div className={item.fit === "contain" ? "grid aspect-[4/3] place-items-center p-4" : ""}>
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className={`${item.fit === "contain" ? "max-h-full w-full object-contain" : "w-full object-cover"} transition-transform duration-700 group-hover:scale-[1.04]`}
                    style={{ objectPosition: item.objectPosition }}
                  />
                </div>
              ) : (
                <div className="grid aspect-[4/5] place-items-center p-6 text-center">
                  <Play className="mb-4 h-8 w-8 text-base-500" />
                  <p className="mono-label text-base-500">{sourceLabel ?? item.platform ?? "Source"}</p>
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <p className="text-sm font-semibold uppercase text-white">{item.title}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">{item.eyebrow ?? item.platform ?? sourceLabel}</p>
              </div>
              {item.mediaType === "video" && (
                <div className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-black/65 text-white backdrop-blur-md">
                  <Play className="h-4 w-4 fill-current" />
                </div>
              )}
            </div>
            <div className="flex items-start justify-between gap-3 p-4">
              <div>
                <p className="text-sm font-semibold uppercase text-base-100">{item.title}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-base-600">{item.eyebrow ?? item.platform ?? sourceLabel}</p>
              </div>
              {item.sourceUrl && <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-base-600 transition-colors group-hover:text-white" />}
            </div>
          </button>
        ))}
      </div>

      <MediaLightbox items={items} activeIndex={activeIndex} onClose={() => setActiveIndex(null)} onChange={setActiveIndex} />
    </>
  );
}
