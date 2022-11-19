import React, { useState, useEffect, useContext, createContext } from "react";
import { Context } from "../App";
import Button from "@cloudscape-design/components/button"


const Step_3 = () => {
	
	const { step, setStep } = useContext(Context);

  	return (
   		<div className="Step">
        	<a>STEP 3</a>
			<div>
			</div>
    	</div>
  	);
  };
export default Step_3;
