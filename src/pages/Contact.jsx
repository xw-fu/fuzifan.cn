import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact">
      <div className="contact-container">
        <h1 className="contact-title">{t('contact.title')}</h1>
        <p className="contact-subtitle">{t('contact.subtitle')}</p>

        <div className="contact-content">
          <div className="info-item">
            <div className="info-icon-circle">
              <span>✉️</span>
            </div>
            <h3>{t('contact.email')}</h3>
            <p>{t('contact.emailAddress')}</p>
          </div>

          <div className="info-item">
            <div className="info-icon-circle">
              <span>📍</span>
            </div>
            <h3>{t('contact.location')}</h3>
            <p>{t('contact.locationAddress')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
