import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchway, faPizzaSlice, faAnkh, faUmbrellaBeach, faMountain } from '@fortawesome/free-solid-svg-icons'

const CountryIcon = ({ countryName }) => {
    

    switch (countryName) {
        case 'france':
            return <FontAwesomeIcon icon={faArchway} />;
        case 'italy':
            return <FontAwesomeIcon icon={faPizzaSlice} />;
        case 'egypt':
            return <FontAwesomeIcon icon={faAnkh} />;
        case 'japan':
            return <FontAwesomeIcon icon={faMountain} />;
        case 'greece':
            return <FontAwesomeIcon icon={faUmbrellaBeach} />;
        default: return <FontAwesomeIcon icon={faArchway} />;
    }
}

function WelcomeIcon( { country } ) {
    return (
        <div className="WelcomeIcon">
            <CountryIcon countryName={country}/>
        </div>
    );


}

export default WelcomeIcon; 