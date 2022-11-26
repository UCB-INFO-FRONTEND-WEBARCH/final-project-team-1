import React from 'react';
import Button from "@cloudscape-design/components/button";

function Hero() {
    return (
        <div className="hero">
            <h1>FairML</h1>
            <p>Audit your machine-learning models for discrimination and bias to make informed decisions around developing and deploying predictive risk-assessment tools.</p>
            <Button variant="primary">Get started</Button>
        </div>
    );
}

export default Hero;