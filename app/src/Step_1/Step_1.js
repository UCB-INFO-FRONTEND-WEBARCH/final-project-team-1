import React, { useState, useEffect, useContext, createContext } from "react";
import { Context } from "../App";
import { CsvToHtmlTable } from 'react-csv-to-table';
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import Header from "@cloudscape-design/components/header"
 
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
			<div className="Step" id="Step1">
				<Box margin="l" padding="l">
					<SpaceBetween direction="vertical" size="xs">
						<Box variant="h1">Step 1: Format your data (.csv)</Box>
						<Box variant="h4">Extraneous columns will interfer with the fairness checking process. Input data is a single table with the following columns.</Box>
						<ul>
							<li>“score” column: binary assessments (0 or 1 for each row) made by the predictive model (1 denotes the individuals selected for the intervention)</li>
							<li>“label_value” column: true binary outcomes for each individual (0 or 1 for each row) if you want to audit bias based on disparate errors</li>
							<li>One or more attribute columns: contain attributes you want to audit for bias (column names are user defined, e.g. age, race, citizenship_status)</li>
						</ul>
						<Table
							columnDefinitions={[
								{
								id: "score",
								header: "score",
								cell: item => item.score || "-",
								sortingField: "score"
								},
								{
								id: "label_value",
								header: "label_value",
								cell: item => item.label || "-",
								sortingField: "label"
								},
								{
								id: "race",
								header: "race",
								cell: item => item.race || "-"
								},
								{
								id: "sex",
								header: "sex",
								cell: item => item.sex || "-"
								},
								{
								id: "age",
								header: "age",
								cell: item => item.age || "-"
								},
								{
								id: "income",
								header: "income",
								cell: item => item.income || "-"
								}
							]}
							items={[
								{
								score: "0",
								label: "1",
								race: "African-American",
								sex: "Male",
								age: "25",
								income: "180000"
								},
								{
								score: "1",
								label: "1",
								race: "Caucasian",
								sex: "Male",
								age: "37",
								income: "34000"
								}
							]}
							loadingText="Loading resources"
							sortingDisabled
							variant="embedded"
							empty={
								<Box textAlign="center" color="inherit">
								<b>No resources</b>
								<Box
									padding={{ bottom: "s" }}
									variant="p"
									color="inherit"
								>
									No resources to display.
								</Box>
								<Button>Create resource</Button>
								</Box>
							}
							header={<Header variant="h3"> Example data table </Header>}
						/>
					</SpaceBetween>
				</Box>
					
			<div className="row">

			{/* instructions  */}
			<div className="column">
				<Box margin="l" padding="l">
					<SpaceBetween direction="vertical" size="xs">
						<Box variant="h1">Upload your dataset</Box>
						<Box variant="h4">Your dataset must contain</Box>
						<ul>
							<li>predicted outcomes your model determined</li>
							<li>real outcomes observed</li>
							<li>attributes you want to audit for bias</li>
						</ul>
					</SpaceBetween>
				</Box>
			</div>
			</div>

			{/* upload file */}
			<div className="column">
			<div className="CSVImport">
				<Box margin={{horizontal:"l"}} padding={{horizontal:"l"}}>
					<SpaceBetween direction="vertical" size="xs">
						<Box variant="h4">Choose your file</Box>
						<SpaceBetween direction="horizontal" size="xs">
							<input type="file" accept={".csv"}/>
							<Button variant="primary" id="uploadButton" onClick = {() => setUploadTrue()}>Submit</Button>
						</SpaceBetween>
						<p id='uploadedFile'></p>

						{/* render the CSV file as a table */}
						<CsvToHtmlTable data={myData} csvDelimiter="," tableClassName="table table-striped table-hover table-bordered table-sm table-dark" />
					</SpaceBetween>
				</Box>
			</div>
			</div>

			{/*choose attributes */}
			<div className='column'>
				<Box margin={{ horizontal: "l" }} padding={{ horizontal: "l" }}>
					<SpaceBetween direction="vertical" size="xs">
						<Box variant="h4">Choose your attributes</Box>
						<Button variant="primary" id = 'attributeButton' onClick = {() => setAttributesTrue()}>Go</Button>
						<ul>
							{header.map((head) => { return ( 
							<li className = 'invis'><input type="checkbox"  onClick = {(e) => markChecked(head.id)}/>&ensp;{head.title}</li> )            
							})}
						</ul>
					</SpaceBetween>
				</Box>
			</div>
			</div>
  	);
  };
export default Step_1;


