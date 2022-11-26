import React from 'react';
import fairMLLogo from "./images/load-balancer--pool.svg"


function Navbar() {
    return (
        <div className="nav">
            <div className="nav-logo">
                <img
                    src={fairMLLogo}
                    alt="FairML Logo"
                    >
                </img>
                <h3>FairML</h3>
            </div>
        </div>
    );
}

export default Navbar;