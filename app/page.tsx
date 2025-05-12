import Bracelets from "@/components/layout/Bracelets";
import Earrings from "@/components/layout/Earrings";
import Hero from "@/components/layout/Hero";
import Latest from "@/components/layout/Latest";
import Necklaces from "@/components/layout/Necklaces";
import Popular from "@/components/layout/Popular";
import Rings from "@/components/layout/Rings";

export default function Home() {
  return (
    <>
      <Hero />
      <Popular />
      <Latest />
      <Rings />
      <Necklaces />
      <Bracelets />
      <Earrings />
    </>
  );
}
