import React from "react";
import { motion } from "framer-motion";
import "./FearSection.css";
import img1 from "../../images/first.jpg";
import img2 from "../../images/second.jpg";
import img3 from "../../images/third.jpg";

const fears = [
  {
    icon: "❄️",
    title: "Дом будет холодным!",
    solution:
      "Усиленное утепление стен (300 мм), энергоэффективные окна, теплые полы",
    proof: "До 60% экономии на отоплении даже при -40°C",
    image: img1, // Замените на реальное изображение
  },
  {
    icon: "⏱️",
    title: "Сорвут сроки и смету!",
    solution:
      "Фиксированная цена в договоре, поэтапная оплата, онлайн-трекинг стройки 24/7",
    proof: "Строим точно в срок — или платим неустойку",
    image: img2, // Замените на реальное изображение
  },
  {
    icon: "🏘️",
    title: "Участок без инфраструктуры!",
    solution:
      "Поселки с газом, светом, дорогами и охраной. Поможем с оформлением",
    proof: "Карта ТОП-3 поселков с ценами и фото",
    image: img3, // Замените на реальное изображение
  },
];

const FearSection = () => {
  return (
    <section className="fear-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Убиваем ваши страхи
        </motion.h2>

        <div className="fear-grid">
          {fears.map((fear, index) => (
            <motion.div
              key={index}
              className="fear-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
            >
              <div className="fear-icon">{fear.icon}</div>
              <h3 className="fear-title">{fear.title}</h3>

              <div className="fear-solution">
                <span className="solution-label">Наше решение:</span>
                <p>{fear.solution}</p>
              </div>

              <div className="fear-proof">
                <span className="proof-label">Доказательство:</span>
                <p>{fear.proof}</p>
              </div>

              <motion.div
                className="fear-image-hint"
                initial={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={`${fear.image}`}
                  alt={fear.title}
                  className="proof-image"
                />
                <div className="image-overlay">Нажмите для примера</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FearSection;
