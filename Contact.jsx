import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <div className="head">
        <h1>Got <span>Questions?</span></h1>
      </div>
      <div className="form-container">
        <form action="">
            <input type="text" name="name" id="name" placeholder='Your name*' />
            <input type="email" name="email" id="email" placeholder='Your e-mail*' /><br />
            <textarea name="message" id="message" placeholder='Your message*'></textarea><br />
            <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
