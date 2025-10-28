import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <div className="about-container">
        <h1 className="about-title">{t('about.title')}</h1>

        <div className="about-content">
          <div className="about-image-section">
            <div className="about-image-placeholder">
              <span className="image-icon">👧</span>
            </div>
            <div className="info-cards">
              <div className="info-card">
                <span className="info-icon">🎂</span>
                <span className="info-text">{t('about.age')}</span>
              </div>
              <div className="info-card">
                <span className="info-icon">📚</span>
                <span className="info-text">{t('about.grade')}</span>
              </div>
            </div>
          </div>

          <div className="about-text-section">
            <div className="about-intro">
              <h2>{t('about.name')}</h2>
              <p className="intro-text">{t('about.intro')}</p>
              <p className="intro-text">{t('about.interests')}</p>
              <p className="intro-text">{t('about.family')}</p>
            </div>

            <div className="about-details">
              <div className="detail-item">
                <div className="detail-icon">🏫</div>
                <div className="detail-content">
                  <h3>{t('about.school')}</h3>
                  <p>{t('about.role')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
