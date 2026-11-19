import ariaDolceScreenshot from '../assets/aria-dolce-screenshot.png'
import newProjectmg from '../assets/newprojectmg.png'
import computerImg from '../assets/computer.png'
import sneakerhub from '../assets/sneakerhub.png'
import track from '../assets/track.png'
import internet from '../assets/internet.png'
 

export const projects = [
  {
    id: 'aria-dolce',
    name: 'Aria Dolce · Bar & Pasticceria',
    description:
      'A modern responsive website created for an Italian bar and pastry shop with a warm, premium feel and a clean browsing experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: ariaDolceScreenshot,
    liveUrl: 'https://mahdinislamm22-rgb.github.io/Aria-dolce-website/',
    githubUrl: '',
    placeholder: false,
  },
  {
    id: 'pizzeria-da-enzo',
    name: 'Pizzeria Da Enzo',
    description:
      'A modern, responsive website for an authentic Italian pizzeria featuring interactive menus, location info, and an engaging layout.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    image: newProjectmg,
    liveUrl: 'https://pizzeria-da-enzo.vercel.app/',
    githubUrl: '',
    placeholder: false,
  },
    {
    id: 'inside-your-computer', // 2. Notun Project
    name: 'Inside Your Computer',
    description:
      'An interactive and educational web project exploring computer hardware components, visual layouts, and modern Web UI design.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    image: computerImg,
    liveUrl: 'https://insideyourcomputer.vercel.app/',
    githubUrl: '',
    placeholder: false,
  },
   {
    id: 'how-the-internet-works',
    name: 'how the Internet Works',
    description:
      'An interactive and educational web application that visually breaks down fundamental networking concepts, protocol workflows, and data delivery across the web.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    image: internet,
    liveUrl: 'https://how-the-internet-works-neon.vercel.app/',
    githubUrl: '',
    placeholder: false,
  },
  {
    id: 'trackandgo', // 2. Notun Project
    name: 'TrackAndGo',
    description:
      'A modern, responsive website for a logistics company featuring interactive tracking, location info, and an engaging layout.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    image: track,
    liveUrl: 'https://trackandgo-kappa.vercel.app/',
    githubUrl: '',
    placeholder: false,
  },
  {
    id: 'sneakershub', // 2. Added your third project object here
    name: 'sneakershub',
    description:
      'A brief description of what this website or web app does and what technologies were used to build it.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    image: sneakerhub,
    liveUrl: 'https://sneakers-two-theta.vercel.app/', // Change to your live link
    githubUrl: '',
    placeholder: false,
  },
]