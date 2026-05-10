import { profile } from "../data/profile";
import MagneticLink from "./MagneticLink";

export default function FooterContact() {
  return (
    <footer className="relative z-10 flex min-h-screen flex-col justify-between px-5 py-12 pb-6 md:px-12 md:pt-32">
      <div>
        <p className="mono-label mb-6">07 / Contact</p>
        <h2 className="text-section mb-6">HAVE A SERIOUS BRIEF?<br/>SEND IT.</h2>
        <div className="flex flex-col gap-3 font-mono text-sm uppercase tracking-[0.1em] text-base-400 md:flex-row md:gap-10">
          <MagneticLink><a href={profile.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" data-cursor-label="OPEN">Instagram</a></MagneticLink>
          <MagneticLink><a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" data-cursor-label="OPEN">GitHub</a></MagneticLink>
          <MagneticLink><a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" data-cursor-label="OPEN">LinkedIn</a></MagneticLink>
          <MagneticLink><a href={profile.socials.pinterest} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" data-cursor-label="OPEN">Pinterest</a></MagneticLink>
        </div>
      </div>
      <div className="mt-20 border-t border-base-900 pt-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-base-600">c 2026 {profile.name} / {profile.alias}</p>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-base-600">Built with rhythm, code, and restraint.</p>
      </div>
    </footer>
  );
}
