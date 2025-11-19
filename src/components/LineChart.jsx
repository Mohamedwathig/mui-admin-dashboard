import React from "react";
import { ResponsiveLine } from "@nivo/line"; // ✅ fixed import
import { mockLineData } from "../data/mockData"; // ✅ use proper mock data
import { useTheme } from "@mui/material";
import { tokens } from "../them"; // ✅ fix path if your file is them.js → change back

const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveLine
      data={mockLineData}
            theme={{
            axis: {
                domain: {
                line: {
                    stroke: colors.grey[700],
                },
                },
                legend: {
                text: {
                    fill: colors.grey[700], // ← controls "count" label color
                    fontSize: 14,
                    fontWeight: 600,
                },
                },
                ticks: {
                line: {
                    stroke: colors.grey[700],
                    strokeWidth: 1,
                },
                text: {
                    fill: colors.grey[700], // ← controls tick numbers (y-axis values)
                    fontSize: 12,
                },
                },
            },
            legends: {
                text: {
                fill: colors.grey[100],
                },
            },
            tooltip: {
                container: {
                background: colors.primary[400],
                color: colors.grey[100],
                },
            },
            }}
      colors={isDashboard? {datum:"color"}:{scheme:"novo"}}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      xScale={{ type: "point" }}
      curve="catmullRom"
      axisBottom={{
        legend: isDashboard? undefined :"transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        
        tickValues:5,
        legend: isDashboard? undefined :"count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          translateX: 100,
          itemWidth: 80,
          itemHeight: 22,
          symbolShape: "circle",
        },
      ]}
    />
  );
};

export default LineChart;
