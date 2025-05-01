import Bracelets from "@/components/layout/Bracelets";
import Earrings from "@/components/layout/Earrings";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Latest from "@/components/layout/Latest";
import Navbar from "@/components/layout/Navbar";
import Necklaces from "@/components/layout/Necklaces";
import Popular from "@/components/layout/Popular";
import Rings from "@/components/layout/Rings";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-screen">
      <nav className="w-full sticky top-0 z-10">
        <Navbar />
      </nav>
      <main className="font-urbanist min-h-screen w-screen overflow-hidden flex flex-col space-y-10 lg:space-y-16 px-4 lg:px-12 items-start justify-start">
        <Hero />
        <Popular />
        <Latest />
        <Rings />
        <Necklaces />
        <Bracelets />
        <Earrings />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
