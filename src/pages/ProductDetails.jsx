import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { getProductById } from "@/services/product";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination"; // Import for pagination

import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import Loader from "@/components/modules/Loader";
import { addItem } from "@/features/favorite/favoriteSlice";

function ProductDetails() {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite);

  const { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { isLoading, data } = useQuery({
    queryKey: ["getDetailProducts"],
    queryFn: () => getProductById(id),
    gcTime: 0,
  });

  // console.log({ isLoading, data });

  // console.log(id);

  if (isLoading) return <Loader />;

  return (
    <Grid2 container spacing={3} mt={6}>
      <Grid2 size={{ xs: 12, md: 5, lg: 6 }}>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            maxWidth: "700px",
            height: "500px",
            borderRadius: "10px",
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, Pagination]} // Add Pagination module here
          pagination={{ clickable: true }} // Enable pagination
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
          </SwiperSlide>
        </Swiper>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 7, lg: 6 }}>
        <Typography variant="h4" component="h4">
          {data.data.title}
        </Typography>
        <Typography variant="p" component="p" color="secondary" mt={2}>
          {data.data.category.name}
        </Typography>
        <Typography variant="h4" component="h4" mt={5}>
          ${data.data.price}
        </Typography>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
          style={{
            width: "450px",
            height: "100px",
            marginTop: "40px",
            marginLeft: "-10px",
          }}
        >
          <SwiperSlide sx={{ margin: "0 5px" }}>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide sx={{ margin: "0 5px" }}>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide sx={{ margin: "0 5px" }}>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide sx={{ margin: "0 5px" }}>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide sx={{ margin: "0 5px" }}>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide sx={{ margin: "0 5px" }}>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide sx={{ margin: "0 5px" }}>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide sx={{ margin: "0 5px" }}>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide sx={{ margin: "0 5px" }}>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
          <SwiperSlide sx={{ margin: "0 5px" }}>
            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
          </SwiperSlide>
        </Swiper>
        <Box component="div" mt={5}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000000",
              width: "300px",
              padding: "10px 15px",
              borderRadius: "10px",
              margin: "0 7px",
            }}
          >
            Add to cart <AddShoppingCartIcon sx={{ marginLeft: 2 }} />
          </Button>
          <Button
            onClick={() => dispatch(addItem(data.data))}
            variant="outlined"
            sx={{
              width: "300px",
              padding: "10px 15px",
              borderRadius: "10px",
              margin: "0 7px",
            }}
          >
            Favorite ❤️‍🔥
          </Button>
        </Box>
      </Grid2>
    </Grid2>
  );
}

export default ProductDetails;
