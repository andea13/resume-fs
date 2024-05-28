import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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
};

export default resumeData;
