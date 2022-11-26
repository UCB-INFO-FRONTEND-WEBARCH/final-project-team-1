import React, { useState, useEffect, useContext, createContext } from "react";
import { Context } from "../App";
import Button from "@cloudscape-design/components/button";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";


const Results = () => {
	
	const { step, setStep } = useContext(Context);

  	return (
			<div className="Results">
				<Box margin="l" padding="l">
					<SpaceBetween direction="vertical" size="xs">
						<Box variant="h1">Your FairML Report</Box>
						<Box variant="h4">Audit Date: {new Date().toJSON().slice(0, 10)}</Box>
					</SpaceBetween>
				</Box>
				<Box margin="l" padding="l">
					<SpaceBetween direction="vertical" size="xs">
						<Box variant="h3">Attribute(s) Audited</Box>
						
					</SpaceBetween>
				</Box>
			</div>
  	);
  };

export default Results;

