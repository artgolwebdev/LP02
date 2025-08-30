# 🕺 Breakdance Tel Aviv - Landing Page

A modern, responsive landing page for Breakdance Tel Aviv featuring a brutalist design aesthetic with neon colors and smooth animations.

![Breakdance Landing Page](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.3.5-purple?logo=vite)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)

## ✨ Features

- **🎨 Brutalist Design**: Sharp edges, bold colors, and geometric patterns
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **⚡ Performance Optimized**: Fast loading with Vite and optimized assets
- **🎭 Interactive Elements**: Smooth animations and hover effects
- **🎵 Video Background**: Dynamic video with fallback images
- **📍 Interactive Map**: Location integration with Google Maps
- **📧 Contact Form**: Functional contact form with validation
- **🌙 Dark Theme**: Optimized for dark mode viewing

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd breakdance-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `build/` directory.

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── HeroSection.tsx      # Main hero section with video
│   ├── AboutSection.tsx     # About us section
│   ├── ClassesSection.tsx   # Dance classes showcase
│   ├── PerformancesSection.tsx  # Performance packages
│   ├── MapSection.tsx       # Location and contact info
│   ├── ContactSection.tsx   # Contact form
│   ├── LoadingScreen.tsx    # Initial loading animation
│   └── figma/              # Figma-specific components
├── styles/             # Global styles
│   └── globals.css     # Tailwind and custom CSS
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Base styles
```

## 🎨 Design System

### Color Palette
- **Neon Green**: `#00ff41`
- **Neon Orange**: `#ff6b35`
- **Neon Blue**: `#0066ff`
- **Neon Yellow**: `#ffff00`
- **Neon Purple**: `#8a2be2`

### Typography
- **Righteous**: Main headings
- **Russo One**: Subheadings
- **Exo 2**: Body text
- **Roboto**: UI elements

### Key Design Principles
- **Brutalist Aesthetics**: Sharp edges, bold contrasts
- **Neon Color Scheme**: High contrast, vibrant colors
- **Geometric Patterns**: Angular shapes and lines
- **Smooth Animations**: Subtle transitions and hover effects

## 🛠️ Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Framer Motion** - Animation library

## 📱 Responsive Design

The landing page is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎯 Performance Optimizations

- **Lazy Loading**: Images and components load on demand
- **Optimized Assets**: Compressed images and videos
- **Code Splitting**: Efficient bundle splitting
- **Caching**: Proper cache headers for static assets

## 🔧 Customization

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `App.tsx`
3. Follow the existing design patterns

### Modifying Colors
Update the CSS custom properties in `src/styles/globals.css`:
```css
:root {
  --neon-green: #00ff41;
  --neon-orange: #ff6b35;
  /* ... other colors */
}
```

### Changing Content
Edit the content directly in the component files. All text and images can be easily modified.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- **Website**: [Breakdance Tel Aviv](https://breakdancetelaviv.com)
- **Email**: info@breakdancetelaviv.com
- **Phone**: +972-XX-XXX-XXXX

## 🙏 Acknowledgments

- **Design Inspiration**: Brutalist web design movement
- **Icons**: [Lucide React](https://lucide.dev/)
- **Images**: [Unsplash](https://unsplash.com/)
- **Fonts**: Google Fonts

---

**Keep breaking, keep growing! 🕺💪**  