import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is a placeholder - in a real app, you'd send this to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <h1 className="contact-title">{t('contact.title')}</h1>
        <p className="contact-subtitle">{t('contact.subtitle')}</p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon-circle">
                <span>✉️</span>
              </div>
              <h3>Email</h3>
              <p>contact@example.com</p>
            </div>

            <div className="info-item">
              <div className="info-icon-circle">
                <span>📍</span>
              </div>
              <h3>Location</h3>
              <p>Beijing, China</p>
            </div>

            <div className="info-item">
              <div className="info-icon-circle">
                <span>🎨</span>
              </div>
              <h3>Interests</h3>
              <p>Dancing, Calligraphy, Photography</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('contact.formName')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t('contact.formEmail')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t('contact.formMessage')}</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              {t('contact.formSubmit')}
            </button>

            {submitted && (
              <div className="success-message">
                {t('contact.successMessage')}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
