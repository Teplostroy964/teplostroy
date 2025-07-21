import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiHome,
  FiLayers,
  FiInfo,
  FiMail,
  FiX,
  FiZap,
  FiWifi,
  FiCheckCircle,
  FiUsers,
} from "react-icons/fi";
import { PiPlantFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = document.querySelectorAll("section");
      let current = null;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = `#${section.id}`;
        }
      });

      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Главная", href: "#home", icon: <FiHome /> },
    { name: "О нас", href: "#about", icon: <FiInfo /> },
    { name: "Технологии", href: "#tech", icon: <FiZap /> },
    { name: "Проектирование", href: "#design", icon: <FiLayers /> },
    { name: "Фундаменты", href: "#foundation", icon: <FiCheckCircle /> },
    { name: "Инж. системы", href: "#engineering", icon: <FiWifi /> },
    { name: "Интерьеры", href: "#interior", icon: <FiUsers /> },
    { name: "Ландшафт", href: "#landscape", icon: <PiPlantFill /> },
    { name: "Дома в продаже", href: "#projects", icon: <FiLayers /> },
    { name: "Контроль", href: "#tracking", icon: <FiCheckCircle /> },
    { name: "Контакты", href: "#contact", icon: <FiMail /> },
  ];

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          {/* Логотип */}
          <motion.a
            href="/"
            className="logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="logo-icon"></div>
            <div className="logo-text">Метр Квадратный</div>
          </motion.a>

          {/* Кнопка меню */}
          <button
            className={`menu-button ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
          >
            <div className="menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </header>

      {/* Оверлей меню */}
      <div
        className={`menu-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Меню */}
      <div className={`menu ${isMenuOpen ? "active" : ""}`}>
        <div className="menu-header">
          <div className="logo">
            <div className="logo-icon">ТД</div>
            <div className="logo-text" style={{ color: "#111827" }}>
              ТеплоДом
            </div>
          </div>
          <button
            className="menu-close"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Закрыть меню"
          >
            <FiX size={24} />
          </button>
        </div>

        <div className="menu-scroll">
          <ul className="menu-list">
            {navItems.map((item, index) => (
              <li
                key={item.name}
                className="menu-item"
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveLink(item.href);
                }}
              >
                <a
                  href={item.href}
                  className={`menu-link ${
                    activeLink === item.href ? "active" : ""
                  }`}
                >
                  {item.icon} {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="menu-footer">
          <Link
            to="/survey"
            className="cta-button"
            onClick={() => setIsMenuOpen(false)}
          >
            Консультация
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
