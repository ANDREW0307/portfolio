import * as React from "react";
import { Link } from "gatsby";
import './NavBar.css';

const NavBar: React.FC = () => {


  return (
      <nav style={{
        width: '100%',
        position: 'fixed',
        top: '0',
        left: '0',
        backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent background for the entire navbar
        display: 'flex',
        justifyContent: 'flex-end', // Align links to the right
        zIndex: 10, // Ensure navbar is above the video
        padding: '0.5rem 1rem'
      }}>
     <div style={{
        backgroundColor: '#424242', // Grey background only where the links are
        borderRadius: '10px', // Optional: rounded corners for aesthetic
        padding: '0.5rem 1rem'
      }}>
        <Link to="/" className="linkStyle">Home</Link>
        <Link to="/about" className="linkStyle">About Me</Link>
        <Link to="/projects" className="linkStyle">Projects</Link>
        <a href="/static/images/resume.pdf" target="_blank" className="linkStyle">Resume</a>
        <a href="https://github.com/ANDREW0307" target="_blank">
          <img src="/static/images/github_logo_white_clear.svg" alt="GitHub" className="linkStyle"/>
        </a>
      </div>
    </nav>    
  );
};


export default NavBar;
