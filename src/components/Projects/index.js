
import { useSelector } from 'react-redux';
//librairies
import Box from '@mui/material/Box';
import projects from "./projects.js";
// styles
import "./projects.scss"

function Projects() {
  const isDarkMode = useSelector((state) => state.settings.darkMode);
  return (
    <>
    
      <div id="projects" className={isDarkMode ? 'projects' : 'projects light'}>
        <h2 className={isDarkMode ? 'projects__title' : 'projects__title light'}>Projects</h2>
        <div className="projects__project">
          {projects.map((project) => (
            <Box className="projects__project__box"
            key={project.id}
              sx={{
                backgroundColor: '#bdbdbd',
                '&:hover': {
                  backgroundColor: '#aeea00',
                },
              }}>      
                <img 
                  src= {project.img}
                  alt= {project.name}
                  className="projects__project--img"
                />
                <h3 className="projects__project--h3">  
                  {project.name}
                </h3>
                <p >  
                  {project.languages}
                </p>
                
                <a href= {project.link} className="projects__project__box--link" target="_blank" rel="noreferrer" >
                {project.linkName}
                </a>
            </Box>            
          ))}

          {/* <img src='/src/components/Projects/portfolio_alex.png' alt='fff'/>
          <img src={portfolio} alt='fff'/> */}
          </div>
        </div>
    
    <div className={isDarkMode ? 'divider' : 'divider light'}></div>
    </>
  );
}

export default Projects;
