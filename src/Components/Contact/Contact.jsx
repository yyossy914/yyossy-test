import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-text">
            <h1>Share Your Voice</h1>
            <h2>If you have any comments, ideas or concerns about anything, get in touch through our contact form or the email below:</h2>
            <h3>kaneko.yoshiki@ais.at</h3>
        </div>
        <div className="contact-col">
            <form>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Name *' required/>
                <label>Email</label>
                <input type="email" name='email' placeholder='Email *' required/>
                <label>Message</label>
                <textarea name="message" rows="6" placeholder='Message *' required></textarea>
                <button type='submit' className='btn'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact