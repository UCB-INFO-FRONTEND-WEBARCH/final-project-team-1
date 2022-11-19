import React, { useState, useEffect, useContext, createContext } from "react";
import { Context } from "../App";


const Step_1 = () => {
	
	const { step, setStep } = useContext(Context);

  	return (
   		<div className="Step">
        	<a>STEP 1</a>
    	</div>
  	);
  };
export default Step_1;


