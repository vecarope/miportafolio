import '../App.css'; 
import '../styleSheet/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/'>Github</Link>
            <Link to='/'>LinkeId</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Me</h2>
            <Link to='/'>Email</Link>
            <Link to='/'>Whatsaap</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
