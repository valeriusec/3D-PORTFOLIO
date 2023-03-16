import {
    mobile,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    codecademy,
    threejs,
    jammming,
    fitclub,
    infopilot,
  } from "../assets";
  
  export const navLinks = [
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
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Web Foundations",
      company_name: "Codecademy",
      icon: codecademy,
      iconBg: "#204056",
      date: "5 Dec 2022 - 14 Dec 2022",
      points: [
        "Fundamentals of HTML",
        "Fundamentals of CSS",
        "Developing Websites Locally",
        "Deploying Websites"
      ],
    },
    {
      title: "Improved Styling with CSS",
      company_name: "Codecademy",
      icon: codecademy,
      iconBg: "#204056",
      date: "15 Dec 2022 - 29 Dec 2022",
      points: [
        "Fundamentals of Web Design",
        "Making a Website Responsive",
        "CSS Transitions and Animations"
      ],
    },
    {
      title: "Building Interactive Websites",
      company_name: "Codecademy",
      icon: codecademy,
      iconBg: "#204056",
      date: "30 Dec 2022 -  9 Feb 2023",
      points: [
        "JavaScript Syntax",
        "Building Interactive Websites",
        "Making a Website Accessible",
        "Git and Github"
      ],
    },
    {
      title: "Front-End Development",
      company_name: "Codecademy",
      icon: codecademy,
      iconBg: "#204056",
      date: "10 Feb - Present",
      points: [
        "JavaScript Syntax",
        "JavaScript Testing",
        "Async JavaScript",
        "Web Apps",
        "React Framework"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Valeriu proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Valeriu does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Valeriu optimized our website, our traffic increased by 50%. We can't thank him enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "InfoPilot App",
      description: "InfoPilot is a sleek and user-friendly React dashboard application built using Syncfusion components. Explore your data with confidence and ease using InfoPilot.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: 'syncfusion',
          color: 'green-text-gradient'
        }
      ],
      image: infopilot,
      source_code_link: "https://github.com/valeriusec/dashboard-app",
      demo_link: "https://infopilot.netlify.app/"
    },
    {
      name: "Jammming App",
      description: "Jammming allows you to search for your favorite songs and create custom playlists. Once you've created your playlist, you can export it directly to your Spotify account.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "shopifyapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jammming,
      source_code_link: "https://github.com/valeriusec/jammming-app",
      demo_link: "https://jammming-b7d.pages.dev/"
    },
    {
      name: "Fit Club",
      description: "FitClub is a React app that follows a sleek and modern template for fitness enthusiasts, and provides different types of fitness services.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: fitclub,
      source_code_link: "https://github.com/valeriusec/gym-website",
      demo_link: "https://fitclubgym-r42.pages.dev/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };