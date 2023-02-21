import React from 'react'
import './Style.css'

import { Box } from '@mui/material/';
import logo from '../../assets/logo/Logo-Black.png'

import MenuIcon from '@mui/icons-material/Menu';

function Logo(props){
  return(
    <Box sx={props.sx}>
      <img style={{width: '60px', height: '60px', cursor:'pointer'}} className="hoverScale" src={logo} alt="logo" />
    </Box>
  )
}


export default function navbar() {

  function OpenMenu(){
    const menu = document.querySelector('#MenuHamb');
    menu.classList.toggle('active');
  }

  return (
   <header className='header'>
    <Box className='navbar container' sx={{ justifyContent: { xs: 'center', md: 'space-between' }}}>
      <Logo/>
      <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
        <ul className='nav-menu'>
          <li className='nav-item'>Crie o seu</li>
          <li className='nav-item'>Ver coleção</li>
          <li className='nav-item'>Galeria</li>
        </ul>
      </Box>
      <Box className="menu-hamburguer" sx={{ display: { xs: 'block', md: 'none' }}} onClick={OpenMenu}>
        <MenuIcon/>
        <Box id="MenuHamb" className="navbar-h">
          <ul className='nav-menu-h'>
            <li className='nav-item-h'>Crie o seu</li>
            <li className='nav-item-h'>Ver coleção</li>
            <li className='nav-item-h'>Galeria</li>
          </ul>
        </Box>
      </Box>
    </Box>
   </header>
  )
}
