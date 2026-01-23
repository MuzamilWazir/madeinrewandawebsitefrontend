import BuildByRwanda from "@/components/BuildByRwanda";
import Footer from "@/components/Footer";
import GovrtSupport from "@/components/GovrtSupport";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <GovrtSupport />
      <BuildByRwanda/>
      <Footer />
    </div>
  );
};

export default page;
