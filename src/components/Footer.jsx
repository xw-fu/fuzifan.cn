import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-wave">
          <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 C300,100 900,20 1200,60 L1200,120 L0,120 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="footer-text">
          <p>{t('footer.copyright')}</p>
          <p className="footer-made">{t('footer.madeWith')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
