import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { darkMode } from '../../actions';

// styles
import AppBar from '@mui/material/AppBar';


import "./header.scss"
// import { color } from "@mui/system";

function HeaderDesktop() {

  const isDarkMode = useSelector((state) => state.settings.darkMode);



  return (
    <div >
      
        <nav className="header__nav">
         
            <a className="header__nav--link" href="./#skills" >Skills</a>
            <a className="header__nav--link" href="./#projects">Projets</a>
            <a className="header__nav--link" href="./#timeline">Parcours</a>
            <a className="header__nav--link" href="./#contact">Contact</a>
          
        </nav>
    
    </div>

    
  );
}

export default HeaderDesktop;
