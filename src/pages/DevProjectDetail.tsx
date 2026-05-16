import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { devProjects } from "../data/devProjects";
import MediaLightbox, { GalleryMedia } from "../components/MediaLightbox";

export default function DevProjectDetail() {
  const { slug } = useParams();
  const project = devProjects.find((p) => p.slug === slug) ?? devProjects[0];
  const next = devProjects[(devProjects.findIndex((p) => p.slug === project.slug) + 1) % devProjects.length];
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const galleryItems: GalleryMedia[] = project.gallery.map((image) => ({
    src: image.src,
    title: image.title,
    eyebrow: image.type ? `${project.title} / ${image.type}` : project.title,
    sourceUrl: project.projectUrl,
    platform: project.liveUrl ? "Live website" : "GitHub repository",
  }));

  return (
    <main className="relative z-10 px-5 pt-28 md:px-12 md:pt-32">
      <section className="pb-14 md:min-h-screen md:pb-20">
        <Link to="/porto-dev" className="mono-label mb-6 block text-base-600 hover:text-white">Back / Porto Dev</Link>
        <p className="mono-label mb-4">{String(project.id).padStart(2, "0")} / {project.type}</p>
        <h1 className="text-hero break-words">{project.title}</h1>

        <div className="mt-8 grid gap-6 border-y border-base-900 py-8 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          <div><p className="mono-label mb-2">Year</p><p>{project.year}</p></div>
          <div><p className="mono-label mb-2">Role</p><p className="break-words">{project.role}</p></div>
          <div className="sm:col-span-2"><p className="mono-label mb-2">Stack</p><p className="break-words">{project.stack.join(" / ")}</p></div>
        </div>

        <button type="button" onClick={() => setActiveImage(0)} className="group mt-10 block w-full overflow-hidden border border-base-800 bg-base-950 text-left md:mt-12" data-cursor-label="PREVIEW">
          <div className="relative">
            <img src={project.thumbnail} alt={`${project.title} preview`} className="aspect-[1900/935] w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mono-label mb-2 text-white/55">Thumbnail / {project.gallery[0]?.title}</p>
                <h2 className="text-2xl font-semibold uppercase text-white md:text-5xl">{project.type}</h2>
              </div>
              <p className="w-fit border border-white/20 bg-black/60 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-md">Open preview</p>
            </div>
          </div>
        </button>
      </section>

      {[
        ["Overview", project.overview],
        ["Problem", project.problem],
        ["Solution", project.solution],
        ["Role", project.role],
        ["Tech Stack", project.stack.join(" / ")],
        ["Flow / Interaction", project.flow],
      ].map(([title, body]) => (
        <section key={title} className="grid gap-6 border-t border-base-900 py-12 md:grid-cols-[0.3fr_1fr] md:gap-8 md:py-16">
          <h2 className="mono-label">{title}</h2>
          <p className="max-w-3xl text-xl leading-snug text-base-200 md:text-2xl">{body}</p>
        </section>
      ))}

      <section className="border-t border-base-900 py-12 md:py-16">
        <h2 className="mono-label mb-8">Key Features</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {project.features.map((feature) => (
            <p key={feature} className="border border-base-900 bg-black/35 p-4 text-base-300">{feature}</p>
          ))}
        </div>
      </section>

      <section className="border-t border-base-900 py-12 md:py-16">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mono-label mb-2">Preview Gallery</p>
            <h2 className="text-section">Screens</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-base-500">Selected screenshots only, focused on the parts that explain the app and overall product flow.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {project.gallery.map((image, index) => (
            <button key={image.src} type="button" onClick={() => setActiveImage(index)} className="group overflow-hidden border border-base-900 bg-base-950 text-left transition-colors hover:border-base-500" data-cursor-label="OPEN">
              <div className="relative overflow-hidden">
                <img src={image.src} alt={`${project.title} ${image.title}`} loading="lazy" className="aspect-[1900/935] w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
                <div className="absolute left-3 top-3 border border-white/15 bg-black/65 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/70 backdrop-blur-md">{String(index + 1).padStart(2, "0")}</div>
              </div>
              <div className="flex items-center justify-between gap-3 p-4">
                <div>
                  <p className="text-sm font-semibold uppercase text-base-100">{image.title}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-base-600">{image.type ?? "screen"}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-base-600 transition-colors group-hover:text-white" />
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-5 border-t border-base-900 py-12 md:flex-row md:items-center md:justify-between md:py-16">
        <div className="flex flex-wrap gap-3">
          <a href={project.projectUrl} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 border border-base-700 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-base-300 hover:border-white hover:text-white">
            {project.ctaLabel} <ExternalLink className="h-3.5 w-3.5" />
          </a>
          {project.liveUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 border border-base-900 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-base-500 hover:border-base-500 hover:text-white">
              GitHub Repo <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
        <Link to={`/porto-dev/${next.slug}`} className="mono-label max-w-full break-words text-base-300 hover:text-white">Next Project / {next.title}</Link>
      </section>

      <MediaLightbox items={galleryItems} activeIndex={activeImage} onClose={() => setActiveImage(null)} onChange={setActiveImage} />
    </main>
  );
}
