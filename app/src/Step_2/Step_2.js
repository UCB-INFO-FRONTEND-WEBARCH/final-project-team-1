import React, { useState, useEffect, useContext, createContext } from "react";
import { renderMatches } from "react-router-dom";
import { Context } from "../App";


const Step_2 = () => {
	
	const { step, setStep, myData, setData, header, setHeader, radio, setRadio} = useContext(Context);

	let selectedOption = 'option1';

	function setOption2(){
		setRadio('option2');
		console.log(selectedOption)
	}

	function setOption1(){
		setRadio('option1');
	}

  	return (
   		<div className="Step">
		<h1>Step 2: Choose reference groups</h1>
		<h4>Reference groups are used to calculate relative disparities in our Bias Audit. For example, you might select Male as the reference group for Gender. FairML will then use Male as the baseline to calculate any biases for other groups in the attribute Gender (for Female and Other for example).</h4>
		<form>
			<div className="radio">
          <label>
            <input 
				type="radio" 
				value="option1" 
				checked={radio === "option1"}
				onClick = {() => setOption1()}
				/>
            Majority group (Automatically select the largest group for every attribute)
          </label>
        </div>
        <div className="radio">
          <label>
            <input 
				type="radio" 
				value="option2"
				onClick = {() => setOption2()}
				checked={radio === "option2"}/>
            Automatically select group with the lowest bias metric for every attribute
          </label>
        </div>
		</form>
    	</div>
		



  	);
  };
export default Step_2;
