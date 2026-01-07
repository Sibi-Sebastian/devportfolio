import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants/data';

const Hero = () => {
  return (
    <section id="home" className="home-hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">{PERSONAL_INFO.name}</h1>
        <h2 className="heading-secondary">{PERSONAL_INFO.title}</h2>
        <div className="home-hero__info">
          <p className="text-primary">
            {PERSONAL_INFO.description}
          </p>
        </div>
        <div className="home-hero__cta">
          <a href="#projects" className="btn btn--bg">Projects</a>
        </div>
      </div>
      <div className="home-hero__socials">
        {SOCIAL_LINKS.map((social, index) => (
          <div key={index} className="home-hero__social">
            <a 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`home-hero__social-icon-link ${index === SOCIAL_LINKS.length - 1 ? 'home-hero__social-icon-link--bd-none' : ''}`}
            >
              <img src={social.icon} alt={social.name} className="home-hero__social-icon" />
            </a>
          </div>
        ))}
      </div>
      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
