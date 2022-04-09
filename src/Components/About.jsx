import React from 'react';
import start from "../Images/information/Start.png";
import "../Styles/About.css";
import Advantages from './Advantages';
import Contacts from './Contacts';


export default function About({ darkMode }) {
    return (
        <div>

            <div className='About'>

                <h1 style={{ color: darkMode ? "#000" : "#fff" }}>INFORMATION ABOUT</h1>

                <h2>WANT A UNIQUE DESIGN ? <br /> WE WILL HELP YOU !</h2>
                <div className="aboutBox">

                    <div className="aboutBoxLeft">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate </p>
                    </div>

                    <div className="aboutBoxRight">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate </p>
                    </div>

                </div>

                <div className="aboutCircl">
                    <img src={start} alt="start" />
                </div>

                <div className="scrolDown">
                    <div className="scrollLine" style={{ borderColor: darkMode ? "#000" : "#fff" }}></div>
                    <h2>scroll down</h2>
                </div>

            </div>

            < Advantages darkMode={darkMode}/>
            < Contacts darkMode={darkMode}/>

        </div>
    )
}
