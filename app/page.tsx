import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Latest from "@/components/layout/Latest";
import Navbar from "@/components/layout/Navbar";
import Popular from "@/components/layout/Popular";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-screen">
      <nav className="w-full sticky top-0 z-10">
        <Navbar />
      </nav>
      <main className="font-satoshi min-h-screen w-screen overflow-hidden flex flex-col space-y-5 lg:space-y-16 px-4 lg:px-12 items-start justify-start">
        <Hero />
        <Popular />
        <Latest />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
