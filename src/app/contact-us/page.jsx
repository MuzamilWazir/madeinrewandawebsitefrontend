"use client";
import { useState } from "react";
import Image from "next/image";
import "flag-icons/css/flag-icons.min.css";
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
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+250",
    phone: "",
    address: "",
    companyname: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const countries = [
    { code: "+250", flag: "rw", name: "Rwanda" },
    { code: "+92", flag: "pk", name: "Pakistan" },
    { code: "+1", flag: "us", name: "USA" },
    { code: "+44", flag: "gb", name: "UK" },
    { code: "+91", flag: "in", name: "India" },
  ];

  const selectedCountry = countries.find(
    (c) => c.code === formData.countryCode,
  );

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Registration submitted! Check console for details.");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCountrySelect = (code) => {
    setFormData({
      ...formData,
      countryCode: code,
    });
    setIsDropdownOpen(false);
  };

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
      <div className="space-y-3 text-sm">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full px-6 py-2 rounded-full bg-white shadow shadow-primary text-emerald-900 placeholder-emerald-700/60 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-6 py-2 rounded-full bg-white shadow shadow-primary text-emerald-900 placeholder-emerald-700/60 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <div className="flex gap-2">
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="px-4 py-2 rounded-full bg-white shadow shadow-primary text-emerald-900 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer flex items-center gap-2 min-w-25"
            >
              <div className="bg-primary p-1 rounded-full">
                <span className={`fi fi-${selectedCountry.flag}   `}></span>
              </div>

              <span>{selectedCountry.code}</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full mt-1 left-0  shadow-primary bg-white rounded-2xl shadow-lg z-10 overflow-hidden">
                {countries.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => handleCountrySelect(country.code)}
                    className="w-full px-4 py-2 text-emerald-900 hover:bg-amber-200 flex items-center gap-2 text-left"
                  >
                    <span className={`fi fi-${country.flag}`}></span>
                    <span>{country.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="flex-1 px-6 py-2 rounded-full bg-white shadow shadow-primary text-emerald-900 placeholder-emerald-700/60 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-6 py-2 rounded-full shadow shadow-primary bg-white text-emerald-900 placeholder-emerald-700/60 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <input
          type="text"
          name="companyname"
          placeholder="Company Name"
          value={formData.companyname}
          onChange={handleChange}
          className="w-full px-6 py-2 rounded-full bg-white shadow shadow-primary text-emerald-900 placeholder-emerald-700/60 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <textarea
          type="text"
          name="companyname"
          placeholder="Type your message Here..."
          value={formData.companyname}
          onChange={handleChange}
          className="w-full h-40 px-6 py-2 rounded-2xl bg-white shadow shadow-primary text-emerald-900 placeholder-emerald-700/60 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <button
          onClick={handleSubmit}
          className="w-full py-2 rounded-full bg-secondary  shadow-primary text-emerald-900 font-bold text-base md:text-lg hover:bg-amber-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
        >
          Register Account
        </button>

        <p className="text-center text-white text-sm mt-4">
          Already have an account?{" "}
          <a
            href="#"
            className="text-secondary hover:text-amber-200 font-semibold underline"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default page;
