import BuildByRwanda from "@/components/BuildByRwanda";
import DiscoverSection from "@/components/DiscoverSection";
import FeatureProductSection from "@/components/FeatureProductSection";
import Footer from "@/components/Footer";
import GovrtSupport from "@/components/GovrtSupport";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import RealImpact from "@/components/RealImpact";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <GovrtSupport />
      <BuildByRwanda />
      <DiscoverSection />
      <FeatureProductSection />
      <RealImpact />
    </div>
  );
};

export default page;
