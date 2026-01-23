import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen font-poppins"
      style={{ backgroundImage: "url('/banner.png')" }}
    >
      <div className="absolute inset-0 bg-primary/80" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-5xl mx-auto text-center text-accent px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-7">
        <h1 className="text-secondary md:mx-30 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Made in Rwanda Powered by Our People
        </h1>

        <p className="text-white text-center  text-base sm:text-lg md:text-xl max-w-5xl font-thin leading-relaxed">
          The official digital marketplace showcasing authentic Rwandan
          products—empowering local producers and connecting them to national
          and global markets, with support from the Ministry of Trade & Industry
          (MINICOM)
        </p>

        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 text-primary">
            <button className="rounded-full font-semibold bg-accent px-6 py-3 text-xs sm:text-sm hover:bg-accent/90 transition-colors duration-300">
              Explore Rwandan Products
            </button>
            <button className="rounded-full font-semibold bg-secondary px-6 py-3 text-xs sm:text-sm hover:bg-secondary/90 transition-colors duration-300">
              List Your Product
            </button>
          </div>

          <p className="text-xs sm:text-sm text-white">
            An initiative aligned with the Ministry of Trade & Industry
            (MINICOM)
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
