import { ExternalLink } from "lucide-react";
import { CreativeMedia } from "../data/creativeMedia";

export default function VideoEmbedGallery({ items }: { items: CreativeMedia[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item, index) => (
        <article key={item.title} className="overflow-hidden border border-base-900 bg-black/70">
          <div className="relative bg-base-950">
            {item.embedUrl ? (
              <iframe
                src={item.embedUrl}
                title={item.title}
                className="aspect-[9/16] w-full md:aspect-video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="grid aspect-video place-items-center p-8 text-center">
                <p className="mono-label">Open external video</p>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4 p-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mono-label mb-2">{String(index + 1).padStart(2, "0")} / {item.platform}</p>
              <h2 className="text-2xl font-semibold uppercase text-white md:text-4xl">{item.title}</h2>
            </div>
            <a href={item.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 border border-base-800 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-base-400 hover:border-white hover:text-white">
              Open Source <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
