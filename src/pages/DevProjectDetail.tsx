import { Link, useParams } from "react-router-dom";
import { devProjects } from "../data/devProjects";
import InfiniteWarpGallery from "../components/InfiniteWarpGallery";

export default function DevProjectDetail() {
  const { slug } = useParams();
  const project = devProjects.find((p) => p.slug === slug) ?? devProjects[0];
  const next = devProjects[(devProjects.findIndex((p) => p.slug === project.slug) + 1) % devProjects.length];

  return (
    <main className="relative z-10 px-5 pt-28 md:px-12 md:pt-32">
      <section className="pb-14 md:min-h-screen md:pb-20">
        <p className="mono-label mb-4">{String(project.id).padStart(2, "0")} / {project.type}</p>
        <h1 className="text-hero break-words">{project.title}</h1>
        <div className="mt-8 grid gap-6 border-y border-base-900 py-8 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          <div><p className="mono-label mb-2">Year</p><p>{project.year}</p></div>
          <div><p className="mono-label mb-2">Role</p><p className="break-words">{project.role}</p></div>
          <div className="sm:col-span-2"><p className="mono-label mb-2">Stack</p><p className="break-words">{project.stack.join(" / ")}</p></div>
        </div>
        <div className="mt-10 flex aspect-[4/3] items-center justify-center border border-base-800 bg-base-950 md:mt-12 md:aspect-[16/8]"><p className="mono-label">Animated warped visual placeholder</p></div>
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
        <div className="grid gap-3 md:grid-cols-3">{project.features.map((feature) => <p key={feature} className="border border-base-900 p-4 text-base-300">{feature}</p>)}</div>
      </section>

      <InfiniteWarpGallery />

      <section className="flex flex-col gap-5 border-t border-base-900 py-12 md:flex-row md:items-center md:justify-between md:py-16">
        <a href={project.projectUrl} className="mono-label w-fit border border-base-700 px-6 py-3 text-base-300 hover:border-white hover:text-white">Visit Project</a>
        <Link to={`/porto-dev/${next.slug}`} className="mono-label max-w-full break-words text-base-300 hover:text-white">Next Project / {next.title}</Link>
      </section>
    </main>
  );
}
