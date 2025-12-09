import React from 'react';
import { SKILLS, ABOUT_ME } from '../constants/data';

const About = () => {
  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">About Me</span>
          <span className="heading-sec__sub">
            Here you will find more information about me, what I do, and my current skills in programming and technology
          </span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Get to know me!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                {ABOUT_ME.intro}
              </p>
              <p className="about__content-details-para">
                {ABOUT_ME.details}
              </p>
            </div>
            <a href="#contact" className="btn btn--med btn--theme">Contact</a>
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              {SKILLS.map((skill, index) => (
                <div key={index} className="skills__skill">{skill}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
