# Personal Website for Hannah

A beautiful, creative personal website built with React, featuring bilingual support (Chinese/English) and artistic design elements.

## Features

- **Bilingual Support**: Full support for both Chinese and English languages with an easy-to-use language switcher
- **Creative & Artistic Design**: Modern, colorful design with smooth animations and gradients
- **Responsive**: Mobile-first design that looks great on all devices
- **Multiple Sections**:
  - Home: Eye-catching hero section with animated elements
  - About Me: Personal introduction and background
  - Hobbies Gallery: Showcase of dancing, calligraphy, and photography
  - Blog: Platform for sharing thoughts and experiences
  - Contact: Contact form for getting in touch

## Technology Stack

- **React**: Modern JavaScript library for building user interfaces
- **Vite**: Fast build tool and development server
- **React Router**: Client-side routing
- **i18next**: Internationalization framework for bilingual support

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd fuzifan.cn
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
fuzifan.cn/
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navigation.jsx  # Navigation bar with language switcher
│   │   └── Footer.jsx      # Footer component
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Home page
│   │   ├── About.jsx      # About page
│   │   ├── Hobbies.jsx    # Hobbies gallery page
│   │   ├── Blog.jsx       # Blog page
│   │   └── Contact.jsx    # Contact page
│   ├── i18n/              # Internationalization
│   │   ├── config.js      # i18n configuration
│   │   └── translations.js # Translation strings
│   ├── assets/            # Static assets
│   ├── App.jsx            # Main app component with routing
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── public/                # Public assets
├── index.html             # HTML template
└── package.json           # Dependencies and scripts
```

## Customization

### Adding Your Own Images

Replace the placeholder icons with your own images:
1. Add your images to `src/assets/images/`
2. Update the components to use your images instead of emoji placeholders

### Updating Content

- Edit `src/i18n/translations.js` to update all text content in both languages
- Modify page components in `src/pages/` to change layout and structure

### Changing Colors

Update the color scheme by modifying CSS custom properties in `src/index.css`:
```css
:root {
  --primary-color: #ff6b9d;    /* Main pink color */
  --secondary-color: #c44569;   /* Dark pink */
  --accent-color: #feca57;      /* Yellow accent */
}
```

### Adding Blog Posts

The blog section currently shows placeholder content. To add real blog posts:
1. Create a blog posts data file or connect to a CMS
2. Update `src/pages/Blog.jsx` to display your actual posts
3. Create a blog post detail page if needed

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to Netlify's dashboard

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/fuzifan.cn",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

For questions or suggestions, please use the contact form on the website.

---

Made with ❤️ in Beijing
