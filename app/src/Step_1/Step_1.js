import React, { useState, useEffect, useContext, createContext } from "react";
import { Context } from "../App";
import { CsvToHtmlTable } from 'react-csv-to-table';



const Step_1 = () => {
	
	const { step, setStep, myData, setData, header, setHeader} = useContext(Context);
	var idmax = 0; 
	let colHeaders = []
	let hCheck = false;
	let checkForUpload = false;
	let checkForAttributes = false;


	function setUploadTrue(){
		checkForUpload = true
		viewTable() 
	}

	function setAttributesTrue(){
		header.shift();
		checkForAttributes = true;
		setUploadTrue()	
	}


	//display the CSV file upload as a table: 
	function viewTable() {
		if(checkForUpload){ //handles null values of getElementByID 
			var fileReader = new FileReader();
			fileReader.addEventListener('load', function() {
				setData(this.result);
				if(checkForAttributes){  //handles blank state of colHeaders

					//split first row of data into an array of strings to get headers 
					colHeaders = ((myData.split(/\r?\n/))[0]).split(',');
					loadHeader();
				}
				
			});
			fileReader.readAsText(document.querySelector('input').files[0]);
		}
	}
	
	//turn header strings into objects 
	function loadHeader(){
		for (let i = 0; i < colHeaders.length; i++) {
			let temp = {id: idmax, title: colHeaders[i], status: false}
			setHeader(header => {return [...header, temp]});
			idmax += 1;
		}
		hCheck = true;
	}

	function markChecked(id) {
		let newHead = header.map(header => {
			if (header.id===id){
			  return ({...header, status:! header.status});
			}
			return header;
		  })
		  setHeader(newHead);
	}

  	return (
   		<div className="Step">
		<div className="row">

		{/* instructions  */}
		<div className="column">
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
		<div className="column">
		<div className = "CSVImport">
				<h3>choose your file</h3>
				<input type="file" accept={".csv"}/>
				<button id="uploadButton" onClick = {() => setUploadTrue()}>Submit</button>
				<p id = 'uploadedFile'></p>
				<CsvToHtmlTable data={myData} csvDelimiter="," tableClassName="table table-striped table-hover table-bordered table-sm table-dark"/>
		</div>
		</div>

		{/*choose attributes */}
		<div className = 'column'>
			<h3>choose your attributes</h3>
			<button id = 'attributeButton' onClick = {() => setAttributesTrue()}>Go</button>
			<ul>
				{header.map((head) => { return ( 
					<li className = 'invis'><input type="checkbox" onClick = {(e) => markChecked(head.id)}/>{head.title}</li> )            
					})}
			</ul>
		</div>
    	</div>
  	);
  };
export default Step_1;


