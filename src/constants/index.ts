import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
];

const experiences: TExperience[] = [ // ✅ Correct declaration
    {
      title: "Front-End Development",
      companyName: "Meta",
      icon: meta,
      iconBg: "#ffffff",
      date: "Jan 16, 2025",
      points: [
        "Distinguish between front-end, back-end, and full-stack developers.",
        "Create and style a webpage with HTML and CSS.",
        "The benefits of working with UI frameworks.",
      ],
      link: "https://coursera.org/verify/63PUTY67MU1D",  
    },  
    {
      title: "Back-End Development",
      companyName: "Meta",
      icon: meta,
      iconBg: "#ffffff",
      date: "Jan 18, 2025",
      points: [
        "Distinguish between front-end, back-end, and full-stack developers.",
        "Create and style a webpage with HTML and CSS.",
        "The benefits of working with UI frameworks.",
      ],
      link: "https://www.coursera.org/account/accomplishments/verify/63PUTY67MU1D",  
    },
    {
      title: "Agile Project Management",
      companyName: "Google",
      icon: shopify,
      iconBg: "#ffffff",
      date: "Jan 14, 2025",
      points: [
        "Explain the Agile project management approach and philosophy, including values and principles.",
        "Discuss the pillars of Scrum and how they support Scrum values.",
        "Describe the five important Scrum events and how to set up each event for a Scrum team.",
        "Explain how to coach an Agile team and help them overcome challenges.",
      ],
      link: "https://www.coursera.org/account/accomplishments/verify/1LZBHBVXB432",  
    },
    {
      title: "WordPress Intern",
      companyName: "Coursera",
      icon: tesla,
      iconBg: "#ffffff",
      date: "Jan 24, 2024",
      points: [
        "Creating a free WordPress website is quick and easy. Sign up, choose a theme, add essential pages, and customize your site. With plugins for SEO and performance, you can optimize your site effortlessly. Publish and share it to establish your online presence.",
      ],
      link: "https://www.coursera.org/account/accomplishments/verify/ASEP2TUARPF9",  
    },
  ];
  

const testimonials: TTestimonial[] = [
 
  
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
