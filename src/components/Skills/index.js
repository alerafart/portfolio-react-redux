import React from "react";
import { useSelector } from "react-redux";
import skillsList from "./skills.js";
// styles
import "./skills.scss";

function Skills() {

const isDarkMode = useSelector((state) => state.settings.darkMode);

  return (
    <>
    <div id="skills" className={isDarkMode ? 'skills' : 'skills light'}>
    <h2 className={isDarkMode ? 'skills__title' : 'skills__title light'}>Skills</h2>
        <div className="skills__icons">
 
          {skillsList.map((skill) => (
            <div className={isDarkMode ? 'skills__icons--icon' : 'skills__icons--icon light'} key={skill.name}>                
                <img 
                  src= {skill.class}
                  alt= {skill.name}
                />
                <p >  
                  {skill.name}
                </p>
            </div>
            
          ))}
          
        </div>
        
    </div>
    <div className={isDarkMode ? 'divider' : 'divider light'}></div>
    </>
  );
}

export default Skills;
