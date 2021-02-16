import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navLinks: 'hidden'
    }
  }

  handleClick = () => {
   this.setState({
     navLinks: !this.state.navLinks ? 'hidden' : ''
   })
  }

  render() {
      return (
        <header>
          <div class='logo'>
            <div className='name'>Meet Patel</div>
          </div>
          <button class='nav-toggle' aria-label='toggle navigation'>
            <span class='hamburger'></span>
          </button>
          <nav class='nav'>
            <ul class='nav__list'>
              <li class='nav__item'>
                <a href='#home' class='nav__link'>
                  Home
                </a>
              </li>
              <li class='nav__item'>
                <a href='#techstack' class='nav__link'>
                  TechStack
                </a>
              </li>
              <li class='nav__item'>
                <a href='#about' class='nav__link'>
                  About
                </a>
              </li>
              <li class='nav__item'>
                <a href='#projects' class='nav__link'>
                  Projects
                </a>
              </li>
              <li class='nav__item'>
                <a href='#contact' class='nav__link'>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
      );
  }
  
}
