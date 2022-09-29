
import { useSelector } from 'react-redux';
//librairies
import Box from '@mui/material/Box';
import projects from "./projects.js";
import portfolio from "./portfolio_alex.png";
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
                //width: '30%',
                //height: '300px',
                backgroundColor: '#bdbdbd',
                '&:hover': {
                  backgroundColor: '#aeea00',
                  //opacity: [0.9, 0.8, 0.7],
                },
              }}>      
                <img 
                  src= {project.img}
                  //src={portfolio}
                  alt= {project.name}
                  className="projects__project--img"
                />
                <p >  
                  {project.name}
                </p>
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
