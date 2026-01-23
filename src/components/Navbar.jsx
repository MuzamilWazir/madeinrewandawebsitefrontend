import React from "react";
import Image from "next/image";
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Invest in Rwanda", href: "/invest" },
  { name: "Firm Support", href: "/support" },
  { name: "Register Company/Producer", href: "/register" },
  { name: "language", href: "/" },
];
const Navbar = () => {
  return (
    <div className=" bg-primary">
      <div className="max-w-7xl mx-auto  text-accent flex justify-between items-center px-8 py-2">
        <div className="flex items-center ">
          <Image
            src="/logo.png"
            alt="Logo"
            className="p-2"
            width={40}
            height={40}
          ></Image>
          <h2 className=" font-potta">Made in Rwanda</h2>
        </div>{" "}
        <div className="md:block hidden">
          {navLinks.map((link) => (
            <ul
              key={link.name}
              className="inline-block p-4  font-poppins text-sm"
            >
              <li>
                <a href={link.href}>{link.name}</a>
              </li>
            </ul>
          ))}
        </div>{" "}
        <div className="">
          <button className="  text-xs md:text-sm hover:bg-accent flex  gap-2 hover:text-primary border border-accent px-4 py-2 rounded-full font-poppins ">
            <p> Register in Rwanda</p>
            <Image
              src="/flage.png"
              alt="Contact Us"
              width={20}
              height={20}
            ></Image>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
