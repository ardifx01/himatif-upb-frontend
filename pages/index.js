import Link from "next/link";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import AOS from "aos";
import Carousel from "@/components/carousel";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <main className="">
      <header className="items-center justify-around">
        <div className="p-50 flex "></div>
        <div data-aos="fade-out">
          <Carousel />
        </div>
      </header>
    </main>
  );
};

export default Home;
