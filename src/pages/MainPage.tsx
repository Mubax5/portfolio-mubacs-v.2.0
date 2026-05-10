import HeroStage from "../components/HeroStage";
import ManifestoScene from "../components/ManifestoScene";
import FeaturedProjectSlider from "../components/FeaturedProjectSlider";
import InfiniteWarpGallery from "../components/InfiniteWarpGallery";
import CapabilityKineticList from "../components/CapabilityKineticList";
import EditorialGallery from "../components/EditorialGallery";
import FooterContact from "../components/FooterContact";
import ParallaxSection from "../components/ParallaxSection";

export default function MainPage({ heroRevealStarted = true }: { heroRevealStarted?: boolean }) {
  return (
    <main>
      <ParallaxSection speed={40} fade={false}>
        <HeroStage reveal={heroRevealStarted} />
      </ParallaxSection>
      <ParallaxSection speed={85}>
        <ManifestoScene />
      </ParallaxSection>
      <FeaturedProjectSlider />
      <ParallaxSection speed={38}>
        <InfiniteWarpGallery />
      </ParallaxSection>
      <ParallaxSection speed={34}>
        <CapabilityKineticList />
      </ParallaxSection>
      <ParallaxSection speed={50} fade={false}>
        <EditorialGallery />
      </ParallaxSection>
      <ParallaxSection speed={60}>
        <FooterContact />
      </ParallaxSection>
    </main>
  );
}
