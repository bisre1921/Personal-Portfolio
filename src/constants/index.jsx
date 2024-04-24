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
    // carconnect,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";

  import carconnect from '../assets/carconnect.png';
  import realstate from "../assets/real-state.png";
  import travelconnect from "../assets/travelconnect.png";
  import instagram from "../assets/instagram.jpg";
  import tastybites from "../assets/tastybites.png";
  import highschool from "../assets/highschool.jpg";
  import aau from "../assets/aau.jpg";
  import code from "../assets/code.jpg"
  import tech from "../assets/tech.jpg"
  import firebase from "../assets/tech/firebase.jpg"
  
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
      title: "Full Stack Web Developer",
      icon: web,
    },
    // {
    //   title: "MERNT Stack Developer",
    //   icon: backend,
    // },
    {
      title: "React Developer",
      icon: code,
    },
    {
      title: "computer science student",
      icon: tech,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "firebase",
      icon: firebase,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
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
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "High School Journey",
      company_name: "Marvel International School, Assela",
      icon: highschool,
      iconBg: "#383E56",
      date: "August 18, 2017 - November 14, 2021",
      points: [
        "Attending Marvel International School in Assela sparked my curiosity and enthusiasm for technology and programming.",
        "It was during this time that I first delved into the world of coding, igniting a passion that continues to drive me forward.",
      ],
    },
    {
      title: "Computer Science Student",
      company_name: "Addis Ababa University",
      icon: aau,
      iconBg: "#E6DEDD",
      date: "June 1, 2022 - present",
      points: [
        "Studying computer science and gaining expertise in various programming languages and technologies.",
        "Exploring different areas of computer science, including algorithms, data structures, and software engineering.",
        "Collaborating with peers on projects and assignments to gain practical experience.",
      ],
    },
    {
      title: "Personal Projects Enthusiast",
      company_name: "",
      icon: code,
      iconBg: "#383E56",
      date: "Since I Embarked on My Coding Journey",
      points: [
        "Creating personal projects to apply theoretical knowledge and explore new technologies.",
        "Developing web applications using languages like JavaScript.",
        "Experimenting with frameworks and libraries such as React.js, Node.js , Next.js",
        "Showcasing projects on platforms like GitHub to demonstrate coding abilities and creativity.",
      ],
    },
    {
      title: "Tech Enthusiast",
      company_name: "Meta",
      icon: tech,
      iconBg: "#E6DEDD",
      date: "Years of Passion",
      points: [
        "Immersed in the world of technology with boundless curiosity and passion for innovation.",
      "Driven by a relentless desire to learn and explore new advancements in the field.",
      "Eagerly anticipating the future of the industry, where technology evolves and possibilities expand.",
      "Committed to contributing to this dynamic landscape, making meaningful impacts and driving progress.",
    ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "CarConnect",
      description:
        "Revolutionizing the way people buy and sell cars, my web platform offers users the ability to effortlessly list their vehicles for sale or purchase. With just a few essential details, sellers can showcase their cars to potential buyers. Additionally, buyers can easily connect with sellers to negotiate deals or even arrange rentals. It's the ultimate solution for streamlining the car selling and buying process.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "react-spinners",
          color: "orange-text-gradient",
        },
        {
          name: "react-toastify",
          color: "chocolate-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: carconnect,
      source_code_link: "https://github.com/bisre1921/React-Car-Rent-Sale",
    },
    {
      name: "Real-State Rent or Sell",
      description:
        "Introducing my cutting-edge real estate platform, where users can seamlessly list their properties for sale or rent with all the essential details at their fingertips. Potential buyers or tenants can easily browse through listings and connect directly with property owners or agents to make inquiries or finalize deals.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: realstate,
      source_code_link: "https://github.com/bisre1921/React-Real-State",
    },
    {
      name: "TravelConnect",
      description:
        "Introducing my innovative travel recommendation platform where users can effortlessly share their favorite destinations by posting them along with valuable information. Whether it's a hidden gem or a well-known spot, users can showcase places they love and provide insights to fellow travelers. On the platform, other users can explore these recommendations visually on an interactive map, allowing them to discover new destinations and plan their adventures with ease. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "orange-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: travelconnect,
      source_code_link: "https://github.com/bisre1921/React-Travel-Connect",
    },
    {
      name: "Instagram Clone",
      description:
        "Step into my Instagram clone, where users can seamlessly share their moments with the world. From posting captivating photos to editing their profiles, including profile pictures, users have all the tools they need to express themselves. Engage with the community by liking and commenting on posts, fostering connections and building relationships. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "react-toastify",
          color: "orange-text-gradient",
        },
        {
          name: "styled-components",
          color: "chocolate-text-gradient",
        },{
          name: "react-spinner",
          color: "orange-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: instagram,
      source_code_link: "https://github.com/bisre1921/React-Instagram-Clone",
    },
    {
      name: "TastyBites",
      description:
        "Indulge in TastyBites, my culinary haven where users can explore an array of delicious recipes from around the globe. With just a simple search, users can uncover detailed information about any dish, including ingredients, prices, and more, thanks to the Spoonacular Food API integration. Dive into diverse cuisines, from Chinese delights to American classics, and expand your culinary horizons.",
        tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "react-slick",
          color: "orange-text-gradient",
        },
        {
          name: "styled-components",
          color: "chocolate-text-gradient",
        },
        {
          name: "Spoonacular Food Api",
          color: "pink-text-gradient",
        },

      ],
      image: tastybites,
      source_code_link: "https://github.com/bisre1921/React-Recipe-Web",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };