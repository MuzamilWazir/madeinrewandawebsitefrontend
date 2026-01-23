import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

const PRODUCT_CARDS = [
  {
    id: 1,
    title: "Handwoven Baskets",
    district: "Gicumbi District",
    description:
      "Made by local cooperatives using traditional techniques passed down through generations.",
    image: "/builtSection/image01.png",
  },
  {
    id: 2,
    title: "Hand-Made Cap",
    district: "Gicumbi District",
    description:
      "Made by local cooperatives using traditional techniques passed down through generations.",
    image: "/builtSection/image02.png",
  },
  {
    id: 3,
    title: "Hand-Made Cup",
    district: "Gicumbi District",
    description:
      "Made by local cooperatives using traditional techniques passed down through generations.",
    image: "/builtSection/image03.png",
  },
  {
    id: 4,
    title: "Handwoven Baskets",
    district: "Gicumbi District",
    description:
      "Made by local cooperatives using traditional techniques passed down through generations.",
    image: "/builtSection/image04.png",
  },
];

const BuildByRwanda = () => {
  return (
    <div className="relative bg-accent overflow-hidden">
      <div className="max-w-6xl mx-auto text-center py-10 px-4 sm:px-6 lg:px-8">
        <Heading
          heading="Built by Rwandans, for Rwanda"
          subHeading="Behind every product is a Rwandan story—of craftsmanship, resilience, and community growth. This platform exists to amplify those stories and turn local talent into national success."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-accent gap-6 sm:gap-4 justify-items-center">
          {PRODUCT_CARDS.map((data) => (
            <div
              key={data.id}
              className="relative w-full sm:w-64 h-80 rounded-2xl overflow-hidden border border-primary shadow-sm shadow-primary group cursor-pointer"
            >
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent group-hover:from-black group-hover:via-black/90 group-hover:to-black/10 transition-all duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-400 group-hover:-translate-y-2">
                <h3 className="text-xl font-bold mb-1 text-left">
                  {data.title}
                </h3>
                <p className="text-sm flex items-center gap-1 mb-1">
                  <FaLocationDot />
                  {data.district}
                </p>

                {/* Description - hidden by default, shows on hover */}
                <p className="text-xs text-left leading-relaxed opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-20 transition-all duration-700">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildByRwanda;
