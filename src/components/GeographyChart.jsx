import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo"; // ✅ FIXED import
import { mockGeographyData } from "../data/mockData"; // ✅ use geography data
import { useTheme } from "@mui/material";
import { tokens } from "../them"; // ✅ make sure this path is correct
import { geoFeatures } from "../data/mockGeoFeatures"; // ✅ your GeoJSON features

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveChoropleth
      data={mockGeographyData} // ✅ your map data
      features={geoFeatures.features} // ✅ required GeoJSON data
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[700],
            },
          },
          legend: {
            text: {
              fill: colors.grey[700],
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
              fill: colors.grey[700],
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
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      borderWidth={0.5}
      borderColor="#ffffff"
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
              },
            ]
          : undefined
      }
    />
  );
};

export default GeographyChart;
