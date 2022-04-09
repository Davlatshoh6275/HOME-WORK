import React from "react";
import "../Styles/Portfolio.css";
import Left1 from "../Images/portfolio/left1.png";
import Left2 from "../Images/portfolio/left2.png";
import Right1 from "../Images/portfolio/right1.png";
import Right2 from "../Images/portfolio/right2.png";
import { Carousel } from "react-responsive-carousel";

export default function Portfolio({ darkMode }) {
  return (
    <div className="portfolio">
      <div className="portfolioBox">
        <h1 style={{ color: darkMode ? "#000" : "#fff" }}>PORTFOLIO</h1>

        <Carousel className="portfolioCarusel">
          <div className="Flex">
            <div className="left">
              <div className="imgBoxPortfolio">
                <img src={Left1} alt="img" />
                <h2 style={{ color: darkMode ? "#000" : "#fff" }}>OUT ZONE </h2>
              </div>
              <div className="imgBoxPortfolio">
                <img src={Left2} alt="img" />
                <h2 style={{ color: darkMode ? "#000" : "#fff" }}>OUT ZONE </h2>
              </div>
            </div>
            <div className="right">
              <div className="imgBoxPortfolio">
                <img src={Right1} alt="img" />
                <h2 style={{ color: darkMode ? "#000" : "#fff" }}>OUT ZONE </h2>
              </div>
              <div className="imgBoxPortfolio">
                <img src={Right2} alt="img" />
                <h2 style={{ color: darkMode ? "#000" : "#fff" }}>OUT ZONE </h2>
              </div>
            </div>
            <div
              className="portfolioPagesBox"
              style={{ borderColor: darkMode ? "#000" : "#fff" }}
            >
              <div className="portfolioPage"></div>
            </div>
          </div>
        </Carousel>
      </div>

      <div className="portfolioLineFlex ">
        <div
          className="portfolioLine"
          style={{ borderColor: darkMode ? "#000" : "#fff" }}
        ></div>
        <h1 style={{ color: darkMode ? "#000" : "#fff" }}>scroll down</h1>
      </div>
    </div>
  );
}
