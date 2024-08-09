import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import AOS from "aos";
import Carousel from "@/components/home/carousel";
import Header from "@/components/home/header";
import Department from "@/components/home/homeDepartment";
import News from "@/components/home/news";

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
        <div data-aos="fade-up">
          <Department />
        </div>
        <div>
          <News />
        </div>
      </header>
    </main>
  );
};

export default Home;
