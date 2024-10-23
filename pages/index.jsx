import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import AOS from "aos";
import Carousel from "@/pages/home/carousel";
import Header from "@/pages/home/header";
import Department from "@/pages/home/homeDepartment";
import News from "@/pages/home/news";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <main className="">
      <header>
        <div className="max-md:mb-5" data-aos="fade-up">
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
