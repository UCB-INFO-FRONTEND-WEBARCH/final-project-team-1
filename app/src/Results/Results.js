import React, { useState, useEffect, useContext, createContext } from "react";
import { Context } from "../App";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Badge from "@cloudscape-design/components/badge";
import Popover from "@cloudscape-design/components/popover";
import ResultSummary from "./ResultSummary";
import EqualParity from "./EqualParity";
import ProportionalParity from "./ProportionalParity";
import FalsePositive from "./FalsePositive";
import FalseNegative from "./FalseNegative";

const Results = () => {
	
	const { step, setStep } = useContext(Context);
	// Get current date as report date
	let date = new Date().toJSON().slice(0, 10);

  	return (
			<div className="Results">
				{/* Report summary information */}
				<Box margin="l" padding="l">
					<SpaceBetween direction="vertical" size="xs">
						<Box variant="h1">Your FairML Report</Box>
						<Box variant="h4">Audit Date: {date}</Box>
					</SpaceBetween>
				</Box>
				<Box margin="l" padding="l">
					<SpaceBetween direction="vertical" size="xs">
						<Box variant="h3">Attribute(s) Audited</Box>
						<SpaceBetween direction="horizontal" size="xs">
							<Badge color="blue">race</Badge>
							<Badge color="blue">sex</Badge>
							<Badge color="blue">age_cat</Badge>
						</SpaceBetween>
					</SpaceBetween>
				</Box>
				<Box margin="l" padding="l">
					<SpaceBetween direction="vertical" size="xs">
						<Box variant="h3">Reference Groups</Box>
						<SpaceBetween direction="horizontal" size="xs">
						<Box>
							<Popover
								dismissAriaLabel="Close"
								header="Majority group"
								content="The largest groups on each attribute will be used as baseline to calculate relative disparities in this audit."
							>
								<Badge color="blue">Majority Group</Badge>
							</Popover>
						</Box>
						</SpaceBetween>
					</SpaceBetween>
				</Box>
				<Box margin="l" padding="l">
					<SpaceBetween direction="vertical" size="xs">
						<Box variant="h3">Fairness Threshold & Audit Goal(s)</Box>
						{/* Fairness Threshold & Audit Goal(s) with popover information */}
						<SpaceBetween direction="horizontal" size="xs">
						<Box>
							<Popover
								dismissAriaLabel="Close"
								header="Disparity Intolerance"
								content="If disparity for a group is within 80% and 125% of the value of the reference group on a group metric (e.g. False Positive Rate), this audit will pass."
							>
								<Badge color="blue">80%</Badge>
							</Popover>
						</Box>
						<Box color="text-status-error">
							<Popover
								dismissAriaLabel="Close"
								header="Failed"
								content="Ensure all protected groups are have equal representation in the selected set."
							>
								<Badge color="red">Equal Parity</Badge>
							</Popover>
						</Box>
						<Box color="text-status-error">
							<Popover
								dismissAriaLabel="Close"
								header="Failed"
								content="Ensure all protected groups are selected proportional to their percentage of the population."
							>
								<Badge color="red">Proportional Parity</Badge>
							</Popover>
						</Box>
						<Box color="text-status-error">
							<Popover
								dismissAriaLabel="Close"
								header="Failed"
								content="Ensure all protected groups have the same false positive rates as the reference group."
							>
								<Badge color="red">False Positive Rate Parity</Badge>
							</Popover>
						</Box>
						<Box color="text-status-error">
							<Popover
								dismissAriaLabel="Close"
								header="Failed"
								content="Ensure all protected groups have the same false negative rates (as the reference group)."
							>
								<Badge color="red">False Negative Rate Parity</Badge>
							</Popover>
						</Box>
						</SpaceBetween>
					</SpaceBetween>
				</Box>
				{/* Audit summary and details by fairness metric */}
				<Box margin="l" padding="l">
					<SpaceBetween direction="vertical" size="xs">
						<Box variant="h2">Fairness Audit Details</Box>
						<ResultSummary />
						<EqualParity />
						<ProportionalParity />
						<FalsePositive />
						<FalseNegative />
					</SpaceBetween>
				</Box>
			</div>
  	);
  };

export default Results;

