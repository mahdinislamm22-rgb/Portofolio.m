// ─────────────────────────────────────────────────────────
// SITE DATA — this is the ONE file you need to edit to update
// your name, bio, links, skills and services. Projects live
// in their own file: src/data/projects.js
// ─────────────────────────────────────────────────────────

export const profile = {
  name: 'Mahdin',
  title: 'Web Developer',
  positioning: 'Creative Web Developer & Web Designer',
  heroDescription:
    'I build modern, responsive and interactive websites that turn ideas into engaging digital experiences.',
  aboutText:
    "I'm a passionate web developer focused on creating modern, responsive and user-friendly websites. I enjoy turning ideas into clean and interactive digital experiences and continuously improving my skills through real-world projects.",
  email: 'hello@mahdin.dev', // change to your real email
  socials: {
    github: 'https://github.com/your-username', // change to your GitHub
    linkedin: 'https://linkedin.com/in/your-username', // change to your LinkedIn
  },
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export const aboutHighlights = [
  { title: 'Web Development', desc: 'Building functional, well-structured websites.' },
  { title: 'Responsive Design', desc: 'Interfaces that adapt to every screen size.' },
  { title: 'UI/UX', desc: 'Designing layouts that are clear and easy to use.' },
  { title: 'Creative Interaction', desc: 'Adding motion and detail that feels alive.' },
]

// Skills — grouped by category. No fake percentages, just an
// honest list of what's actually used.
export const skillGroups = [
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code'],
  },
  {
    category: 'Other',
    items: ['Responsive Web Design', 'Basic UI/UX', 'AI-assisted Development'],
  },
]

export const services = [
  {
    title: 'Web Development',
    description: 'Modern and responsive websites built for different devices and screen sizes.',
  },
  {
    title: 'Web Design',
    description: 'Clean and engaging interfaces designed around usability and visual clarity.',
  },
  {
    title: 'Responsive Design',
    description: 'Websites that provide a consistent experience across desktop, tablet and mobile.',
  },
  {
    title: 'Website Optimization',
    description: 'Clean, lightweight and performance-conscious websites.',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the idea, goals and requirements.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Create the visual direction and user experience.',
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Build the website with clean and maintainable code.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Test, optimize and publish the final website.',
  },
]
