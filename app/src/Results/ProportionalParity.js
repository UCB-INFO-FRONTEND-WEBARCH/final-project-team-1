import * as React from "react";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import Button from "@cloudscape-design/components/button";
import Box from "@cloudscape-design/components/box";
import ColumnLayout from "@cloudscape-design/components/column-layout";
import BarChart from "@cloudscape-design/components/bar-chart";
import Badge from "@cloudscape-design/components/badge";
import SpaceBetween from "@cloudscape-design/components/space-between";

export default () => {
    return (
        // Proportional parity metric details and graphs
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
        );
}