import React from "react";
import Heading from "./Heading";
import { FaUsers } from "react-icons/fa";
import { TbWorldPin } from "react-icons/tb";
import { HiViewGrid, HiBadgeCheck } from "react-icons/hi";

const IMPACT_CARDS = [
  {
    id: 1,
    Icon: FaUsers,
    value: "5,000+",
    label: "Local Producers Supported",
  },
  {
    id: 2,
    Icon: TbWorldPin,
    value: "30+",
    label: "Districts Represented",
  },
  {
    id: 3,
    Icon: HiViewGrid,
    value: "100%",
    label: "Made in Rwanda Products",
  },
  {
    id: 4,
    Icon: HiBadgeCheck,
    value: "Verified",
    label: "Government-Verified Marketplace",
  },
];

const RealImpact = () => {
  return (
    <div className="relative bg-accent overflow-hidden">
      <div className="max-w-6xl mx-auto text-center py-10 px-4">
        <Heading heading="Real Impact. Real Growth." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10 text-accent my-10 mx-4 sm:mx-8 lg:mx-20">
          {IMPACT_CARDS.map((data) => (
            <div
              key={data.id}
              className="w-full lg:w-60 h-60 p-8 rounded-2xl overflow-hidden border bg-primary shadow-sm shadow-secondary border-secondary space-y-7"
            >
              <div>
                <data.Icon className="w-18 h-18 text-accent" />
              </div>
              <div className="text-left">
                <h3 className="text-3xl font-bold mb-1 mx-1">{data.value}</h3>
                <p className="mx-1">{data.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealImpact;
