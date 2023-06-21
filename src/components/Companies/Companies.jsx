import React, { Fragment } from "react";
import "./companies.css";
function Companies() {
  return (
    <section className="comp-wrapper" id="companies">
      <div className="paddings innerWidth flexCenter comp-container">
        <img src="./equinix.png" alt="" />
        <img src="./realty.png" alt="" />
        <img src="./tower.png" alt="" />
        <img src="./prologis.png" alt="" />
      </div>
    </section>
  );
}

export default Companies;
