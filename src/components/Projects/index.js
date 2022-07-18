import React from "react";

//librairies
import Box from '@mui/material/Box';
import projects from "./projects.js";
// styles
import "./projects.scss"

function Projects() {
  return (
    <div id="projects" >

      <div className="projects">
 
          {projects.map((project) => (
            <div className="projects__project" key={project.id}>
            
            <Box className="projects__project__box"
              sx={{
                width: '80%',
                height: '100%',
                backgroundColor: 'primary.dark',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}>      
                <img 
                  src= {project.img}
                  alt= {project.name}
                  className="projects__project__box--img"
                />
                <p className="projects__project__box--p">  
                  {project.name}
                </p>
                <p className="projects__project__box--p">  
                  {project.languages}
                </p>
                
                <a href= {project.link} className="projects__project__box--link" target="_blank" rel="noreferrer" >www.{project.name}.alerafart.com</a>
            </Box>
            </div>
            
          ))}
          
        </div>
    </div>
  );
}

export default Projects;
