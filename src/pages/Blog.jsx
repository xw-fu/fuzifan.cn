import { useTranslation } from 'react-i18next';
import './Blog.css';

const Blog = () => {
  const { t } = useTranslation();

  // Placeholder blog posts - can be populated later
  const placeholderPosts = [1, 2, 3];

  return (
    <div className="blog">
      <div className="blog-container">
        <h1 className="blog-title">{t('blog.title')}</h1>
        <p className="blog-subtitle">{t('blog.subtitle')}</p>

        <div className="blog-grid">
          {placeholderPosts.map((post, index) => (
            <div
              key={index}
              className="blog-post-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="post-image-placeholder">
                <span className="post-placeholder-icon">📝</span>
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span className="post-date">Coming Soon</span>
                  <span className="post-category">✨</span>
                </div>
                <h3 className="post-title">{t('blog.comingSoon')}</h3>
                <p className="post-excerpt">
                  {index === 0 && "Stay tuned for my thoughts and experiences..."}
                  {index === 1 && "More exciting content on the way..."}
                  {index === 2 && "Check back soon for updates..."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
