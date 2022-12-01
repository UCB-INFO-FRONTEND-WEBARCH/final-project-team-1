import React, { useState, useEffect, useContext} from 'react';
import { Context } from "../../App";
import Button from "@cloudscape-design/components/button";
import Grid from "@cloudscape-design/components/grid";

// Renders Hero section on Home page

function Hero() {
	
	const { step, setStep } = useContext(Context);
	
    return (
        <div className="hero">
            <div className="hero--content">
            <Grid
            gridDefinition={[{ colspan: 5, offset:{ xxs:1} }, { colspan: 5 }]}
            >
                {/* Leave first div element empty to align hero content to right side of the grid */}
                <div></div>
                <div>
                    <h1>FairML</h1>
                    <p>Audit your machine-learning models for discrimination and bias to make informed decisions around developing and deploying predictive risk-assessment tools.</p>
                    <Button variant="primary" onClick={() => {setStep(1) }}>Get started</Button>
                </div>
            </Grid>
            </div>
        </div>
    );
}

export default Hero;