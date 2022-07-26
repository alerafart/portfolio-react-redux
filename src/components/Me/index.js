import React from "react";

import { useSelector, useDispatch } from 'react-redux';
// import Box from '@mui/material/Box';
//import Container from '@mui/material/Container';
// import { Container } from 'semantic-ui-react';
import alex from "./alex.jpg"
// styles
import "./me.scss"
import useState from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function Me() {

  const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  const isDarkMode = useSelector((state) => state.settings.darkMode);
  return (
    <div className={isDarkMode ? 'me ' : 'me light'}>
      {/* <Box
          sx={{
            //width: '45%',
            height: '30rem',
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}> */}

        <section className={isDarkMode ? 'me__desc ' : 'me__desc light'} >
          <p className={isDarkMode ? 'me__desc--name ' : 'me__desc--name light'}>
            Alejandra Rafart
          </p>

          <img src={alex} className="me__desc--pic" alt="me"/>

          <p className={isDarkMode ? 'me__desc--title ' : 'me__desc--title light'}>
            Développeuse Web
            Javascript - React -PHP
          </p>     
        </section>
        {/*</Box>*/}



      {/* <Box
          sx={{
            // width: '70%',
            height: '30rem',
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}> */}


          <Button onClick={handleOpen}>Open modal</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
             >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <section className={isDarkMode ? 'me--about ' : 'me--about light'}>
                  <p className={isDarkMode ? 'me--about--resume' : 'me--about--resume light'}>
                    Titulaire d’un diplôme d’architecte-urbaniste, et forte de 15 ans d'expérience dans la gestion de projets photographique pour le e-commerce, je donne aujourd'hui un tournant à ma vie professionnelle en me tournant vers le développement web.
                    Entre ma formation initiale et mon expérience, la programmation est apparue comme une évidence. En effet, l'architecture m'a apporté la capacité de concevoir et construire des projets alliant fonctionnalité, design et contraintes techniques, tout en réfléchissant au besoin et à son expérience de son utilisateur final. De plus, l' e-commerce m'a apporté mes premières expériences dans le web, la capacité d'automatiser des tâches, le travail avec les bases de données et la gestion de projets importants en photographie.
                    Le développement web réunit donc tous ces aspects, et ma forte affinité pour la résolution des problèmes et l'analyse ont fait que ce nouveau métier est devenu une passion.
                  </p>
                </section>
                </Typography>
              </Box>
            </Modal>

      {/* <section className={isDarkMode ? 'me--about ' : 'me--about light'}>
        <p className={isDarkMode ? 'me--about--resume' : 'me--about--resume light'}>
          Titulaire d’un diplôme d’architecte-urbaniste, et forte de 15 ans d'expérience dans la gestion de projets photographique pour le e-commerce, je donne aujourd'hui un tournant à ma vie professionnelle en me tournant vers le développement web.
          Entre ma formation initiale et mon expérience, la programmation est apparue comme une évidence. En effet, l'architecture m'a apporté la capacité de concevoir et construire des projets alliant fonctionnalité, design et contraintes techniques, tout en réfléchissant au besoin et à son expérience de son utilisateur final. De plus, l' e-commerce m'a apporté mes premières expériences dans le web, la capacité d'automatiser des tâches, le travail avec les bases de données et la gestion de projets importants en photographie.
          Le développement web réunit donc tous ces aspects, et ma forte affinité pour la résolution des problèmes et l'analyse ont fait que ce nouveau métier est devenu une passion.
        </p>
      </section> */}
      {/*</Box>*/}



      
      
    </div>
  );
}

export default Me;
