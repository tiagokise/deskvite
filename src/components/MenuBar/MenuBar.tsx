'use client'
  
import { useEffect, useState } from 'react'
import { Toolbar, IconButton, Typography, Tooltip } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import * as S from './MenuBar.styles'


export function MenuBar({clockOpen, setClockOpen}: any) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState(new Date());
  const [open, setOpen] = useState(false);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleClock = () => {
    setClockOpen(!clockOpen)
  }
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const stringfyValue = value.toTimeString().split(' ')[0]
  // console.log(stringfyValue)
  return (
    <S.MenuBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleClick}>
          <MenuIcon />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          TK System
        </Typography>
        {stringfyValue && 
          <Tooltip title="Clique para abrir o relógio">
            <S.Date variant="text" onClick={handleClock} >{stringfyValue}</S.Date>
          </Tooltip>
        }
      </Toolbar>
    </S.MenuBar>

  )
}