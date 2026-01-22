import React from "react";

function HeroSection() {
  return (
    <div
      className=" relative bg-cover bg-center h-screen font-poppins"
      style={{ backgroundImage: "url('/banner.png') " }}
    >
      {/* The Blur Overlay */}
      <div className="absolute inset-0 bg-primary/80 "></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-5xl mx-auto text-center text-accent px-4  space-y-4">
        <h1 className="text-secondary text-6xl font-bold mx-30 ">
          Made in Rwanda Powered by Our People{" "}
        </h1>
        <p className="text-center text-white  text-xl">
          The official digital marketplace showcasing authentic Rwandan
          products—empowering local producers and connecting them to national
          and global markets, with support from the Ministry of Trade & Industry
          (MINICOM)
        </p>

        <div className="space-x-5 text-primary ">
          <button className=" rounded-full font-semibold bg-accent p-2 px-3 text-xs ">
            Explore Rwandan Products
          </button>
          <button className=" rounded-full font-semibold bg-secondary p-2 px-4 text-xs ">
            List Your Product
          </button>
        </div>
        <p className="text-sm text-white">
          An initiative aligned with the Ministry of Trade & Industry (MINICOM)
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
