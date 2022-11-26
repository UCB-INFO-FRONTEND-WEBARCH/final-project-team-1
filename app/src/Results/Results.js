import React, { useState, useEffect, useContext, createContext } from "react";
import { Context } from "../App";
import Button from "@cloudscape-design/components/button";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Badge from "@cloudscape-design/components/badge";
import Popover from "@cloudscape-design/components/popover";
import PieChart from "@cloudscape-design/components/pie-chart";
import {
	colorChartsStatusNeutral,
	colorChartsStatusHigh,
	colorChartsStatusPositive
  } from '@cloudscape-design/design-tokens';

const Results = () => {
	
	const { step, setStep } = useContext(Context);
	let date = new Date().toJSON().slice(0, 10);

  	return (
			<div className="Results">
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
								<Badge color="blue">Majority group</Badge>
							</Popover>
						</Box>
						</SpaceBetween>
					</SpaceBetween>
				</Box>
				<Box margin="l" padding="l">
					<SpaceBetween direction="vertical" size="xs">
						<Box variant="h3">Fairness Threshold & Audit Goal(s)</Box>
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
				<Box margin="l" padding="l">
					<SpaceBetween direction="vertical" size="xs">
						<Box variant="h2">Fairness Audit Details</Box>
						<PieChart
							data={[
								{
								title: "Faild",
								value: 4,
								lastUpdate: { date },
								color: colorChartsStatusHigh
								}
							]}
							// detailPopoverContent={(datum, sum) => [
							// 	{
							// 	key: "Fairness metric count",
							// 	value: datum.value
							// 	},
							// 	{
							// 	key: "Percentage",
							// 	value: `${((datum.value / sum) * 100).toFixed(
							// 		0
							// 	)}%`
							// 	},
							// 	{ key: "Last update on", value: datum.lastUpdate }
							// ]}
							segmentDescription={(datum, sum) =>
								`${datum.value} units, ${(
								(datum.value / sum) *
								100
								).toFixed(0)}%`
							}
							i18nStrings={{
								detailsValue: "Metric Count",
								detailsPercentage: "Percentage",
								filterLabel: "Filter displayed data",
								filterPlaceholder: "Filter data",
								filterSelectedAriaLabel: "selected",
								detailPopoverDismissAriaLabel: "Dismiss",
								legendAriaLabel: "Legend",
								chartAriaRoleDescription: "pie chart",
								segmentAriaRoleDescription: "segment"
							}}
							ariaDescription="Pie chart showing how many resources are currently in which state."
							ariaLabel="Pie chart"
							errorText="Error loading data."
							loadingText="Loading chart"
							recoveryText="Retry"
							empty={
								<Box textAlign="center" color="inherit">
								<b>No data available</b>
								<Box variant="p" color="inherit">
									There is no data available
								</Box>
								</Box>
							}
							noMatch={
								<Box textAlign="center" color="inherit">
								<b>No matching data</b>
								<Box variant="p" color="inherit">
									There is no matching data to display
								</Box>
								<Button>Clear filter</Button>
								</Box>
							}
						/>
					</SpaceBetween>
				</Box>
			</div>
  	);
  };

export default Results;

