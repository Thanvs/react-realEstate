import React, { useState } from "react";
import "./header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
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
    <section className="h-wrapper">
      <div className="h-container paddings innerWidth flexCenter">
        <img src="./logo.png" width={100} alt="logo" />
        <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
          <div className="h-menu flexCenter" style={getMenuStyle(isOpen)}>
            <a href="">Residences</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <a className="button" href="">
              Contact
            </a>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setIsOpen((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
}

export default Header;
