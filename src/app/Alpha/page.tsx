import React from "react";
import Creators from "@/components/Creators";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import FloatingSection from "@/components/FloatingSection";
import Alphahero from "@/components/Alphahero";
import Narrative from "@/components/Narrative";
import Recomemded from "@/components/Recomemded";

const page = () => {
  return (
    <main className="items-center  ">
      <div className="items-center  flex flex-col">
        <Header />
        <Alphahero />
        <Narrative />
        <Recomemded />
        <div className="bg-white/20 h-px w-full mt-6 mb-6"></div>
        <Creators />
        <div className="bg-white/20 h-px w-full mt-20 mb-6"></div>
        <Footer />
      </div>
      <FloatingSection />
    </main>
  );
};

export default page;
