import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
const Cards = [
  {
    id: 1,
    title: "Yogurt",
    brand: "Masaka Farms Greek",
    category: "Dairy Products",
    image: "/FeaturesProduct/image01.png",
  },
  {
    id: 2,
    title: "Cheese",
    brand: "Nganji Mozzarella Cheese",
    category: "Dairy Products",
    image: "/FeaturesProduct/image02.png",
  },
  {
    id: 3,
    title: "Honey",
    brand: "Pure Honey",
    category: "Pure Honey",
    image: "/FeaturesProduct/image03.png",
  },
  {
    id: 4,
    title: "Pineapple juice",
    brand: "Inyange Pineapple",
    category: "Pineapple juice",
    image: "/FeaturesProduct/image04.png",
  },
  {
    id: 5,
    title: "Amaco paints",
    brand: "AMACO PAINTS Ltd",
    category: "Amaco paints",
    image: "/FeaturesProduct/image05.png",
  },
];

function FeatureProductSection() {
  return (
    <div className="relative bg-accent overflow-hidden">
      <div className="max-w-6xl mx-auto text-center py-10">
        <Heading heading="Featured Local Products" />

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
                className="object-cover group-hover:scale-110 transition-transform duration-500 bg-white "
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent group-hover:from-black group-hover:via-black/90  group-hover:to-black/10 transition-all duration-300" />

              <div className="absolute text-left bottom-0 left-0 right-0 p-5 opacity-0 transition-all duration-400 group-hover:-translate-y-1 group-hover:opacity-100 ">
                <h3 className="text-xl font-bold mb-1 ">{data.title}</h3>
                <p className="text-xs ">{data.category}</p>
                <p className="text-xs">{data.brand}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-primary font-bold ">
          <Link href="/product-catagories">
            View More Product <FaArrowRight className="inline" />
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default FeatureProductSection;
