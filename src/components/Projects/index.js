
import { useSelector } from 'react-redux';

//librairies
import Box from '@mui/material/Box';
import projects from "./projects.js";
// styles
import "./projects.scss"

function Projects() {
  const isDarkMode = useSelector((state) => state.settings.darkMode);
  return (
    <div id="projects" >

      <div className={isDarkMode ? 'projects' : 'projects light'}>
 
          {projects.map((project) => (
            <div className="projects__project" key={project.id}>
            
            <Box className="projects__project__box"
              sx={{
                width: '80%',
                height: '100%',
                backgroundColor: '#e0e0e0',
                '&:hover': {
                  backgroundColor: '#bdbdbd',
                  //opacity: [0.9, 0.8, 0.7],
                },
              }}>      
                <img 
                  src= {project.img}
                  alt= {project.name}
                  className="projects__project--img"
                />
                <p >  
                  {project.name}
                </p>
                <p >  
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
