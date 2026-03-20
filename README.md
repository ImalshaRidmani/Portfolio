# Imalsha Sirigampala - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This portfolio showcases your skills, projects, and professional experience with beautiful animations and a clean design.

## 🚀 Features

- **Modern Design**: Clean and professional layout with gradient accents
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Interactive Elements**: Mobile-friendly navigation and contact form
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML

## 📁 File Structure

```
Portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── image.jpg           # Your profile image
├── CV.pdf              # Your resume
└── README.md           # This file
```

## 🎨 Customization Guide

### 1. Personal Information
Update the following sections in `index.html`:

- **Name**: Replace "Imalsha Sirigampala" with your name
- **Title**: Update "Full Stack Developer & Software Engineer"
- **Description**: Modify the hero tagline
- **Email**: Update contact information
- **Location**: Change to your location
- **Phone**: Update your phone number

### 2. Profile Image
- Replace `image.jpg` with your professional photo
- Recommended size: 300x300 pixels or larger
- Format: JPG, PNG, or WebP

### 3. Resume
- Replace `IMALSHA_RIDMANI.pdf` with your updated resume
- The "Download Resume" button will automatically link to this file

### 4. Achievements Section
Update the achievement cards in the HTML:
```html
<div class="achievement-card">
    <div class="achievement-icon">
        <i class="fas fa-trophy"></i>
    </div>
    <h3>Your Achievement</h3>
    <p>Description of your achievement</p>
    <span class="achievement-year">2024</span>
</div>
```

### 5. Timeline Section
Modify the timeline items to reflect your journey:
```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <h3>Your Milestone</h3>
        <p>Description of the milestone</p>
        <span class="timeline-year">2024</span>
    </div>
</div>
```

### 6. Projects Section
Update the project cards with your actual projects:
```html
<div class="project-card">
    <div class="project-image">
        <div class="project-placeholder">
            <i class="fas fa-code"></i>
        </div>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description</p>
        <div class="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link">View Project</a>
            <a href="#" class="project-link">Source Code</a>
        </div>
    </div>
</div>
```

### 7. Skills Section
Update your skills and proficiency levels:
```html
<div class="skill-item">
    <div class="skill-header">
        <h3>Your Skill</h3>
        <span class="skill-percentage">90%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 90%"></div>
    </div>
</div>
```

### 8. About Section Stats
Update the statistics in the about section:
```html
<div class="stat-item">
    <h3>3.8/4.0</h3>
    <p>CGPA</p>
</div>
```

## 🎯 Color Scheme

The current color scheme uses:
- **Primary**: `#667eea` to `#764ba2` (Gradient)
- **Background**: `#f5f7fa` to `#c3cfe2` (Gradient)
- **Text**: `#333` (Dark), `#666` (Medium), `#888` (Light)

To change colors, update the CSS variables in `styles.css`:
```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --background-gradient: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    --text-primary: #333;
    --text-secondary: #666;
    --text-light: #888;
}
```

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first design approach
- Hamburger menu for mobile devices
- Flexible grid layouts
- Optimized typography for all screen sizes

## 🚀 Deployment

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload your files
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://username.github.io/repository-name`

### Option 2: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site will be deployed instantly

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Deploy with one click

## 🔧 Customization Tips

### Adding New Sections
1. Add the HTML structure in `index.html`
2. Add corresponding CSS in `styles.css`
3. Add any JavaScript functionality in `script.js`

### Changing Fonts
Update the Google Fonts link in the HTML head:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Adding Icons
The website uses Font Awesome icons. Add new icons by:
1. Finding the icon on [fontawesome.com](https://fontawesome.com)
2. Using the appropriate class name in your HTML

### Contact Form
The contact form is currently set up for demonstration. To make it functional:
1. Use a service like Formspree or Netlify Forms
2. Update the form action in the HTML
3. Configure the form handling in your deployment platform

## 📊 Performance Optimization

- Images are optimized for web
- CSS and JavaScript are minified
- Font Awesome icons are loaded from CDN
- Google Fonts are loaded efficiently

## 🎨 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Support

If you need help customizing your portfolio, feel free to reach out!

---

**Built with ❤️ for showcasing your amazing work!** 