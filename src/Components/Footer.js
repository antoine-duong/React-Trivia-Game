// Config
import React from "react";
// Modules
// Components
// Stylings
import "../Stylesheets/Footer.css";

const Footer = ()=>{
    return (
        <footer>
            <div className="wrapper">
                <div className="infoContainer">
                    <p>created using ReactJS, Axios + Firebase</p>
                    <p>data provided by: <a href="https://opentdb.com/api_config.php">Open Triva API</a></p>
                    <p>Created @ <a href="https://junocollege.com/">Juno College</a></p>
                </div>

                <p>check out what else we're working on!</p>
                <div className="rowContainer">
                    <div className="individualContainer">
                        <p>Harrison:</p> 
                        <a href="https://github.com/harrisonhui"><i className="fa-brands fa-github"></i></a> 
                        <a href="https://ca.linkedin.com/in/harrison-hui-33a560138"><i className="fa-brands fa-linkedin"></i></a>
                    </div>

                    <div className="individualContainer">
                        <p>FJ:</p>
                        <a href="https://github.com/FjPierre"><i className="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/faheen-jean-pierre/"><i className="fa-brands fa-linkedin"></i></a>
                    </div>

                    <div className="individualContainer">
                        <p>Antoine:</p> 
                        <a href="https://github.com/antoine-duong"><i className="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/tuananh-duong/"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                    
                    <div className="individualContainer">
                        <p>Kyler:</p> 
                        <a href="https://github.com/KylerJung"><i className="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/kyler-jung/"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;