import React, { useState } from "react";
import HomePage from "./Components/HomePage";
import { Route, Routes, Link } from "react-router-dom";
import logo from "./Images/navbar/111111.png";
import logoWhite from "./Images/navbar/iconWhite.png";
import "./Styles/navbar.css";
import ResponsiveDarkLogo from "./Images/responsive/navbarLogo/111111 1.png";
import ResponsiveLightLogo from "./Images/responsive/navbarLogo/Group 78.png";
import About from "./Components/About";
import Works from "./Components/Works";
import ContackTwo from "./Components/ContackTwo";
import Clients from "./Components/Clients";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [count, setCount] = useState(0);

  console.log(count);

  return (
    <div className="mainBack">
      <div className={darkMode ? "light-mode" : "dark-mode display"}>
        <div className="navBar">
          <div className="menu">
            <h1>
              <i class="bx bx-menu"></i>
            </h1>
          </div>
          <div className="navbar ">
            <div className="logo">
              <img src={darkMode ? logoWhite : logo} alt="logo" />
              <img
                src={darkMode ? ResponsiveLightLogo : ResponsiveDarkLogo}
                alt="logo"
              />
            </div>
            <div className="links ">
              <div className="navbarBoxFlex">
                <div className={" disNoneOption"}>
                  <select
                    name=""
                    id=""
                    style={{ color: darkMode ? "#000" : "#fff" }}
                    className={"dropdown"}
                  >
                    <option value="1">En</option>
                    <option value="3">Ru</option>
                    <option value="2">Uzb</option>
                  </select>
                </div>

                <div className="switch-checkbox mt-2 disNonecheckbox">
                  <label className="switch">
                    <input
                      type="checkbox"
                      onChange={() => setDarkMode(!darkMode)}
                    />
                    <span className="Appslider round"> </span>
                  </label>
                </div>

                <ul className={"d-flex  disNone textDec"}>
                  <li
                    style={{ color: darkMode ? "#000" : "#fff" }}
                    onClick={() => setCount(0)}
                  >
                    <Link
                      to={"/Home"}
                      className="link"
                      style={{ color: darkMode ? "#000" : "#fff" }}
                    >
                      Home
                    </Link>
                  </li>
                  <li
                    style={{ color: darkMode ? "#000" : "#fff" }}
                    onClick={() => setCount(1)}
                  >
                    <Link
                      to={"/About"}
                      className="link"
                      style={{ color: darkMode ? "#000" : "#fff" }}
                    >
                      About
                    </Link>
                  </li>
                  <li
                    style={{ color: darkMode ? "#000" : "#fff" }}
                    onClick={() => setCount(2)}
                  >
                    <Link
                      to={"/Works"}
                      className="link"
                      style={{ color: darkMode ? "#000" : "#fff" }}
                    >
                      Works
                    </Link>
                  </li>

                  <li
                    style={{ color: darkMode ? "#000" : "#fff" }}
                    onClick={() => setCount(3)}
                  >
                    <Link
                      to={"/Clients"}
                      className="link"
                      style={{ color: darkMode ? "#000" : "#fff" }}
                    >
                      For Clients
                    </Link>
                  </li>
                  <li
                    style={{ color: darkMode ? "#000" : "#fff" }}
                    onClick={() => setCount(4)}
                  >
                    <Link
                      to={"/ContacTwo"}
                      className="link"
                      style={{ color: darkMode ? "#000" : "#fff" }}
                    >
                      Contacts
                    </Link>
                  </li>
                  <button
                    className={"button "}
                    style={{ color: darkMode ? "#000" : "#fff" }}
                  >
                    {" "}
                    <span> Start a project </span>{" "}
                    <i class="bx bxs-right-arrow"></i>{" "}
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Routes>
          {count === 0 ? (
            <Route path="/Home" element={<HomePage darkMode={darkMode} />} />
          ) : "" || count === 1 ? (
            <Route path="/About" element={<About darkMode={darkMode} />} />
          ) : "" || count === 2 ? (
            <Route path="/Works" element={<Works darkMode={darkMode} />} />
          ) : (
            ""
          )}

          <Route
            path="ContacTwo"
            element={<ContackTwo darkMode={darkMode} />}
          />
          <Route path="Clients" element={<Clients darkMode={darkMode} />} />
        </Routes>
      </div>
    </div>
  );
}
