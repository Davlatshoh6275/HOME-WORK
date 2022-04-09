import React from "react";
import "../Styles/clients.css";
import Contacts from "./Contacts";

export default function Clients({ darkMode }) {
  return (
    <div>
      <div className="Clients">
        <h1 style={{ color: darkMode ? "#000" : "#fff" }}> FOR CLIENTS </h1>

        <div className="contentClients">
          <div className="itemClientOne">
            <div className="textClient">
              <p>
                IF YOU ARE AN EXISTING CUSTOMER AND WOULD LIKE TO PAY THE
                INVOICE, PLEASE FOLLOW THE STEPS BELOW
              </p>
              <hr />
            </div>

            <form className="formClients">
              <input
                type="text"
                placeholder="Enter your first name"
                style={{
                  width: "100%",
                  color: darkMode ? "#000" : "#fff",
                  borderColor: darkMode ? "#000" : "#fff",
                  backgroundColor: darkMode ? "#fff" : "#131313",
                }}
              />
              <input
                type="text"
                placeholder="Enter your last name"
                style={{
                  width: "100%",
                  color: darkMode ? "#000" : "#fff",
                  borderColor: darkMode ? "#000" : "#fff",
                  backgroundColor: darkMode ? "#fff" : "#131313",
                }}
              />
              <input
                type="text"
                placeholder="Services you pay for"
                style={{
                  width: "100%",
                  color: darkMode ? "#000" : "#fff",
                  borderColor: darkMode ? "#000" : "#fff",
                  backgroundColor: darkMode ? "#fff" : "#131313",
                }}
              />
              <input
                type="text"
                placeholder="Amount"
                style={{
                  width: "100%",
                  color: darkMode ? "#000" : "#fff",
                  borderColor: darkMode ? "#000" : "#fff",
                  backgroundColor: darkMode ? "#fff" : "#131313",
                }}
              />
            </form>

            <button className="btnBuy">Pay now</button>
          </div>

          <div className="itemClientTwo">
            <div className="textClientTwo">
              <p>
                IF YOU ARE AN EXISTING CUSTOMER AND WOULD LIKE TO PAY THE
                INVOICE, PLEASE FOLLOW THE STEPS BELOW
              </p>
              <hr />
            </div>

            <form className="formClientsTwo">
              <input
                type="text"
                placeholder="Enter your first name"
                style={{
                  width: "100%",
                  color: darkMode ? "#000" : "#fff",
                  borderColor: darkMode ? "#000" : "#fff",
                  backgroundColor: darkMode ? "#fff" : "#131313",
                }}
              />
              <input
                type="text"
                placeholder="Enter your last name"
                style={{
                  width: "100%",
                  color: darkMode ? "#000" : "#fff",
                  borderColor: darkMode ? "#000" : "#fff",
                  backgroundColor: darkMode ? "#fff" : "#131313",
                }}
              />
              <input
                type="text"
                placeholder="Services you pay for"
                style={{
                  width: "100%",
                  color: darkMode ? "#000" : "#fff",
                  borderColor: darkMode ? "#000" : "#fff",
                  backgroundColor: darkMode ? "#fff" : "#131313",
                }}
              />
              <input
                type="text"
                placeholder="Amount"
                style={{
                  width: "100%",
                  color: darkMode ? "#000" : "#fff",
                  borderColor: darkMode ? "#000" : "#fff",
                  backgroundColor: darkMode ? "#fff" : "#131313",
                }}
              />
            </form>

            <button className="btnBuy">Subscribe</button>
          </div>
        </div>
        <div className="clientsLineFlex ">
          <div
            className="clientsLine"
            style={{ borderColor: darkMode ? "#000" : "#fff" }}
          ></div>
          <h3 style={{ color: darkMode ? "#000" : "#fff" }}>scroll down</h3>
        </div>
      </div>

      <Contacts darkMode={darkMode} />
    </div>
  );
}
