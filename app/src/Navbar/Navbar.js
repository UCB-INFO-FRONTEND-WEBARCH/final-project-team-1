import React from 'react';
import fairMLLogo from "./images/load-balancer--pool.svg"
import Box from "@cloudscape-design/components/box";



function Navbar() {
    return (
        <div className="nav">
            <Box variant="h1">
            <div className="nav-logo">
                <img
                    src={fairMLLogo}
                    alt="FairML Logo"
                    >
                </img>
                FairML
            </div>
            </Box>
        </div>
    );
}

export default Navbar;