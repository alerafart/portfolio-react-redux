import React from "react";
//import skills from "./skills.js";
import skillsList from "./skills.js";
// styles
import "./skills.scss";

function Skills() {

  //console.log(skillsList);
  return (

    <div id="skills" className="skills">
        <div className="skills__icons">
 
          {skillsList.map((skill) => (
            <div className="skills__icons--icon">                
                <img 
                  src= {skill.class}
                  key={skill.name}
                  alt= {skill.name}
                />
                <p >  
                  {skill.name}
                </p>
            </div>
            
          ))}
          
        </div>
    </div>
  );
}

export default Skills;
