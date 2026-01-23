import React from "react";
import Image from "next/image";

const REASONS = [
  "Support local jobs and communities",
  "Preserve Rwandan culture and craftsmanship",
  "Strengthen the national economy",
  "Reduce reliance on imports",
  "Buy with confidence and purpose",
];

const WhyChoseSection = () => {
  return (
    <section className="bg-accent">
      <div className=" py-12">
        <div className="grid grid-cols-2 items-center gap-20">
          <div className="relative w-full h-75 sm:h-87.5 lg:h-112.5 overflow-hidden ">
            <Image
              src="/WhyChoseImage.png"
              alt="Rwandan artisan crafting pottery"
              fill
              draggable={false}
              className="object-cover select-none"
            />
          </div>

          <div className="space-y-6">
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
    </section>
  );
};

export default WhyChoseSection;
