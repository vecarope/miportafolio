import React from "react";
import '../App.css'; 
import '../styleSheet/Skill.css'; 
import Carrusel from "./Carrusel"



function Skill() {
    return(
        <div className='skill-container'>
        <h1>Mis Skills</h1>
        
        <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
            <Carrusel>
                <img src="public/logos/58" alt="placeholder" />
                <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
                <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
                <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
                <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
                <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
            </Carrusel>
        </div>
        </div>
);
}

export default Skill;
