import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import { tokens } from "../../../them";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import { Box, Collapse, IconButton, Typography, useTheme } from "@mui/material";


const Item=({title,to,icon,selected,setSelected})=>{
const them=useTheme();
const colors=tokens(them.palette.mode)
return(
  
  <MenuItem  active={title===selected} style={{color:colors.primary[700]}}
   onClick={()=>setSelected(title)} icon={icon} >
  <Typography>{title}</Typography>
  <Link to={to}/>
  </MenuItem>
)}

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          backgroundColor: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box 
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[800]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed &&( 
          <div className=" flex flex-col items-center gap-4">
            <img src="/avatar.png" alt="avatar" className="w-[100px] h-[100px]  cursor-pointer border-2 rounded-4" />
            <Typography variant="h5" color={colors.grey[500]}>  Mohamed elyass</Typography>
            <Typography variant="h5" color={colors.grey[500]}>  VP Fancy Admin</Typography>
          </div>)}

          <div>
            <Item
            title="Dashboard"
            to="/"
            icon={<HomeOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
            />
            
            <Item
            title="Manage Team"
            to="/team"
            icon={<PeopleOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
            />
            
            <Item
            title="Contacts"
            to="/contacts"
            icon={<ContactsOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
            />
            
           <Item
            title="Profile Form"
            to="/form"
            icon={<PersonOutlinedIcon />}   
            selected={selected}
            setSelected={setSelected}
          />
            <Item
            title="Invoices Balances"
            to="/invoices"
            icon={<ReceiptOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
            />
            
            <Item
            title="Calander"
            to="/calander"
            icon={<CalendarTodayOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
            />
            
            <Item
            title="FAQ Page"
            to="/faq"
            icon={<CalendarTodayOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
            />
            
            <Item
            title="Bar Chart"
            to="/bar"
            icon={<BarChartOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
            />
            <Item
            title="Pie Chart"
            to="/pie"
            icon={<PieChartOutlineOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
            />
            <Item
            title="Line Chart"
            to="/line"
            icon={<CalendarTodayOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
            />
            <Item
            title="Geography Chart"
            to="/geography"
            icon={<MapOutlinedIcon/>}
            selected={selected}
            setSelected={setSelected}
            />
            
          </div>


        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
