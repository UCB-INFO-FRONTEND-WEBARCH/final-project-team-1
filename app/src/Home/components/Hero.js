import React, { useState, useEffect, useContext} from 'react';
import { Context } from "../../App";
import Button from "@cloudscape-design/components/button";
import Grid from "@cloudscape-design/components/grid";

function Hero() {
	
	const { step, setStep } = useContext(Context);
	
    return (
        <div className="hero">
            <Grid
            gridDefinition={[{ colspan: 5, offset:{ xxs:1} }, { colspan: 5 }]}
            >
                <div></div>
                <div>
                    <h1>FairML</h1>
                    <p>Audit your machine-learning models for discrimination and bias to make informed decisions around developing and deploying predictive risk-assessment tools.</p>
                    <Button variant="primary" onClick={() => {setStep(1) }}>Get started</Button>
                </div>
            </Grid>
        </div>
    );
}

export default Hero;