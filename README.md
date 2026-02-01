# Dr. Maya Reynolds Therapy Website

A modern, responsive therapy website built with Next.js and Tailwind CSS, redesigned from the Lilac Template.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design Features

- **Mobile-First Design**: Fully responsive across all device sizes
- **Modern Color Palette**: Sage green, terracotta, and cream theme
- **Typography**: Inter (sans-serif) and Playfair Display (serif) fonts
- **Smooth Animations**: Scroll-triggered animations and transitions
- **Accessible**: WCAG compliant color contrast and semantic HTML

## 📦 Project Structure

```
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Homepage
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── IntroSection.tsx # Introduction section
│   ├── Specialties.tsx  # Services/specialties grid
│   ├── SupportSection.tsx # Support message section
│   ├── AboutSection.tsx # About the therapist
│   ├── OurOffice.tsx    # Office section (custom)
│   ├── FAQs.tsx         # Frequently asked questions
│   ├── ProfessionalBackground.tsx # Credentials section
│   ├── CTA.tsx          # Call-to-action section
│   └── Footer.tsx       # Footer with contact info
└── public/              # Static assets
```

## 🛠️ Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach

## 📝 Content Notes

All content is based on Dr. Maya Reynolds' therapist profile. The website includes:

- SEO-optimized copy with location-specific keywords (San Francisco, CA)
- Three main specialties: Anxiety & Stress, Depression, Relationship Issues
- Professional background with education, licensure, and certifications
- Custom "Our Office" section highlighting the practice space
- Comprehensive FAQs section

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy automatically

### Other Platforms

Build the production version:
```bash
npm run build
npm start
```

## 📄 License

This project is created for the Grow My Therapy internship assignment.
