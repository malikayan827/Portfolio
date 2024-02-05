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
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
    
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux ",
      icon: redux,
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
    {
      name: "docker",
      icon: docker,
    },
    {
        name:"python",
        icon: python,

    }
  ];
  
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company_name: "Ozeefy",
      
      date: "June 2022 - August 2022",
      points: [
        "Worked as a Front end web developer and learnt HTML, CSS and JavaScript.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        
        
      ],}
    // },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
//   const testimonials = [
//     {
//       testimonial:
//         "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//       name: "Sara Lee",
//       designation: "CFO",
//       company: "Acme Co",
//       image: "https://randomuser.me/api/portraits/women/4.jpg",
//     },
//     {
//       testimonial:
//         "I've never met a web developer who truly cares about their clients' success like Rick does.",
//       name: "Chris Brown",
//       designation: "COO",
//       company: "DEF Corp",
//       image: "https://randomuser.me/api/portraits/men/5.jpg",
//     },
//     {
//       testimonial:
//         "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//       name: "Lisa Wang",
//       designation: "CTO",
//       company: "456 Enterprises",
//       image: "https://randomuser.me/api/portraits/women/6.jpg",
//     },
//   ];
  
  const projects = [
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
      source_code_link: "https://github.com/",
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
      source_code_link: "https://github.com/",
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
      source_code_link: "https://github.com/",
    },
  ];
  const customProjects = [
    {
      category: "Web and Mobile App Development",
      projects: [
        {
          name: "Ecom Web-App",
          description: "Full-fledged e-commerce web application developed using the MERN stack.",
          technologies: ["MongoDB", "Express.js", "React", "Node.js"],
          source_code_link: "https://github.com/",
        },
        {
          name: "Ecom Mobile-App",
          description: "E-commerce mobile application developed using React Native and Firebase.",
          technologies: ["React Native", "Firebase"],
          source_code_link: "https://github.com/",
        },
        {
          name: "Emotion Detector App",
          description: "Python Flask application for detecting emotions in images.",
          technologies: ["Python", "Flask"],
          source_code_link: "https://github.com/",
        },
        {
          name: "Website Templates",
          description: "Collection of website templates created using HTML/CSS.",
          technologies: ["HTML", "CSS"],
          source_code_link: "https://github.com/",
        },
      ],
    },
    {
      category: "Databases",
      projects: [
        {
          name: "Shoe Store",
          description: "Shoe store application developed using SQL and C#.",
          technologies: ["SQL", "C#"],
          source_code_link: "https://github.com/",
        },
      ],
    },
    {
      category: "Data Science",
      projects: [
        {
          name: "Visual History of Nobel Prize Winners",
          description: "Data visualization project using Python.",
          technologies: ["Python"],
          source_code_link: "https://github.com/",
        },
        {
          name: "Android App Market Analysis",
          description: "Data analysis of the Google Play Store's Android app market using Python.",
          technologies: ["Python"],
          source_code_link: "https://github.com/",
        },
        {
          name: "World’s Oldest Businesses",
          description: "Data analysis project to discover the world’s oldest businesses using Python.",
          technologies: ["Python"],
          source_code_link: "https://github.com/",
        },
        {
          name: "Dr Semmelweis and Handwashing",
          description: "Data analysis project about Dr. Semmelweis and the discovery of handwashing using Python.",
          technologies: ["Python"],
          source_code_link: "https://github.com/",
        },
        {
          name: "Predicting Credit Card Approvals",
          description: "Credit card approval prediction using Python.",
          technologies: ["Python"],
          source_code_link: "https://github.com/",
        },
        {
          name: "Netflix Movies and Guest Stars",
          description: "Analysis of Netflix movies and guest stars using Python.",
          technologies: ["Python"],
          source_code_link: "https://github.com/",
        },
        {
          name: "Stock Data Extraction and Visualization",
          description: "Stock data extraction and visualization project using Python.",
          technologies: ["Python"],
          source_code_link: "https://github.com/",
        },
      ],
    },
    {
      category: "Machine Learning",
      projects: [
        {
          name: "Predicting Concrete Compressive Strength",
          description: "Prediction of concrete compressive strength using neural networks.",
          technologies: ["Machine Learning"],
          source_code_link: "https://github.com/",
        },
      ],
    },
  ];
  
  
  export { services, technologies, experiences, projects ,customProjects};
