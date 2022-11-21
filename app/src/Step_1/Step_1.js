import React, { useState, useEffect, useContext, createContext } from "react";
import { Context } from "../App";
import { CsvToHtmlTable } from 'react-csv-to-table';



const Step_1 = () => {
	
	const { step, setStep, myData, setData, header, setHeader} = useContext(Context);
	var idmax = 0; 
	let colHeaders = []


	//display the CSV file upload as a table: 
	function viewTable() {
		var checkForUpload = document.getElementById('uploadButton'); //handles null values of getElementByID 
		if(checkForUpload){
				var fileReader = new FileReader();
				fileReader.addEventListener('load', function() {
					setData(this.result);

					//split first row of data into an array of strings to get headers 
					// colHeaders = (myData.split(/\r?\n/)[0]).split(',');
					setHeader((myData.split(/\r?\n/)[0]).split(','));
					console.log(header)
				});
				fileReader.readAsText(document.querySelector('input').files[0]);
		}
	}
	
	//**attempted to make header into objects so that we could track if it was checked or not but I couldnt get this to work....
	// function loadHeader(){
	// 	for (let i = 0; i < colHeaders.length; i++) {
	// 		let temp = {id: idmax, title: colHeaders[i], status: false}
	// 		setHeader(...header, temp);
	// 		idmax += 1;
	// 	}
	// }

  	return (
   		<div className="Step">
		<div class="row">

		{/* instructions  */}
		<div class="column">
			<h1>Step 1: Upload your dataset</h1>
			<h3>Your dataset must contain</h3>
			<ul>
				<li>predicted outcomes your model determined</li>
				<li>real outcomes observed</li>
				<li>attributes you want to audit for bias</li>
			</ul>
		</div>
		</div>

		{/* upload file */}
		<div class="column">
		<div className = "CSVImport">
				<h3>choose your file</h3>
				<input type="file" accept={".csv"}/>
				<button id="uploadButton" onClick = {(e) => viewTable()}>Submit</button>
				<p id = 'uploadedFile'></p>
				<CsvToHtmlTable data={myData} csvDelimiter="," tableClassName="table table-striped table-hover table-bordered table-sm table-dark"/>
		</div>
		</div>

		{/*choose attributes */}
		<div class="column">
			<h3>choose your attributes</h3>
			<button onClick = {(e) => viewTable()}>Go</button>
			{/* <button onClick = {(e) => loadHeader()}>Go again</button> */}

			<ul>
			{header.map((head) => { return ( 
				<li className = 'invis'><input type="checkbox"/>{head}</li> )            
				})}
			</ul>
		</div>
    	</div>
  	);
  };
export default Step_1;


