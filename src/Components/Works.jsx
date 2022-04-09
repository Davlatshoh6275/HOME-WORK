import React from 'react';
import "../Styles/Works.css";
import Portfolio from './Portfolio';
import Customers from './Customers';
import Contacts from './Contacts';

export default function Works({ darkMode }) {
    return (
        <div className='Work'>

            < Portfolio darkMode={darkMode} />
            < Customers darkMode={darkMode} />
            < Contacts darkMode={darkMode}/>



        </div>
    )
}
