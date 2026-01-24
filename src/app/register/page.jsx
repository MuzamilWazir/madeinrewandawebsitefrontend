"use client";

import { useState } from "react";
import Image from "next/image";
import "flag-icons/css/flag-icons.min.css";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+250",
    phone: "",
    password: "",
    confirmPassword: "",
    accountType: "",
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
    <div className="relative">
      {" "}
      <div className="z-20 md:min-h-screen  flex justify-center py-10 px-4 md:m-3">
        <div className="w-full max-w-6xl md:h-120 bg-primary rounded-3xl shadow-2xl overflow-visible md:overflow-hidden py-5">
          <div className="grid md:grid-cols-2 gap-0 h-full">
            <div className="px-3 md:px-10 pb-6 md:pb-0">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-5 text-center">
                Create an Account!
              </h1>

              <div className="space-y-3 text-sm">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-6 py-2 rounded-full bg-accent text-emerald-900 placeholder-emerald-700/60 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-2 rounded-full bg-accent text-emerald-900 placeholder-emerald-700/60 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />

                <div className="flex gap-2">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="px-4 py-2 rounded-full bg-accent text-emerald-900 focus:outline-none focus:ring-2 focus:ring-amber-300 cursor-pointer flex items-center gap-2 min-w-25"
                    >
                      <div className="bg-primary p-1 rounded-full">
                        <span
                          className={`fi fi-${selectedCountry.flag}   `}
                        ></span>
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
                      <div className="absolute top-full mt-1 left-0 bg-accent rounded-2xl shadow-lg z-10 overflow-hidden">
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
                    className="flex-1 px-6 py-2 rounded-full bg-accent text-emerald-900 placeholder-emerald-700/60 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  />
                </div>

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-6 py-2 rounded-full bg-accent text-emerald-900 placeholder-emerald-700/60 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-6 py-2 rounded-full bg-accent text-emerald-900 placeholder-emerald-700/60 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />

                <select
                  name="accountType"
                  value={formData.accountType}
                  onChange={handleChange}
                  className="w-full px-6 py-2 rounded-full bg-accent text-emerald-700/60 focus:outline-none focus:ring-2 focus:ring-amber-300 cursor-pointer"
                >
                  <option value="">Account Type</option>
                  <option value="personal">Personal</option>
                  <option value="business">Business</option>
                  <option value="enterprise">Enterprise</option>
                </select>

                <button
                  onClick={handleSubmit}
                  className="w-full py-2 rounded-full bg-secondary text-emerald-900 font-bold text-base md:text-lg hover:bg-amber-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  Register Account
                </button>

                <p className="text-center text-accent text-sm mt-4">
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

            <div className="hidden md:block p-6 px-8">
              <img
                src="register/registerImage.png"
                alt="image"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute  lg:-top-3 left-0 -z-10">
        <Image
          src="/register/image02.png"
          alt="Top decoration"
          width={150}
          height={30}
          className="  object-cover"
          priority
        />
      </div>
      <div className="pointer-events-none absolute bottom-20 right-0 z-10">
        <Image
          src="/register/image01.png"
          alt="Top decoration"
          width={200}
          height={10}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </div>
  );
}
