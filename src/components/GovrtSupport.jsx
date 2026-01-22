import React from "react";
import { FaShield } from "react-icons/fa6";
import { BiSolidMobileVibration } from "react-icons/bi";
import { BiSolidShoppingBags } from "react-icons/bi";
const Cards = [
  {
    id: 1,
    title: "Policy & Protection",
    description:
      "Fair trade policies and producer-focused regulations designed to protect and promote Rwandan-made products.",
    icon: FaShield,
    supportedBy: "MINICOM",
  },
  {
    id: 2,
    title: "Digital Enablement",
    description:
      "Equipping local producers with digital tools and skills to thrive in the modern e-commerce landscape.",
    icon: BiSolidMobileVibration,
    supportedBy: "MINICOM",
  },
  {
    id: 3,
    title: "Market Access",
    description:
      "Opening doors to local and international buyers through a trusted national marketplace.",
    icon: BiSolidShoppingBags,
    supportedBy: "MINICOM",
  },
];
function GovrtSupport() {
  return (
    <div className="bg-accent ">
      <div className="max-w-7xl mx-auto text-center py-10">
        <h2 className="text-5xl font-bold text-primary  ">
          Government Support for Local Businesses
        </h2>
        <p className="my-5">
          The Government of Rwanda is actively enabling local producers to grow,
          compete, and succeed in the digital economy.
        </p>

        <div>
          <div className="grid grid-cols-3 gap-6 ">
            {Cards.map(({ title, description, icon: Icon, id }) => (
              <div
                key={id}
                className="p-6 bg-primary rounded-xl shadow-sm border border-secondary shadow-secondary"
              >
                <div className="bg-white rounded-full w-13 mx-auto ">
                  <Icon className="text-3xl text-primary mb-4 p-2 size-13 " />
                </div>

                <h4 className="text-xl font-bold mb-2">{title}</h4>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
            <h4></h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GovrtSupport;
