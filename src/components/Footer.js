import React from 'react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants/data';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              {SOCIAL_LINKS.map((social, index) => (
                <a 
                  key={index}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  href={social.url}
                >
                  <img 
                    className={`main-footer__icon ${index === SOCIAL_LINKS.length - 1 ? 'main-footer__icon--mr-none' : ''}`}
                    src={social.icon} 
                    alt={social.name} 
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">{PERSONAL_INFO.name}</h4>
            <p className="main-footer__short-desc">
              Sibi Sebastian is a {PERSONAL_INFO.title} passionate about building scalable backend systems and robust APIs
            </p>
          </div>
        </div>

        <div className="main-footer__lower">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved | 
          Email: <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a> | 
          Phone: <a href={`tel:${PERSONAL_INFO.phone}`}>{PERSONAL_INFO.phone}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
