import { LuSunMedium } from "react-icons/lu";
import profile from "../src/assets/profile.png";
import React, { useState } from "react";
import BoxWithNavigation from "./BoxWithNavigation";

// Array of technology icons
const icons = [
  { src: "https://img.icons8.com/color/48/000000/html-5.png", alt: "HTML", label: "HTML" },
  { src: "https://img.icons8.com/color/48/000000/css3.png", alt: "CSS", label: "CSS" },
  { src: "https://img.icons8.com/color/48/000000/javascript.png", alt: "JavaScript", label: "JavaScript" },
  { src: "https://img.icons8.com/color/48/000000/mongodb.png", alt: "MongoDB", label: "MongoDB" },
  { src: "https://img.icons8.com/color/48/000000/express.png", alt: "Express", label: "Express" },
  { src: "https://img.icons8.com/color/48/000000/react-native.png", alt: "React", label: "React" },
  { src: "https://img.icons8.com/color/48/000000/nodejs.png", alt: "Node.js", label: "Node.js" },
  { src: "https://img.icons8.com/color/48/000000/react-native.png", alt: "React Native", label: "React Native" },
  { src: "https://img.icons8.com/ios-glyphs/48/000000/github.png", alt: "GitHub", label: "GitHub" },
  { src: "https://img.icons8.com/fluency/48/000000/laravel.png", alt: "Laravel", label: "Laravel" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png", alt: "PHP", label: "PHP", class: "h-10" },
  { src: "https://img.icons8.com/color/48/000000/figma.png", alt: "Figma", label: "Figma" },
];

// Array of projects
const projects = [
  { id: 1, title: "Project One", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 2, title: "Project Two", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 3, title: "Project Three", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 4, title: "Project Four", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 5, title: "Project Five", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 6, title: "Project Six", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

// Array of social links
const socialLinks = [
  { href: "https://www.linkedin.com/in/yourprofile", icon: "https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000", alt: "LinkedIn" },
  { href: "https://github.com/yourprofile", icon: "https://img.icons8.com/?size=100&id=62856&format=png&color=000000", alt: "GitHub" },
  { href: "https://www.facebook.com/yourprofile", icon: "https://img.icons8.com/?size=100&id=13912&format=png&color=000000", alt: "Facebook" },
  { href: "mailto:your-email@gmail.com", icon: "https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000", alt: "Email" },
];

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
    <BoxWithNavigation icons={icons} projects={projects} socialLinks={socialLinks} />
    </div>
  );
};

export default App;