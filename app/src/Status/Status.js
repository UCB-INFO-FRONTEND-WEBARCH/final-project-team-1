import React, { useState, useEffect, useContext, createContext } from "react";
import { Context } from "../App";
import Button from "@cloudscape-design/components/button"


const Status = () => {
	
	const { step, setStep } = useContext(Context);

  	return (
   		<div id="Status" className="Status">
			<div className="steplist">
				<Button className="stepbtn" variant="primary" onClick={() => {  setStep(1) }}>Step 1</Button>  
				<Button className="stepbtn" variant="primary" onClick={() => {  setStep(2) }}>Step 2</Button>  
				<Button className="stepbtn" variant="primary" onClick={() => {  setStep(3) }}>Step 3</Button>  
			</div>
    	</div>
  	);
  };

export default Status;

