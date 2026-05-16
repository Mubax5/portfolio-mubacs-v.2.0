import { useState } from "react";
import { ExternalLink } from "lucide-react";
import MediaLightbox, { GalleryMedia } from "./MediaLightbox";
import { CreativeDesignGroup, CreativeMedia } from "../data/creativeMedia";

function toLightboxItems(groups: CreativeDesignGroup[]): GalleryMedia[] {
  return groups.flatMap((group) =>
    [...group.items, ...group.scrollItems].map((item) => ({
      src: item.src,
      embedUrl: item.embedUrl,
      title: item.title,
      eyebrow: `${group.title} / ${item.section ?? group.period}`,
      sourceUrl: item.sourceUrl,
      platform: item.platform,
      mediaType: item.mediaType,
      fit: item.fit,
      objectPosition: item.objectPosition,
    }))
  );
}

function shouldShowAsThumbnail(title: string) {
  return !/\bslide\s*(?:[2-9]|\d{2,})\b/i.test(title);
}

type ThumbnailItem = { item: CreativeMedia; index: number };
type ScrollItem = { item: CreativeMedia; index: number };

function sectionItems(items: ThumbnailItem[]) {
  const hasSections = items.some(({ item }) => item.section);
  const sections: { label: string; items: ThumbnailItem[] }[] = [];

  items.forEach((entry) => {
    const label = entry.item.section ?? (hasSections ? "Tupoksi Harian" : "");
    const last = sections[sections.length - 1];
    if (last?.label === label) {
      last.items.push(entry);
      return;
    }
    sections.push({ label, items: [entry] });
  });

  return sections;
}

export default function DesignScrollGallery({ groups }: { groups: CreativeDesignGroup[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const lightboxItems = toLightboxItems(groups);
  let offset = 0;

  return (
    <>
      <div className="space-y-20 md:space-y-28">
        {groups.map((group, groupIndex) => {
          const startIndex = offset;
          offset += group.items.length + group.scrollItems.length;
          const thumbnailItems = group.items
            .map((item, index) => ({ item, index }))
            .filter(({ item }) => shouldShowAsThumbnail(item.title));
          const itemSections = sectionItems(thumbnailItems);
          const scrollItems = group.scrollItems.map((item, index) => ({ item, index }));
          const hasSectionedScroll = scrollItems.some(({ item }) => item.section);

          const renderScrollFile = (items: ScrollItem[]) => (
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="mono-label">Scroll File</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-base-600">{items.length} part</p>
              </div>
              <div className="max-h-[78vh] overflow-y-auto border border-base-800 bg-base-950" data-lenis-prevent>
                {items.map(({ item, index }) => (
                  <button key={item.title} type="button" onClick={() => setActiveIndex(startIndex + group.items.length + index)} className="block w-full text-left" data-cursor-label="ZOOM">
                    {item.src && <img src={item.src} alt={item.title} loading="lazy" className="block w-full object-contain" />}
                  </button>
                ))}
              </div>
            </aside>
          );

          return (
            <section key={group.title} className="border-t border-base-900 pt-10 md:pt-12">
              <div className="mb-8 grid gap-5 md:grid-cols-[0.34fr_1fr] md:items-end">
                <div>
                  <p className="mono-label mb-3">{String(groupIndex + 1).padStart(2, "0")} / {group.period}</p>
                  <h2 className="break-words text-3xl font-semibold uppercase leading-none text-white md:text-5xl">{group.title}</h2>
                </div>
                <p className="max-w-2xl text-base leading-relaxed text-base-400">{group.description}</p>
              </div>

              <div className={`grid gap-5 ${group.scrollItems.length && !hasSectionedScroll ? "lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.72fr)]" : ""}`}>
                <div className="min-w-0">
                  {thumbnailItems.length ? (
                    <div className="space-y-10">
                      {itemSections.map((section) => {
                        const sectionScrollItems = hasSectionedScroll ? scrollItems.filter(({ item }) => item.section === section.label) : [];

                        return (
                          <div key={section.label || "default"}>
                            {section.label && (
                              <div className="mb-4 border-y border-base-900 bg-black/35 px-4 py-4">
                                <p className="mono-label mb-2 text-base-600">{section.label === "Tupoksi Harian" ? "Tupoksi Harian" : "Program Kerja"}</p>
                                <h3 className="break-words text-2xl font-semibold uppercase leading-none text-white md:text-4xl">{section.label}</h3>
                              </div>
                            )}
                            <div className={`grid gap-5 ${sectionScrollItems.length ? "lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.72fr)]" : ""}`}>
                              <div className="min-w-0">
                                <div className="columns-2 gap-3 sm:columns-3 lg:columns-4 2xl:columns-5">
                                  {section.items.map(({ item, index }) => (
                                    <button
                                      key={item.title}
                                      type="button"
                                      onClick={() => setActiveIndex(startIndex + index)}
                                      className="group mb-3 block w-full break-inside-avoid overflow-hidden border border-base-900 bg-base-950 text-left transition-colors hover:border-base-500"
                                      data-cursor-label="VIEW"
                                    >
                                      {item.src && (
                                        <div className={item.fit === "cover" ? "aspect-video overflow-hidden" : "p-2"}>
                                          <img
                                            src={item.src}
                                            alt={item.title}
                                            loading="lazy"
                                            className={`${item.fit === "cover" ? "h-full w-full object-cover" : "w-full object-contain"} transition-transform duration-700 group-hover:scale-[1.025]`}
                                            style={{ objectPosition: item.objectPosition }}
                                          />
                                        </div>
                                      )}
                                      <div className="flex items-start justify-between gap-3 p-3">
                                        <div>
                                          <p className="text-sm font-semibold uppercase text-base-100">{item.title}</p>
                                          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-base-600">{item.section ?? group.title}</p>
                                        </div>
                                        <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-base-600 transition-colors group-hover:text-white" />
                                      </div>
                                    </button>
                                  ))}
                                </div>
                              </div>
                              {sectionScrollItems.length > 0 && renderScrollFile(sectionScrollItems)}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="border border-base-900 bg-black/50 p-6 text-base-500">Asset belum ada di folder untuk bagian kiri.</div>
                  )}
                </div>

                {group.scrollItems.length > 0 && !hasSectionedScroll && renderScrollFile(scrollItems)}
              </div>
            </section>
          );
        })}
      </div>

      <MediaLightbox items={lightboxItems} activeIndex={activeIndex} onClose={() => setActiveIndex(null)} onChange={setActiveIndex} />
    </>
  );
}
