import React, { useState, useEffect, useContext, createContext } from "react";
import { Context } from "../App";


const Step_2 = () => {
	
	const { step, setStep } = useContext(Context);

  	return (
   		<div className="Step">
        	<a>STEP 2</a>
    	</div>
  	);
  };
export default Step_2;
