import React, { useState } from "react";
import { motion } from "framer-motion";
import profile from "../src/assets/profile.png";
const BoxWithNavigation = ({ icons, projects, socialLinks }) => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="relative flex justify-center mt-4 px-4 sm:px-0">
      {/* Navigation Box */}
      <nav className="fixed top-20 left-4 bg-white rounded-lg p-4 shadow-lg border border-gray-400">
  <ul className="space-y-4">
    <li>
      <button
        onClick={() => handleSectionClick("introduction")}
        className="flex items-center text-blue-500 hover:text-blue-700"
      >
        👤 Introduction
      </button>
    </li>
    <li>
      <button
        onClick={() => handleSectionClick("about")}
        className="flex items-center text-blue-500 hover:text-blue-700"
      >
        ℹ️ About Me
      </button>
    </li>
    <li>
      <button
        onClick={() => handleSectionClick("skills")}
        className="flex items-center text-blue-500 hover:text-blue-700"
      >
        🛠️ Skills
      </button>
    </li>
    <li>
      <button
        onClick={() => handleSectionClick("learning")}
        className="flex items-center text-blue-500 hover:text-blue-700"
      >
        📚 Learning
      </button>
    </li>
    <li>
      <button
        onClick={() => handleSectionClick("projects")}
        className="flex items-center text-blue-500 hover:text-blue-700"
      >
        📁 Projects
      </button>
    </li>
    <li>
      <button
        onClick={() => handleSectionClick("contact")}
        className="flex items-center text-blue-500 hover:text-blue-700"
      >
        ✉️ Contact
      </button>
    </li>
  </ul>
</nav>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full sm:w-1/2 bg-white rounded-lg p-4 ml-20"
        layout
      >
        {/* Introduction Section */}
        <motion.div
          id="introduction"
          className={`col-span-1 sm:col-span-2 p-2 text-sm rounded-lg font-bold border border-gray-400 text-center ${
            selectedSection === "introduction" ? "order-first" : ""
          }`}
          layout
        >
          <h1 className="font-bold text-2xl"> Hi, I’m Jayson Dorilag. 👋</h1>
        </motion.div>
        <motion.div
          className={`row-span-1 sm:row-span-3 p-2 rounded-lg border border-gray-400 flex justify-center items-center ${
            selectedSection === "introduction" ? "order-first" : ""
          }`}
          layout
        >
          <img
            src={profile}
            alt="Profile"
            className="rounded-lg h-full object-cover"
          />
        </motion.div>
        <motion.div
          id="about"
          className={`row-span-1 sm:row-span-2 col-span-1 sm:col-span-2 p-4 rounded-lg border border-gray-400 ${
            selectedSection === "about" ? "order-first" : ""
          }`}
          layout
        >
          <h1 className="font-bold text-2xl">About Me</h1>
          <p className="text-justify text-sm">
            I’m Jayson, a MERN stack developer from Taguig, Philippines. I
            specialize in building efficient, user-friendly applications. I’m
            always looking for new ways to improve my skills and create
            something unique. If you're looking for someone who values
            practical, effective technology, let's connect! 🚀💻
          </p>
        </motion.div>
        {/* Skills Section */}
        <motion.div
          id="skills"
          className={`col-span-1 sm:col-span-3 p-4 text-sm rounded-lg font-bold border border-gray-400 ${
            selectedSection === "skills" ? "order-first" : ""
          }`}
          layout
        >
          <h1>What I Know...</h1>
          <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
            {icons.map((icon, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className={`h-12 ${icon.class || ""}`}
                />
                <span className="text-sm">{icon.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
        {/* Learning Section */}
        <motion.div
          id="learning"
          className={`col-span-1 sm:col-span-3 p-4 rounded-lg border border-gray-400 ${
            selectedSection === "learning" ? "order-first" : ""
          }`}
          layout
        >
          <h1 className="font-bold text-2xl">
            Still Learning, But Ready to Contribute!
          </h1>
          <p className="text-justify text-sm">
            I may not have professional experience yet, but I’m focused on
            learning, experimenting, and applying new skills. I’m eager to grow
            through hands-on projects and open to feedback. If you’re looking
            for someone ready to contribute and learn, let’s connect! 🌟
          </p>
        </motion.div>
        {/* Projects Section */}
        <motion.div
          id="projects"
          className={`col-span-1 sm:col-span-3 p-4 rounded-lg border border-gray-400 ${
            selectedSection === "projects" ? "order-first" : ""
          }`}
          layout
        >
          <h1 className="font-bold text-2xl">My Creations</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="p-4 border border-gray-300 rounded-lg"
              >
                <img
                  src="https://placehold.co/600x400"
                  alt={project.title}
                  className="mb-2"
                />
                <h2 className="font-semibold text-sm">{project.title}</h2>
                <p className="text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
        {/* Contact Section */}
        <motion.div
          id="contact"
          className={`col-span-1 sm:col-span-3 p-4 rounded-lg border border-gray-400 ${
            selectedSection === "contact" ? "order-first" : ""
          }`}
          layout
        >
          <h1 className="font-bold text-2xl">Let’s Work Together</h1>
          <div className="flex space-x-4 mt-4">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={link.icon} alt={link.alt} width={40} height={40} />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BoxWithNavigation;