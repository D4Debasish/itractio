import Creators from "@/components/Creators";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import FloatingSection from "@/components/FloatingSection";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <main className="items-center  ">
      <div className="items-center  flex flex-col">
        <Header />
        <Hero />
        <MainContent />
        <div className="bg-white/20 h-px w-full mt-20 mb-6"></div>
        <Creators />
        <div className="bg-white/20 h-px w-full mt-20 mb-6"></div>
        <Footer />
      </div>
      <FloatingSection />
    </main>
  );
}
