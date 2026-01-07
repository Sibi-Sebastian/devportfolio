import React from 'react';
import { PERSONAL_INFO } from '../constants/data';

const Header = ({ mobileMenuOpen, toggleMobileMenu, closeMobileMenu }) => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            {PERSONAL_INFO.profileImage ? (
              <img
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.name}
                className="header__logo-img"
              />
            ) : (
              <div className="header__logo-initials">{PERSONAL_INFO.initials}</div>
            )}
          </div>
          <span className="header__logo-sub">{PERSONAL_INFO.name}</span>
        </div>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <span className="header__link">Home</span>
            </li>
            <li className="header__link-wrapper">
              <span className="header__link">About</span>
            </li>
            <li className="header__link-wrapper">
              <span className="header__link">Projects</span>
            </li>
            <li className="header__link-wrapper">
              <span className="header__link">Blog</span>
            </li>
            <li className="header__link-wrapper">
              <span className="header__link">Contact</span>
            </li>
          </ul>
          <div className="header__main-ham-menu-cont" onClick={toggleMobileMenu}>
            <img
              src="/assets/svg/ham-menu.svg"
              alt="hamburger menu"
              className={`header__main-ham-menu ${mobileMenuOpen ? 'd-none' : ''}`}
            />
            <img
              src="/assets/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              className={`header__main-ham-menu-close ${!mobileMenuOpen ? 'd-none' : ''}`}
            />
          </div>
        </div>
      </div>
      <div className={`header__sm-menu ${mobileMenuOpen ? 'header__sm-menu--active' : ''}`}>
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <span onClick={closeMobileMenu}>Home</span>
            </li>
            <li className="header__sm-menu-link">
              <span onClick={closeMobileMenu}>About</span>
            </li>
            <li className="header__sm-menu-link">
              <span onClick={closeMobileMenu}>Projects</span>
            </li>
            <li className="header__sm-menu-link">
              <span onClick={closeMobileMenu}>Blog</span>
            </li>
            <li className="header__sm-menu-link">
              <span onClick={closeMobileMenu}>Contact</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
