import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navigation.css';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(newLang);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="logo">
          <span className="logo-text">Hannan</span>
          <span className="logo-subtitle">小凡</span>
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</Link>
          <Link to="/hobbies" onClick={() => setIsMenuOpen(false)}>{t('nav.hobbies')}</Link>
          <Link to="/blog" onClick={() => setIsMenuOpen(false)}>{t('nav.blog')}</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</Link>

          <button className="lang-switcher" onClick={toggleLanguage}>
            {i18n.language === 'zh' ? 'EN' : '中文'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
