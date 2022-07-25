import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { darkMode , toggleOpen } from '../../actions';
// import Burger from "../Burger";
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

  const dispatch = useDispatch();
  function handleDarkModeClick() {
    console.log('color theme fired');
    dispatch(darkMode());
  }

  const isToggleOpen = useSelector((state)=> state.settings.toggleOpen);
  function handleToggle() {
    console.log('click toggle');
    dispatch(toggleOpen());
    
  }
  return (
    <div >
      <AppBar enableColorOnDark //position="fixed" 
      id="header" //className =({ 'header light': !isDarkMode }, 'header', {'hide': !isToggleOpen});
      className = {isDarkMode ? 'header' : 'header light'} {...isToggleOpen ? '' : 'hide'}
      
      >
        <nav className="header__nav">
        
          <div className="header__nav--buttons">
              <FormGroup className="header__themeSwitch">
                <FormControlLabel
                  control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                  onClick={() => {
                    handleDarkModeClick();
                  }}
                />
              </FormGroup>
              <button                  
                className={isToggleOpen ? 'toggle toggle--open' : 'toggle'}
                type="button"
                onClick={handleToggle}
              >
                =
              </button>
          </div>
        
            <a className="header__nav--link" href="./#skills" >Skills</a>
            <a className="header__nav--link" href="./#projects">Projets</a>
            <a className="header__nav--link" href="./#timeline">Parcours</a>
            <a className="header__nav--link" href="./#contact">Contact</a>
          
          
            <a className={isToggleOpen ? 'header__nav--link--mobile' : 'header__nav--link--mobile hide'} href="./#skills" >Skills</a>
            <a className={isToggleOpen ? 'header__nav--link--mobile' : 'header__nav--link--mobile hide'} href="./#projects">Projets</a>
            <a className={isToggleOpen ? 'header__nav--link--mobile' : 'header__nav--link--mobile hide'} href="./#timeline">Parcours</a>
            <a className={isToggleOpen ? 'header__nav--link--mobile' : 'header__nav--link--mobile hide'} href="./#contact">Contact</a>
        </nav>
      </AppBar>
      {/* <nav className="header__nav">        
            <a className="header__nav--link--mobile" href="./#skills" >Skills</a>
            <a className="header__nav--link--mobile" href="./#projects">Projets</a>
            <a className="header__nav--link--mobile" href="./#timeline">Parcours</a>
            <a className="header__nav--link--mobile" href="./#contact">Contact</a>
      </nav> */}
    </div>

    
  );
}

export default Header;
