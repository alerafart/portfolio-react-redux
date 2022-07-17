import React from "react";
//import skills from "./skills.js";
import skillsList from "./skills.js";
// styles
import "./skills.scss";

function Skills() {

  /* const skillsList = skillsList.map((skills)=> (
    
      {skillsList.name},
    

  ),) */
  console.log(skillsList);
  return (

    <div id="skills" className="skills">
        <div className="skills__icons">

        
        {skillsList.map((skill) => (
          
            <img src= {skill.class}  key={skill.name} alt= {skill.name}/>
          
        ))}
      

          
        </div>
    </div>
  );
}

export default Skills;
