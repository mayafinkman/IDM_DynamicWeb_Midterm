import React from 'react';

function Header() {
    return (
        <div className="Header">
        <h1>Finkman Travel Agency</h1>
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