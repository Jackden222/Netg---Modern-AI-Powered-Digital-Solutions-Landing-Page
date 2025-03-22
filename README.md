# Netg - Modern AI-Powered Digital Solutions Landing Page

A stunning, responsive landing page built with modern web technologies to showcase digital transformation services.

## 🚀 Tech Stack

- **React** - A JavaScript library for building user interfaces
- **TypeScript** - For type-safe code and better developer experience
- **Vite** - Next Generation Frontend Tooling
- **Tailwind CSS** - A utility-first CSS framework
- **Framer Motion** - For smooth animations and interactions
- **Heroicons** - Beautiful hand-crafted SVG icons

## ✨ Features

- 🎨 Modern and responsive design
- 🌟 Smooth scroll animations
- 💫 Interactive UI elements
- 📱 Mobile-first approach
- 🎯 Optimized performance
- 🌈 Beautiful gradients and glassmorphism effects

## 🛠️ Sections

1. **Hero Section**
   - Animated headline and subtext
   - Call-to-action buttons
   - Scroll indicator

2. **Stats Section**
   - Animated counters
   - Key metrics display

3. **Features Section**
   - Interactive cards
   - Hover effects
   - Icon integration

4. **Services Section**
   - Grid layout
   - Animated icons
   - Responsive design

5. **Testimonials**
   - Client reviews
   - Rating system
   - Card-based layout

6. **Call-to-Action**
   - Engaging message
   - Animated button

7. **Footer**
   - Company information
   - Navigation links
   - Social media connections

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone [https://github.com/Jackden222/Netg---Modern-AI-Powered-Digital-Solutions-Landing-Page.git]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 📱 Responsive Design

The landing page is fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktop screens
- Large displays

## 🎨 Customization

You can easily customize:
- Colors in the Tailwind configuration
- Content in the App.tsx file
- Animations using Framer Motion
- Icons from Heroicons

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
