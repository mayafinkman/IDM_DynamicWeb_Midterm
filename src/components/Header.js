import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'


function Header() {
    return (
        <div className="Header">
            <div className="WebTitle">
                <h1>Finkman Travel Agency</h1>
                <div className="TitleIcon">
                    <FontAwesomeIcon icon={faPlaneDeparture} />
                </div>
            </div> 
            <div className="CountryNav">
                <a href="/?country=france">France</a>
                <a href="/?country=italy">Italy</a>
                <a href="/?country=egypt">Egypt</a>
                <a href="/?country=japan">Japan</a>
                <a href="/?country=greece">Greece</a>
            </div>
        </div>

    )

}

export default Header;