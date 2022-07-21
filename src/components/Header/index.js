import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { darkMode } from '../../actions';
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
import { color } from "@mui/system";

function Header() {
  // const [value, setValue] = React.useState(0);
  const isDarkMode = useSelector((state) => state.settings.darkMode);

  const dispatch = useDispatch();
  function handleDarkModeClick() {
    console.log('color theme fired');
    dispatch(darkMode());
  }

  return (
    <div >
      <AppBar 
      sx={{
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'primary.dark',
              
            },
          }} 
      enableColorOnDark position="fixed" id="header" className={isDarkMode ? 'header' : 'header light'}>
        {/* <IconButton className="home" size="large">
          <HomeIcon className="home"/>
        </IconButton> */}
        {/* <Button className="home" href="./#header" >HOME<HomeIcon  sx={{ color: '#000' }} /></Button> */}
        {/* <HomeIcon sx={{ color: '#000' }} /> */}
        <nav className="header__nav">
        {/* <Button className="header__nav--but" href="./#header" >HOME<HomeIcon  sx={{ color: '#000' }} /></Button> */}
        {/* <Button className="home" href="./#header" >HOME<HomeIcon  sx={{ color: '#000' }} /></Button> */}
        {/* <button className="homebis" href="./#header" >HOME<HomeIcon className="home" /></button> */}
        {/* <Button className="home__button" href="./#header" >HOME<HomeIcon className="home--icon" ></HomeIcon> </Button> */}
            <FormGroup className="header__themeSwitch">
              <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                onClick={() => {
                  handleDarkModeClick();
                }}
              />
            </FormGroup>
            {/* <a className="header__nav--link" href="./#home" ><HomeIcon  sx={{ color: '#000' }} />Home</a> */}
            <a className="header__nav--link" href="./#skills" >Skills</a>
            <a className="header__nav--link" href="./#projects">Projets</a>
            <a className="header__nav--link" href="./#timeline">Parcours</a>
            <a className="header__nav--link" href="./#contact">Contact</a>
          
        </nav>
      </AppBar>
    </div>

    
  );
}

export default Header;
