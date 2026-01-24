import React from "react";
const Cards = [
  {
    title: "About Made in Rwanda",
    subtitle:
      "Promoting local excellence, empowering Rwandan businesses, and driving sustainable economic growth.",
    description:
      "Made in Rwanda is a national initiative dedicated to promoting locally manufactured products and services. We support Rwandan entrepreneurs and manufacturers by increasing visibility, building trust, and connecting them with local and global markets.",
  },
];
function page() {
  return (
    <div
      className="relative bg-cover bg-center h-125 sm:h-150 md:h-162.5 lg:h-175 font-poppins"
      style={{ backgroundImage: "url('/ContactUs/contact-us.png')" }}
    >
      <div className="absolute ">
        {Cards.map((data, key) => (
          <div key={key}>
            <h1>{data.title}</h1>
            <p>{data.subtitle}</p>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
