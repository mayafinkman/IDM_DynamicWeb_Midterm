import React from 'react';

const CountryImage = ({ countryName }) => {
    

    switch (countryName) {
        case 'france':
            return <img alt="france" src="https://www.gouvernement.fr/sites/default/files/styles/plein-cadre/public/locale/image/2018/11/1afpparisjoelsaget.jpg?itok=uxDj-roa" />;
        case 'italy':
            return <img alt="italy" src="https://www.italymagazine.com/sites/default/files/styles/960x460/public/roma-6-crop.jpg?itok=varExvjO" />;
        case 'egypt':
            return <img alt="egypt" src="https://www.geoex.com/app/uploads/2019/10/egypt-giza-pyramids-camels.jpg" />;
        case 'japan':
            return <img alt="japan" src="https://www.thetimes.co.uk/expert-traveller/wp-content/uploads/2018/11/shutterstock_776445706-1-2200x880.jpg" />;
        case 'greece':
            return <img alt="greece" src="https://company.moovit.com/wp-content/uploads/2016/10/Moovit-Greece-Travel-Guide.png" />;
        default: return <img alt="france" src="https://www.gouvernement.fr/sites/default/files/styles/plein-cadre/public/locale/image/2018/11/1afpparisjoelsaget.jpg?itok=uxDj-roa"/>
    }
}

function HeaderImage( { country } ) {
    return (
        <div className="CountryImage">
            <CountryImage countryName={country}/>
        </div>
    );


}

export default HeaderImage; 