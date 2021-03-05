import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navLinks: 'hidden',
      hamburger: '',
      flexCol: '',
      open: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      navLinks: !prevState.navLinks ? 'hidden' : '',
      hamburger: !prevState.hamburger ? 'close' : '',
      flexCol: !prevState.flexCol ? 'flex-col' : '',
      open: !prevState.open,
    }));
  };

  render() {
    return (
      <header>
        <div className='logo-hamburger flex-row'>
          <div className='logo'>
            <div className='name'>Meet Patel</div>
          </div>
          <div
            className={`hamburger ${this.state.hamburger}`}
            onClick={this.handleClick}
          >
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
        </div>

        <nav className={`${this.state.flexCol} ${this.state.navLinks}`}>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href='#home' className='nav__link'>
                Home
              </a>
            </li>
            <li className='nav__item'>
              <a href='#techstack' className='nav__link'>
                TechStack
              </a>
            </li>
            <li className='nav__item'>
              <a href='#about' className='nav__link'>
                About
              </a>
            </li>
            <li className='nav__item'>
              <a href='#projects' className='nav__link'>
                Projects
              </a>
            </li>
            <li className='nav__item'>
              <a href='#contact' className='nav__link'>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className='experiment'>{this.props.children}</div>
      </header>
    );
  }
}
