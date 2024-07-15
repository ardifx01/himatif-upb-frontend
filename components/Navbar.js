// components/Navbar.js
import Link from "next/link";
import Image from "next/image";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import AOS from "aos";
import { useRouter } from "next/router";
import SparklesText from "@/components/magicui/sparkles-text";

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const router = useRouter();
  return (
    <nav
      data-aos="slide-down"
      className="font-manguiera flex justify-between max-md:hidden px-10 items-center bg-gray-200 bg-opacity-70 border-white border-2 max-md:flex-col py-1 transition-all duration-300 rounded-full "
    >
      <ul className="flex gap-3 list-none">
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
              <a
                className={`no-underline transition-colors text-0 duration-500 ease-in-out py-2 px-5 rounded-full ${
                  item.href === router.asPath
                    ? "bg-white text-3"
                    : "hover:bg-white hover:text-3"
                }`}
              >
                {item.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center gap-10">
        <div>
          <SparklesText className={" text-3xl"} text={"HIMATIF UPB"} />
        </div>
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
