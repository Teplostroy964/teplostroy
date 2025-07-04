import React from "react";
import { motion } from "framer-motion";
import "./TrackingSection.css";
import {
  FiCalendar,
  FiVideo,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";
import trackingImage from "../../images/main.jpg";

const TrackingSection = () => {
  const features = [
    {
      icon: <FiCalendar />,
      title: "Календарный график",
      text: "Точные сроки каждого этапа с автоматическими уведомлениями",
    },
    {
      icon: <FiVideo />,
      title: "Видеоотчеты",
      text: "Еженедельные видео с объекта от прораба с комментариями",
    },
    {
      icon: <FiMessageSquare />,
      title: "Чат 24/7",
      text: "Прямая связь со строительной бригадой и инженером",
    },
    {
      icon: <FiCheckCircle />,
      title: "Контроль качества",
      text: "Фотофиксация всех скрытых работ перед их закрытием",
    },
  ];

  return (
    <section className="tracking-section" id="tracking">
      <div className="tracking-container">
        <motion.div
          className="tracking-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Стройка без вашего участия — но под полным контролем
          </motion.h2>

          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Личный кабинет с онлайн-трекингом строительства
          </motion.p>

          <div className="tracking-features">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="tracking-feature"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="tracking-icon">{feature.icon}</div>
                <div className="tracking-feature-text">
                  <h4>{feature.title}</h4>
                  <p>{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="tracking-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={trackingImage} alt="Интерфейс онлайн-трекинга" />
        </motion.div>
      </div>
    </section>
  );
};

export default TrackingSection;
