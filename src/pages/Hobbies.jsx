import { useTranslation } from 'react-i18next';
import './Hobbies.css';

const Hobbies = () => {
  const { t } = useTranslation();

  const hobbies = [
    {
      key: 'dancing',
      icon: '💃',
      gradient: 'linear-gradient(135deg, #ff6b9d, #feca57)',
      delay: '0s'
    },
    {
      key: 'calligraphy',
      icon: '🖌️',
      gradient: 'linear-gradient(135deg, #c44569, #ff6b9d)',
      delay: '0.2s'
    },
    {
      key: 'photography',
      icon: '📷',
      gradient: 'linear-gradient(135deg, #feca57, #ff6b9d)',
      delay: '0.4s'
    }
  ];

  return (
    <div className="hobbies">
      <div className="hobbies-container">
        <h1 className="hobbies-title">{t('hobbies.title')}</h1>

        <div className="hobbies-grid">
          {hobbies.map((hobby) => (
            <div
              key={hobby.key}
              className="hobby-card"
              style={{ animationDelay: hobby.delay }}
            >
              <div className="hobby-icon-wrapper" style={{ background: hobby.gradient }}>
                <span className="hobby-icon">{hobby.icon}</span>
              </div>
              <div className="hobby-content">
                <h2 className="hobby-title">{t(`hobbies.${hobby.key}.title`)}</h2>
                <p className="hobby-description">{t(`hobbies.${hobby.key}.description`)}</p>
              </div>
              <div className="hobby-gallery-placeholder">
                <div className="gallery-grid">
                  <div className="gallery-item">
                    <span>🖼️</span>
                  </div>
                  <div className="gallery-item">
                    <span>🖼️</span>
                  </div>
                  <div className="gallery-item">
                    <span>🖼️</span>
                  </div>
                  <div className="gallery-item">
                    <span>🖼️</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
