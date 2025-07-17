import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiYoutube,
} from "react-icons/fi";

const Footer = () => {
  const links = [
    { title: "Проекты", url: "#projects" },
    { title: "Технологии", url: "#tech" },
    { title: "О компании", url: "#about" },
    { title: "Гарантии", url: "#guarantee" },
    { title: "Отзывы", url: "#reviews" },
    { title: "Контакты", url: "#contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-logo">
            <span className="footer-logo-main">ТеплоДом</span>
            <span className="footer-logo-sub">Тюмень</span>
          </div>
          <p className="footer-about">
            Строим теплые и надежные дома в Тюмени и области с 2010 года. 70+
            реализованных проектов.
          </p>
          <div className="footer-social">
            <a href="/client/public/index.html">
              <FiFacebook />
            </a>
            <a href="/client/public/index.html">
              <FiInstagram />
            </a>
            <a href="/client/public/index.html">
              <FiYoutube />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="footer-title">Навигация</h3>
          <ul className="footer-links">
            {links.map((link, index) => (
              <li key={index} className="footer-link">
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="footer-title">Контакты</h3>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">
              <FiPhone />
            </span>
            <span>8 (800) 123-45-67</span>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">
              <FiMail />
            </span>
            <span>info@teplodom-tyumen.ru</span>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">
              <FiMapPin />
            </span>
            <span>г. Тюмень, ул. Строителей, 15</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
