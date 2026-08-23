import ariaDolceScreenshot from '../assets/aria-dolce-screenshot.png'
import newProjectmg from '../assets/newprojectmg.png'
import Sneakershub from '../assets/sneakershub.png' 

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
    id: 'Sneakershub', // 2. Added your third project object here
    name: 'Sneakershub',
    description:
      'A brief description of what this website or web app does and what technologies were used to build it.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    image: Sneakershub,
    liveUrl: 'https://sneakers-two-theta.vercel.app/', // Change to your live link
    githubUrl: '',
    placeholder: false,
  },
]