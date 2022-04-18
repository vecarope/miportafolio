import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './components/pages/Home';
import Trabajos from './components/pages/Trabajos';
import About from './components/pages/About';
import Contacto from './components/pages/Contacto'; 


function App() {
    return ( 
        <div className = "app" >
        <Router>
            <Navbar/>
            <Routes>
                <Route path = '/' element={<Home/>}/>
                <Route path = '/about' element={<About/>} />
                <Route path = '/trabajos' element={<Trabajos/>}/>
                <Route path = '/contacto' element={<Contacto/>} />
            </Routes>
        </Router> 
        </div>
    );
}
export default App;