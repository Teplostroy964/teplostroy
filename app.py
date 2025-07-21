from flask import Flask, request, jsonify, send_from_directory
from flask_mail import Mail, Message
from flask_cors import CORS
from dotenv import load_dotenv
from datetime import datetime
import os

# Загрузка переменных окружения
load_dotenv()

# Инициализация приложения
application = Flask(__name__, static_folder='client/build')

# Настройка логирования

# Конфигурация почты
application.config.update(
    MAIL_SERVER='smtp.gmail.com',
    MAIL_PORT=465,
    MAIL_USE_SSL=True,
    MAIL_USERNAME=os.getenv('MAIL_USERNAME'),
    MAIL_PASSWORD=os.getenv('MAIL_PASSWORD'),
    MAIL_DEFAULT_SENDER=os.getenv('MAIL_DEFAULT_SENDER')
)

# Инициализация расширений
mail = Mail(application)
CORS(application)


# Пути к статическим файлам
client_folder = os.path.abspath(os.path.join(os.getcwd(), "client"))
build_folder = os.path.join(client_folder, "build")
    
    
@application.route('/api/send-email', methods=['POST'])
def submit_window_request():
    """Обработчик заявки на окна с полными данными"""
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({'success': False, 'error': 'No data provided'}), 400
            
        # Обязательные поля
        required_fields = ['name', 'phone']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'success': False, 'error': f'Field {field} is required'}), 400
        
        # Проверка конфигурации почты
        if not application.config['MAIL_USERNAME'] or not application.config['MAIL_PASSWORD']:
            return jsonify({'success': False, 'error': 'Server configuration error'}), 500

        # Формирование содержимого письма
        email_body = f"""
        <h2>Новая заявка</h2>
        <p><strong>Дата:</strong> {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</p>
        <p><strong>Имя:</strong> {data.get('name')}</p>
        <p><strong>Телефон:</strong> {data.get('phone')}</p>
        <p><strong>Дополнительная информация:</strong></p>
        <p>{data.get('message', 'нет дополнительной информации')}</p>
        <hr>
        <p>Это письмо было отправлено автоматически, пожалуйста, не отвечайте на него.</p>
        """

        # Отправка email
        msg = Message(
            subject=f'Новая заявка на окна от {data.get("name")}',
            recipients=[os.getenv('TARGET_EMAIL', application.config['MAIL_DEFAULT_SENDER'])],
            html=email_body
        )
        
        mail.send(msg)
        
        # Логирование успешной отправки
        application.logger.info(f"Window request submitted: {data.get('name')}, {data.get('phone')}")
        
        return jsonify({
            'success': True, 
            'message': 'Заявка успешно отправлена!'
        })
        
    except Exception as e:
        # Логирование ошибки
        application.logger.error(f"Error submitting window request: {str(e)}")
        return jsonify({
            'success': False, 
            'error': 'Internal server error',
            'details': str(e)
        }), 500
    
@application.route('/api/submit-quiz', methods=['POST'])
def submit_quiz():
    """Обработчик отправки квиза"""
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({'success': False, 'error': 'No data provided'}), 400
            
        # Обязательные поля
        required_fields = ['name', 'phone', 'answers']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'success': False, 'error': f'Field {field} is required'}), 400
        
        # Проверка конфигурации почты
        if not application.config['MAIL_USERNAME'] or not application.config['MAIL_PASSWORD']:
            return jsonify({'success': False, 'error': 'Server configuration error'}), 500

        # Формирование содержимого письма
        answers_html = "<ul>" + "".join([f"<li><strong>{q}:</strong> {a}</li>" for q, a in data['answers'].items()]) + "</ul>"
        
        email_body = f"""
        <h2>Новая заявка из квиза</h2>
        <p><strong>Дата:</strong> {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</p>
        <p><strong>Имя:</strong> {data.get('name')}</p>
        <p><strong>Телефон:</strong> {data.get('phone')}</p>
        <h3>Ответы:</h3>
        {answers_html}
        <hr>
        <p>Это письмо было отправлено автоматически.</p>
        """

        # Отправка email
        msg = Message(
            subject=f'Новая заявка из квиза от {data.get("name")}',
            recipients=[os.getenv('TARGET_EMAIL', application.config['MAIL_DEFAULT_SENDER'])],
            html=email_body
        )
        
        mail.send(msg)
        
        return jsonify({
            'success': True, 
            'message': 'Спасибо! Мы скоро с вами свяжемся.'
        })
        
    except Exception as e:
        return jsonify({
            'success': False, 
            'error': str(e)
        }), 500

@application.route('/', defaults={'path': ''})
@application.route('/<path:path>')
def serve(path):
    """Обработчик статических файлов для React"""
    if path != "" and os.path.exists(os.path.join(build_folder, path)):
        return send_from_directory(build_folder, path)
    return send_from_directory(build_folder, 'index.html')

if __name__ == '__main__':
    application.run(host='0.0.0.0', port=5000, debug=os.getenv('FLASK_DEBUG', 'False') == 'True')