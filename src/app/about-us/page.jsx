import Heading from "@/components/Heading";
import React from "react";
import Image from "next/image";
import { FaBuilding } from "react-icons/fa";
import { MdCake } from "react-icons/md";
import { RiShieldStarFill } from "react-icons/ri";

const Cards = [
  {
    title: "Made in Rwanda",
    subtitle:
      "Promoting local excellence, empowering Rwandan businesses, and driving sustainable economic growth.",
    description:
      "Made in Rwanda is a national initiative dedicated to promoting locally manufactured products and services. We support Rwandan entrepreneurs and manufacturers by increasing visibility, building trust, and connecting them with local and global markets.",
  },
];

const Card02 = [
  {
    name: "Paul Kagame",
    title: "President of Rwanda",
    country: "Rwanda",
    presidency: {
      start_year: 2000,
      end_year: "Present",
    },
    date_of_birth: "1957-10-23",
    political_party: {
      name: "Rwandan Patriotic Front",
      abbreviation: "RPF",
    },
    leadership_and_global_impact: {
      heading: "Leadership & Global Impact",
      description:
        "Paul Kagame is recognized for transforming Rwanda into one of Africa's fastest-growing and most stable countries through disciplined leadership, long-term planning, and a strong focus on technology, education, and digital governance. His zero-tolerance approach to corruption, emphasis on national unity, and commitment to safety and cleanliness have shaped Rwanda's global image. Internationally, he is widely praised for development and stability, while also facing criticism for an authoritarian style of governance.",
    },
  },
];

function page() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-auto min-h-125 sm:h-150 md:h-162.5 lg:h-175 font-poppins py-10 px-4 sm:px-8"
        style={{ backgroundImage: "url('contactUs/contact-us.png')" }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto h-full flex items-center">
          <div className="w-full lg:w-150 text-white space-y-4 lg:ml-auto lg:mr-8 z-10">
            {Cards.map((data, key) => (
              <div key={key} className="space-y-4">
                <h2 className="text-accent text-3xl sm:text-4xl lg:text-5xl font-bold">
                  About
                </h2>
                <h1 className="text-accent text-3xl sm:text-4xl lg:text-5xl font-bold">
                  {data.title}
                </h1>
                <p className="font-semibold text-sm sm:text-base lg:text-xl">
                  {data.subtitle}
                </p>
                <p className="text-sm sm:text-base lg:text-xl">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* President Section */}
      <div className="my-10 relative px-4 sm:px-6 lg:px-8 overflow-hidden">
        <Heading
          heading="About the President"
          subHeading="An overview of Rwanda's President, highlighting his leadership, background, and role in shaping the nation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 max-w-6xl mx-auto mt-8">
          {/* President Info - First Column */}
          <div className="order-2 lg:order-1 relative z-10">
            {Card02.map((leader, key) => (
              <div key={key} className="text-primary space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                  {leader.name}
                </h2>
                <h2 className="text-xl sm:text-2xl lg:text-3xl">
                  {leader.title}
                </h2>

                <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 lg:gap-20 my-4 text-lg sm:text-xl lg:text-2xl">
                  <div>
                    <h4 className="font-bold">President since</h4>
                    <p className="flex items-center gap-2">
                      <FaBuilding className="inline shrink-0" />
                      <span>
                        {leader.presidency.start_year} –{" "}
                        {leader.presidency.end_year}
                      </span>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold">Date of Birth</h4>
                    <p className="flex items-center gap-2">
                      <MdCake className="inline shrink-0" />
                      <span>{leader.date_of_birth}</span>
                    </p>
                  </div>
                </div>

                <div className="text-lg sm:text-xl lg:text-2xl">
                  <p className="flex items-center gap-2">
                    <RiShieldStarFill className="inline shrink-0" />
                    <span>
                      {leader.political_party.name} (
                      {leader.political_party.abbreviation})
                    </span>
                  </p>
                  <p className="font-semibold mt-1">Political Party</p>
                </div>

                <div className="my-4 lg:my-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    {leader.leadership_and_global_impact.heading}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    {leader.leadership_and_global_impact.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* President Image - Second Column with Overlap */}
          <div className="order-1 lg:order-2 relative min-h-100 sm:min-h-125 lg:min-h-0">
            {/* Overlay effect to extend over first column */}
            <div className="absolute top-0 left-34 -translate-x-1/2 lg:translate-x-0 lg:-left-20 xl:-left-40 w-112.5 h-100 sm:w-100 sm:h-125 md:w-125 md:h-150 lg:w-180 lg:h-140 -z-10 mix-blend-multiply">
              <Image
                src="/flageWithPresident.png"
                alt="President of Rwanda background"
                fill
                draggable={false}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;