import React, { useState, useEffect, useContext, createContext } from "react";
import { Context } from "../App";
import Button from "@cloudscape-design/components/button";
import Checkbox from "@cloudscape-design/components/checkbox";
import Input from "@cloudscape-design/components/input";

const Step_3 = () => {
	
	const { step, setStep, percent, setPercent } = useContext(Context);
	const [temp, setTemp] = useState(80); //temporary state to store user percent input 
	const [checked, setChecked] = useState(true);

  	return (
   		<div className="Step">
		<div>
			<h1>Enter your Disparity Intolerance (in %)</h1>
			<h4>If a specific bias metric for a group is within this percentage of the reference group, this audit will pass</h4>
			<Input
      			onChange={({ detail }) => setTemp(detail.value)}
				value={temp}
				autoFocus
				inputMode="numeric"
				type="number"
			/>
			<Button variant="primary" onClick = {() => setPercent(temp)}>
				Enter
			</Button>		
			<p>you inputted: {percent}%</p>
		</div>

		<div>
			<h1>Select fairness metrics</h1>
			<h4>Configure the bias and fairness audit by selecting the fairness measures to audit and the fairness threshold to determine when the audit passes or fails. FairML can compute all the following fairness metrics at once – if you are not sure what you are looking for, select all and we will walk you through the results.</h4>
		</div>
			<Checkbox
				onChange={({ detail }) =>
					setChecked(detail.checked)
				} checked={checked}
			>
					Equal Parity - Ensure all protected groups are have equal representation in the selected set.
			</Checkbox>
			<Checkbox
				onChange={({ detail }) =>
					setChecked(detail.checked)
				} checked={checked}
			>
					Proportional Parity - Ensure all protected groups are selected proportional to their percentage of the population.
			</Checkbox>
			<Checkbox
				onChange={({ detail }) =>
					setChecked(detail.checked)
				} checked={checked}
			>
					False Positive Rate Parity - Ensure all protected groups have the same false positive rates as the reference group.
			</Checkbox>
			<Checkbox
				onChange={({ detail }) =>
					setChecked(detail.checked)
				} checked={checked}
			>
					False Negative Rate Parity - Ensure all protected groups have the same false negative rates (as the reference group).
			</Checkbox>
    	</div>
  	);
  };
export default Step_3;
