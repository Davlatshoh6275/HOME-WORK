import React from "react";
import "../Styles/homePage.css";
import back1 from "../Images/homePage/Vector2.png";
import back2 from "../Images/homePage/back2.png";
import Right from "../Images/homePage/Right.png";
import responsiveBackW from "../Images/responsive/homePage/backWhite.png";
import responseveBackR from "../Images/responsive/homePage/backRed.png";
import Information from "./Information";
import Google from "./Google";
import Design from "./Design";
import Portfolio from "./Portfolio";
import Contacts from "./Contacts";

export default function HomePage({ darkMode }) {
  return (
    <div>
      <div
        className={"bg"}
        style={{ backgroundColor: darkMode ? "#fff" : "#000" }}
      >
        <div
          className={"box-shadow"}
          style={{ color: darkMode ? "#000" : "#fff" }}
        ></div>
        <div className="back">
          <div
            className="vector"
            style={{
              backgroundImage: "url(" + `${darkMode ? back2 : back1}` + ")",
            }}
          ></div>
          <div
            className="vectorTwo"
            style={{
              backgroundImage:
                "url(" +
                `${darkMode ? responseveBackR : responsiveBackW}` +
                ")",
            }}
          ></div>
        </div>
        <div className="HomeText">
          <div className="text">
            <ul>
              <li>
                Lead is a digital innovation studio that leverages best-in-class{" "}
                <br /> strategy, design and development
              </li>
            </ul>
            <h3 style={{ color: darkMode ? "#000" : "#fff" }}> WE RETHINK </h3>
            <h2 style={{ color: darkMode ? "#000" : "#fff" }}>THE WEB</h2>
            <div className="circlRed">
              <p className="pMargin">Consultation</p>
              <img src={Right} alt="right" />
            </div>
          </div>
        </div>
        <div className={"box-shadow2"}></div>
      </div>
      <Information darkMode={darkMode} />
      <Google darkMode={darkMode} />
      <Design darkMode={darkMode} />
      <Portfolio darkMode={darkMode} />
      <Contacts darkMode={darkMode} />
    </div>
  );
}
