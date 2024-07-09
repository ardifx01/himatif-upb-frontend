import Link from "next/link";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <main className="p-10 ">
      <header className="flex items-center justify-around">
        <div data-aos="fade-up" className="image">
          image
        </div>
        <div className="title">
          <h1 data-aos="fade-left" className=" font-krona text-3 text-xl">
            Himpunan Mahasiswa <br /> Teknik Informatika <br /> Universitas
            Pelita Bangsa
          </h1>
        </div>
      </header>
    </main>
  );
};

export default Home;
