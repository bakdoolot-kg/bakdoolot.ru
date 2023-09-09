import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Bakdoolot</h1>

        <ul className="footer__list">
          {/* LINK 1 */}
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          {/* LINK 2 */}
          <li>
            <a href="#qualification" className="footer__link">
              Qualification
            </a>
          </li>
          {/* LINK 3 */}
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <Link to="portfolio" className="footer__link">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="store" className="footer__link">
              Store
            </Link>
          </li>
        </ul>

        {/* FOOTER SOCIAL */}
        <div className="footer__social">
          <a
            href="https://www.instagram.com/b_altybaevv/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/bakdoolot/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-linkedin"></i>
          </a>

          <a
            href="https://t.me/b_altybaev"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-telegram-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Bakdoolot. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
