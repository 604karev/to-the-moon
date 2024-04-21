import React from 'react';
import './Footer.scss';
import rocketIcon from 'assets/images/rocket.svg'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img src={rocketIcon} alt="Rocket" className="footer__icon" />
        <div className="footer__text">Exciting space adventure!</div>
      </div>
    </footer>
  );
};

export default Footer;