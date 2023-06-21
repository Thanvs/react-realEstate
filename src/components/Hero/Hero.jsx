import React, { Fragment } from "react";
import "./hero.css";
import { HiLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Outlet } from "react-router-dom";
function Hero() {
  return (
    <section className="hero-wrapper" id="hero">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="hero-left">
          <div className="hero-title">
            <div className="hero-orange"></div>
            <motion.h1
              initial={{ y: "7rem", opacity: 0 }}
              animate={{ y: "0rem", opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Discover <br /> Most Suitable <br />
              Property
            </motion.h1>
          </div>
          <div className="flexColStart hero-desc">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>
              Forget all difficulties in finding a residence for you Search
            </span>
          </div>
          <div className="innerWidth hero-search flexCenter">
            <HiLocationMarker
              color="var(--blue)"
              className="search-icon"
              size={25}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search For Properties"
            />
            <button className="button">Search</button>
          </div>
          <div className="hero-stats flexCenter">
            <div className="hero-Stat flexColCenter">
              <span>
                <CountUp start={9000} end={10000} duration={4} />
                <span style={{ color: "gold" }}>+</span>
              </span>
              <p>Premium Product</p>
            </div>
            <div className="hero-Stat flexColCenter">
              <span>
                <CountUp start={900} end={1000} duration={4} />
                <span style={{ color: "gold" }}>+</span>
              </span>
              <p>Happy Customer</p>
            </div>
            <div className="hero-Stat flexColCenter">
              <span>
                <CountUp start={50} end={100} duration={4} />
                <span style={{ color: "gold" }}>+</span>
              </span>
              <p>Awards Winning</p>
            </div>
          </div>
        </div>
        <motion.div
          className="flex-center hero-right"
          initial={{ x: "7rem", opacity: 0 }}
          animate={{ x: "0rem", opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
        >
          <div className="img-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
