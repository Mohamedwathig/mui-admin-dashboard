import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { mockBarData } from "../data/mockData";
import { useTheme } from "@mui/material";
import { tokens } from "../them"; // ✅ fixed import

const BarChart = ({isDashBoard=false}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveBar
      data={mockBarData} // ✅ fixed variable name
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[700],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[700],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[700],
          },
        },
      }}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      labelSkipWidth={12}
      labelSkipHeight={12}

      
      labelTextColor={() => colors.grey[100]} // ✅ works in both light/dark mode

      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          translateX: 120,
          itemsSpacing: 3,
          itemWidth: 100,
          itemHeight: 16,
        },
      ]}
      axisBottom={{ legend: isDashBoard? undefined :"Country", legendOffset: 32 }}
      axisLeft={{ legend: isDashBoard? undefined : "Food", legendOffset: -40 }}
    />
  );
};

export default BarChart;
