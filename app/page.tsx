import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <nav className="w-full">
        <Navbar />
      </nav>
      <main className="font-satoshi min-h-screen">
        <Hero />
      </main>
      <footer>footer</footer>
    </div>
  );
}
