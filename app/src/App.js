import React, { useState, useEffect, useContext, createContext } from "react";
import "./styles.css";
import '@cloudscape-design/global-styles/index.css';
import { applyMode, applyDensity, Density, Mode } from '@cloudscape-design/global-styles';
import Step_1 from "./Step_1/Step_1";
import Step_2 from "./Step_2/Step_2";
import Step_3 from "./Step_3/Step_3";
import Status from "./Status/Status";
import Footer from "./Footer/Footer";
import Results from "./Results/Results";
import Home from "./Home/Home";

applyMode(Mode.Dark);

export const Context = createContext();

function App() {
    const [step, setStep] = useState(0); /*State to keep track on the current step the user is is*/
	const [myData, setData] = useState('');
	const [header, setHeader] = useState([{}]);
	const [radio, setRadio] = useState('first');
	const [percent, setPercent] = useState(80);
	const [step2enable, setStep2enable] = useState(false); /*State to keep track on whether or not step 2 has been unlocked yet*/
	const [step3enable, setStep3enable] = useState(false); /*State to keep track on whether or not step 3 has been unlocked yet*/
	const [dataUpload, setDataUpload] = useState(false);
	
	/*Checks current step state and renders the corresponding step to the user*/
	function renderStep() {
	    if (step == 4) {return <Results />}
		else if (step == 3) {return <Step_3 />}
		else if (step == 2) {return <Step_2 />}
		else if (step == 1) {return <Step_1 />}
		else {return <Home />}
	}
	
	/*Checks and renders status bad (step buttons) if user is in steps 1-3. Otherwise status bar is not rendered*/
	function renderStatus() {
	    if (step > 0  & step < 4) {return <Status />}
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
				setPercent,
				step2enable,
				setStep2enable,
				step3enable, 
				setStep3enable,
				dataUpload,
				setDataUpload
				}}
		> 		
		  <div>
			{renderStatus()}
	        {renderStep()}
	        <Footer />
		  </div>
      	</Context.Provider> 	
    </>
  );
}

export default App;
