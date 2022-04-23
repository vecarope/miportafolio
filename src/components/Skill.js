import React from "react";
import { motion } from 'framer-motion';
import { useRef , useEffect, useState } from 'react'; 
import Logos from './Logos';
import '../App.css'; 
import '../styleSheet/Carrusel.css';


function Skill() {
  const [width, setWidth] = useState(0);
  const carrusel= useRef(); 

  useEffect(()=> {
    setWidth(carrusel.current.scrollWidth - carrusel.current.offsetWidth); 
  }, []);
    return(
        <div className='skill-container'>
        <h1>Mis Skills</h1>
        <motion.div ref={carrusel} className="carrusel" whileTap={{cursor:'grabbing'}}>
          <motion.div
          drag="y"
          dragConstraints={{right:0, left:-width}}
          className="inner-carrusel">
            {Logos.map((Logos)=>{
              return(
                <motion.div className="item" key={Logos}>
                <img src={Logos} alt=""/>
                </motion.div>
              );
              })}
        </motion.div>
      </motion.div>
        </div>
);
}

export default Skill;
