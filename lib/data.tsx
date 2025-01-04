import { LuGraduationCap } from 'react-icons/lu'
import { CgWorkAlt } from 'react-icons/cg'

type ExperiencedData = {
  title: string
  description: string
  year: string
  skills: string[]
  icon: React.ReactNode
}

export const experiencedData: ExperiencedData[] = [
  {
    title: 'Graduated Web-Development course at proweb.uz',
    description:
      'Successfully completed a Web Development course at proweb.uz, acquiring in-depth knowledge of HTML, CSS, and JavaScript, as well as experience with modern frameworks. Learned to build responsive websites, follow best coding practices, and create user-friendly designs, preparing for real-world web development challenges.',
    year: '2021 - 2022',
    skills: [
      'HTML',
      'CSS',
      'Bootstrap',
      'Gulp',
      'SCSS',
      'JavaScript',
      'PHP',
      'MySQL',
      'Vue.js',
    ],
    icon: <LuGraduationCap />,
  },
  {
    title: 'Graduated Full Stack Python course at ba.uz',
    description:
      'Successfully completed the Full Stack Python course at ba.uz, gaining expertise in Python programming, backend development with frameworks like Django/Flask, and frontend technologies. Acquired skills in database management, API integration, and deploying full-stack web applications, equipping for versatile software development roles."',
    year: '2022 - 2023',
    skills: [
      'Python',
      'React',
      'Next.js',
      'Node.js',
      'Tailwind CSS',
      'TypeScript',
      '.NET',
      'C#',
    ],
    icon: <LuGraduationCap />,
  },
  {
    title: 'Worked as a Front-End Developer at Bobur Akilkhanov',
    description:
      'As a Front-End Developer at Bobur Akilkhanov, I contributed to building and maintaining engaging, responsive web applications using modern front-end technologies like HTML, CSS, JavaScript, React.js, and Next.js. My focus was on creating user-friendly interfaces, optimizing performance, and ensuring seamless collaboration with design and back-end teams.',
    year: '2023 - 2024',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn UI',
      'Swiper',
      'Framer Motion',
      'Strapi CMS',
    ],
    icon: <CgWorkAlt />,
  },
]

type NavigationData = {
  title: string
  href: string
}
export const navigationData: NavigationData[] = [
  { title: 'About', href: 'about' },
  { title: 'Experience', href: 'experience' },
  { title: 'Projects', href: 'projects' },
  { title: 'Contact', href: 'contact' },
]

type ProjectData = {
  title: string
  description: string
  technologies: string[]
  image: string
  link: string
}

export const projectsData: ProjectData[] = [
  {
    title: 'Bobur Akilkhanov',
    description:
      'Web app that people can register their name and phone number to participate in new events or IT courses',
    image: '/assets/bobur.png',
    technologies: ['React', 'Vite', 'SCSS', 'Axios', 'Facebook Pixel'],
    link: 'https://bobur-akilkhanov.vercel.app/',
  },
  {
    title: 'East West',
    description:
      'A website that provides information about the company, its services, and contact information for potential clients',
    image: '/assets/east-west.png',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Strapi CMS',
    ],
    link: 'https://east-west-com.vercel.app/',
  },
  {
    title: 'IFILM',
    description:
      'Analog of Netflix, where you can see information about movies and TV shows. Also it provodes trailers for more than 500,000 movies',
    image: '/assets/ifilm.png',
    technologies: ['React', 'Vite', 'SCSS', 'Axios'],
    link: 'https://ifilm.vercel.app/',
  },
  {
    title: 'React Pizza',
    description:
      'React Pizza is a pizza delivery service that allows users to order pizza and see the location of the closest pizza delivery point.',
    image: '/assets/pizza.png',
    technologies: [
      'React',
      'Typescript',
      'Vite',
      'SCSS',
      'Redux Toolkit',
      'Axios',
    ],
    link: 'https://react-pizzaa.vercel.app/',
  },
]
