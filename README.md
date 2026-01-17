<<<<<<< HEAD
## Live Demo
[https://my-first-next-app-one-sepia.vercel.app/]
=======

A modern, responsive luxury watch e-commerce website built with Next.js, featuring advanced animations, dark mode, and a sophisticated user experience.

## 🌟 Features

### 🎨 **Modern Design & UI**
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Modern Slate Color Scheme** - Consistent, professional color palette
- **Smooth Animations** - Framer Motion powered interactions
- **Glass Morphism Effects** - Modern UI elements with backdrop blur
- **Interactive Components** - Hover effects, transitions, and micro-interactions

### 🌙 **Advanced Dark Mode**
- **Unique Toggle Design** - Custom animated toggle with particles and glow effects
- **System Preference Detection** - Automatically detects user's system theme
- **Persistent Theme Storage** - Remembers user preference across sessions
- **Smooth Transitions** - Seamless color transitions throughout the site
- **Keyboard Shortcut** - Quick toggle with `Ctrl/Cmd + Shift + D`
- **FOUC Prevention** - No flash of unstyled content on page load

### 🚀 **Performance Optimized**
- **60fps Smooth Scrolling** - Optimized scroll performance
- **GPU Acceleration** - Hardware-accelerated animations
- **Lazy Loading** - Images and components load on demand
- **Reduced Motion Support** - Respects user accessibility preferences
- **Optimized Bundle Size** - Efficient code splitting and tree shaking

### 🛍️ **E-commerce Features**
- **Product Catalog** - Browse luxury watches with detailed information
- **Popular Products** - Curated selection of trending timepieces
- **Category Navigation** - Shop by Luxury, Sport, Classic, and Vintage
- **Product Details** - Comprehensive product information and images
- **User Authentication** - Secure login and registration system
- **Product Management** - Admin features for adding/managing products

### 📱 **User Experience**
- **Intuitive Navigation** - Clean, organized menu structure
- **Search & Filter** - Easy product discovery
- **Interactive Cards** - Animated product cards with hover effects
- **Testimonials** - Customer reviews and ratings
- **Newsletter Signup** - Stay updated with latest offers
- **Contact Form** - Easy customer communication

## 🛠️ **Technology Stack**

### **Frontend**
- **[Next.js 16.0.3](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://reactjs.org/)** - Modern React with hooks and context
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Advanced animations library
- **[Swiper.js](https://swiperjs.com/)** - Modern carousel/slider component

### **UI Components**
- **[DaisyUI](https://daisyui.com/)** - Tailwind CSS component library
- **[React Icons](https://react-icons.github.io/react-icons/)** - Icon library
- **[React Toastify](https://fkhadra.github.io/react-toastify/)** - Toast notifications

### **Backend & Database**
- **[Firebase](https://firebase.google.com/)** - Authentication and real-time database
- **Custom API** - RESTful API for product management
- **Image Storage** - Optimized image delivery

### **Development Tools**
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Turbopack](https://turbo.build/pack)** - Fast bundler for development

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 18+ 
- npm or yarn package manager
- Git

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/elitetime-watch-store.git
   cd elitetime-watch-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Firebase configuration:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   # ... other Firebase config
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### **Build for Production**
```bash
npm run build
npm start
```

## 📁 **Project Structure**

```
elitetime-watch-store/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about/             # About & Contact page
│   │   ├── login/             # Authentication pages
│   │   ├── products/          # Product catalog
│   │   ├── add_products/      # Admin product management
│   │   ├── manage_products/   # Product management
│   │   ├── globals.css        # Global styles
│   │   ├── layout.js          # Root layout
│   │   └── page.jsx           # Home page
│   ├── components/            # Reusable components
│   │   ├── ui/               # UI components
│   │   ├── AllCards.jsx      # Product grid component
│   │   ├── AuthProvider.jsx  # Authentication context
│   │   ├── DarkModeToggle.jsx # Advanced dark mode toggle
│   │   ├── Footer.jsx        # Site footer
│   │   ├── Navbar.jsx        # Navigation component
│   │   ├── PopularCard.jsx   # Product card component
│   │   ├── Spinner.jsx       # Loading component
│   │   └── ThemeProvider.jsx # Theme management
│   ├── lib/                  # Utility functions
│   └── firebass.config.js    # Firebase configuration
├── public/                   # Static assets
│   ├── watch1.png           # Product images
│   ├── watch2.png
│   ├── watch3.png
│   └── ...
├── .env                     # Environment variables
├── .gitignore              # Git ignore rules
├── components.json         # UI components config
├── eslint.config.mjs       # ESLint configuration
├── jsconfig.json          # JavaScript configuration
├── next.config.mjs        # Next.js configuration
├── package.json           # Dependencies and scripts
├── postcss.config.mjs     # PostCSS configuration
└── README.md              # Project documentation
```

## 🎨 **Design System**

### **Color Palette**
- **Primary**: Slate (500-800) - `#64748b` to `#1e293b`
- **Background Light**: `#f8fafc` (slate-50)
- **Background Dark**: `#0f172a` (slate-900)
- **Text Light**: `#1e293b` (slate-800)
- **Text Dark**: `#f1f5f9` (slate-100)
- **Accent**: Amber (500) - `#f59e0b` (sun icon only)

### **Typography**
- **Primary Font**: Geist Sans - Modern, clean sans-serif
- **Monospace**: Geist Mono - For code and technical elements
- **Font Weights**: 300, 400, 500, 600, 700, 800

### **Spacing & Layout**
- **Max Width**: 1120px for content sections
- **Padding**: Consistent 24px (px-6) horizontal padding
- **Margins**: 80px (mt-20) between major sections
- **Border Radius**: 16px (rounded-2xl) for cards and components

## 🔧 **Key Components**

### **DarkModeToggle**
Advanced animated toggle with:
- Gradient backgrounds
- Floating particles
- Icon transitions
- Glow effects
- Tooltip and keyboard shortcut

### **PopularCard**
Product card featuring:
- Image hover effects
- Price display
- Rating system
- Smooth animations
- Responsive design

### **ThemeProvider**
Global theme management:
- Context-based state
- Local storage persistence
- System preference detection
- Keyboard shortcuts

## 🎭 **Animations**

### **Framer Motion Features**
- **Scroll-triggered animations** - Elements animate when entering viewport
- **Staggered children** - Sequential animation of list items
- **Hover interactions** - Scale, rotate, and translate effects
- **Page transitions** - Smooth navigation between pages
- **Loading states** - Skeleton screens and spinners

### **Performance Optimizations**
- **GPU acceleration** - Hardware-accelerated transforms
- **Reduced motion support** - Respects accessibility preferences
- **Optimized thresholds** - Efficient intersection observers
- **CSS transforms** - Layout-friendly animations

## 🔐 **Authentication**

### **Firebase Integration**
- **Email/Password** authentication
- **Google OAuth** (configurable)
- **Protected routes** - Secure admin areas
- **User context** - Global authentication state
- **Persistent sessions** - Remember user login

### **User Roles**
- **Customer** - Browse and view products
- **Admin** - Add and manage products
- **Guest** - Limited access, prompted to login

## 📱 **Responsive Design**

### **Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### **Mobile Optimizations**
- Touch-friendly buttons (44px minimum)
- Optimized image sizes
- Simplified navigation
- Reduced animations on mobile
- Improved loading performance

## 🚀 **Performance Metrics**

### **Core Web Vitals**
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### **Optimizations**
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Efficient CSS with Tailwind purging
- Minimal JavaScript bundle size
- CDN delivery for static assets

## 🧪 **Testing**

### **Manual Testing Checklist**
- [ ] Dark/Light mode toggle functionality
- [ ] Responsive design across devices
- [ ] Authentication flow
- [ ] Product browsing and filtering
- [ ] Form submissions
- [ ] Animation performance
- [ ] Accessibility compliance

## 🚀 **Deployment**

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### **Other Platforms**
- **Netlify**: Static site deployment
- **AWS Amplify**: Full-stack deployment
- **Railway**: Container-based deployment

## 🤝 **Contributing**

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### **Development Guidelines**
- Follow the existing code style
- Use meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed
- Ensure responsive design compatibility

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- **Next.js Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **Vercel** - For seamless deployment
- **Firebase** - For backend services
- **Unsplash** - For high-quality product images
