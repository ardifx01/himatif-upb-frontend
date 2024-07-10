// components/Navbar.js
import Link from "next/link";
import Image from "next/image";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import AOS from "aos";

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <nav
      data-aos="slide-down"
      className=" font-manguiera flex justify-between px-10 items-center sticky top-0 backdrop-blur-lg py-3 transition-all duration-300"
    >
      <ul className="flex gap-5 list-none">
        {[
          { href: "/", label: "Home" },
          { href: "/profil", label: "Profil" },
          { href: "/news", label: "TIF News" },
          { href: "/lab", label: "LAB" },
          { href: "/tif", label: "TIF" },
          { href: "/pengurus", label: "Pengurus" },
        ].map((item) => (
          <li key={item.href}>
            <Link href={item.href} legacyBehavior>
              <a className="no-underline transition-colors text-0 duration-500 ease-in-out hover:text-1">
                {item.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="logo">
        <Image
          src="/image/logo.jpeg"
          width={50}
          height={50}
          alt="Logo"
          priority
        />
      </div>
    </nav>
  );
};

export default Navbar;
