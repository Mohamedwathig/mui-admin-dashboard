import React from 'react'
import { Box,colors,Typography,useTheme } from '@mui/material'
import {DataGrid} from "@mui/x-data-grid";
import { tokens } from '../../../../src/them';
import { mockDataTeam } from "../../../data/mockData";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined"

import Header from '../../../components/Header';
const Team = () => {
  const them=useTheme();
  const colors=tokens(them.palette.mode);

  const columns =[
    {field:"id",headername:"ID"},
    {field:"name", headername:"NAME",flex:1,cellClassName:
      "name-coiumn--cell",},
    {field:"age",headername:"Age",headerAlign:"left",align:"left"},
    {field:"phone", headername:"Phone Number",flex:1},
    {field:"email", headername:"Email",flex:1},
    {field:"access", headername:"Access Level", flex:1,
      renderCell:({row:{access}})=>{
        return(
          <Box width="60%" m="0 auto" p="5px" 
          display="flex" 
          justifyContent="center"
          backgroundColor={
            access==="admin"
            ? colors.greenAccent[600]
            :colors.greenAccent[700]
          }
          borderRadius="4px"
           >
            {access==="admin" && <AdminPanelSettingsOutlinedIcon/>}
            {access==="manager" && <SecurityOutlinedIcon/>}
            {access==="user" && <LockOpenOutlinedIcon/>}
            <Typography color={colors.grey[100]} sx={{ml:"5px"}}>{access}</Typography>




           </Box>
        )


      }
    }
  ];
    


  
    return (
    <Box>
        <Header title="TEAM" 
        subtitle="Managing the Team Members"/>
        <Box 
  m="40px 0 0 0" 
  height="75vh" 
  p="10px"
  sx={{
    "& .MuiDataGrid-root": {
      border: "none",
    },
    "& .MuiDataGrid-cell": {
      borderBottom: "none",
    },
    // ✅ className fix: should be name-column--cell (with 2 dashes like in your column definition)
    "& .name-column--cell": {
      color: colors.greenAccent[300],
    },
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: colors.blueAccent[700],
      borderBottom: "none",
         
    },
    // ✅ typo fix: "MuiDataGrid-virtualScroller" not vertual
    "& .MuiDataGrid-virtualScroller": {
      backgroundColor: colors.primary[400],
    },
    // ✅ typo fix: "MuiDataGrid-footerContainer" not fotter
    "& .MuiDataGrid-footerContainer": {
      borderTop: "none",
      backgroundColor: colors.blueAccent[700],
    },
    "& .MuiCheckbox-root": {
      color: `${colors.greenAccent[200]} !important`,
    },
  }}
>
  <DataGrid rows={mockDataTeam} columns={columns} />
</Box>


    </Box>
  )
}

export default Team
