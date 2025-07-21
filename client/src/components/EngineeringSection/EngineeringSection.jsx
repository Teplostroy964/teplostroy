import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiZap, FiDroplet, FiWifi, FiTool } from "react-icons/fi";
import "./EngineeringSection.css";
import engineeringImage1 from "../../images/project1.jpg";
import engineeringImage2 from "../../images/project2.jpg";
import engineeringImage3 from "../../images/project3.jpg";
import { Link } from "react-router-dom";

const EngineeringSection = () => {
  const [activeTab, setActiveTab] = useState("electric");

  const systems = {
    electric: {
      title: "Электрика и освещение",
      image: engineeringImage1,
      description:
        "Полный комплекс работ по электромонтажу: от проектирования до пуско-наладки. Безопасные и надежные решения для вашего дома.",
      features: [
        "Разводка электрики по современным стандартам",
        "Установка щитков и автоматов",
        "Монтаж розеток и выключателей",
        "Умные системы освещения",
        "Гарантия на работы 5 лет",
      ],
      price: "От 1200 ₽/м²",
    },
    plumbing: {
      title: "Водоснабжение и канализация",
      image: engineeringImage2,
      description:
        "Монтаж систем водоснабжения, канализации и водоочистки. Используем качественные материалы и современные технологии.",
      features: [
        "Монтаж трубопроводов PPR и металлопластик",
        "Установка сантехнических приборов",
        "Монтаж септиков и ЛОС",
        "Системы фильтрации воды",
        "Гидравлические испытания",
      ],
      price: "От 1800 ₽/м²",
    },
    heating: {
      title: "Отопление и вентиляция",
      image: engineeringImage3,
      description:
        "Эффективные системы отопления и вентиляции для комфортного микроклимата в доме круглый год.",
      features: [
        "Монтаж газовых и электрических котлов",
        "Теплые полы водяные и электрические",
        "Системы приточно-вытяжной вентиляции",
        "Терморегуляция и умный климат-контроль",
        "Пуско-наладка и обслуживание",
      ],
      price: "От 2500 ₽/м²",
    },
  };

  return (
    <section className="engineering-section" id="engineering">
      <div className="engineering-container">
        <motion.div
          className="engineering-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="engineering-title">
            Монтаж <span>инженерных систем</span>
          </h2>
          <p className="engineering-subtitle">
            Комплексные решения для комфорта вашего дома: электрика,
            водоснабжение, канализация, отопление и вентиляция.
          </p>
        </motion.div>

        <div className="engineering-tabs">
          <button
            className={`engineering-tab ${
              activeTab === "electric" ? "active" : ""
            }`}
            onClick={() => setActiveTab("electric")}
          >
            <FiZap /> Электрика
          </button>
          <button
            className={`engineering-tab ${
              activeTab === "plumbing" ? "active" : ""
            }`}
            onClick={() => setActiveTab("plumbing")}
          >
            <FiDroplet /> Водоснабжение
          </button>
          <button
            className={`engineering-tab ${
              activeTab === "heating" ? "active" : ""
            }`}
            onClick={() => setActiveTab("heating")}
          >
            <FiWifi /> Отопление
          </button>
        </div>

        <div className="engineering-content">
          <motion.div
            className="engineering-image-container"
            key={activeTab}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={systems[activeTab].image}
              alt={systems[activeTab].title}
              className="engineering-image"
            />
          </motion.div>

          <motion.div
            className="engineering-details"
            key={`details-${activeTab}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="engineering-item-title">
              {systems[activeTab].title}
            </h3>
            <p className="engineering-item-description">
              {systems[activeTab].description}
            </p>

            <div className="engineering-features">
              {systems[activeTab].features.map((feature, index) => (
                <div key={index} className="engineering-feature">
                  <FiCheck className="engineering-feature-icon" />
                  <p className="engineering-feature-text">{feature}</p>
                </div>
              ))}
            </div>

            <Link to="/survey" className="engineering-button">
              <FiTool /> Заказать расчет
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringSection;
