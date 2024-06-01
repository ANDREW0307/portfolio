import * as React from "react";
import { Link } from "gatsby";
import * as styles from './NavBar.module.css';

const navStyles = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  padding: "1rem 2rem",
  backgroundColor: "#232129",
  color: "#fff",
};

const linkStyles = {
  color: "#fff",
  textDecoration: "none",
  padding: "0.1rem 1rem",
  fontWeight: "bold",
};

const NavBar: React.FC = () => {
  return (
    <nav style={navStyles}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/about" className={styles.link}>About Me</Link>
        <Link to="/projects" className={styles.link}>Projects</Link>
        <a href="/static/resume.pdf" target="_blank" className={styles.link}>Resume</a>
        <a href="https://github.com/ANDREW0307" target="_blank" className={styles.link}>       
            <img src="/static/github.svg" alt="GitHub" style={{ height: '24px', verticalAlign: 'middle' }} />
        </a>

    </nav>    
  );
};

export default NavBar;