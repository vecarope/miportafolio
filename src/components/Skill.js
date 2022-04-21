import React from "react";
import '../App.css'; 
import '../styleSheet/Skill.css'; 
import Carrusel from "./Carrusel"



function Skill() {
    return(
        <div className='skill-container'>
        <h1>Mis Skills</h1>
        
        <div style={{ maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto', marginTop: 60}}>
            <Carrusel/>
        </div>
        </div>
);
}

export default Skill;
