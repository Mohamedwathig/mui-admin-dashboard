import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../them";

// ✅ MUI imports
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      {/* 1️⃣ Question */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I add an event?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            aliquid dolorem laudantium iure deserunt, possimus adipisci,
            consectetur culpa libero est ullam ea neque id asperiores debitis
            distinctio eveniet impedit optio?
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* 2️⃣ Question */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I see my earnings?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            aliquid dolorem laudantium iure deserunt, possimus adipisci,
            consectetur culpa libero est ullam ea neque id asperiores debitis
            distinctio eveniet impedit optio?
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* 3️⃣ Question */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I create a new user?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            aliquid dolorem laudantium iure deserunt, possimus adipisci,
            consectetur culpa libero est ullam ea neque id asperiores debitis
            distinctio eveniet impedit optio?
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* 4️⃣ Question */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I reset my dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            aliquid dolorem laudantium iure deserunt, possimus adipisci,
            consectetur culpa libero est ullam ea neque id asperiores debitis
            distinctio eveniet impedit optio?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
