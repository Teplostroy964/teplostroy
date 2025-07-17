import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import "./Quiz.css";

const Quiz = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Какой тип дома вас интересует?",
      options: [
        { value: "Кирпичный", icon: "🏠" },
        { value: "Деревянный (брус, бревно)", icon: "🌲" },
        { value: "Каркасный", icon: "🛠️" },
        { value: "Газобетонный", icon: "🧱" },
        { value: "Еще не определился", icon: "❓" },
      ],
    },
    {
      id: 2,
      question: "Какая площадь дома планируется?",
      options: [
        { value: "До 100 м²", icon: "📏" },
        { value: "100-150 м²", icon: "📐" },
        { value: "150-200 м²", icon: "📊" },
        { value: "Более 200 м²", icon: "🏢" },
      ],
    },
    {
      id: 3,
      question: "Когда планируете начать строительство?",
      options: [
        { value: "В течение месяца", icon: "⏱️" },
        { value: "1-3 месяца", icon: "📅" },
        { value: "3-6 месяцев", icon: "🗓️" },
        { value: "Более чем через 6 месяцев", icon: "⏳" },
      ],
    },
    {
      id: 4,
      question: "Какой бюджет на строительство?",
      options: [
        { value: "До 2 млн руб.", icon: "💰" },
        { value: "2-4 млн руб.", icon: "💵" },
        { value: "4-6 млн руб.", icon: "💳" },
        { value: "Более 6 млн руб.", icon: "🪙" },
      ],
    },
  ];

  const handleAnswer = (question, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: answer,
    }));
    setStep((prev) => prev + 1);
  };

  const handleInputChange = (e) => {
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
      const response = await fetch("/api/submit-quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          answers,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = ((step - 1) / (questions.length + 1)) * 100;

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        <div className="quiz-header">
          <h1>Калькулятор строительства дома</h1>
          <p>Ответьте на 5 вопросов и получите точный расчет стоимости</p>
        </div>

        <div className="quiz-progress-container">
          <div
            className="quiz-progress"
            style={{ width: `${progress}%` }}
          ></div>
          <div className="quiz-steps">
            Шаг {step} из {questions.length + 1}
          </div>
        </div>

        <div className="quiz-content">
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="quiz-success"
            >
              <div className="success-icon">
                <FiCheck />
              </div>
              <h2>Спасибо за ваши ответы!</h2>
              <p>Мы уже обрабатываем вашу заявку и скоро свяжемся с вами.</p>
              <div className="success-details">
                <h3>Детали вашего запроса:</h3>
                <ul>
                  {Object.entries(answers).map(([question, answer]) => (
                    <li key={question}>
                      <strong>{question}:</strong> {answer}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="/" className="home-link">
                Вернуться на главную
              </a>
            </motion.div>
          ) : (
            <>
              <AnimatePresence mode="wait">
                {step <= questions.length ? (
                  <motion.div
                    key={`question-${step}`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="quiz-question"
                  >
                    <h2>{questions[step - 1].question}</h2>
                    <div className="quiz-options">
                      {questions[step - 1].options.map((option, i) => (
                        <button
                          key={i}
                          className="quiz-option"
                          onClick={() =>
                            handleAnswer(
                              questions[step - 1].question,
                              option.value
                            )
                          }
                        >
                          <span className="option-icon">{option.icon}</span>
                          <span className="option-text">{option.value}</span>
                          <FiArrowRight className="option-arrow" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="quiz-form"
                  >
                    <h2>Оставьте контакты для расчета</h2>
                    <p>
                      Мы подготовим персональное предложение и свяжемся с вами
                    </p>

                    <div className="form-group">
                      <label>Ваше имя</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Телефон</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Email (необязательно)</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="example@mail.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <button
                      type="submit"
                      className="quiz-submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Отправка..." : "Получить расчет"}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
