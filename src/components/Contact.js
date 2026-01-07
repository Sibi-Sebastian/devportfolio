import React, { useState } from 'react';
import { FORM_CONFIG, PERSONAL_INFO } from '../constants/data';

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
          <span className="heading-sec__main">Contact</span>
          <span className="heading-sec__sub">
            Let's discuss your next project or opportunity
          </span>
        </h2>
        
        <div className="contact__content">
          <div className="contact__info">
            <h3 className="contact__info-title">Get In Touch</h3>
            <p className="contact__info-desc">
              I'm always interested in new opportunities and collaborations. 
              Whether you have a project in mind or just want to connect, feel free to reach out.
            </p>
            
            <div className="contact__details">
              <div className="contact__detail">
                <span className="contact__detail-icon">📧</span>
                <div className="contact__detail-content">
                  <h4>Email</h4>
                  <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a>
                </div>
              </div>
              
              <div className="contact__detail">
                <span className="contact__detail-icon">📱</span>
                <div className="contact__detail-content">
                  <h4>Phone</h4>
                  <a href={`tel:${PERSONAL_INFO.phone}`}>{PERSONAL_INFO.phone}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact__form-container">
            {formStatus === 'sending' && (
              <div className="contact__status contact__status--sending">
                ⏳ Sending your message...
              </div>
            )}
            {formStatus === 'success' && (
              <div className="contact__status contact__status--success">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {formStatus === 'error' && (
              <div className="contact__status contact__status--error">
                ✗ Oops! Something went wrong. Please try again.
              </div>
            )}
            
            <form className="contact__form" onSubmit={handleSubmit}>
              <input type="hidden" name="subject" value={FORM_CONFIG.subject} />
              <input type="hidden" name="from_name" value={FORM_CONFIG.fromName} />
              
              <div className="contact__form-row">
                <div className="contact__form-field">
                  <input
                    required
                    placeholder="Your Name"
                    type="text"
                    className="contact__form-input"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="contact__form-field">
                  <input
                    required
                    placeholder="Your Email"
                    type="email"
                    className="contact__form-input"
                    name="email"
                    id="email"
                  />
                </div>
              </div>
              
              <div className="contact__form-field">
                <textarea
                  required
                  rows="5"
                  className="contact__form-input contact__form-textarea"
                  placeholder="Your Message"
                  name="message"
                  id="message"
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn--theme contact__btn" disabled={formStatus === 'sending'}>
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
