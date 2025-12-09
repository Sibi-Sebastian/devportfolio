import React, { useState } from 'react';
import { FORM_CONFIG } from '../constants/data';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    const formData = new FormData(e.target);
    formData.append("access_key", FORM_CONFIG.accessKey);

    try {
      const response = await fetch(FORM_CONFIG.apiUrl, {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        e.target.reset();
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        console.log('Error:', data);
        setFormStatus('error');
      }
    } catch (error) {
      console.log('Error:', error);
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="contact sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">Contact</span>
          <span className="heading-sec__sub heading-sec__sub--lt">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect
          </span>
        </h2>
        <div className="contact__form-container">
          {formStatus === 'sending' && (
            <div style={{
              padding: '1.5rem',
              marginBottom: '2rem',
              backgroundColor: '#d1ecf1',
              color: '#0c5460',
              borderRadius: '5px',
              textAlign: 'center',
              fontSize: '1.6rem'
            }}>
              ⏳ Sending your message...
            </div>
          )}
          {formStatus === 'success' && (
            <div style={{
              padding: '1.5rem',
              marginBottom: '2rem',
              backgroundColor: '#d4edda',
              color: '#155724',
              borderRadius: '5px',
              textAlign: 'center',
              fontSize: '1.6rem'
            }}>
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {formStatus === 'error' && (
            <div style={{
              padding: '1.5rem',
              marginBottom: '2rem',
              backgroundColor: '#f8d7da',
              color: '#721c24',
              borderRadius: '5px',
              textAlign: 'center',
              fontSize: '1.6rem'
            }}>
              ✗ Oops! Something went wrong. Please try again.
            </div>
          )}
          <form className="contact__form" onSubmit={handleSubmit}>
            <input type="hidden" name="subject" value={FORM_CONFIG.subject} />
            <input type="hidden" name="from_name" value={FORM_CONFIG.fromName} />
            
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="name">Name</label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
                className="contact__form-input"
                name="name"
                id="name"
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="email">Email</label>
              <input
                required
                placeholder="Enter Your Email"
                type="email"
                className="contact__form-input"
                name="email"
                id="email"
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="message">Message</label>
              <textarea
                required
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Enter Your Message"
                name="message"
                id="message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn--theme contact__btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
