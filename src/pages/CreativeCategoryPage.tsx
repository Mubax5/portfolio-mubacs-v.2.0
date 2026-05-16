import { Link, useParams } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import FooterContact from "../components/FooterContact";
import BrandVisualGallery from "../components/BrandVisualGallery";
import DesignScrollGallery from "../components/DesignScrollGallery";
import DesignGroupIndex from "../components/DesignGroupIndex";
import MasonryGallery from "../components/MasonryGallery";
import { GalleryMedia } from "../components/MediaLightbox";
import VideoEmbedGallery from "../components/VideoEmbedGallery";
import { CreativeMedia, getCreativeCollection, INSTAGRAM_URL, PINTEREST_URL } from "../data/creativeMedia";

function toLightboxItems(items: CreativeMedia[]): GalleryMedia[] {
  return items.map((item) => ({
    src: item.src,
    embedUrl: item.embedUrl,
    title: item.title,
    eyebrow: item.organization ?? item.category,
    sourceUrl: item.sourceUrl,
    platform: item.platform,
    mediaType: item.mediaType,
    fit: item.fit,
    objectPosition: item.objectPosition,
  }));
}

export default function CreativeCategoryPage() {
  const { category } = useParams();
  const collection = getCreativeCollection(category);

  if (!collection) {
    return (
      <main className="relative z-10 px-5 pt-28 md:px-12 md:pt-32">
        <Link to="/porto-visual" className="mono-label mb-6 block text-base-600 hover:text-white">Back / Visual Creative</Link>
        <h1 className="text-hero break-words">Not Found</h1>
        <p className="mt-6 max-w-2xl text-lg text-base-300">Creative collection not available.</p>
        <FooterContact />
      </main>
    );
  }

  const lightboxItems = toLightboxItems(collection.items);

  return (
    <main className="relative z-10 pt-28 md:pt-32">
      <section className="px-5 pb-14 md:px-12 md:pb-20">
        <Link to="/porto-visual" className="mono-label mb-6 block text-base-600 hover:text-white">Back / Visual Creative</Link>
        <p className="mono-label mb-4">{collection.items.length} pieces / {collection.layout}</p>
        <h1 className="text-hero break-words">{collection.title}</h1>
        <div className="mt-8 flex flex-col gap-5 border-y border-base-900 py-7 md:flex-row md:items-end md:justify-between">
          <p className="max-w-2xl text-lg text-base-300">{collection.description}</p>
          <div className="flex flex-wrap gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-base-900 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-base-500 hover:border-base-500 hover:text-white">
              Instagram <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a href={PINTEREST_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-base-900 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-base-500 hover:border-base-500 hover:text-white">
              Pinterest <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-12 md:pb-28">
        {collection.layout === "design-scroll" ? (
          <DesignGroupIndex groups={collection.groups ?? []} />
        ) : collection.layout === "ui-scroll" ? (
          <DesignScrollGallery groups={collection.groups ?? []} />
        ) : collection.layout === "video" ? (
          <VideoEmbedGallery items={collection.items} />
        ) : collection.layout === "brand-grid" ? (
          <BrandVisualGallery items={lightboxItems} />
        ) : (
          <MasonryGallery items={lightboxItems} sourceLabel="Creative Archive" />
        )}
      </section>

      <FooterContact />
    </main>
  );
}
