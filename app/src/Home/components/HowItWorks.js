import React from 'react';
import HowItWorksStep from './HowItWorksStep';
import Grid from "@cloudscape-design/components/grid";

function HowItWorks() {
    return (
        <div className='how-it-works'>
            <HowItWorksStep 
                header='How it works'
                description='Try out the FairML open source toolkit using your own data containg predictions and protected attributes to audit bias and fairness. This toolkit will walk you through the following steps.'
                background='document--conversion.png'
            />
            <HowItWorksStep 
                header='Step 1'
                description='Format your observed data and model data based on instructions, and then upload it.'
                background='data--set.png'
            />
            <HowItWorksStep 
                header='Step 2'
                description='Select protected demographic attributes that need to be audited for bias.'
                background='data--apis.png'
            />
            <HowItWorksStep 
                header='Step 3'
                description='Select method for determining reference group. Reference groups are used to calculate relative disparities. For example, if you select Male as the reference group for Gender attribute, FairML will then use Male as the baseline to calculate any biases for other groups in the attribute.'
                background='flow--chart.png'
            />
            <HowItWorksStep 
                header='Your FairML report'
                description='Your report is thorough and might include more than what you need – FairML will walk you through how to intepret it with a simple questionnaire.'
                background='math--curve.png'
            />
        </div>
    );
}

export default HowItWorks;