"use client";
import React, { useState } from "react";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Invest in Rwanda", href: "/invest" },
  { name: "Firm Support", href: "/support" },
  { name: "Register Company/Producer", href: "/register" },
  { name: "Language", href: "/" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-primary text-accent sticky w-full">
      <div className="max-w-7xl mx-auto text-accent flex justify-between items-center px-4 sm:px-8 py-2">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Made in Rwanda Logo"
            className="p-2"
            width={40}
            height={40}
          />
          <h2 className="font-potta text-sm sm:text-base">Made in Rwanda</h2>
        </div>

        <div className="hidden md:block">
          {NAV_LINKS.map((link) => (
            <ul
              key={link.name}
              className="inline-block p-4 font-poppins text-sm"
            >
              <li>
                <a
                  href={link.href}
                  className="hover:opacity-80 transition-opacity"
                >
                  {link.name}
                </a>
              </li>
            </ul>
          ))}
        </div>

        <div className="hidden sm:block">
          <a href="/register">
            {" "}
            <button className="text-xs md:text-sm hover:bg-accent flex gap-2 hover:text-primary border border-accent px-4 py-2 rounded-full font-poppins transition-colors duration-300">
              <span>Register in Rwanda</span>
              <Image
                src="/flage.png"
                alt="Rwanda Flag"
                width={20}
                height={20}
              />
            </button>
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-accent p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-primary border-t border-accent/20">
          <ul className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.name} className="font-poppins text-sm">
                <a
                  href={link.href}
                  className="block py-2 hover:opacity-80 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href="/register">
                <button className="w-full flex items-center justify-center text-sm hover:bg-accent gap-2 hover:text-primary border border-accent px-4 py-2 rounded-full font-poppins transition-colors duration-300">
                  <span>Register in Rwanda</span>
                  <Image
                    src="/flage.png"
                    alt="Rwanda Flag"
                    width={20}
                    height={20}
                  />
                </button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
