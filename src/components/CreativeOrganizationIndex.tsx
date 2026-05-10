import { Link } from "react-router-dom";
import { creativeOrganizations } from "../data/creativeOrganizations";

export default function CreativeOrganizationIndex({ category }: { category: string }) {
  const orgs = creativeOrganizations.filter((o) => o.category === category);
  return (
    <section className="relative z-10 px-5 py-16 md:px-12 md:py-24">
      <div className="space-y-0">
        {orgs.map((org, i) => (
          <Link key={org.slug} to={`/porto-visual/${category}/${org.slug}`} className="group grid gap-4 border-b border-base-900 py-7 transition-colors hover:border-base-600 md:grid-cols-[50px_1fr_200px] md:py-8" data-cursor-label="ARCHIVE">
            <span className="font-mono text-[10px] text-base-600">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="break-words text-3xl font-semibold uppercase text-base-200 group-hover:text-white md:text-6xl">{org.name}</h3>
              <p className="mt-3 max-w-xl text-base-500">{org.description}</p>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-base-600 md:text-right">
              <p>{org.year}</p>
              <p>{org.works.length} works</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
