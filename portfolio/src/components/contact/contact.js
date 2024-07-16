import React, {useRef}from "react";
import './contact.css';
import Linkedin from '../../assets/linkedin.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_uvmvbol', 'template_y6d8z3l', form.current, {
            publicKey: 'We_nI3RpsBf0s5rmq',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return(
        <section id='contact'>
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit= {sendEmail}>
                <input type="text" name="your_name" className='name' placeholder='Your Name'/>
                <input type="email" name="your_email"className='email' placeholder="Your Email"/>
                <textarea name="message" className="msg" rows="5" placeholder="Your Message"></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
            </form>
            <div className="links">
                <a href="https://www.linkedin.com/in/payton-murdoch-b75673238/"><img src={Linkedin} alt="Linkedin" className="contactImg"/></a>
            </div>
        </section>
    );
}

export default Contact;