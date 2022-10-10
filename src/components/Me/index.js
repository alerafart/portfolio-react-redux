import React from "react";
import { useSelector} from 'react-redux';
import alex from "./alex.jpg"
// styles
import "./me.scss"

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { height } from "@mui/system";

function Me() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#aeea00',
    boxShadow: 24,
    p: 3,
  };

  const isDarkMode = useSelector((state) => state.settings.darkMode);
  return (
    <>
    <div className={isDarkMode ? 'me ' : 'me light'}>
      <section className={isDarkMode ? 'me__desc' : 'me__desc light'} >
        <p className={isDarkMode ? 'me__desc--name ' : 'me__desc--name light'}>
          Bonjour! <br></br> Je m'apelle 
        </p>
        <p className={isDarkMode ? 'me__desc--name ' : 'me__desc--name light'}>
          ALEJANDRA
        </p>
        <img src={alex} className="me__desc--pic" alt="me"/>   
      </section>
        
      <section className={isDarkMode ? 'me--about ' : 'me--about light'}
      >
        <h1 className="me--about--title">
          Développeuse Web & Mobile
        </h1>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          >
          <Box sx={style} className="modal_box">
            <Button className="modal_box--close"
            onClick={handleClose}
            >
              <CloseIcon sx= {{color:'#aeea00', fontSize: 50, bgcolor:'#102027', borderRadius:'50%'}}></CloseIcon>
            </Button>
            <Typography className="modal_box--title" id="modal-modal-title" variant="h6" component="h2">
              Un peu plus sur moi...
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <section
              className={isDarkMode ? 'me--about ' : 'me--about light'}
              >
                <p className={isDarkMode ? 'me--about--resume' : 'me--about--resume light'}>
                  Titulaire d’un diplôme d’architecte-urbaniste, et forte de 15 ans d'expérience dans la gestion de projets photographique pour le e-commerce, je donne aujourd'hui un tournant à ma vie professionnelle en me tournant vers le développement web.
                  Entre ma formation initiale et mon expérience, la programmation est apparue comme une évidence. En effet, l'architecture m'a apporté la capacité de concevoir et construire des projets alliant fonctionnalité, design et contraintes techniques, tout en réfléchissant au besoin et à son expérience de son utilisateur final. De plus, l' e-commerce m'a apporté mes premières expériences dans le web, la capacité d'automatiser des tâches, le travail avec les bases de données et la gestion de projets importants en photographie.
                  Le développement web réunit donc tous ces aspects, et ma forte affinité pour la résolution des problèmes et l'analyse ont fait que ce nouveau métier est devenu une passion.
                </p>
            </section>
            </Typography>
          </Box>
        </Modal>
        
      </section>
    </div>
    
    <div id="button">
      <Button sx= {{color:'#fff', fontSize: 29, fontWeight:'bold', lineHeight: 'normal'}} className={isDarkMode ? 'me--about--button' : 'me--about--button light'} onClick={handleOpen}>Un peu plus sur moi...</Button>
    </div>
    </>
  );
}

export default Me;
