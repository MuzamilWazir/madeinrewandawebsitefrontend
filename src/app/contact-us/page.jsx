"use client";
import { useState } from "react";
import Image from "next/image";
import "flag-icons/css/flag-icons.min.css";
import { MdLocationOn, MdEmail, MdPhone, MdInventory } from "react-icons/md";

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
    message: "",
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
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-15">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
        {/* Left Section - Contact Info */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-primary font-bold leading-tight">
            Get In <span className="text-black">Touch</span>
            <br className="hidden sm:block" /> with Us, We
            <br className="hidden sm:block" />
            <span className="text-black">Answer</span>
            <br className="hidden sm:block" /> You
          </h1>

          <div className="flex flex-col gap-3 sm:gap-4">
            {contactData.map((item) => (
              <div key={item.id} className="flex items-start gap-3">
                <div className="bg-secondary p-2 rounded-full text-primary text-lg flex-shrink-0">
                  {iconMap[item.iconName]}
                </div>

                <div className="text-[#1A3C34] pt-1 break-words">
                  <span className="font-bold">{item.label}: </span>
                  <span className="font-normal">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="space-y-3 text-sm">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white shadow shadow-primary text-emerald-900 placeholder-emerald-700/60 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white shadow shadow-primary text-emerald-900 placeholder-emerald-700/60 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <div className="w-full flex gap-2">
            <div className="relative flex-shrink-0">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="h-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white shadow shadow-primary text-emerald-900 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"
              >
                <div className="bg-primary p-1 rounded-full flex-shrink-0">
                  <span className={`fi fi-${selectedCountry.flag} text-xs`}></span>
                </div>

                <span className="text-xs sm:text-sm">{selectedCountry.code}</span>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
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
                <div className="absolute top-full mt-1 left-0 min-w-[140px] shadow-primary bg-white rounded-2xl shadow-lg z-10 overflow-hidden">
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      type="button"
                      onClick={() => handleCountrySelect(country.code)}
                      className="w-full px-4 py-2 text-emerald-900 hover:bg-amber-200 flex items-center gap-2 text-left transition-colors"
                    >
                      <span className={`fi fi-${country.flag}`}></span>
                      <span className="text-xs sm:text-sm">{country.code}</span>
                      <span className="text-xs text-gray-500">{country.name}</span>
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
              className="flex-1 min-w-0 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white shadow shadow-primary text-emerald-900 placeholder-emerald-700/60 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow shadow-primary bg-white text-emerald-900 placeholder-emerald-700/60 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="text"
            name="companyname"
            placeholder="Company Name"
            value={formData.companyname}
            onChange={handleChange}
            className="w-full px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white shadow shadow-primary text-emerald-900 placeholder-emerald-700/60 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <textarea
            name="message"
            placeholder="Type your message Here..."
            value={formData.message}
            onChange={handleChange}
            className="w-full h-32 sm:h-40 px-4 sm:px-6 py-3 rounded-2xl bg-white shadow shadow-primary text-emerald-900 placeholder-emerald-700/60 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-2 pt-2">
            <div className="flex items-start sm:items-center">
              <input
                type="checkbox"
                name="agreed"
                id="agreed"
                className="mt-1 sm:mt-0 mx-2 sm:mx-3 flex-shrink-0"
              />
              <label htmlFor="agreed" className="text-xs sm:text-sm text-black">
                I agree with
                <a href="#" className="font-semibold underline px-1">
                  Terms of Use
                </a>
                and
                <a href="#" className="font-semibold underline px-1">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full sm:w-auto px-6 py-2 sm:py-2.5 text-sm rounded-full bg-primary shadow-primary text-white font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;