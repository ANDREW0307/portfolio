import * as React from "react";
import { Link } from "gatsby";
import * as styles from './NavBar.module.css';

const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-end items-center p-4 bg-gray-800 text-white">
      <Link to="/" className="px-4 py-1 font-bold no-underline hover:text-purple-600 transition duration-300">Home</Link>
      <Link to="/about" className="px-4 py-1 font-bold no-underline hover:text-purple-600 transition duration-300">About Me</Link>
      <Link to="/projects" className="px-4 py-1 font-bold no-underline hover:text-purple-600 transition duration-300">Projects</Link>
      <a href="/static/images/resume.pdf" target="_blank" className="px-4 py-1 font-bold no-underline hover:text-purple-600 transition duration-300">Resume</a>
      <a href="https://github.com/ANDREW0307" target="_blank" className="px-4 py-1 font-bold no-underline hover:text-purple-600 transition duration-300">
        <img src="/static/images/github_logo_white_clear.svg" alt="GitHub" className="h-6 align-middle" />
      </a>
    </nav>    
  );
};

export default NavBar;
