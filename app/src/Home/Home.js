import React, { useState, useEffect, useContext, createContext } from "react";
import { Context } from "../App";
import Button from "@cloudscape-design/components/button"
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Navbar from "../Navbar/Navbar";

const Home = () => {
	
	const { step, setStep } = useContext(Context);

  	return (
   		<div className="Home">
			<Navbar />
      		<Hero />
      		<HowItWorks />
    	</div>
  	);
  };

export default Home;

