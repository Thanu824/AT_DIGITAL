import React from "react";
import "../Components/Body2.css";
import img3 from "../image/img3.png";

const Body2 = () => {
  return (
    <div className="maindisplay2">
      <div className="display2">
        <div className="display3">
          <h3 className="h3"> Digital Strategy Consulting</h3>
        </div>
        <p className="p">
          {" "}
          Your digital strategy should complement the overall marketing strategy
          of the company. In online marketing, each component will never work in
          isolation and every business needs a different mix. We provide a clear
          concept and strategic overview to find the most efficient model for
          your business.
        </p>
        <div className="button1">LEARN MORE</div>
      </div>
      <img src={img3} alt="img3" />
    </div>
  );
};

export default Body2;
