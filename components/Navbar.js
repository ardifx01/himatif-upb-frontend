import Link from "next/link";
import Image from "next/image";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import { useRouter } from "next/router";
import SparklesText from "@/components/magicui/sparkles-text";
import { CoolMode } from "@/components/magicui/cool-mode";
import { RiMenu5Fill } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const router = useRouter();

  return (
    <nav
      className={`font-manguiera flex flex-col  shadow-xl md:flex-row-reverse gap-10 ${
        menuOpen ? "max-md:rounded-[25px]" : "max-md:rounded-[90px] "
      } justify-between items-center max-md:p-0 px-10 py-2 backdrop-blur-2xl border-white border-2 transition-all ease-in-out rounded-full `}
    >
      <div className="flex justify-between w-full md:w-auto items-center">
        <div data-aos="fade-right" className="flex mx-auto items-center gap-3">
          <SparklesText
            sparklesCount={10}
            className="text-2xl mt-2 max-md:text-xl"
            text="Himatif UPB"
          />
          <Image
            src="/image/logo.png"
            width={30}
            height={30}
            alt="Logo"
            priority
          />
        </div>
        <CoolMode>
          <button
            className="rounded-full flex text-sm md:hidden p-2 m-2 active:bg-6 bg-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <RiMenu5Fill />
          </button>
        </CoolMode>
      </div>

      <ul
        ref={menuRef}
        className={`flex-col md:flex-row gap-1 w-full md:w-auto justify-start items-center list-none md:flex ${
          menuOpen ? "flex" : "hidden"
        } md:flex`}
      >
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
                className={`no-underline transition-colors text-0 text-sm justify-center items-center flex duration-500 ease-in-out pt-3 pb-2 px-5 rounded-full ${
                  item.href === router.asPath
                    ? "bg-white text-3"
                    : "hover:bg-white hover:text-5"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
