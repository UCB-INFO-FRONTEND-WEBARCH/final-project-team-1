import React, { useState, useEffect, useContext, createContext } from "react";
import { Context } from "../App";
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';

const Home = () => {
	
	const { step, setStep } = useContext(Context);

  	return (
   		<div className="Home">
      		<Hero />
      		<HowItWorks />
    	</div>
  	);
  };

export default Home;

