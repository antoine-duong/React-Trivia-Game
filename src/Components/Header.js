// Config
import React from "react";
// Modules
// Components
// Stylings
import "../Stylesheets/Header.css"

const Header = ()=>{
    return (
        <header>
            <div className="wrapper">
                <h1 className="title">Quarantine Pursuit</h1>
                {/* Credit to Alvaro (https://codepen.io/alvarotrigo/pen/dyzxgOO) for the animation styling on the H1! */}
                <h3>please choose a category + number of questions to begin!</h3>
            </div>
        </header>
    );
}

export default Header;