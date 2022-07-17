import React from "react";
import projects from "./projects.js";
// styles
import "./projects.scss"

function Projects() {
  return (
    <div id="projects" >

      <div className="projects">
 
          {projects.map((project) => (
            <div className="projects__project">                
                <img 
                  src= {project.img}
                  key={project.name}
                  alt= {project.name}
                  className="projects__project--img"
                />
                <p >  
                  {project.name}
                </p>
                <p >  
                  {project.languages}
                </p>
                
                <a href= {project.link} className="projects__project--link" target="_blank" rel="noreferrer" >www.{project.name}.alerafart.com</a>
            </div>
            
          ))}
          
        </div>
    </div>
  );
}

export default Projects;
