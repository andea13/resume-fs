import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import webstudio from "../assets/images/webstudioScreen.png";
import searchline from "../assets/images/searchline.jpg";
import hotel from "../assets/images/hotelPage.png";
import watertracker from "../assets/images/watertracker.png";

const resumeData = {
  name: "Oksana Dziuba",
  title: "Full Stack Developer",
  age: "29 y.o",
  email: "dziuba131303@gmail.com",
  address: "Dubai, UAE",

  phone: "+971547968333",
  alternativePhone: "+380689633122",
  socials: {
    LinkedIn: {
      link: "https://www.linkedin.com/in/oksana-dziuba-6b6b6b1b6/",
      text: "My LinkedIn",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link: "https://github.com/andea13",
      text: "My GitHub",
      icon: <GitHubIcon />,
    },
    WhatsApp: {
      link: "https://wa.me/971547968333",
      text: "My WhatsApp",
      icon: <WhatsAppIcon />,
    },
  },

  about:
    "I am a Full Stack Developer with a passion for creating beautiful and functional websites. I have experience in both front-end and back-end development, and I am always looking to learn new technologies and improve my skills.",
  workExperiences: [
    {
      title: "Full Stack Developer",
      date: "2021 -present",
      description:
        "I am currently working as a Full Stack Developer at a software development company. I am responsible for developing and maintaining web applications, as well as working on various projects for clients.",
    },
    {
      title: "Front-End Developer",
      date: "2019 - 2021",
      description:
        "I worked as a Front-End Developer at a digital marketing agency. I was responsible for creating and maintaining websites, as well as working on various projects for clients.",
    },
    {
      title: "Web Developer",
      date: "2017 - 2019",
      description:
        "I worked as a Web Developer at a web design company. I was responsible for developing and maintaining websites, as well as working on various projects for clients.",
    },
  ],
  educationExperiences: [
    {
      title: "Bachelor's Degree in Computer Science",
      date: "2013 - 2017",
      description:
        "I studied Computer Science at the University of Lviv. I learned about various programming languages, algorithms, data structures, and software development methodologies.",
    },
    {
      title: "High School Diploma",
      date: "2009 - 2013",
      description:
        "I graduated from high school with honors. I studied various subjects, including mathematics, physics, and computer science.",
    },
  ],
  skills: {
    technical: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
      "Git",
      "GitHub",
      "VS Code",
      "Photoshop",
    ],
    personal: [
      "Problem-solving",
      "Teamwork",
      "Communication",
      "Time management",
      "Creativity",
      "Adaptability",
      "Attention to detail",
      "Organization",
      "Leadership",
      "Critical thinking",
    ],
  },

  projectFilters: ["HTML/CSS", "JavaScript", "React", "Node.js", "All"],
  projects: [
    {
      img: webstudio,
      title: "Webstudio",
      alt: "Portfolio Website",
      date: "2021",
      description:
        "I created a portfolio website to showcase my work and skills. The website is built using React, Node.js, and MongoDB.",
      link: "https://andea13.github.io/goit-markup-hw-08/",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      img: searchline,
      title: "Image Search Bar",
      date: "2023",
      description:
        "I developed an e-commerce website for a client. The website is built using HTML, CSS, JavaScript, and PHP.",
      link: "https://andea13.github.io/goit-js-hw-11/",
      tags: ["HTML/CSS", "JavaScript", "PHP"],
    },
    {
      img: hotel,
      title: "Mimino",
      date: "2023",
      description: "Hotel Booking Website",
      link: "https://starik061.github.io/chicki-picki-project/",
      tags: ["WordPress"],
    },
    {
      img: watertracker,
      title: "Water Tracker",
      date: "2023",
      description: "Hotel Booking Website",
      link: "https://andriipolishchuk28.github.io/water-tracker-frontend/",
      linkBackend:
        "https://github.com/SerhiiOberemchuk/watertracker-backand-codekartel",
      tags: ["WordPress"],
    },
  ],
};

export default resumeData;
