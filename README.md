# Professional Developer Portfolio

A modern, comic-book styled portfolio website for software engineers, built with Next.js 15, Tailwind CSS, and Framer Motion.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

## 🚀 Features

- **Comic Aesthetic**: Custom design system with bold borders, vibrant colors, and dynamic animations.
- **Blog System**: Built-in MDX support for writing technical articles with code highlighting.
- **Performance**: Static Site Generation (SSG) for lightning-fast loading and SEO.
- **Responsive**: Fully optimized for mobile, tablet, and desktop.
- **Dark Mode**: Automatic theme switching support (configurable).
- **Deployment Ready**: Pre-configured GitHub Actions for automated deployment to GitHub Pages.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Content**: MDX, TypeScript

## 🏁 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine.

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

Update `data/resume.ts` to reflect your profile, experience, and projects. All site content is driven by this file.

### Blog Posts

Add new posts to the `content/posts/` directory. Use the `.mdx` extension.

### Styling

Customize colors and fonts in `app/globals.css`. The design uses CSS variables for easy theming.

## 🚢 Deployment

This project is configured for **GitHub Pages**.

1. Push your code to a GitHub repository.
2. Go to **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. The included `.github/workflows/deploy.yml` will automatically build and deploy your site on every push to `main`.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
