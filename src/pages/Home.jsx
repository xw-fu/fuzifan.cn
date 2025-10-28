import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Home.css';
import avatarImage from '../assets/images/avatar.jpg';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <div className="floating-elements">
            <div className="float-circle"></div>
            <div className="float-circle"></div>
            <div className="float-circle"></div>
          </div>

          <div className="profile-container">
            <div className="profile-image-placeholder">
              <div className="profile-decoration"></div>
              <div className="profile-inner">
                <img src={avatarImage} alt="Profile" className="profile-avatar" />
              </div>
            </div>
          </div>

          <h1 className="hero-title">
            <span className="title-line">{t('home.welcome')}</span>
          </h1>

          <p className="hero-subtitle">{t('home.subtitle')}</p>

          <Link to="/about" className="cta-button">
            {t('home.learnMore')}
            <span className="button-arrow">→</span>
          </Link>
        </div>

        <div className="decorative-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
