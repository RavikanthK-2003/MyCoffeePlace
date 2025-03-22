import React from "react";
import "../styles/ImageShowcase.css";
// import mainImage from "../assets/background.jpg";
import smallImage1 from "../assets/pic1.jpg";
import smallImage2 from "../assets/pic2.jpg";

const ImageShowcase = () => {
  return (
    <div className="image-showcase">
      {/* <img src={mainImage} alt="Coffee" className="main-img" /> */}
      <div className="top-right">
        <p>12K</p>
        <div>
          <img src={smallImage1} alt="Small Coffee 1" className="small-img" />
          <p>
          Bold, smooth, and pure—our Black Coffee is the perfect pick-me-up for true coffee lovers.
          </p>
        </div>
      </div>
      <div className="bottom-right">
        <p>47K</p>
        <div>
          <img src={smallImage2} alt="Small Coffee 2" className="small-img" />
          <p>
          Indulge in our creamy, velvety Cappuccino – a perfect blend of rich espresso and frothy milk.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageShowcase;