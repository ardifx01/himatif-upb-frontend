// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Banner from "@/public/image/banner1.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <Image src={Banner} alt="Banner" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Banner} alt="Banner" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Banner} alt="Banner" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
