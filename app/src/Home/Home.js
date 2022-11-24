import React, { useState, useEffect, useContext, createContext } from "react";
import { Context } from "../App";
import Button from "@cloudscape-design/components/button"


const Home = () => {
	
	const { step, setStep } = useContext(Context);

  	return (
   		<div className="Home">
			<h1>FairML</h1>
    	</div>
  	);
  };

export default Home;

