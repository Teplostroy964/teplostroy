import React from "react";
import "./HeroSection.css";
import houseImage from "../../images/project1.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="radical-hero">
      <div className="hero-background">
        <div className="background-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="text-content">
          <div className="title-wrapper">
            <h1 className="main-title">
              <span className="title-part">Теплые дома</span>
              <span className="title-part accent">для Тюмени</span>
            </h1>
            <div className="title-underline"></div>
          </div>

          <div className="subtitle-block">
            <p className="subtitle">
              Готовность дома к чистовой отделке через 2-3 месяца
            </p>
          </div>

          <p className="description">
            Фиксированная цена • Усиленное утепление • 5 лет гарантии
          </p>
        </div>

        <div className="action-buttons">
          <Link className="action-btn dark" to="/survey">
            <span>Подробнее</span>
            <div className="btn-hover"></div>
          </Link>
        </div>
      </div>

      <div className="hero-image-container">
        <img src={houseImage} alt="Современный дом" className="hero-img" />
        <div className="image-tag">
          <span>5 лет</span>
          <span>гарантии</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
