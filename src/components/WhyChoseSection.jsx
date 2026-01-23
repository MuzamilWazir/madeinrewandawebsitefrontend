import React from "react";

const REASONS = [
  "Support local jobs and communities",
  "Preserve Rwandan culture and craftsmanship",
  "Strengthen the national economy",
  "Reduce reliance on imports",
  "Buy with confidence and purpose",
];

const WhyChoseSection = () => {
  return (
    <div className="">
      <div className=" grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-20">
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-112.5 overflow-hidden  order-2 lg:order-1">
          <img
            src="/WhyChoseImage.png"
            alt="Rwandan artisan crafting pottery"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover select-none"
          />
        </div>

        <div className="space-y-6 order-1 lg:order-2 ml-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Why Choose
            <br />
            Made in Rwanda?
          </h1>

          <div className="space-y-3">
            {REASONS.map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-primary text-2xl leading-none">•</span>
                <p className="text-primary text-base sm:text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoseSection;
