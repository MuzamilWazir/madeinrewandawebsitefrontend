import React from "react";

const IMPORTANT_LINKS = [
  { name: "Government Portal", href: "https://www.gov.rw" },
  { name: "Rwanda Development Board", href: "https://rdb.rw" },
  {
    name: "Ministry of Trade and Industry",
    href: "https://www.minicom.gov.rw",
  },
  { name: "Rwanda Standard Board", href: "https://www.rsb.gov.rw" },
  { name: "Rwanda Revenue Authority", href: "https://www.rra.gov.rw" },
  {
    name: "National Agricultural Export Development Board",
    href: "https://naeb.gov.rw",
  },
];

const MEDIA_LINKS = [
  { name: "News and Press", href: "/" },
  { name: "Releases", href: "/" },
  { name: "Events", href: "/" },
];

function Footer() {
  const linkStyles = "hover:underline block mb-2 text-right transition-colors";
  const titleStyles = "font-bold text-xl text-right my-2 text-secondary";

  return (
    <footer className="bg-primary text-accent mt-10 font-poppins">
      <div className="flex flex-col md:flex-row items-center justify-between mx-auto max-w-7xl px-8 py-10 gap-6 text-sm">
        <div className="space-y-8 max-w-sm">
          <h2 className="font-potta text-2xl text-secondary">Made in Rwanda</h2>
          <p>
            Made in Rwanda is a national initiative aligned with Rwanda’s vision
            for industrial growth and economic empowerment.
          </p>
          <p>Supported by the Ministry of Trade & Industry (MINICOM).</p>
        </div>

        <div className="flex gap-20">
          <div className="w-full sm:w-70">
            <h2 className={titleStyles}>Important Links</h2>
            {IMPORTANT_LINKS.map((link) => (
              <a key={link.name} href={link.href} className={linkStyles}>
                {link.name}
              </a>
            ))}
          </div>

          <div>
            <h2 className={titleStyles}>Media Center</h2>
            {MEDIA_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${linkStyles} text-sm`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-accent/20" />

      <div className="max-w-7xl mx-auto flex justify-center items-center py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Made in Rwanda. All rights reserved
          by MadeInRwanda
        </p>
      </div>
    </footer>
  );
}

export default Footer;
