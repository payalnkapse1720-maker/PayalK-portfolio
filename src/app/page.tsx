import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-20 bg-transparent min-h-[calc(100vh-140px)] flex-1">
        {/* Blank starter: Sections will be built one per request */}
      </main>
      <Footer />
    </>
  );
}
