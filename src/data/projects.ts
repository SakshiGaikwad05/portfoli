import type { Project } from '../types'
import gkkImg from '../assets/gkk.jpeg.png'
import choImg from '../assets/cho.png'
import startupFinderImg from '../assets/startup-finder.png'

export const projects: Project[] = [
  {
    title: 'Daily Startup Finder',
    description:
      'A job discovery tool that finds startups hiring for your profile every day. Upload a resume or pick your skills, and it pulls Pune and remote openings from YC, job boards and funding news, then scores each job and explains exactly why it matches.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Node.js'],
    github: 'https://github.com/SakshiGaikwad05/startup-finder',
    live: 'https://startup-finder.sakshii.tech',
    image: startupFinderImg,
    label: 'JOB DISCOVERY',
    features: [
      'Resume upload with automatic skill and role detection',
      'Daily discovery from YC, Remotive, funding news and public ATS boards',
      'Match score out of 100 with a "Why" breakdown and missing skills',
      'Filters for AI startups, recently funded, new (2024+) and fresher roles',
      'Built-in application tracker, no sign-up needed',
    ],
  },
  {
    title: 'Gawande Krushi Kendra',
    description:
      'A modern full-stack e-commerce platform for an agricultural business featuring product browsing, cart management, responsive UI, and a seamless shopping experience.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'Tailwind CSS'],
    github: 'https://github.com/Sakshi0707Dev/gawande-krushi-kendra',
    live: 'https://www.gawandekrushikendra.store/',
    image: gkkImg,
    label: 'ECOMMERCE',
    features: [
      'Product browsing with categories',
      'Shopping cart management',
      'Admin dashboard',
      'Responsive design',
      'Secure checkout flow',
    ],
  },
  {
    title: 'Cafe Hide Out',
    description:
      'A modern and responsive restaurant website featuring an elegant landing page, interactive menu showcase, responsive design, and a premium user experience.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    github: 'https://github.com/Sakshi0707Dev/cafe-hide-out',
    live: 'https://cafe-hide-out.vercel.app/',
    image: choImg,
    label: 'RESTAURANT',
    features: [
      'Interactive menu showcase',
      'Elegant landing page',
      'Responsive layout',
      'Smooth animations',
      'Premium UI/UX',
    ],
  },
]
