import React from "react";
// import Box from '@mui/material/Box';
//import Container from '@mui/material/Container';
// import { Container } from 'semantic-ui-react';
import alex from "./alex.jpg"
// styles
import "./me.scss"

function Me() {
  
  return (
    <div className="me">
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

        <section className="me__desc">
          <p className="me__desc--name">
            Alejandra Rafart
          </p>

          <img src={alex} className="me__desc--pic" alt="me"/>

          <p className="me__desc--title">
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

      <section className="me--about">
        <p className="me--about--resume">
          Titulaire d’un diplôme d’architecte-urbaniste, et forte de 15 ans d'expérience dans la gestion de projets photographique pour le e-commerce, je donne aujourd'hui un tournant à ma vie professionnelle en me tournant vers le développement web.
          Entre ma formation initiale et mon expérience, la programmation est apparue comme une évidence. En effet, l'architecture m'a apporté la capacité de concevoir et construire des projets alliant fonctionnalité, design et contraintes techniques, tout en réfléchissant au besoin et à son expérience de son utilisateur final. De plus, l' e-commerce m'a apporté mes premières expériences dans le web, la capacité d'automatiser des tâches, le travail avec les bases de données et la gestion de projets importants en photographie.
          Le développement web réunit donc tous ces aspects, et ma forte affinité pour la résolution des problèmes et l'analyse ont fait que ce nouveau métier est devenu une passion.
        </p>
      </section>
      {/*</Box>*/}



      
      
    </div>
  );
}

export default Me;
