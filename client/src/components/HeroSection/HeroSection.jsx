import React from "react";
import "./HeroSection.css";
import houseImage from "../../images/main.jpg";

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
            <p className="subtitle">Переезжайте через 6 месяцев</p>
            <div className="subtitle-icon">❄️</div>
          </div>

          <p className="description">
            Фиксированная цена • Усиленное утепление • 12 лет гарантии
          </p>
        </div>

        <div className="action-buttons">
          <button className="action-btn dark">
            <span>Расчет стоимости</span>
            <div className="btn-hover"></div>
          </button>
          <button className="action-btn light">
            <span>Все проекты</span>
          </button>
        </div>
      </div>

      <div className="hero-image-container">
        <img src={houseImage} alt="Современный дом" className="hero-img" />
        <div className="image-tag">
          <span>12 лет</span>
          <span>гарантии</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
