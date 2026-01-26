import React from "react";
import { MdLocationOn, MdEmail, MdPhone, MdInventory } from "react-icons/md";

// The JSON data (can be in a separate file)
const contactData = [
  {
    id: 1,
    label: "Address",
    value: "Ministry of Trade and Industry, KG 1 Roundabout, Kigali",
    iconName: "location",
  },
  { id: 2, label: "Email", value: "info@minicom.gov.rw", iconName: "email" },
  { id: 3, label: "Toll Free", value: "3739", iconName: "phone" },
  { id: 4, label: "P.O. Box", value: "73", iconName: "box" },
];

// The Icon Map
const iconMap = {
  location: <MdLocationOn />,
  email: <MdEmail />,
  phone: <MdPhone />,
  box: <MdInventory />,
};
function page() {
  return (
    <div className="grid grid-cols-2 max-w-5xl mx-auto my-15">
      <div className="space-y-10">
        <h1 className="text-5xl text-primary font-bold mx-3">
          {" "}
          Get In <span className="text-black">Touch </span> <br /> with Us, We{" "}
          <br />
          <span className="text-black">Answer</span> <br /> You
        </h1>

        <div className="flex flex-col gap-4 p-4">
          {contactData.map((item) => (
            <div key={item.id} className="flex items-start gap-3">
              <div className="bg-secondary p-2 rounded-full text-primary text-lg">
                {iconMap[item.iconName]}
              </div>

              <div className="text-[#1A3C34] pt-1">
                <span className="font-bold">{item.label}: </span>
                <span className="font-normal">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default page;
