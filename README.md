# My Portfolio

A modern, animation-rich portfolio website built with React, Vite, and Tailwind CSS.

## ✨ Features

- 🎨 **Beautiful UI** - Modern design with gradient effects and glassmorphism
- 🎬 **Smooth Animations** - Powered by Framer Motion
- 🌙 **Dark/Light Mode** - Toggle between themes with smooth transitions
- ✨ **Particle Background** - Interactive particle effects
- 🖱️ **Custom Cursor** - Animated cursor for desktop users
- 📱 **Fully Responsive** - Works on all devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development

## 🛠️ Tech Stack

- **React 18** - UI Library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **React Type Animation** - Typing effect
- **tsParticles** - Particle background

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
MY_PORTFOLIO/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── AnimatedSection.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticleBackground.jsx
│   │   ├── ScrollProgress.jsx
│   │   └── SectionHeading.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── hooks/
│   │   └── useInView.js
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** ([src/sections/Hero.jsx](src/sections/Hero.jsx))
   - Update your name and roles
   - Change social media links

2. **About Section** ([src/sections/About.jsx](src/sections/About.jsx))
   - Update bio and statistics
   - Modify services offered

3. **Skills Section** ([src/sections/Skills.jsx](src/sections/Skills.jsx))
   - Add/remove skills and adjust proficiency levels

4. **Projects Section** ([src/sections/Projects.jsx](src/sections/Projects.jsx))
   - Add your own projects with images and links

5. **Experience Section** ([src/sections/Experience.jsx](src/sections/Experience.jsx))
   - Update work history and education

6. **Contact Section** ([src/sections/Contact.jsx](src/sections/Contact.jsx))
   - Update contact information

### Change Colors

Edit the color palette in [tailwind.config.js](tailwind.config.js):

```javascript
colors: {
  primary: { ... },  // Main brand color
  accent: { ... },   // Secondary color
  dark: { ... },     // Dark theme colors
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Made with ❤️ by [Your Name]
