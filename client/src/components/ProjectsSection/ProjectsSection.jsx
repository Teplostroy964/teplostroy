import React from "react";
import { motion } from "framer-motion";
import "./ProjectsSection.css";
import { FiCheckCircle, FiHome, FiLayers } from "react-icons/fi";
import project1 from "../../images/project1.png";
import project2 from "../../images/project2.jpg";
import project3 from "../../images/project3.jpg";

const projects = [
  {
    title: "Проект «Тайга»",
    image: project1,
    features: [
      { icon: <FiHome />, text: "120 м²" },
      { icon: <FiLayers />, text: "2 этажа" },
      { icon: <FiCheckCircle />, text: "Скандинавский шале" },
    ],
    price: "От 3 490 000 ₽",
    note: "В базовую стоимость входит: утепление 300 мм, окна Rehau, чистовая отделка!",
  },
  {
    title: "Проект «Север»",
    image: project2,
    features: [
      { icon: <FiHome />, text: "85 м²" },
      { icon: <FiLayers />, text: "1 этаж" },
      { icon: <FiCheckCircle />, text: "Минимализм" },
    ],
    price: "От 2 190 000 ₽",
    note: "Идеальный вариант для молодой семьи или пенсионеров",
  },
  {
    title: "Проект «Урал»",
    image: project3,
    features: [
      { icon: <FiHome />, text: "150 м²" },
      { icon: <FiLayers />, text: "2 этажа + мансарда" },
      { icon: <FiCheckCircle />, text: "Классический" },
    ],
    price: "От 4 290 000 ₽",
    note: "Просторный дом для большой семьи с камином",
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ color: "white" }}
        >
          Наши проекты
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ color: "rgba(255,255,255,0.8)", textAlign: "center" }}
        >
          Каждый дом адаптирован для сурового тюменского климата
        </motion.p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-features">
                  {project.features.map((feature, i) => (
                    <div key={i} className="project-feature">
                      {feature.icon} {feature.text}
                    </div>
                  ))}
                </div>
                <div className="project-price">{project.price}</div>
                <p style={{ fontSize: "0.9rem", marginBottom: "20px" }}>
                  {project.note}
                </p>
                <a href="#contact" className="project-button">
                  Подробнее + фото
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
