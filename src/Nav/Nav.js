import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navLinks: 'hidden'
    }
  }

  handleclick = () => {
   this.setState({
     navLinks: !this.state.navLinks ? 'hidden' : ''
   })
  }

  render() {
      return (
        <nav className='navbar'>
          <div className='name'>Meet Patel</div>
          <div className='toggle-button-div'>
            <a href='#' class='toggle-button' onClick={this.handleclick}>
              <span class='bar'></span>
              <span class='bar'></span>
              <span class='bar'></span>
            </a>
          </div>

          <div className={`navbar-links ${this.state.navLinks}`}>
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
  
}
