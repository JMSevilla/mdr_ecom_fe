import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
// import required modules
import { EffectFade, Autoplay, Navigation } from "swiper";

const AppSwiper = (props) => {
  const { swiperData, style } = props;
  return (
    <>
      <Swiper
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Navigation]}
        loop={true}
        className="mySwiper"
      >
        {swiperData.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
            >
              <img src={item.img} alt="hero_banner_images" style={style} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default AppSwiper;
