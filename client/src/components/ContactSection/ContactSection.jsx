import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ContactSection.css";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Ошибка сервера");

      setSubmitStatus({ success: true, message: data.message });
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      setSubmitStatus({ success: false, message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Устали мерзнуть в городе?</h2>
          <p>
            Пора переехать в дом вашей мечты — теплый, светлый и готовый к любой
            зиме. Оставьте заявку, и мы подготовим индивидуальное предложение
            уже сегодня.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <div className="contact-icon">
                <FiPhone />
              </div>
              <span>8 (800) 123-45-67</span>
            </div>
            <div className="contact-detail">
              <div className="contact-icon">
                <FiMail />
              </div>
              <span>info@teplodom-tyumen.ru</span>
            </div>
            <div className="contact-detail">
              <div className="contact-icon">
                <FiMapPin />
              </div>
              <span>Тюмень, ул. Строителей, 15</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-form"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="contact-title">Получить консультацию</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Ваше имя
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Телефон
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Ваш вопрос
              </label>
              <textarea
                id="message"
                name="message"
                className="form-input"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Получить консультацию + подборку участков
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
