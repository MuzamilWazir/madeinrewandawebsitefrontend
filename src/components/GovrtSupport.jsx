"use client";
import React from "react";
import { FaShield } from "react-icons/fa6";
import { BiSolidMobileVibration, BiSolidShoppingBags } from "react-icons/bi";
import Image from "next/image";
import Heading from "./Heading";

const SUPPORT_CARDS = [
  {
    id: 1,
    title: "Policy & Protection",
    description:
      "Fair trade policies and producer-focused regulations designed to protect and promote Rwandan-made products.",
    icon: FaShield,
  },
  {
    id: 2,
    title: "Digital Enablement",
    description:
      "Supporting businesses to go online, reach wider audiences, and scale through digital platforms.",
    icon: BiSolidMobileVibration,
  },
  {
    id: 3,
    title: "Market Access",
    description:
      "Opening doors to local and international buyers through a trusted national marketplace.",
    icon: BiSolidShoppingBags,
  },
];

const BackgroundLogo = ({ position }) => (
  <div
    className={`absolute ${position} top-80 -translate-y-1/2 pointer-events-none opacity-55 hidden lg:block`}
  >
    <Image
      src="/backlogo.png"
      alt="Decorative background logo"
      width={180}
      height={100}
      className="object-contain"
    />
  </div>
);

function GovrtSupport() {
  return (
    <div className="relative bg-accent overflow-hidden">
      <div className="max-w-6xl mx-auto text-center py-10 px-4 sm:px-6 lg:px-8">
        <Heading
          heading="Government Support for Local Businesses"
          subHeading="The Government of Rwanda is actively enabling local producers to grow, compete, and succeed in the digital economy."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mx-4 sm:mx-8 lg:mx-20 my-4">
          {SUPPORT_CARDS.map(({ id, title, description, icon: Icon }) => (
            <div
              key={id}
              className="p-6 bg-primary rounded-xl shadow-sm border border-secondary shadow-secondary space-y-2"
            >
              <div className="flex items-center justify-center p-3 my-3">
                <Icon className="text-3xl bg-accent rounded-full text-primary mb-4 p-3 w-20 h-20" />
              </div>

              <h4 className="text-xl mb-2 font-semibold text-secondary my-3">
                {title}
              </h4>

              <p className="leading-relaxed text-secondary text-xs my-2  ">
                {description}
              </p>
            </div>
          ))}
        </div>

        <h4 className="pt-4 font-bold text-lg sm:text-xl text-primary px-4">
          Supported by the Ministry of Trade & Industry (MINICOM)
        </h4>
      </div>

      <BackgroundLogo position="-left-20" />
      <BackgroundLogo position="-right-20" />
    </div>
  );
}

export default GovrtSupport;
