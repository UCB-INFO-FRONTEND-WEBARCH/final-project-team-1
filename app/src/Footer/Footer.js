import React, { useState, useEffect, useContext, createContext } from "react";
import { Context } from "../App";
import Button from "@cloudscape-design/components/button"


const Footer = () => {
	
	const { step, setStep } = useContext(Context);

    function prev() {
		switch(step) {
		  case 1:
		  	setStep(0)
		    break;
		  case 2:
  		    setStep(1)
  		    break;
	  	  case 3:
		    setStep(2)
		    break;
		  case 4:
  		    setStep(3)
		  default:
			break;
		}
    }
	
    function next() {
		switch(step) {
	  	  case 0:
		    setStep(1)
			  break;
		  case 1:
		  	setStep(2)
		    break;
		  case 2:
  		    setStep(3)
  		    break;
	  	  case 3:
		    setStep(4)
		    break;
  	  	  case 4:
	    	setStep(0) 
			/*Should we clean all data (reboot app)?*/ 
		  default:
			break;
		}
    }
	
	function footer_next_btn_name() {
		
		if(step == 0) {return "Get Started";}
		else if(step == 4) {return "Start Over";}
		else return "Next";
	} 
	
  	return (
   		<div className="Footer">
			<div className="steplist">
				<Button className="footbackbtn" variant="normal" onClick={() => {prev() }}>{ step == 0 ? "Back to Top" : "Back"}</Button>  
		<Button className="footnextbtn" variant="primary" onClick={() => {next()}}>{ footer_next_btn_name()}</Button> 
			</div>
    	</div>
  	);
  };
  
export default Footer;

