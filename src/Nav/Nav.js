import React from 'react';
import './Nav.css';

export default function Nav() {
  return (
    <nav className='navbar'>
      <div className='name'>Meet Patel</div>
      <div className='toggle-button-div'>
        <a href='#' class='toggle-button'>
          <span class='bar'></span>
          <span class='bar'></span>
          <span class='bar'></span>
        </a>
      </div>

      <div className='navbar-links'>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>TechStack</a>
          </li>
          <li>
            <a href='#'>Projects</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
