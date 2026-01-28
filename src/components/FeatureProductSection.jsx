import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Heading from "./Heading";
import Link from "next/link";

const Cards = [
  {
    id: 1,
    title: "Yogurt",
    slug: "yogurt",
    brand: "Masaka Farms Greek",
    category: "Dairy Products",
    image: "/FeaturesProduct/image01.png",
  },
  {
    id: 2,
    title: "Cheese",
    slug: "cheese",
    brand: "Nganji Mozzarella Cheese",
    category: "Dairy Products",
    image: "/FeaturesProduct/image02.png",
  },
  {
    id: 3,
    title: "Honey",
    slug: "honey",
    brand: "Pure Honey",
    category: "Pure Honey",
    image: "/FeaturesProduct/image03.png",
  },
  {
    id: 4,
    title: "Pineapple juice",
    slug: "pineapple-juice",
    brand: "Inyange Pineapple",
    category: "Pineapple juice",
    image: "/FeaturesProduct/image04.png",
  },
  {
    id: 5,
    title: "Amaco paints",
    slug: "amaco-paints",
    brand: "AMACO PAINTS Ltd",
    category: "Amaco paints",
    image: "/FeaturesProduct/image05.png",
  },
];

function FeatureProductSection() {
  return (
    <div className="relative  overflow-hidden">
      <div className="max-w-6xl mx-auto text-center py-10 px-4 sm:px-6 lg:px-8">
        <Heading heading="Featured Local Products" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4 my-10">
          {Cards.map((data, key) => (
            <Link
              href={`product/${data.slug}`}
              key={key}
              className="relative w-full h-64 sm:h-72 md:h-60 rounded-2xl overflow-hidden border border-primary  shadow-sm shadow-primary group cursor-pointer"
            >
              <img
                src={data.image}
                alt={data.title}
                className="absolute inset-0  w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 bg-white "
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent group-hover:from-black group-hover:via-black/90 group-hover:to-black/10 transition-all duration-300" />

              <div className="absolute text-left bottom-0 left-0 right-0 p-5 opacity-0 transition-all duration-400 group-hover:-translate-y-1 group-hover:opacity-100 text-white">
                <h3 className="text-xl font-bold mb-1">{data.title}</h3>
                <p className="text-xs">{data.category}</p>
                <p className="text-xs">{data.brand}</p>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-primary font-bold">
          <a
            href="/product-catagories"
            className="inline-flex items-center gap-2 hover:underline"
          >
            View More Product <FaArrowRight className="inline" />
          </a>
        </p>
      </div>
    </div>
  );
}

export default FeatureProductSection;
