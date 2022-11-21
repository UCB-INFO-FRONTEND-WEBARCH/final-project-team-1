import React, { useState, useEffect, useContext, createContext } from "react";
import { renderMatches } from "react-router-dom";
import { Context } from "../App";

const Step_2 = () => {
	
	const { step, setStep, myData, setData, header, setHeader, radio, setRadio} = useContext(Context);
	const headerSelected = header.filter(task => task.status === true);

	let selectedOption = 'option1';

	function markChecked(id) {
		let newHead = header.map(header => {
			if (header.id===id){
			  return ({...header, status:! header.status});
			}
			return header;
		  })
		  setHeader(newHead);
	}
	
	function setOption2(){
		setRadio('option2');
		console.log(selectedOption)
	}

	function setOption1(){
		setRadio('option1');
	}

  	return (
   		<div className="Step">

		{/* display instructions */}
		<h1>Step 2: Choose reference groups</h1>
		<h4>Reference groups are used to calculate relative disparities in our Bias Audit. For example, you might select Male as the reference group for Gender. FairML will then use Male as the baseline to calculate any biases for other groups in the attribute Gender (for Female and Other for example).</h4>
		
		{/* display radio button options */}
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
