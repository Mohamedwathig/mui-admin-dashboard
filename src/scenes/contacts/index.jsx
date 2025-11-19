import React from 'react'
import { Box,colors,Typography,useTheme } from '@mui/material'
import {DataGrid} from "@mui/x-data-grid";
import { tokens } from "../../them";
import { mockDataContacts } from "../../data/mockData";
import { GridToolbar } from "@mui/x-data-grid";

import Header from '../../components/Header';
const Contacts = () => {
  const them=useTheme();
  const colors=tokens(them.palette.mode);

  const columns =[
    {field:"id",
    headername:"ID", flex:0.5},
    {field:"registerarId",headername:"Registerar ID"},


    {field:"name", 
    headername:"NAME",
    flex:1,
    cellClassName:"name-coiumn--cell",},

    {field:"age",
    headername:"Age",
    headerAlign:"left",
    align:"left"},

    {field:"phone",
    headername:"Phone Number",flex:1},

    {field:"email",
    headername:"Email",flex:1},

    {field:"address",
    headername:"Adress",flex:1},

    {field:"zipCode",
    headername:"ZipCode",flex:1},

   
  ];
    


  
    return (
    <Box>
        <Header title="CONTACTS" 
        subtitle="List of Contacts For Future Reference"/>
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
    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
     color: `${colors.greenAccent[700]} !important`,
},
  }}
>
<DataGrid
  rows={mockDataContacts}
  columns={columns}

/></Box>


    </Box>
  )
}

export default Contacts
