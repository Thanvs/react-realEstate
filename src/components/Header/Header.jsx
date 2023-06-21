import React, { Fragment, useState } from "react";
import "./header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, Outlet } from "react-router-dom";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const getMenuStyle = (isOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return {
        right: !isOpen && "-100%",
      };
    }
  };
  return (
    <Fragment>
      <section className="h-wrapper">
        <div className="h-container paddings innerWidth flexCenter">
          <img src="./logo.png" width={100} alt="logo" />
          <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
            <div className="h-menu flexCenter" style={getMenuStyle(isOpen)}>
              <a href="#residence">Residences</a>
              <a href="#value">Our Value</a>
              <a href="#contact">Contact Us</a>
              <a href="#start">Get Started</a>
              <a className="button">Contact</a>
            </div>
          </OutsideClickHandler>
          <div className="menu-icon" onClick={() => setIsOpen((prev) => !prev)}>
            <BiMenuAltRight size={30} />
          </div>
        </div>
      </section>
      <Outlet />
    </Fragment>
  );
}

export default Header;
