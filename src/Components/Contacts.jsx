import React from "react";
import "../Styles/Contacts.css";
import phone from "../Images/contact/phone.png";
import post from "../Images/contact/post.png";
import local from "../Images/contact/local.png";
import darkPhone from "../Images/contact/darkPhone.png";
import darkPost from "../Images/contact/darkPost.png";
import darkLocal from "../Images/contact/darkLocal.png";
import arrowDark from "../Images/contact/arrowDark.png";
import arrowWhite from "../Images/contact/arrowWhite.png";
import link1 from "../Images/information/link1.png";
import link2 from "../Images/information/link2.png";
import linkDark1 from "../Images/information/linkDark1.png";
import linkDark2 from "../Images/information/linkDark2.png";

export default function Contacts({ darkMode }) {
  return (
    <div>
      <div className="contactsBox">
        <h1 style={{ color: darkMode ? "#000" : "#fff" }}>CONTACTS</h1>

        <div className="contactsFlex">
          <div className="left">
            <h2>CONTACT US</h2>
            <p>Let’s get to the nex level together </p>

            <form className="formContact">
              <input
                type="text"
                placeholder="Enter your first name"
                id="inputText"
                className="input"
                style={{
                  width: "100%",
                  color: darkMode ? "#000" : "#fff",
                  borderColor: darkMode ? "#000" : "#fff",
                }}
              />{" "}
              <br /> <br />
              <input
                type="email"
                placeholder="Enter your email"
                id="emailText"
                className="Email"
                style={{
                  width: "100%",
                  color: darkMode ? "#000" : "#fff",
                  borderColor: darkMode ? "#000" : "#fff",
                }}
              />{" "}
              <br /> <br />
              <textarea
                placeholder="Your massage"
                name="story"
                id="textArea"
                rows="4"
                className="textArea"
                style={{
                  width: "100%",
                  color: darkMode ? "#000" : "#fff",
                  borderColor: darkMode ? "#000" : "#fff",
                }}
              >
                {" "}
              </textarea>
            </form>
            <button className={"button"}>Send</button>
          </div>
          <div className="contactRight">
            <div className="contactRightBox">
              <div className="numbersImg">
                <img src={darkMode ? darkPhone : phone} alt="img" /> <br />
                <img src={darkMode ? darkPost : post} alt="img" /> <br />
                <img src={darkMode ? darkLocal : local} alt="img" />
              </div>
              <div className="numbersText">
                <h3>+1 (647)-563-9114</h3>
                <h3>lead@gmail.com</h3>
                <h3>Margaretenstraße 70/3, 1050 Vienna, Austria</h3>
              </div>
            </div>

            <div className="contactRightBoxTwo">
              <div className="contactTwoLeft">
                <div
                  className="rightItem"
                  style={{ borderColor: darkMode ? "#000" : "#fff" }}
                >
                  <h2>BECOME A CLIENT</h2>
                  <p>business@LEAD.com</p>
                  <img src={darkMode ? arrowDark : arrowWhite} alt="img" />
                </div>
                <div
                  className="rightItem"
                  style={{ backgroundColor: darkMode ? "#000" : "#fff" }}
                >
                  <h2 style={{ color: darkMode ? "#fff" : "#000" }}>
                    BECOME A CLIENT
                  </h2>
                  <p style={{ color: darkMode ? "#fff" : "#000" }}>
                    business@LEAD.com
                  </p>
                  <img src={darkMode ? arrowWhite : arrowDark} alt="img" />
                </div>
              </div>

              <div className="contactTwoRight">
                <div className="leftItemOne">
                  <h2 style={{ color: darkMode ? "#000" : "#fff" }}>
                    FOLLOW US
                  </h2>
                  <ul className={"d-flex ulFlex"}>
                    <li>
                      <a href="#">
                        <img src={darkMode ? linkDark1 : link1} alt="link1" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={darkMode ? linkDark2 : link2} alt="link2" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className="leftItem"
                  style={{ borderColor: darkMode ? "#000" : "#fff" }}
                >
                  <h2>JOIN LEAD TEAM</h2>
                  <p style={{ color: darkMode ? "#000" : "#fff" }}>
                    business@LEAD.com
                  </p>
                  <img src={darkMode ? arrowDark : arrowWhite} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contactLineFlex ">
          <div
            className="contactLine"
            style={{ borderColor: darkMode ? "#000" : "#fff" }}
          ></div>
          <h3 style={{ color: darkMode ? "#000" : "#fff" }}>scroll up</h3>
        </div>
      </div>
    </div>
  );
}
