import React from "react";
import "../Styles/Design.css";
import start from "../Images/information/Start.png";
import backImg from "../Images/design/backImg.png";
import frontImg from "../Images/design/frontImg.png";

export default function Design({ darkMode }) {
  return (
    <div>
      <div className="boxDesign">
        <h1 className="disH1" style={{ color: darkMode ? "#000" : "#fff" }}>
          SERVICES
        </h1>

        <div className="designFlex">
          <div className="left">
            <div
              className="designH1"
              style={{ backgroundColor: darkMode ? "#000" : "#fff" }}
            >
              <h1 style={{ color: darkMode ? "#fff" : "#000" }}>DESING</h1>
            </div>
            <h1 style={{ color: darkMode ? "#000" : "#fff" }}>TECHNOLOGY</h1>
            <h1 style={{ color: darkMode ? "#000" : "#fff" }}>MARKETING</h1>
            <h1 style={{ color: darkMode ? "#000" : "#fff" }}>RESEARCH</h1>

            <div className="circl">
              <img src={start} alt="start" />
            </div>
          </div>
          <div className="right">
            <img src={backImg} alt="img" className="backImg" />
            <img src={frontImg} alt="img" />
            <h1 style={{ color: darkMode ? "#000" : "#fff" }}>DESIGN</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat
            </p>
          </div>
        </div>

        <div className="designlineFlex ">
          <div
            className="designLine"
            style={{ borderColor: darkMode ? "#000" : "#fff" }}
          ></div>
          <h1 style={{ color: darkMode ? "#000" : "#fff" }}>scroll down</h1>
        </div>
      </div>
    </div>
  );
}
