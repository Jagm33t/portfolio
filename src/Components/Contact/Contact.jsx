import React, { useState ,useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.scss"

function Contact() {

  const form = useRef()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

 
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ajwuvdn', 'template_i1j0rtt', form.current, 'NafCX7UaARHnuk0PJ')
        .then((result) => {
            console.log(result.text);
            form.current.reset();
        }, (error) => {
            console.log(error.text);
        });
       
    };
 

  return (
    <>
      <div className="contact">
        <div className="contact-header">
          <h1>CONTACT</h1>
          
        </div>
        
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail} className="form-container">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                value={name}
                name='user_name'
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                value={email}
                name='user_email'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                name='user_message'
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button className='contact-submitbtn' type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
