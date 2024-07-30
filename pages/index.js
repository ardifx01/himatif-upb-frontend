import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import AOS from "aos";
import Carousel from "@/components/carousel";
import Header from "@/components/header";
import Department from "@/components/homeDepartment";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <main className="">
      <header>
        <div className="max-md:mb-5" data-aos="fade-out">
          <Carousel />
        </div>
        <div>
          <Header />
        </div>
        <Department />
      </header>
    </main>
  );
};

export default Home;
