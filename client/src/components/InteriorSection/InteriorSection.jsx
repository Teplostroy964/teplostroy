import React from "react";
import { motion } from "framer-motion";
import "./InteriorSection.css";
import interior1 from "../../images/project1.jpg";
import interior2 from "../../images/project2.jpg";
import interior3 from "../../images/project3.jpg";
import interior4 from "../../images/main.jpg";
import { Link } from "react-router-dom";

const InteriorSection = () => {
  const projects = [
    {
      image: interior1,
      title: "Современный стиль",
      description: "Четкие линии, нейтральные цвета, функциональность",
    },
    {
      image: interior2,
      title: "Скандинавский стиль",
      description: "Светлые тона, натуральные материалы, уют",
    },
    {
      image: interior3,
      title: "Лофт",
      description: "Индустриальные элементы, открытые коммуникации",
    },
    {
      image: interior4,
      title: "Классика",
      description: "Дорогие материалы, симметрия, роскошные детали",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Консультация",
      description: "Обсуждаем ваши пожелания, бюджет и сроки",
    },
    {
      number: "2",
      title: "3D-визуализация",
      description: "Создаем 3D-проект будущего интерьера",
    },
    {
      number: "3",
      title: "Подбор материалов",
      description: "Выбираем отделочные материалы и мебель",
    },
    {
      number: "4",
      title: "Реализация",
      description: "Координируем ремонтные работы",
    },
  ];

  return (
    <section className="interior-section" id="interior">
      <div className="interior-container">
        <motion.div
          className="interior-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="interior-title">
            <span>Дизайн интерьера</span> вашего дома
          </h2>
          <p className="interior-subtitle">
            Создаем уникальные интерьеры, которые отражают ваш характер и
            обеспечивают комфорт для всей семьи.
          </p>
        </motion.div>

        <div className="interior-gallery">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="interior-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="interior-card-image"
              />
              <div className="interior-card-overlay">
                <h3 className="interior-card-title">{project.title}</h3>
                <p className="interior-card-description">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="interior-steps">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="interior-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="interior-step-number">{step.number}</div>
              <h3 className="interior-step-title">{step.title}</h3>
              <p className="interior-step-description">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="interior-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/survey">Заказать дизайн-проект</Link>
        </motion.button>
      </div>
    </section>
  );
};

export default InteriorSection;
