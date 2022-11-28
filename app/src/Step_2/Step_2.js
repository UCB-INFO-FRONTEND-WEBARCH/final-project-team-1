import React, { useState, useEffect, useContext, createContext } from "react";
import { renderMatches } from "react-router-dom";
import { Context } from "../App";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import RadioGroup from "@cloudscape-design/components/radio-group";

const Step_2 = () => {
	
	const { step, setStep, myData, setData, header, setHeader, radio, setRadio} = useContext(Context);
	const headerSelected = header.filter(task => task.status === true);

	// let selectedOption = 'option1';

	function markChecked(id) {
		let newHead = header.map(header => {
			if (header.id===id){
			  return ({...header, status:! header.status});
			}
			return header;
		  })
		  setHeader(newHead);
	}
	
	// function setOption2(){
	// 	setRadio('option2');
	// 	console.log(selectedOption)
	// }

	// function setOption1(){
	// 	setRadio('option1');
	// }

  	return (
			<div className="Step" id="Step2">
				{/* display instructions */}
				<Box margin="l" padding="l">
					<SpaceBetween direction="vertical" size="xs">
						<Box variant="h1">Step 2: Choose reference groups</Box>
						<Box variant="h4">Reference groups are used to calculate relative disparities in our Bias Audit. For example, you might select Male as the reference group for Gender. FairML will then use Male as the baseline to calculate any biases for other groups in the attribute Gender (for Female and Other for example).</Box>
					</SpaceBetween>
				</Box>
				{/* display radio button options */}
				<Box margin="l" padding="l">
					<RadioGroup
						onChange={({ detail }) => setRadio(detail.value)}
						value={radio}
						items={[
							{ value: "first", label: "Majority group (automatically select the largest group for every attribute)" },
							{ value: "second", label: "Automatically select group with the lowest bias metric for every attribute" }
						]}
						/>
				</Box>
			{/* <form>
				<div className="radio">
			<label>
				<input 
					type="radio" 
					value="option1" 
					checked={radio === "option1"}
					onClick = {() => setOption1()}
					/>
				
			</label>
			</div>
			<div className="radio">
			<label>
				<input 
					type="radio" 
					value="option2"
					onClick = {() => setOption2()}
					checked={radio === "option2"}/>
				
			</label>
			</div>
			</form> */}
			{/* display selected header attributes */}
			<div>
				{/* include logic to only show header objects marked as True */}
				<ul>				
					{headerSelected.map((head) => { return ( 
						<li className = 'invis'><input type="checkbox" onClick = {(e) => markChecked(head.id)} checked/>{head.title}</li> )            
						})}
				</ul>
			</div>
			</div>
  	);
  };
export default Step_2;
