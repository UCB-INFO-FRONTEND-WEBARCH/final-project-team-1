import React, { useState, useEffect, useContext, createContext } from "react";
import { Context } from "../App";
import Button from "@cloudscape-design/components/button";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Badge from "@cloudscape-design/components/badge";
import Popover from "@cloudscape-design/components/popover";
import PieChart from "@cloudscape-design/components/pie-chart";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import ColumnLayout from "@cloudscape-design/components/column-layout";
import BarChart from "@cloudscape-design/components/bar-chart";
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
								<Badge color="blue">Majority Group</Badge>
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
						<Container
							header={
								<Header
								variant="h3"
								description="Passed and failed metrics at a glance"
								>
								Fairness metric summary
								</Header>
							}
							>
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
								`${datum.value} metrics, ${(
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
						</Container>
						<Container
							header={
								<Header
								variant="h3"
								>
									<Box variant="h3" id="ep">Equal parity</Box>
									<Badge color="red">Failed</Badge>
								</Header>
							}
						>
							<SpaceBetween direction="vertical" size="l">
								<ColumnLayout columns={2}>
									<div>
										<Box variant="h4">What is it?</Box>
										<Box variant="p">This criteria considers an attribute to have equal parity is every group is equally represented in the selected set. For example, if race (with possible values of white, African-American, other) has equal parity, it implies that all three races are equally represented (33% each)in the selected/intervention set.</Box>
									</div>
									<div>
										<Box variant="h4">When does it matter?</Box>
										<Box variant="p">If your desired outcome is to intervene equally on people from all races, then you care about this criteria.</Box>
									</div>
								</ColumnLayout>
								<Box variant="h4">Analysis by attribute</Box>
								<ColumnLayout columns={3}>
									<div>
										<SpaceBetween direction="vertical" size="s">
											<Badge color="blue">race</Badge>
											<Box>The Majority Group is: <strong>African-American</strong></Box>
											<Box>Groups <strong>failed</strong> the audit:</Box>
										</SpaceBetween>
										<ul>
											<li><strong>Hispanic</strong> with 0.09X Disparity</li>
											<li><strong>Caucasian</strong> with 0.39X Disparity</li>
											<li><strong>Other</strong> with 0.04X Disparity</li>
											<li><strong>Native American</strong> with 0.01X Disparity</li>
											<li><strong>Asian</strong> with 0.00X Disparity</li>
										</ul>
									</div>
									<div>
										<SpaceBetween direction="vertical" size="s">
											<Badge color="blue">sex</Badge>
											<Box>The Majority Group is: <strong>Male</strong></Box>
											<Box>Groups <strong>failed</strong> the audit:</Box>
										</SpaceBetween>
										<ul>
											<li><strong>Female</strong> with 0.22X Disparity</li>
										</ul>
									</div>
									<div>
										<SpaceBetween direction="vertical" size="s">
											<Badge color="blue">age_cat</Badge>
											<Box>The Majority Group is: <strong>25–45</strong></Box>
											<Box>Groups <strong>failed</strong> the audit:</Box>
										</SpaceBetween>
										<ul>
											<li><strong>Greater than 45</strong> with 0.20X Disparity</li>
											<li><strong>Less than 25</strong> with 0.52X Disparity</li>
										</ul>
									</div>
								</ColumnLayout>
								<Box variant="h4">Graph by attribute</Box>
								<Badge color="blue">race</Badge>
								<BarChart
									series={[
										{
										title: "Failed groups",
										type: "bar",
										data: [
											{ x: "Hispanic", y: 0.06 },
											{ x: "Caucasian", y: 0.26 },
											{ x: "Other", y: 0.02 },
											{ x: "Native American", y: 0.0 },
											{ x: "Asian", y: 0.0 }
										]
										},
										{
										title: "Majority Group – African-American",
										type: "threshold",
										y: 0.66
										}
									]}
									xDomain={[
										"Hispanic",
										"Caucasian",
										"Other",
										"Native American",
										"Asian"
									]}
									yDomain={[0, 1]}
									i18nStrings={{
										filterLabel: "Filter displayed data",
										filterPlaceholder: "Filter data",
										filterSelectedAriaLabel: "selected",
										detailPopoverDismissAriaLabel: "Dismiss",
										legendAriaLabel: "Legend",
										chartAriaRoleDescription: "line chart"
									}}
									ariaLabel="Single data series line chart"
									errorText="Error loading data."
									height={300}
									loadingText="Loading chart"
									recoveryText="Retry"
									xScaleType="categorical"
									xTitle="Group"
									yTitle="Predicted positive ratio"
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
								<hr />
								<ColumnLayout columns={2}>
									<div>
									<SpaceBetween direction="vertical" size="l">
										<Badge color="blue">sex</Badge>
										<BarChart
											series={[
												{
												title: "Failed groups",
												type: "bar",
												data: [
													{ x: "Female", y: 0.18 }
												]
												},
												{
												title: "Majority Group – Male",
												type: "threshold",
												y: 0.82
												}
											]}
											xDomain={[
												"Female"
											]}
											yDomain={[0, 1]}
											i18nStrings={{
												filterLabel: "Filter displayed data",
												filterPlaceholder: "Filter data",
												filterSelectedAriaLabel: "selected",
												detailPopoverDismissAriaLabel: "Dismiss",
												legendAriaLabel: "Legend",
												chartAriaRoleDescription: "line chart"
											}}
											ariaLabel="Single data series line chart"
											errorText="Error loading data."
											height={300}
											loadingText="Loading chart"
											recoveryText="Retry"
											xScaleType="categorical"
											xTitle="Group"
											yTitle="Predicted positive ratio"
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
									</div>
									<div>
									<SpaceBetween direction="vertical" size="l">
										<Badge color="blue">age_cat</Badge>
										<BarChart
											series={[
												{
												title: "Failed groups",
												type: "bar",
												data: [
													{ x: "Greater than 45", y: 0.12 },
													{ x: "Less than 25", y: 0.3 }
												]
												},
												{
												title: "Majority Group – 25–45",
												type: "threshold",
												y: 0.58
												}
											]}
											xDomain={[
												"Greater than 45",
												"Less than 25"
											]}
											yDomain={[0, 1]}
											i18nStrings={{
												filterLabel: "Filter displayed data",
												filterPlaceholder: "Filter data",
												filterSelectedAriaLabel: "selected",
												detailPopoverDismissAriaLabel: "Dismiss",
												legendAriaLabel: "Legend",
												chartAriaRoleDescription: "line chart"
											}}
											ariaLabel="Single data series line chart"
											errorText="Error loading data."
											height={300}
											loadingText="Loading chart"
											recoveryText="Retry"
											xScaleType="categorical"
											xTitle="Group"
											yTitle="Predicted positive ratio"
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
									</div>
								</ColumnLayout>
							</SpaceBetween>
						</Container>
						<Container
							header={
								<Header
								variant="h3"
								>
									<Box variant="h3" id="ep">Proportional Parity</Box>
									<Badge color="red">Failed</Badge>
								</Header>
							}
						>
							<SpaceBetween direction="vertical" size="l">
								<ColumnLayout columns={2}>
									<div>
										<Box variant="h4">What is it?</Box>
										<Box variant="p">This criteria considers an attribute to have proportional parity if every group is represented proportionally to their share of the population. For example, if race with possible values of white, African-American, other being 50%, 30%, 20% of the population respectively) has proportional parity, it implies that all three races are represented in the same proportions (50%, 30%, 20%) in the selected set.</Box>
									</div>
									<div>
										<Box variant="h4">When does it matter?</Box>
										<Box variant="p">If your desired outcome is to intervene proportionally on people from all races, then you care about this criteria.</Box>
									</div>
								</ColumnLayout>
								<Box variant="h4">Analysis by attribute</Box>
								<ColumnLayout columns={2}>
									<div>
										<SpaceBetween direction="vertical" size="s">
											<Badge color="blue">race</Badge>
											<Box>The Majority Group is: <strong>African-American</strong></Box>
											<Box>Groups <strong>failed</strong> the audit:</Box>
										</SpaceBetween>
										<ul>
											<li><strong>Hispanic</strong> with 0.51X Disparity</li>
											<li><strong>Caucasian</strong> with 0.59X Disparity</li>
											<li><strong>Other</strong> with 0.36X Disparity</li>
											<li><strong>Asian</strong> with 0.43X Disparity</li>
										</ul>
									</div>
									<div>
										<SpaceBetween direction="vertical" size="s">
											<Badge color="blue">age_cat</Badge>
											<Box>The Majority Group is: <strong>25–45</strong></Box>
											<Box>Groups <strong>failed</strong> the audit:</Box>
										</SpaceBetween>
										<ul>
											<li><strong>Greater than 45</strong> with 0.53X Disparity</li>
											<li><strong>Less than 25</strong> with 1.40X Disparity</li>
										</ul>
									</div>
								</ColumnLayout>
								<Box variant="h4">Graph by attribute</Box>
								<ColumnLayout columns={2}>
									<div>
									<SpaceBetween direction="vertical" size="l">
									<Badge color="blue">race</Badge>
								<BarChart
									series={[
										{
										title: "Failed groups",
										type: "bar",
										data: [
											{ x: "Hispanic", y: 0.3 },
											{ x: "Caucasian", y: 0.35 },
											{ x: "Other", y: 0.21 },
											{ x: "Asian", y: 0.25 }
										]
										},
										{
										title: "Majority Group – African-American",
										type: "threshold",
										y: 0.59
										}
									]}
									xDomain={[
										"Hispanic",
										"Caucasian",
										"Other",
										"Asian"
									]}
									yDomain={[0, 1]}
									i18nStrings={{
										filterLabel: "Filter displayed data",
										filterPlaceholder: "Filter data",
										filterSelectedAriaLabel: "selected",
										detailPopoverDismissAriaLabel: "Dismiss",
										legendAriaLabel: "Legend",
										chartAriaRoleDescription: "line chart"
									}}
									ariaLabel="Single data series line chart"
									errorText="Error loading data."
									height={300}
									loadingText="Loading chart"
									recoveryText="Retry"
									xScaleType="categorical"
									xTitle="Group"
									yTitle="Predicted prevalence"
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
									</div>
									<div>
									<SpaceBetween direction="vertical" size="l">
										<Badge color="blue">age_cat</Badge>
										<BarChart
											series={[
												{
												title: "Failed groups",
												type: "bar",
												data: [
													{ x: "Greater than 45", y: 0.25 },
													{ x: "Less than 25", y: 0.65 }
												]
												},
												{
												title: "Majority Group – 25–45",
												type: "threshold",
												y: 0.47
												}
											]}
											xDomain={[
												"Greater than 45",
												"Less than 25"
											]}
											yDomain={[0, 1]}
											i18nStrings={{
												filterLabel: "Filter displayed data",
												filterPlaceholder: "Filter data",
												filterSelectedAriaLabel: "selected",
												detailPopoverDismissAriaLabel: "Dismiss",
												legendAriaLabel: "Legend",
												chartAriaRoleDescription: "line chart"
											}}
											ariaLabel="Single data series line chart"
											errorText="Error loading data."
											height={300}
											loadingText="Loading chart"
											recoveryText="Retry"
											xScaleType="categorical"
											xTitle="Group"
											yTitle="Predicted prevalence"
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
									</div>
								</ColumnLayout>
							</SpaceBetween>
						</Container>
						<Container
							header={
								<Header
								variant="h3"
								>
									<Box variant="h3" id="ep">False Positive Rate Parity</Box>
									<Badge color="red">Failed</Badge>
								</Header>
							}
						>
							<SpaceBetween direction="vertical" size="l">
								<ColumnLayout columns={2}>
									<div>
										<Box variant="h4">What is it?</Box>
										<Box variant="p">This criteria considers an attribute to have False Positive parity if every group has the same False Positive Error Rate. For example, if race has false positive parity, it implies that all three races have the same False Positive Error Rate.</Box>
									</div>
									<div>
										<Box variant="h4">When does it matter?</Box>
										<Box variant="p">If your desired outcome is to make false positive errors equally on people from all races, then you care about this criteria. This is important in cases where your intervention is punitive and has a risk of adverse outcomes for individuals. Using this criteria allows you to make sure that you are not making false positive mistakes about any single group disproportionately.</Box>
									</div>
								</ColumnLayout>
								<Box variant="h4">Analysis by attribute</Box>
								<ColumnLayout columns={2}>
									<div>
										<SpaceBetween direction="vertical" size="s">
											<Badge color="blue">race</Badge>
											<Box>The Majority Group is: <strong>African-American</strong></Box>
											<Box>Groups <strong>failed</strong> the audit:</Box>
										</SpaceBetween>
										<ul>
											<li><strong>Hispanic</strong> with 0.48X Disparity</li>
											<li><strong>Caucasian</strong> with 0.52X Disparity</li>
											<li><strong>Other</strong> with 0.33X Disparity</li>
											<li><strong>Asian</strong> with 0.19X Disparity</li>
										</ul>
									</div>
									<div>
										<SpaceBetween direction="vertical" size="s">
											<Badge color="blue">age_cat</Badge>
											<Box>The Majority Group is: <strong>25–45</strong></Box>
											<Box>Groups <strong>failed</strong> the audit:</Box>
										</SpaceBetween>
										<ul>
											<li><strong>Greater than 45</strong> with 0.50X Disparity</li>
											<li><strong>Less than 25</strong> with 1.62X Disparity</li>
										</ul>
									</div>
								</ColumnLayout>
								<Box variant="h4">Graph by attribute</Box>
								<ColumnLayout columns={2}>
									<div>
									<SpaceBetween direction="vertical" size="l">
									<Badge color="blue">race</Badge>
								<BarChart
									series={[
										{
										title: "Failed groups",
										type: "bar",
										data: [
											{ x: "Hispanic", y: 0.21 },
											{ x: "Caucasian", y: 0.23 },
											{ x: "Other", y: 0.15 },
											{ x: "Asian", y: 0.09 }
										]
										},
										{
										title: "Majority Group – African-American",
										type: "threshold",
										y: 0.45
										}
									]}
									xDomain={[
										"Hispanic",
										"Caucasian",
										"Other",
										"Asian"
									]}
									yDomain={[0, 1]}
									i18nStrings={{
										filterLabel: "Filter displayed data",
										filterPlaceholder: "Filter data",
										filterSelectedAriaLabel: "selected",
										detailPopoverDismissAriaLabel: "Dismiss",
										legendAriaLabel: "Legend",
										chartAriaRoleDescription: "line chart"
									}}
									ariaLabel="Single data series line chart"
									errorText="Error loading data."
									height={300}
									loadingText="Loading chart"
									recoveryText="Retry"
									xScaleType="categorical"
									xTitle="Group"
									yTitle="False positive rate"
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
									</div>
									<div>
									<SpaceBetween direction="vertical" size="l">
										<Badge color="blue">age_cat</Badge>
										<BarChart
											series={[
												{
												title: "Failed groups",
												type: "bar",
												data: [
													{ x: "Greater than 45", y: 0.17 },
													{ x: "Less than 25", y: 0.54 }
												]
												},
												{
												title: "Majority Group – 25–45",
												type: "threshold",
												y: 0.33
												}
											]}
											xDomain={[
												"Greater than 45",
												"Less than 25"
											]}
											yDomain={[0, 1]}
											i18nStrings={{
												filterLabel: "Filter displayed data",
												filterPlaceholder: "Filter data",
												filterSelectedAriaLabel: "selected",
												detailPopoverDismissAriaLabel: "Dismiss",
												legendAriaLabel: "Legend",
												chartAriaRoleDescription: "line chart"
											}}
											ariaLabel="Single data series line chart"
											errorText="Error loading data."
											height={300}
											loadingText="Loading chart"
											recoveryText="Retry"
											xScaleType="categorical"
											xTitle="Group"
											yTitle="False positive rate"
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
									</div>
								</ColumnLayout>
							</SpaceBetween>
						</Container>
						<Container
							header={
								<Header
								variant="h3"
								>
									<Box variant="h3" id="ep">False Negative Rate Parity</Box>
									<Badge color="red">Failed</Badge>
								</Header>
							}
						>
							<SpaceBetween direction="vertical" size="l">
								<ColumnLayout columns={2}>
									<div>
										<Box variant="h4">What is it?</Box>
										<Box variant="p">This criteria considers an attribute to have False Negative parity if every group has the same False Negative Error Rate. For example, if race has false negative parity, it implies that all three races have the same False Negative Error Rate.</Box>
									</div>
									<div>
										<Box variant="h4">When does it matter?</Box>
										<Box variant="p">If your desired outcome is to make false negative errors equally on people from all races, then you care about this criteria. This is important in cases where your intervention is assistive (providing helpful social services for example) and missing an individual could lead to adverse outcomes for them. Using this criteria allows you to make sure that you’re not missing people from certain groups disproportionately.</Box>
									</div>
								</ColumnLayout>
								<Box variant="h4">Analysis by attribute</Box>
								<ColumnLayout columns={2}>
									<div>
										<SpaceBetween direction="vertical" size="s">
											<Badge color="blue">race</Badge>
											<Box>The Majority Group is: <strong>African-American</strong></Box>
											<Box>Groups <strong>failed</strong> the audit:</Box>
										</SpaceBetween>
										<ul>
											<li><strong>Hispanic</strong> with 1.99X Disparity</li>
											<li><strong>Caucasian</strong> with 1.71X Disparity</li>
											<li><strong>Other</strong> with 2.42X Disparity</li>
											<li><strong>Native American</strong> with 0.36X Disparity</li>
										</ul>
									</div>
									<div>
										<SpaceBetween direction="vertical" size="s">
											<Badge color="blue">age_cat</Badge>
											<Box>The Majority Group is: <strong>25–45</strong></Box>
											<Box>Groups <strong>failed</strong> the audit:</Box>
										</SpaceBetween>
										<ul>
											<li><strong>Greater than 45</strong> with 1.53X Disparity</li>
											<li><strong>Less than 25</strong> with 0.70X Disparity</li>
										</ul>
									</div>
								</ColumnLayout>
								<Box variant="h4">Graph by attribute</Box>
								<ColumnLayout columns={2}>
									<div>
									<SpaceBetween direction="vertical" size="l">
									<Badge color="blue">race</Badge>
								<BarChart
									series={[
										{
										title: "Failed groups",
										type: "bar",
										data: [
											{ x: "Hispanic", y: 0.56 },
											{ x: "Caucasian", y: 0.48 },
											{ x: "Other", y: 0.68 },
											{ x: "Native American", y: 0.1 }
										]
										},
										{
										title: "Majority Group – African-American",
										type: "threshold",
										y: 0.28
										}
									]}
									xDomain={[
										"Hispanic",
										"Caucasian",
										"Other",
										"Native American"
									]}
									yDomain={[0, 1]}
									i18nStrings={{
										filterLabel: "Filter displayed data",
										filterPlaceholder: "Filter data",
										filterSelectedAriaLabel: "selected",
										detailPopoverDismissAriaLabel: "Dismiss",
										legendAriaLabel: "Legend",
										chartAriaRoleDescription: "line chart"
									}}
									ariaLabel="Single data series line chart"
									errorText="Error loading data."
									height={300}
									loadingText="Loading chart"
									recoveryText="Retry"
									xScaleType="categorical"
									xTitle="Group"
									yTitle="False negative rate"
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
									</div>
									<div>
									<SpaceBetween direction="vertical" size="l">
										<Badge color="blue">age_cat</Badge>
										<BarChart
											series={[
												{
												title: "Failed groups",
												type: "bar",
												data: [
													{ x: "Greater than 45", y: 0.57 },
													{ x: "Less than 25", y: 0.26 }
												]
												},
												{
												title: "Majority Group – 25–45",
												type: "threshold",
												y: 0.37
												}
											]}
											xDomain={[
												"Greater than 45",
												"Less than 25"
											]}
											yDomain={[0, 1]}
											i18nStrings={{
												filterLabel: "Filter displayed data",
												filterPlaceholder: "Filter data",
												filterSelectedAriaLabel: "selected",
												detailPopoverDismissAriaLabel: "Dismiss",
												legendAriaLabel: "Legend",
												chartAriaRoleDescription: "line chart"
											}}
											ariaLabel="Single data series line chart"
											errorText="Error loading data."
											height={300}
											loadingText="Loading chart"
											recoveryText="Retry"
											xScaleType="categorical"
											xTitle="Group"
											yTitle="False negative rate"
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
									</div>
								</ColumnLayout>
							</SpaceBetween>
						</Container>
					</SpaceBetween>
				</Box>
			</div>
  	);
  };

export default Results;

