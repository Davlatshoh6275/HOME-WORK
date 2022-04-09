import React from "react";
import "../Styles/Google.css";
import lineLeft from "../Images/google/lineLeft.png";
import lineRight from "../Images/google/lineRight.png";
import google from "../Images/google/google.png";
import user from "../Images/google/user.png";
import starsWhite from "../Images/google/stars.png";
import darkStars from "../Images/google/darkStars.png";
import darkGoogle from "../Images/google/darkGoogle.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Google({ darkMode }) {
  return (
    <div>
      <div className="googleBox">
        <div className="googleTitle">
          <h1 style={{ color: darkMode ? "#000" : "#fff" }}>REVIEWS</h1>
          <div className="imageFlex">
            <img src={lineLeft} alt="lineLeft" />
            <img src={darkMode ? darkGoogle : google} alt="google" />
            <img src={lineRight} alt="lineRight" />
          </div>
        </div>
        <Carousel className="carusel">
          <div className="boxFlex">
            <div
              className="item  "
              style={{ borderColor: darkMode ? "#000" : "#fff" }}
            >
              <img src={user} alt="user" />
              <img src={darkMode ? darkStars : starsWhite} alt="stars" />
              <span>12.12.2021</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
              </p>
            </div>
            <div
              className="item "
              style={{ borderColor: darkMode ? "#000" : "#fff" }}
            >
              <img src={user} alt="user" />
              <img src={darkMode ? darkStars : starsWhite} alt="stars" />
              <span>12.12.2021</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
              </p>
            </div>
            <div
              className="item "
              style={{ borderColor: darkMode ? "#000" : "#fff" }}
            >
              <img src={user} alt="user" />
              <img src={darkMode ? darkStars : starsWhite} alt="stars" />
              <span>12.12.2021</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
              </p>
            </div>
          </div>
        </Carousel>

        <div className="googlelineFlex ">
          <div
            className="googleLine"
            style={{ borderColor: darkMode ? "#000" : "#fff" }}
          ></div>
          <h1 style={{ color: darkMode ? "#000" : "#fff" }}>scroll down</h1>
        </div>
      </div>
    </div>
  );
}
