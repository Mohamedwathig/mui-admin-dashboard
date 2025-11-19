import { Box, useTheme } from "@mui/material";
import { tokens } from "../them"; // ✅ ensure this path is correct

const ProgressCircle = ({ progress = 0.75, size = 40 }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;

  return (
    <Box
      sx={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: `
          radial-gradient(${colors.primary[400]} 55%, transparent 56%),
          conic-gradient(${colors.blueAccent[500]} 0deg ${angle}deg, transparent ${angle}deg 360deg)
        `,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
};

export default ProgressCircle;
