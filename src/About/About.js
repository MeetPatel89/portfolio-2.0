import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <section className='about-me' id='about'>
                <h2 class='section__title section__title--about'>Who I am</h2>
                <p className='section__subtitle section__subtitle--about'>From Medicine to Coding</p>
                <div className='about-me__body'>
                    <p>Sometime during February of 2020, I was studying for USMLEs, a set of examinations you need to pass to pursue medical residency as a foreign medical graduate. It was during this time that I stumbled onto Codecademy</p>
                    <p>Initially I dabbled in coding for few hours every day. But what began as a mere curiosity soon morphed into a comprehensive obsession and I started spending most of my time learning how to code using all kinds of resources like codecademy, freecodecamp, udacity, udemy, etc. The idea that you could solve problems by meticulously articulating the logic and writing a few lines of a language seemed too good to be true. Yet it turned out to be true day in, day out. Acquiring coding skills seemed like acquiring a superpower that could be used to approach a whole gamut of problems.</p>
                    <p>I am looking forward to using my skills to collaborate with other programmers as well as to work on individual projects.</p>
                </div>
            </section>
        )
    }
}