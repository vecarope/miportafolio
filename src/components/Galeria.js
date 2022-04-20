import React from 'react';
import '../App.css';
import '../styleSheet/Galeria.css'; 
import Fotos from './Fotos'; 


function Galeria(){
    return(
        <div className='galeria-container'>
        <Fotos/> 
        </div>
    ); 
}

export default Galeria; 