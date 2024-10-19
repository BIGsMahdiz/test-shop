import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Container } from "@mui/material";

import Banner from "@/components/templates/Banner";
import CategoryHome from "@/components/templates/CategoryHome";
import { getProductsSlide } from "@/services/product";
import CardEl from "@/components/templates/CardEl";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function HomePage() {
  const { isLoading, data } = useQuery({
    queryKey: ["get-productsSlide"],
    queryFn: getProductsSlide,
  });

  return (
    <>
      <Banner />
      <CategoryHome />
      <Container maxWidth="xl">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {data?.data.map((item) => (
            <SwiperSlide key={item.id}>
              <CardEl data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
    </>
  );
}

export default HomePage;
