import React from "react";
import { motion } from "framer-motion";
import { FiCheck, FiMap, FiDroplet, FiSun } from "react-icons/fi";
import { PiPlantFill } from "react-icons/pi";
import landscapeImage from "../../images/main.jpg";
import { Link } from "react-router-dom";
import "./LandscapeSection.css";

const LandscapeSection = () => {
  return (
    <section className="landscape-section" id="landscape">
      <div className="landscape-container">
        <div className="landscape-content">
          <motion.div
            className="landscape-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="landscape-title">
              <span>Ландшафтный дизайн</span> участка
            </h2>
            <p className="landscape-description">
              Создаем гармоничное пространство вокруг вашего дома с учетом
              особенностей рельефа, климата и ваших пожеланий. От концепции до
              полной реализации.
            </p>

            <div className="landscape-features">
              <div className="landscape-feature">
                <FiMap className="landscape-feature-icon" />
                <p className="landscape-feature-text">
                  <strong>Генплан участка</strong> с зонированием и разметкой
                  коммуникаций
                </p>
              </div>
              <div className="landscape-feature">
                <PiPlantFill className="landscape-feature-icon" />
                <p className="landscape-feature-text">
                  <strong>Подбор растений</strong> с учетом климата и условий
                  участка
                </p>
              </div>
              <div className="landscape-feature">
                <FiDroplet className="landscape-feature-icon" />
                <p className="landscape-feature-text">
                  <strong>Система полива</strong> автоматическая или
                  комбинированная
                </p>
              </div>
              <div className="landscape-feature">
                <FiSun className="landscape-feature-icon" />
                <p className="landscape-feature-text">
                  <strong>Освещение территории</strong> функциональное и
                  декоративное
                </p>
              </div>
            </div>

            <Link to="/survey" className="landscape-button">
              <FiCheck /> Заказать проект
            </Link>
          </motion.div>

          <motion.div
            className="landscape-image-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={landscapeImage}
              alt="Ландшафтный дизайн"
              className="landscape-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LandscapeSection;
