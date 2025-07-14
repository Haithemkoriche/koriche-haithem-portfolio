# Koriche Haithem - Portfolio Website

A modern, interactive portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring smooth animations and responsive design.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Interactive**: Smooth scrolling, hover effects, and micro-interactions
- **GitHub Integration**: Automatically fetches and displays GitHub projects
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── About.tsx          # About section
│   ├── Contact.tsx        # Contact section
│   ├── Experience.tsx     # Experience timeline
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section
│   ├── Layout.tsx         # Main layout with navigation
│   ├── Projects.tsx       # Projects showcase
│   └── Skills.tsx         # Skills display
├── data/                  # Static data
│   └── index.ts           # Personal info, skills, experience
├── types/                 # TypeScript type definitions
│   └── index.ts           # Interface definitions
└── utils/                 # Utility functions
    └── github.ts          # GitHub API integration
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Update your personal information:
   - Edit `src/data/index.ts` with your personal information
   - Update GitHub username in the same file
   - Replace placeholder contact information

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⚙️ Customization

### Personal Information
Update `src/data/index.ts` with your:
- Personal details (name, title, email, etc.)
- Professional experience
- Skills and proficiency levels
- GitHub username for project integration

### Styling
- Customize colors in `src/app/globals.css`
- Modify component styles using Tailwind CSS classes
- Add custom animations using Framer Motion

### Content
- Add new sections by creating components in `src/components/`
- Update the navigation in `src/components/Layout.tsx`
- Modify the page structure in `src/app/page.tsx`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 Environment Variables

Create a `.env.local` file for any environment-specific configuration:

```env
# Add any environment variables here
NEXT_PUBLIC_GITHUB_TOKEN=your_github_token_here (optional)
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)

---

⭐ If you found this portfolio template helpful, please give it a star!

📧 For any questions or collaborations, feel free to reach out: [your.email@example.com](mailto:your.email@example.com)
