import React, { useState, useEffect, useContext, createContext } from "react";
import { Context } from "../App";
import Button from "@cloudscape-design/components/button"


const Step_3 = () => {
	
	const { step, setStep, percent, setPercent } = useContext(Context);
	const [temp, setTemp] = useState(0); //temporary state to store user percent input 
	

  	return (
   		<div className="Step">
		<div>
			<h1>Enter your Disparity Intolerance (in %)</h1>
			<h4>If a specific bias metric for a group is within this percentage of the reference group, this audit will pass</h4>
			<input
				type="text"
				placeholder="%"
				value = {temp}
				onChange={e => setTemp(e.target.value)}
			/>	
			<button onClick = {() => setPercent(temp)}>
				Enter
			</button>		
			<p>you inputted: {percent}%</p>
		</div>

		<div>
			<h1>Select fairness metrics</h1>
			<h4>Configure the bias and fairness audit by selecting the fairness measures to audit and the fairness threshold to determine when the audit passes or fails. FairML can compute all the following fairness metrics at once – if you are not sure what you are looking for, select all and we will walk you through the results.</h4>
		</div>
    	</div>
  	);
  };
export default Step_3;
