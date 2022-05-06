import { Button } from "./Button";
import '../styleSheet/Hero.css';
import '../App.css';


function Hero() {
  return (
    <div className="hero-container">
      <video src="/video/video.mp4" autoPlay loop muted />
        <div className='titulo-container'>
        <h1>HOLA!</h1>
        <h3>Soy Verónica<br/>Front-End Web Developer</h3>    
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Descargar Curriculum
        </Button>
      </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#140123" fill-opacity="1" d="M0,128L80,154.7C160,181,320,235,480,224C640,213,800,139,960,122.7C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>
  );
} 
export default Hero;
