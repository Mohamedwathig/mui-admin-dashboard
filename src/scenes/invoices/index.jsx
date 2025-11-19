import React from 'react'
import { Box,colors,Typography,useTheme } from '@mui/material'
import {DataGrid} from "@mui/x-data-grid";
import { tokens } from "../../them";
import { mockDataContacts, mockDataInvoices } from "../../data/mockData";
import { GridToolbar } from "@mui/x-data-grid";

import Header from '../../components/Header';
const Invoices = () => {
  const them=useTheme();
  const colors=tokens(them.palette.mode);

  const columns =[
    {field:"id",
    headerName:"ID", flex:0.5},


    {field:"name", 
    headerName:"NAME",
    flex:1,
    headerName:"name-coiumn--cell",},
    {field:"cost", 
    headerName:"COST",
    flex:1,
    renderCell:(params)=>(<Typography color={colors.greenAccent[500]}>
        ${params.row.cost}


    </Typography>),},

    
    {field:"phone",
    headerName:"Phone Number",flex:1},
    
    {field:"date",
    headerName:"Date ",flex:1},

    {field:"email",
    headerName:"Email",flex:1},

    {field:"address",
    headerName:"Adress",flex:1},

    {field:"zipCode",
    headerName:"ZipCode",flex:1},

   
  ];
    


  
    return (
    <Box>
        <Header title="INVOICES" 
        subtitle="List of Invoice Balances "/>
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
<DataGrid
checkboxSelection
  rows={mockDataInvoices}
  columns={columns}

/></Box>


    </Box>
  )
}

export default Invoices
