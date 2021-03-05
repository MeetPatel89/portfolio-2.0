import React, { Component } from 'react';
import profile from '../assets/profile.jpg';

export default class Intro extends Component {
    render() {
        return (
          <div className='intro' id='home'>
            <p>Hello, I'm Meet Patel.</p>
            {/*<img src={profile} alt='profile' /> */}

            <p>I'm a full-stack web developer.</p>
            <a href='#about'>About</a>
            <a href='#projects'>View my work</a>
          </div>
        );
    }
}