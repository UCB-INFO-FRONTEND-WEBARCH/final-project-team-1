import React, { useState, useEffect, useContext, createContext } from "react";
import { Context } from "../App";
import Button from "@cloudscape-design/components/button";
import Checkbox from "@cloudscape-design/components/checkbox";
import Input from "@cloudscape-design/components/input";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";

const Step_3 = () => {
	
	const { step, setStep, percent, setPercent } = useContext(Context);
	const [temp, setTemp] = useState(80); //temporary state to store user percent input 
	const [checked, setChecked] = useState(true);

  	return (
   		<div className="Step">
			<div>
				<Box margin="l" padding="l">
					<SpaceBetween direction="vertical" size="xs">
						<Box variant="h1">Enter your Disparity Intolerance (in %)</Box>
						<Box variant="h4">If a specific bias metric for a group is within this percentage of the reference group, this audit will pass.</Box>
					</SpaceBetween>
				</Box>
				<Box margin="l" padding="l">
					<SpaceBetween direction="vertical" size="xs">
						<Box float="left">
							<SpaceBetween direction="horizontal" size="xs">
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
							</SpaceBetween>
						</Box>
						<Box variant="p">you inputted: {percent}%</Box>
					</SpaceBetween>
				</Box>
			</div>
			<div>
				<Box margin ="l" padding="l">
					<SpaceBetween direction="vertical" size="xs">
						<Box variant="h1">Select fairness metrics</Box>
						<Box variant="h4">Configure the bias and fairness audit by selecting the fairness measures to audit and the fairness threshold to determine when the audit passes or fails. FairML can compute all the following fairness metrics at once – if you are not sure what you are looking for, select all and we will walk you through the results.</Box>
					</SpaceBetween>
				</Box>
			</div>
			<div>
				<Box margin="l" padding="l">
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
				</Box>
			</div>
    	</div>
  	);
  };
export default Step_3;
