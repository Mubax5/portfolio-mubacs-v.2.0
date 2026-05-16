import { Link } from "react-router-dom";
import { CreativeDesignGroup } from "../data/creativeMedia";

export default function DesignGroupIndex({ groups }: { groups: CreativeDesignGroup[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {groups.map((group, index) => (
        <Link key={group.slug} to={`/porto-visual/design/${group.slug}`} className="group overflow-hidden border border-base-900 bg-black/70 transition-colors hover:border-base-500" data-cursor-label="OPEN">
          <div className="grid aspect-[16/10] place-items-center overflow-hidden bg-base-950 p-3">
            {group.thumbnail?.src && (
              <img src={group.thumbnail.src} alt={`${group.title} thumbnail`} loading="lazy" className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.025]" />
            )}
          </div>
          <div className="p-4 md:p-5">
            <p className="mono-label mb-3">{String(index + 1).padStart(2, "0")} / {group.period}</p>
            <h2 className="break-words text-2xl font-semibold uppercase leading-none text-white md:text-4xl">{group.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-base-500">{group.description}</p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-base-600">{group.items.length} design / {group.scrollItems.length} scroll file</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
