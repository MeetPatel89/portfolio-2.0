import React, { Component } from 'react';
import profile from '../images/profile.jpg';

export default class Intro extends Component {
    render() {
        return (
            <section className='intro' id='home'>
                <h1 className='section__title section__title--intro'>
                    Hi, I am <strong>Meet Patel</strong>
                </h1>
                <p className='section__subtitle section__subtitle--intro'>full-stack web developer</p>
                <img src={profile} alt='profile of Meet smiling' />
            </section>
        )
    }
}