import { Link, useParams } from "react-router-dom";
import DesignScrollGallery from "../components/DesignScrollGallery";
import FooterContact from "../components/FooterContact";
import { getCreativeCollection } from "../data/creativeMedia";

export default function CreativeOrganizationPage() {
  const { category, organizationSlug } = useParams();
  const collection = getCreativeCollection(category);
  const group = collection?.groups?.find((item) => item.slug === organizationSlug);

  if (!collection || !group) {
    return (
      <main className="relative z-10 px-5 pt-28 md:px-12 md:pt-32">
        <Link to={`/porto-visual/${category ?? ""}`} className="mono-label mb-6 block text-base-600 hover:text-white">Back / Visual Creative</Link>
        <h1 className="text-hero break-words">Not Found</h1>
        <p className="mt-6 max-w-2xl text-lg text-base-300">Design group not available.</p>
        <FooterContact />
      </main>
    );
  }

  return (
    <main className="relative z-10 pt-28 md:pt-32">
      <section className="px-5 pb-14 md:px-12 md:pb-20">
        <Link to={`/porto-visual/${collection.slug}`} className="mono-label mb-6 block text-base-600 hover:text-white">Back / {collection.title}</Link>
        <p className="mono-label mb-4">{group.period} / {group.items.length} design / {group.scrollItems.length} scroll file</p>
        <h1 className="text-hero break-words">{group.title}</h1>
        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-base-300 md:text-2xl">{group.description}</p>
      </section>

      <section className="px-5 pb-20 md:px-12 md:pb-28">
        <DesignScrollGallery groups={[group]} />
      </section>

      <FooterContact />
    </main>
  );
}
