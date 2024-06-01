import * as React from "react";
import { Link } from "gatsby";

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
      <Link to="/" style={linkStyles}>Home</Link>
      <Link to="/about" style={linkStyles}>About Me</Link>
      <Link to="/projects" style={linkStyles}>Projects</Link>
      <a href="/static/resume.pdf" target="_blank" style={linkStyles}>Resume</a>
    </nav>
  );
};

export default NavBar;
