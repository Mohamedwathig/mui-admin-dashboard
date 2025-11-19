import React from 'react'
import { Box,IconButton,InputBase,useTheme } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext,tokens } from '../../../them'
// import {InputBase} from'@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {

  const them =useTheme();
  const colors=tokens(them.palette.mode);
  const colorMode=useContext(ColorModeContext);
  return (
    <Box className=' p-2 flex justify-between' >
      
      <Box bgcolor={colors.primary[700]} className='flex border-3  '>
        <InputBase sx={{ml:2 ,flex:1}} placeholder='Serch'  />
        <IconButton className='p-1' type='buttom'   >
          <SearchIcon />
        </IconButton>
      </Box>
      
      <Box className='flex '>
        <IconButton onClick={colorMode.toggleColorMode}>

          {them.palette.mode==="dark" ?(<DarkModeOutlinedIcon/>) :(<LightModeOutlinedIcon/>) }
          
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon/>
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon/>
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon/>
        </IconButton>






      </Box>
      
      
      
      
      
      
      
      
      
      
          </Box>
  )
}

export default Topbar
