import React from "react";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import foundation1 from "../../images/project1.jpg";
import foundation2 from "../../images/project2.jpg";
import foundation3 from "../../images/project3.jpg";
import "./FoundationSection.css";
import { Link } from "react-router-dom";

const FoundationSection = () => {
  const foundations = [
    {
      title: "Ленточный фундамент",
      image: foundation1,
      description:
        "Идеален для каменных, кирпичных и бетонных домов. Обеспечивает устойчивость на различных грунтах.",
      features: [
        "Глубина до 1.5 метров",
        "Армирование стальными прутьями",
        "Гидроизоляция",
        "Срок службы 50+ лет",
      ],
      price: "От 4500 ₽/п.м.",
    },
    {
      title: "Плитный фундамент",
      image: foundation2,
      description:
        "Монолитная плита для сложных грунтов. Равномерно распределяет нагрузку по всей площади.",
      features: [
        "Толщина от 250 мм",
        "Двойное армирование",
        "Утепление пенополистиролом",
        "Сейсмоустойчивость",
      ],
      price: "От 6000 ₽/м²",
    },
    {
      title: "Свайный фундамент",
      image: foundation3,
      description:
        "Оптимален для слабых и пучинистых грунтов. Быстрый монтаж в любых условиях.",
      features: [
        "Сваи до 6 метров",
        "Оголовки из металла",
        "Монтаж за 1-2 дня",
        "Подходит для склонов",
      ],
      price: "От 3500 ₽/свая",
    },
  ];

  return (
    <section className="foundation-section" id="foundation">
      <div className="foundation-container">
        <motion.div
          className="foundation-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="foundation-title">
            Строительство <span>фундаментов</span> любой сложности
          </h2>
          <p className="foundation-subtitle">
            Надежные фундаменты для вашего дома с гарантией от 5 лет. Используем
            качественные материалы и современные технологии.
          </p>
        </motion.div>

        <div className="foundation-grid">
          {foundations.map((foundation, index) => (
            <motion.div
              key={index}
              className="foundation-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={foundation.image}
                alt={foundation.title}
                className="foundation-card-image"
              />
              <div className="foundation-card-content">
                <h3 className="foundation-card-title">{foundation.title}</h3>
                <p className="foundation-card-description">
                  {foundation.description}
                </p>

                <div className="foundation-card-features">
                  {foundation.features.map((feature, i) => (
                    <div key={i} className="foundation-card-feature">
                      <FiCheck /> {feature}
                    </div>
                  ))}
                </div>

                <div className="foundation-card-price">{foundation.price}</div>
                <Link to="/survey" className="foundation-card-button">
                  Подробнее
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;
