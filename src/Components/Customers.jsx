import React from 'react';
import "../Styles/Customers.css";
import { Carousel } from 'react-responsive-carousel';
import Festagen from "../Images/customers/festagentDark.png"
import Yandex from "../Images/customers/yandexLight.png"
import Hunter from "../Images/customers/Hunter_Logow 1.png"
import Armix from "../Images/customers/armixLight.png"
import WorkUa from "../Images/customers/work-ua-invertedDark.png"
import Veeame from "../Images/customers/veeamLight.png"
import HunterDark from "../Images/customers/Hunter_LogowDark.png"
import VeeameDark from "../Images/customers/veeamDark.png"
import ArmixDark from "../Images/customers/armixDark.png"
import WorkUaLight from "../Images/customers/work-ua-invertedLight.png"



export default function Customers({ darkMode }) {
    return (
        <div>
            <div className="Customers">
                <h1 style={{ color: darkMode ? "#000" : "#fff" }}> OUR CUSTOMERS </h1>
                <h2>WE HAVE COLLABORATED <br /> WITH BRANDS SUCH AS</h2>

                <Carousel className='CustomersCarusel'>
                    <div className="CutomersFlex">
                        <div className="CustomersLeft">
                            <img src={Festagen} alt="img" />
                            <img src={Yandex} alt="img" />
                            <img src={darkMode ? HunterDark : Hunter} alt="img" />
                        </div>
                        <div className="CustomersMiddle">
                            <img src={darkMode ? ArmixDark : Armix} alt="img" />
                            <img src={darkMode ? WorkUa : WorkUaLight} alt="img" />
                            <img src={darkMode ? VeeameDark : Veeame} alt="img" />
                        </div>
                        <div className="CustomersRight">
                            <img src={Festagen} alt="img" />
                            <img src={darkMode ? HunterDark : Hunter} alt="img" />
                            <img src={Yandex} alt="img" />
                        </div>
                    </div>
                </Carousel>

                <div style={{ borderColor: darkMode ? "#000" : "#fff" }} className="customersLine">
                    <div className="customersLineItem"></div>
                </div>

                <div className="CustomersScrolDown">
                    <div className="CustomersScrollLine" style={{ borderColor: darkMode ? "#000" : "#fff" }}></div>
                    <h2>scroll down</h2>
                </div>
            </div>

        </div>
    )
}
