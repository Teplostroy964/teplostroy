import React from "react";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiHome,
  FiLayers,
  FiUsers,
  FiSettings,
} from "react-icons/fi";
import designImage from "../../images/main.jpg";
import "./DesignSection.css";
import { Link } from "react-router-dom";

const DesignSection = () => {
  return (
    <section className="design-section" id="design">
      <div className="design-container">
        <div className="design-content">
          <motion.div
            className="design-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="design-title">
              Индивидуальное <span>проектирование</span> домов и коттеджей
            </h2>
            <p className="design-description">
              Создаем уникальные проекты домов, учитывая все ваши пожелания,
              особенности участка и климатические условия. От эскиза до рабочей
              документации.
            </p>

            <div className="design-features">
              <div className="design-feature">
                <FiHome className="design-feature-icon" />
                <p className="design-feature-text">
                  Учет всех ваших пожеланий и потребностей
                </p>
              </div>
              <div className="design-feature">
                <FiLayers className="design-feature-icon" />
                <p className="design-feature-text">
                  3D-визуализация будущего дома
                </p>
              </div>
              <div className="design-feature">
                <FiCheckCircle className="design-feature-icon" />
                <p className="design-feature-text">
                  Полный комплект проектной документации
                </p>
              </div>
              <div className="design-feature">
                <FiUsers className="design-feature-icon" />
                <p className="design-feature-text">
                  Сопровождение на всех этапах
                </p>
              </div>
            </div>

            <Link to="/survey" className="design-button">
              <FiSettings /> Обсудить проект
            </Link>
          </motion.div>

          <motion.div
            className="design-image-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={designImage}
              alt="Индивидуальное проектирование"
              className="design-image"
            />
            <div className="design-badge">От 58000 ₽/м²</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
