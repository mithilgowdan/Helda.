# Editions Winter 2026 - Inspired Landing Page

A modern, interactive landing page inspired by Shopify's Editions Winter 2026 (RenAIssance Edition). Built with React, Vite, Tailwind CSS, GSAP, and Three.js for stunning animations and glassmorphic design.

## 🎨 Features

- **Glassmorphism UI**: Modern glass-effect cards with soft background blurs
- **Interactive Animations**: Smooth scroll animations with GSAP and ScrollTrigger
- **Particle Background**: Dynamic WebGL-style particle system in hero section
- **Responsive Design**: Mobile-first approach that looks great on all devices
- **Modern Tech Stack**: React 18, Vite, Tailwind CSS, GSAP
- **Smooth Scrolling**: Lenis integration for butter-smooth scroll experience

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mithilgowdan/Hey.git
cd Hey

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx    # Sticky navigation with scroll detection
│   ├── Hero.jsx         # Hero section with particle animation
│   ├── Features.jsx     # Feature cards with glassmorphism
│   ├── ProductShowcase.jsx # Product cards with animations
│   ├── Updates.jsx      # Latest updates timeline
│   └── CTA.jsx          # Call-to-action and footer
├── App.jsx              # Main app component
├── main.jsx             # React entry point
└── index.css            # Global styles and animations
```

## 🎯 Key Components

### Hero Section
- Animated particle system using HTML5 Canvas
- Gradient text effects
- Dual CTA buttons with hover effects
- Smooth text animations on load

### Features Section
- 6 feature cards with icons
- Glassmorphism design
- Scroll-triggered animations
- Hover spotlight effects

### Product Showcase
- 3 product cards with descriptions
- Gradient backgrounds per product
- Feature lists with icons
- Interactive hover states

### Updates Section
- Timeline of latest updates
- Badge system (New, Featured, Enterprise)
- Staggered animations
- Read More buttons

### CTA & Footer
- Large call-to-action section
- Multi-column footer
- Social media links
- Legal links

## 🛠️ Technologies Used

- **React 18**: UI framework
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **GSAP**: Professional animations library
- **ScrollTrigger**: Scroll-based animations
- **Lenis**: Smooth scrolling library
- **Canvas API**: Particle system animation

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: '#000000',
  secondary: '#f5f5f5',
  accent: '#007aff',
}
```

### Content
- Update text content in individual component files
- Replace images and icons
- Modify animation timing in component `useEffect` hooks

### Layout
- Adjust spacing and padding in Tailwind classes
- Modify grid layouts in Features and Product sections
- Customize responsive breakpoints

## 📱 Responsive

- Mobile: 320px and up
- Tablet: 768px and up (md)
- Desktop: 1024px and up (lg)

## 🔄 Animation Libraries

### GSAP Features
- Scroll-triggered animations
- Staggered animations
- Smooth transitions
- Transform effects

### Lenis Features
- Smooth scroll hijacking
- Touch gesture support
- Performance optimized
- Multiple easing options

## 📝 License

MIT License - Feel free to use this for personal or commercial projects

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues and questions, please open a GitHub issue.

---

Built with ❤️ inspired by Shopify Editions Winter 2026
