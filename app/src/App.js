import React, { useState, useEffect, useContext, createContext } from "react";
import "./styles.css";
import Step_1 from "./Step_1/Step_1";
import Step_2 from "./Step_2/Step_2";
import Step_3 from "./Step_3/Step_3";
import Status from "./Status/Status";

export const Context = createContext();

function App() {
	
    const [step, setStep] = useState(1);
	const [myData, setData] = useState('');
	const [header, setHeader] = useState(['']);
	const [radio, setRadio] = useState('option1');
	const [percent, setPercent] = useState(0);
	// const [header,setHeader] = useState([{id: -1, title: "", status: false}]);
	
	function renderStep() {
	    if (step == 3) return <Step_3 />
		if (step == 2) return <Step_2 />
		return <Step_1 />
	}
	
  return (
    <>
		<Context.Provider
        	value={{
				step,
				setStep,
				myData,
				setData,
				header,
				setHeader,
				radio,
				setRadio,
				percent,
				setPercent
				}}
		> 		
		  <div>
	        <Status />
	        {renderStep()}
		  </div>
      	</Context.Provider> 	
    </>
  );
}

export default App;
