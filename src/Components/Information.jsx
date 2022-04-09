import React from 'react';
import "../Styles/Information.css";
import start from "../Images/information/Start.png";
import link1 from "../Images/information/link1.png";
import link2 from "../Images/information/link2.png";
import linkDark1 from "../Images/information/linkDark1.png";
import linkDark2 from "../Images/information/linkDark2.png";


export default function Information({ darkMode }) {


    console.log(darkMode);

    return (
        <div className={"boxInfoemation"}>

            <div className="information">
                <hr />
                <h1 style={{ color: darkMode ? "#000" : "#fff" }}>INFORMATION  ABOUT </h1>
                <hr />

                <div className='textDis'>
                    <div className="textLeft">
                        <p style={{ color: darkMode ? "#000" : "#fff" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem </p>
                    </div>
                    <div className="textRight">
                        <div className="circl">
                            <img src={start} alt="start" />
                        </div>
                    </div>

                </div>
                <div className="linksF">
                    <div className="box2">

                        <h2 style={{ color: darkMode ? "#000" : "#fff" }}>FOLLOW US</h2>
                        <ul className={"d-flex ulFlex"}>
                            <li><a href="#"><img src={darkMode ? linkDark1 : link1} alt="link1" /></a></li>
                            <li><a href="#"><img src={darkMode ? linkDark2 : link2} alt="link2" /></a></li>
                        </ul>
                    </div>
                    <div className="lineFlex ">
                        <div className="line" style={{ borderColor: darkMode ? "#000" : "#fff" }}></div>
                        <h1 style={{ color: darkMode ? "#000" : "#fff" }}>scroll down</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
