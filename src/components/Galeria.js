import '../styleSheet/Galeria.css'; 
import Fotos from './Fotos'; 


function Galeria(){
    return(
        <div className='galeria-container'>
        <h1>Galería</h1>
        <Fotos/>
        </div>
    ); 
}

export default Galeria; 