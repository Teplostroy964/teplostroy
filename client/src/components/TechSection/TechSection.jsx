import React from "react";
import { motion } from "framer-motion";
import "./TechSection.css";

const technologies = [
  {
    icon: "🧱",
    title: "Фундамент",
    description:
      "УШП с подогревом или усиленный ленточный - выдерживает -50°C и пучение грунтов",
  },
  {
    icon: "🧊",
    title: "Утепление",
    description:
      "300 мм эковаты/каменной ваты — в 1.5 раза больше нормы для Тюмени",
  },
  {
    icon: "🪟",
    title: "Окна",
    description: "5-камерные VEKA + энергосберегающие стеклопакеты с аргоном",
  },
  {
    icon: "🔥",
    title: "Отопление",
    description: "Конденсационный котел + теплые полы = комфорт при -50°С",
  },
];

const TechSection = () => {
  return (
    <section className="tech-section" id="tech">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Технологии, проверенные тюменской зимой
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Мы создаем термосы для жизни — без компромиссов
        </motion.p>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="tech-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="tech-icon">{tech.icon}</div>
              <h3 className="tech-title">{tech.title}</h3>
              <p className="tech-desc">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
