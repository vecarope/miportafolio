import React from 'react';
import Tarjeta from './Tarjeta'
import '../App.css';
import '../styleSheet/Portafolio.css'


function Portafolio(){
    return(
        <div className='porta-container'>
        <h1>Proyectos destacados</h1>
        <Tarjeta/>
        </div>
    ); 
}

export default Portafolio; 