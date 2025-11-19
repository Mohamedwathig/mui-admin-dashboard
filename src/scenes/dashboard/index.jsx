import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { mockTransactions } from "../../data/mockData";
import { tokens } from "../../them";

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import TrafficOutlinedIcon from "@mui/icons-material/TrafficOutlined";

import StatBox from "../../components/StatBox";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import LineChart from "../../components/LineChart";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          Download Reports
        </Button>
      </Box>

      {/* GRID SECTION */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* STAT BOXES */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,323"
            subtitle="Email Sent"
            progress="0.75"
            increse="+14%"
            icon={
              <EmailOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="554,323"
            subtitle="Sales Obtained"
            progress="0.72"
            increse="+5%"
            icon={
              <PointOfSaleOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="823,323"
            subtitle="New Clients"
            progress="0.75"
            increse="+44%"
            icon={
              <PersonAddOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,323"
            subtitle="Traffic Inbound"
            progress="0.85"
            increse="+64%"
            icon={
              <TrafficOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 - LINE CHART */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="35px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[800]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.greenAccent[500]}
              >
                $54,545,54
              </Typography>
            </Box>

            <IconButton>
              <DownloadOutlinedIcon
                sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
              />
            </IconButton>
          </Box>

          <Box height="250px" ml="20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* ROW 2 - RECENT TRANSACTIONS */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>

          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
        {/* row 3 */}
        <Box gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        p="30px">
          <Typography variant="h5" fontWeight="600">
            Campaing
          </Typography>
          <Box display="flex" flexDirection="column"  alignItems="center"mt="24px">
            <ProgressCircle size="125"/>
            <Typography variant="h5" color={colors.greenAccent[500]}
              sx={{mt:"15px"}}
            >
              $38.543
            </Typography>
            <Typography>
              includes extra misc ecponedede

            </Typography>
          </Box>
        </Box>
        {/*  */}
        <Box gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        >
        <Typography variant="h5" fontWeight="600" sx={{p:"30px 30px 0 30px"}}>
            Sales Quantity
          </Typography>
          <Box
          height="250px"
           mt="-20px">
            <BarChart isDashBoard={true}/>

          </Box>
        </Box>
        {/*  */}
        <Box gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        >
        <Typography variant="h5" fontWeight="600" sx={{p:"30px 30px 0 30px"}}>
            Geograohy based traffic 
         </Typography>
          <Box
          height="200px"
           mt="-20px">
            <GeographyChart isDashBoard={true}/>

          </Box>
        </Box>


      </Box>
    </Box>
    
  );
};

export default Dashboard;
