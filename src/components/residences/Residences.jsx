import React from "react";
import "./residences.css";
import data from "../../utils/slider.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { SliderSettings } from "../../utils/Common";
import "swiper/swiper.min.css";
import { Outlet } from "react-router-dom";
const Residences = () => {
  return (
    <div className="r-wrapper" id="residence">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residences</span>
        </div>
        <Swiper {...SliderSettings}>
          <SliderButton />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />
                <span className="secondaryText">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residences;

const SliderButton = () => {
  const swipe = useSwiper();
  return (
    <div className="flexCenter sliderbtn">
      <button className="button" onClick={() => swipe.slidePrev()}>
        &lt;
      </button>
      <button className="button" onClick={() => swipe.slideNext()}>
        &gt;
      </button>
    </div>
  );
};
