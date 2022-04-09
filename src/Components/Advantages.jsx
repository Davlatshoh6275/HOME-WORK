import React from "react";
import "../Styles/Advantages.css";
import start from "../Images/information/Start.png";

export default function Advantages({ darkMode }) {
  return (
    <div className="advantages">
      <h1 style={{ color: darkMode ? "#000" : "#fff" }}>OUR ADVANTAGES</h1>

      <h2 style={{ color: darkMode ? "#000" : "#fff" }}>
        SPEED, QUALITY AND <br /> MODERNITY
      </h2>

      <div className="advantagesBox">
        <div
          style={{ borderColor: darkMode ? "#000" : "#fff" }}
          className="advantagesPages"
        >
          <div
            style={{ backgroundColor: darkMode ? "#000" : "#fff" }}
            className="pagesItemOne"
          ></div>
          <div
            style={{ backgroundColor: darkMode ? "#000" : "#fff" }}
            className="pagesItemTwo"
          ></div>
          <div
            style={{ backgroundColor: darkMode ? "#000" : "#fff" }}
            className="pagesItemThree"
          ></div>
          <div
            style={{ backgroundColor: darkMode ? "#000" : "#fff" }}
            className="pagesItemFour"
          ></div>
        </div>

        <div className="advantagesText">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore{" "}
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore ed do eiusmod tempor
            incididunt ut labore et{" "}
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore ed do eiusmod tempor
            incididunt ut labore et{" "}
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore ed do eiusmod tempor
            incididunt ut labore et{" "}
          </p>
        </div>

        <div className="advantagesCircl">
          <img src={start} alt="start" />
        </div>

        <div className="advantagesScrolDown">
          <div
            className="advantagesScrollLine"
            style={{ borderColor: darkMode ? "#000" : "#fff" }}
          ></div>
          <h2>scroll down</h2>
        </div>
      </div>
    </div>
  );
}
