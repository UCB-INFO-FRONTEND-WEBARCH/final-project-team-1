import React, { useState, useEffect, useContext, createContext } from "react";
import { Context } from "../App";
import { CsvToHtmlTable } from 'react-csv-to-table';



const Step_1 = () => {
	
	const { step, setStep, myData, setData } = useContext(Context);


	
	function viewTable() {
		var checkForUpload = document.getElementById('uploadButton'); //handles null values of getElementByID 
		if(checkForUpload){
			// checkForUpload.addEventListener("click", function(){
				var fileReader = new FileReader();
				fileReader.addEventListener('load', function() {
					// document.getElementById('uploadedFile').innerText = this.result;
					setData(this.result);
				});
				fileReader.readAsText(document.querySelector('input').files[0]);
			// }
			// )
	}
	}
	
	
	

  	return (
   		<div className="Step">
			<div>
			<h1>Upload your dataset</h1>
			<h3>Your dataset must contain</h3>
			<ul>
				<li>predicted outcomes your model determined</li>
				<li>real outcomes observed</li>
				<li>attributes you want to audit for bias</li>
			</ul>
			</div>
			<div className = "CSVImport">
			<h1>REACTJS CSV IMPORT EXAMPLE </h1>
			<input type="file" accept={".csv"}/>
			<button id="uploadButton" onClick = {(e) => viewTable()}>Try it</button>
			<p id = 'uploadedFile'></p>
			<CsvToHtmlTable data={myData} csvDelimiter="," tableClassName="table table-striped table-hover table-bordered table-sm table-dark"/>

			</div>
    	</div>
  	);
  };
export default Step_1;


