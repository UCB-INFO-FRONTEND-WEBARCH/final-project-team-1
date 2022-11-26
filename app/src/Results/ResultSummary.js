import * as React from "react";
import Container from "@cloudscape-design/components/container";
import PieChart from "@cloudscape-design/components/pie-chart";
import Header from "@cloudscape-design/components/header";
import Button from "@cloudscape-design/components/button";
import Box from "@cloudscape-design/components/box";
import {
	colorChartsStatusNeutral,
	colorChartsStatusHigh,
	colorChartsStatusPositive
  } from '@cloudscape-design/design-tokens';

let date = new Date().toJSON().slice(0, 10);

export default () => {
    return (
        // Fairness metric summary and pie chart
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

    );
}