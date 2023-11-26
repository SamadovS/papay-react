import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Marginer from "../../components/marginer";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";

const chosen_list = Array.from(Array(3).keys());
const dish_pics = Array.from(Array(5).keys());

export function ChosenDish() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="chosen_dish_page">
      <Container className="dish_container">
        {/* 1/2 Stack: Dish Slider */}
        <Stack className="chosen_dish_slider">
          {/* 1.1 Swiper: big pictures */}
          <Swiper
            className={"dish_swiper"}
            loop={true}
            spaceBetween={10}
            navigation={true}
            // thumbs={{ swiper: thumbsSwiper}}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {chosen_list.map((ele) => {
              const image_path = `/others/fish.jpg`;
              return (
                <SwiperSlide>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={image_path}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* 1.2 div: small pictures */}
          <Stack className={"one_dish_slider"}>
            <Swiper
              className={"one_dish_pics"}
              slidesPerView={3}
              centeredSlides={false}
              spaceBetween={20}
              navigation={{
                nextEl: ".restaurant-next",
                prevEl: ".restaurant-prev",
              }}
            >
              {dish_pics.map((ele, index) => {
                return (
                  <SwiperSlide
                    style={{ cursor: "pointer" }}
                    key={index}
                    className={"one_dish_pic"}
                  >
                    <img src={"/others/fish.jpg"} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Stack>
        </Stack>

        {/* 2/2 Stack: Dish Info */}
        <Stack className="chosen_dish_info_container">
          <Box className="chosen_dish_info_box">
            <strong className={"dish_text"}>Delicious Fish</strong>
            <span className={"resto_name"}>Texas De Brazil</span>
            <Box className={"rating_box"}>
              <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
              <div className={"evaluation_box"}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "20px",
                  }}
                >
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite style={{ color: "red" }} />}
                    /*@ts-ignore*/
                    checked={true}
                  />
                  <span>98</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <RemoveRedEyeIcon sx={{ mr: "10px" }} />
                  <span>1000</span>
                </div>
              </div>
            </Box>
            <p className={"dish_desc_info"}>Juda mazali baliq</p>
            <Marginer
              direction="horizontal"
              height="2"
              width="100%"
              bg="#000000"
            />
            <div className={"dish_price_box"}>
              <span>Narx:</span>
              <span>$11</span>
            </div>
            <div className={"button_box"}>
              <Button variant="contained">Savatga qo'shish</Button>
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
