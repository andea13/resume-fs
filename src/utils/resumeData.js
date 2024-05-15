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
};

export default resumeData;
