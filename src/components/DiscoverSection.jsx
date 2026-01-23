import React from "react";
import Heading from "./Heading";
import Image from "next/image";
const Cards = [
  {
    id: 1,
    title: "Agriculture & Coffee",
    image: "/discoverCreates/image01.png",
  },
  {
    id: 2,
    title: "Fashion & Textile",
    image: "/discoverCreates/image02.png",
  },
  {
    id: 3,
    title: "Handicraft",
    image: "/discoverCreates/image03.png",
  },
  {
    id: 4,
    title: "Beauity & Natural Product",
    image: "/discoverCreates/image04.png",
  },
  {
    id: 4,
    title: "Home & Decor",
    image: "/discoverCreates/image05.png",
  },
];
function DiscoverSection() {
  return (
    <div className="relative bg-accent overflow-hidden">
      <div className="max-w-6xl mx-auto text-center py-10">
        <Heading heading="Discover What Rwanda Creates" />

        <div className="grid grid-cols-5 gap-4 text-accent my-10 ">
          {Cards.map((data, key) => (
            <div
              key={key}
              className="relative w-55 h-70 rounded-2xl overflow-hidden border border-primary shadow-sm shadow-primary group cursor-pointer"
            >
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent group-hover:from-black group-hover:via-black/90  group-hover:to-black/10 transition-all duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-400 group-hover:-translate-y-2">
                <h3 className="text-xl font-bold mb-1 text-center">
                  {data.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <p className="text-primary font-bold ">
          {" "}
          Every product on this platform is proudly made in Rwanda.
        </p>
      </div>
    </div>
  );
}

export default DiscoverSection;
