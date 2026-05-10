import { Link, useParams } from "react-router-dom";
import { creativeCategories } from "../data/creativeCategories";
import CreativeOrganizationIndex from "../components/CreativeOrganizationIndex";
import FooterContact from "../components/FooterContact";

export default function CreativeCategoryPage() {
  const { category } = useParams();
  const cat = creativeCategories.find((c) => c.slug === category);

  return (
    <main className="relative z-10 pt-28 md:pt-32">
      <section className="px-5 pb-14 md:px-12 md:pb-20">
        <Link to="/porto-visual" className="mono-label mb-6 block text-base-600 hover:text-white">Back / Visual Creative</Link>
        <h1 className="text-hero break-words">{cat?.title ?? category?.toUpperCase()}</h1>
        <p className="mt-6 max-w-2xl text-lg text-base-300">{cat?.description}</p>
      </section>
      <CreativeOrganizationIndex category={category ?? ""} />
      <FooterContact />
    </main>
  );
}
