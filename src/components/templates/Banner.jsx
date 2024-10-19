// import Swiper bundle with all modules installed
import bannerInfo from "@/constants/banner";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Container } from "@mui/material";

function Banner() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      style={{ marginTop: 15, borderRadius: 10 }}
    >
      {bannerInfo.map((item) => (
        <SwiperSlide key={item.id}>
          <img src={item.src} style={{ width: "100%", height: "400px" }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Banner;
