import React from "react";
import { motion } from "framer-motion";
import "./AboutSection.css";
import { FiThermometer, FiDollarSign, FiShield } from "react-icons/fi";
import aboutImage from "../../images/second.jpg";

const AboutSection = () => {
  const principles = [
    {
      icon: <FiThermometer />,
      title: "Физика тепла > красивые слова",
      text: "Мы используем научный подход к утеплению, а не маркетинговые обещания",
    },
    {
      icon: <FiDollarSign />,
      title: "Честность в смете = доверие",
      text: "Никаких скрытых платежей. Фиксированная цена прописана в договоре",
    },
    {
      icon: <FiShield />,
      title: "Гарантия 12 лет",
      text: "Самый длинный гарантийный срок в регионе, потому что уверены в качестве",
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="about-badge"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            70+ домов в Тюмени
          </motion.div>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Сибирские ТеплоСтрой
          </motion.h2>

          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Наша миссия: строить дома, где даже в -40°C вы ходите в футболке
          </motion.p>

          <div className="about-principles">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                className="about-principle"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="principle-icon">{principle.icon}</div>
                <div className="principle-text">
                  <h4>{principle.title}</h4>
                  <p>{principle.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={aboutImage} alt="Команда Сибирские ТеплоСтрой" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
