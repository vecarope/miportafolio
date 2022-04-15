import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';

function App() {
    return ( 
        <div className = "app" >
        <Navbar/>
        <div className="contenedor"><h1>Bienvenido a mi portafolio</h1>
        </div>
        </div>
    )

}

export default App;