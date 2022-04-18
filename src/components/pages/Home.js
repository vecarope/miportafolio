import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import Skill from '../Skill'
import Footer from '../Footer';
import Portafolio from '../Portafolio';
import Galeria from '../Galeria';

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