import React, { Component } from 'react';

export default class TechStack extends Component {
    render() {
        return (
          <section className='my-techstack' id='techstack'>
            <h2 className='section__title section__title--techstack'>
              My Tech Stack
            </h2>
            <div className='techstack'>
              <p>
                Here are a few technologies that I've been working with
                recently:
              </p>
              <ul>
                <li>Git/Github</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <a href='#projects' className='btn'>My Projects</a>
          </section>
        );
    }
}