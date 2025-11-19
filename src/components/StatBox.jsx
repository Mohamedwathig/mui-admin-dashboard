import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../them";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      width="100%"
      p="20px"
      borderRadius="8px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      sx={{ backgroundColor: colors.primary[400] }}
    >
      {/* Top Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {/* Left Side: Icon + Number */}
        <Box display="flex" flexDirection="column" alignItems="flex-start" gap="8px">
          <Box>{icon}</Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>

        {/* Right Side: Progress Circle */}
        <ProgressCircle progress={progress} />
      </Box>

      {/* Bottom Section */}
      <Box display="flex" justifyContent="space-between" mt="15px">
        <Typography
          variant="h6"
          sx={{ color: colors.greenAccent[500] }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="h6"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
