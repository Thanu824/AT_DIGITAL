import React from "react";
import "../Components/Body1.css";
import img2 from "../image/img2.png";

const Body1 = () => {
  return (
    <div className="maindisplay">
      <img src={img2} alt="img2" />

      <div className="display1">
        <h3 className="h3"> Web & Mobile App Development </h3>
        <p className="p">
          {" "}
          Your web and mobile Apps are pieces of the puzzle to grow your
          business. We use frameworks which tailor content and engagement
          methods to respond to different intents shown by your potential
          customers who interact with your business online.
        </p>
        <div className="button1">LEARN MORE</div>
      </div>
    </div>
  );
};
export default Body1;
