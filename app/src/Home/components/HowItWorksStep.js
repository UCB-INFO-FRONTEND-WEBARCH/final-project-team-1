import React from 'react';

function HowItWorksStep(props) {
    return (
        <div className='how-it-works-step'>
            <h3>{props.header}</h3>
            <div 
                className='how-it-works--description'>
                <p>{props.description}</p>
                <img
                    src={require(`../images/${props.background}`)}
                    alt="section icon"
                >
                </img> 
            </div>  
        </div>
    );
}

export default HowItWorksStep;