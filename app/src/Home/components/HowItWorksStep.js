import React from 'react';
import Grid from "@cloudscape-design/components/grid";

function HowItWorksStep(props) {
    return (
        <div className='how-it-works-step'>
            <Grid
            gridDefinition={[{ colspan: 5, offset:{ xxs:1} }, { colspan: 5 }]}
            >
                <div><h3>{props.header}</h3></div>
                <div className='how-it-works--description'>
                    {props.description}
                    <img
                    src={require(`../images/${props.background}`)}
                    alt="section icon"
                    >
                    </img> 
                </div>
            </Grid>
        </div>
    );
}

export default HowItWorksStep;