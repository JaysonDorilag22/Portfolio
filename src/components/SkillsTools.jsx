import React from 'react';

const skills = [
  { name: "MongoDB", logo: "https://img.icons8.com/color/48/000000/mongodb.png" },
  { name: "Express.js", logo: "https://img.icons8.com/color/48/000000/express.png" },
  { name: "React", logo: "https://img.icons8.com/color/48/000000/react-native.png" },
  { name: "Node.js", logo: "https://img.icons8.com/color/48/000000/nodejs.png" },
  { name: "HTML", logo: "https://img.icons8.com/color/48/000000/html-5.png" },
  { name: "CSS", logo: "https://img.icons8.com/color/48/000000/css3.png" },
  { name: "JavaScript", logo: "https://img.icons8.com/color/48/000000/javascript.png" },
  { name: "Git", logo: "https://img.icons8.com/color/48/000000/git.png" },
  { name: "Laravel", logo: "https://img.icons8.com/?size=100&id=lRjcvhvtR81o&format=png&color=000000" },
  { name: "PHP", logo: "https://img.icons8.com/?size=100&id=anECpXcEIboQ&format=png&color=000000" },
  { name: "Figma", logo: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000" },
  { name: "Power Apps", logo: "https://img.icons8.com/?size=512&id=jXuZmZPUKCPS&format=png" },
  { name: "Power BI", logo: "https://img.icons8.com/?size=100&id=qYfwpsRXEcpc&format=png&color=000000" },
  { name: "Power Automate", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Microsoft_Power_Automate.svg/2048px-Microsoft_Power_Automate.svg.png" },
  { name: "SharePoint", logo: "https://img.icons8.com/?size=100&id=VLKafOkk3sBX&format=png&color=000000" },
];

export default function SkillsTools() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <span role="img" aria-label="tools">🛠️</span>
        Skills & Tools
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <img
              src={skill.logo}
              alt={skill.name}
              width={40}
              height={40}
              className="mb-2 transform transition-transform duration-300 hover:scale-110"
            />
            <span className="text-sm text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}