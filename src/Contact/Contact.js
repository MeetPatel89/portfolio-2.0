import React, { Component } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import './Contacts.css';

export default class Contact extends Component {
  render() {
    return (
      <section className='contact' id='contact'>
        <h2>Contact Me</h2>
        <p className='contact__subtitle'>
          Have a question or want to work together?
        </p>
        <form className='contact-form'>
          <input
            name='name'
            type='text'
            className='form-control'
            placeholder='Your Name'
            required
          />
          <input
            name='email'
            type='email'
            className='form-control'
            placeholder='Your Email'
            required
          />
          <textarea
            name='message'
            class='form-control'
            placeholder='Message'
            rows='4'
            required
          />
          <input type='submit' className='form-control submit' value='SUBMIT' />
        </form>
        <div className='social-icons'>
          <a href='https://github.com/MeetPatel89' target='_blank'>
            <AiIcons.AiFillGithub className='github-social' />
          </a>
          <a href='https://www.linkedin.com/in/meet-dev' target='_blank'>
            <FaIcons.FaLinkedinIn className='linkedin-social' />
          </a>
          <a href='https://twitter.com/NautilusShell89' target='_blank'>
            <FaIcons.FaTwitter className='twitter-social' />
          </a>
          <a href='mailto:meet.nautilus.shell@gmail.com'>
            <MdIcons.MdEmail className='mail-social' />
          </a>
        </div>
      </section>
    );
  }
}
