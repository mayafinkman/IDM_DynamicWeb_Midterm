import React from 'react';

function Header() {
    return (
        <header className="Header">
        <h2>Finkman Travel Agency</h2>
            <div className="CountryNav">
                <a href="/?country=france">France</a>
                <a href="/?country=italy">Italy</a>
                <a href="/?country=egypt">Egypt</a>
                <a href="/?country=japan">Japan</a>
                <a href="/?country=greece">Greece</a>
            </div>
        </header>

    )

}

export default Header;