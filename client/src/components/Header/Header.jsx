import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Header.css";
import { Squash as Hamburger } from "hamburger-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Проекты", href: "#projects" },
    { name: "Технологии", href: "#tech" },
    { name: "О компании", href: "#about" },
    { name: "Контакты", href: "#contact" },
  ];

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          {/* Логотип */}
          <motion.a
            href="/"
            className="header-logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="header-logo-main">ТеплоДом</span>
            <span className="header-logo-sub">Тюмень</span>
          </motion.a>

          {/* Десктопное меню */}
          <nav className="header-nav">
            <ul className="header-nav-list">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <a href={item.href} className="header-nav-link">
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="header-cta"
            >
              <span>Бесплатная консультация</span>
            </motion.button>
          </nav>

          {/* Мобильное меню */}
          <button
            className="header-mobile-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Hamburger
              toggled={isMenuOpen}
              size={28}
              color={isMenuOpen ? "#f8c537" : isScrolled ? "#0E2A47" : "white"}
            />
          </button>
        </div>
      </header>

      {/* Мобильное меню (оверлей) */}
      <div className={`header-mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <ul className="header-mobile-list">
          {navItems.map((item, index) => (
            <li
              key={item.name}
              className="header-mobile-item"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href={item.href} className="header-mobile-link">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="header-mobile-contacts">
          <a href="tel:+78001234567" className="header-mobile-phone">
            8 (800) 123-45-67
          </a>
          <button className="header-mobile-cta">Заказать звонок</button>
        </div>
      </div>
    </>
  );
};

export default Header;
