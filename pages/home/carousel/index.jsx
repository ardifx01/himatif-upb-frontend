import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import fetchData from "@/config/bannerApi/fetchData";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  const [bannerData, setBanner] = useState([]);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const data = await fetchData();
        setBanner(data);
      } catch (error) {
        console.error(`Error fetching banner data: ${error.message}`);
      }
    };
    fetchBanner();
  }, []);

  return (
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
      modules={[Autoplay, Pagination, Navigation]}
    >
      {bannerData.map((banner) => {
        return (
          <SwiperSlide key={banner.id}>
            <Image
              priority={banner.priority}
              src={banner.imageUrl}
              alt={banner.title}
              width={1920}
              height={1080}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
