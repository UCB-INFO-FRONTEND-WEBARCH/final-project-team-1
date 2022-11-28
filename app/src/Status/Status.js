import React, { useState, useEffect, useContext, createContext } from "react";
import { Context } from "../App";
import Button from "@cloudscape-design/components/button"


const Status = () => {
	
	const { step, setStep } = useContext(Context);
	const { step2enable, setStep2enable} = useContext(Context);
	const { step3enable, setStep3enable} = useContext(Context);

	/*Checks which steps have been unlocked, and enables those steps has buttons in the status bar so the user can navigate towards them directly*/
	function render_btn(step_num){
		if(step_num == 2) { 
			if(step2enable){return <Button className="stepbtn" variant="primary" onClick={() => {  setStep(2) }}>Step 2</Button>}
			else{return <Button disabled className="stepbtn" variant="primary" onClick={() => {  setStep(2) }}>Step 2</Button>}
		}
		else if(step_num == 3) { 
			if(step3enable){return <Button className="stepbtn" variant="primary" onClick={() => {  setStep(3) }}>Step 3</Button>}
			else{return <Button disabled className="stepbtn" variant="primary" onClick={() => {  setStep(3) }}>Step 3</Button>}
		}
	}
	
  	return (
   		<div id="Status" className="Status">
			<div className="steplist">
				<Button className="stepbtn" variant="primary" onClick={() => {  setStep(1) }}>Step 1</Button>  
				{render_btn(2)}  
				{render_btn(3)}   
			</div>
    	</div>
  	);
  };

export default Status;

