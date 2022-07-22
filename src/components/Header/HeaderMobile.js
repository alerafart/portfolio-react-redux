import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { darkMode } from '../../actions';
import Burger from "../Burger";
// import Box from '@mui/material/Box';
/* import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn'; */
// styles
import AppBar from '@mui/material/AppBar';
import MaterialUISwitch from './MaterialUISwitch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
//import AdbIcon from '@mui/icons-material/Adb';
//import IconButton from '@mui/material/IconButton';
// import HomeIcon from '@mui/icons-material/Home';
//import Button from '@mui/material/Button';
import "./header.scss"
// import { color } from "@mui/system";

function Header() {
  // const [value, setValue] = React.useState(0);
  const isDarkMode = useSelector((state) => state.settings.darkMode);


  return (

        <nav className="header__nav">

            <a className="header__nav--link--mobile" href="./#skills" >Skills</a>
            <a className="header__nav--link--mobile" href="./#projects">Projets</a>
            <a className="header__nav--link--mobile" href="./#timeline">Parcours</a>
            <a className="header__nav--link--mobile" href="./#contact">Contact</a>
        </nav>
        

    
  );
}

export default Header;
