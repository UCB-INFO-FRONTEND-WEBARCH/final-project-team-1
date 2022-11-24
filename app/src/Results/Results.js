import React, { useState, useEffect, useContext, createContext } from "react";
import { Context } from "../App";
import Button from "@cloudscape-design/components/button"


const Results = () => {
	
	const { step, setStep } = useContext(Context);

  	return (
   		<div className="Results">
			<h1>Your FairML report</h1>
    	</div>
  	);
  };

export default Results;

