import { Link, useParams } from "react-router-dom";
import { creativeOrganizations } from "../data/creativeOrganizations";
import { creativeCategories } from "../data/creativeCategories";
import FooterContact from "../components/FooterContact";

export default function CreativeOrganizationPage() {
  const { category, organizationSlug } = useParams();
  const org = creativeOrganizations.find((o) => o.slug === organizationSlug);
  const cat = creativeCategories.find((c) => c.slug === category);

  return (
    <main className="relative z-10 px-5 pt-28 md:px-12 md:pt-32">
      <section className="pb-14 md:pb-20">
        <Link to={`/porto-visual/${category}`} className="mono-label mb-6 block text-base-600 hover:text-white">Back / {cat?.title ?? category}</Link>
        <h1 className="text-hero break-words">{org?.name ?? "Organization"}</h1>
        <div className="mt-8 grid gap-6 border-y border-base-900 py-8 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          <div><p className="mono-label mb-2">Category</p><p className="break-words">{cat?.title}</p></div>
          <div><p className="mono-label mb-2">Role</p><p className="break-words">{org?.role}</p></div>
          <div><p className="mono-label mb-2">Year</p><p>{org?.year}</p></div>
          <div><p className="mono-label mb-2">Works</p><p>{org?.works.length ?? 0} pieces</p></div>
        </div>
      </section>

      {org?.visualDirection && (
        <section className="grid gap-6 border-t border-base-900 py-12 md:grid-cols-[0.3fr_1fr] md:gap-8 md:py-16">
          <h2 className="mono-label">Visual Direction</h2>
          <p className="max-w-3xl text-xl leading-snug text-base-200 md:text-2xl">{org.visualDirection}</p>
        </section>
      )}

      <section className="border-t border-base-900 py-12 md:py-16">
        <h2 className="mono-label mb-2">Description</h2>
        <p className="mt-6 max-w-3xl text-lg text-base-200 md:text-xl">{org?.description}</p>
      </section>

      {org && org.works.length > 0 && (
        <section className="border-t border-base-900 py-12 md:py-16">
          <h2 className="mono-label mb-8">Works Archive</h2>
          <div className="grid gap-5 sm:grid-cols-2 md:gap-8">
            {org.works.map((work, i) => (
              <div key={i} className="group border border-base-900 p-4 transition-colors hover:border-base-600 md:p-6">
                <div className="mb-4 flex aspect-[4/3] items-center justify-center bg-base-950">
                  <p className="mono-label text-base-700">Image placeholder</p>
                </div>
                <h3 className="text-lg font-semibold text-white">{work.title}</h3>
                {work.description && <p className="mt-2 text-sm text-base-400">{work.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {org?.tools && (
        <section className="border-t border-base-900 py-12 md:py-16">
          <h2 className="mono-label mb-6">Tools</h2>
          <div className="flex flex-wrap gap-3">{org.tools.map((tool) => <span key={tool} className="border border-base-800 px-4 py-2 font-mono text-xs text-base-300">{tool}</span>)}</div>
        </section>
      )}

      <FooterContact />
    </main>
  );
}
