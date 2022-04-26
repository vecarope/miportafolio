import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import Skill from '../Skill'
import Portafolio from '../Portafolio';
import Galeria from '../Galeria';
import Footer from '../Footer';

function Home() {
  return (
    <>
    <Hero/>
    <Skill/>
    <Portafolio/>
    <Galeria/>
    <Footer />
    </>
  );
}

export default Home;