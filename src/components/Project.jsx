import Resumify from "../assets/resumify/Resumify.png"
import Agapay from "../assets/resumify/1.png"
import { ExternalLink } from "lucide-react"

export default function Project() {
  const projects = [
    {
      logo: Resumify,
      name: "Resumify",
      description: "A simple resume builder with export to word",
      technologies: ["React", "TailwindCSS", "Vite"],
      websiteUrl: "https://resume-builder-k0f3.onrender.com/"
    },
    {
      logo: Agapay,
      name: "Agapay Alert",
      description: "Emergency alert and notification system",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      websiteUrl: "https://agapayalert-web.onrender.com/"
    }
  ]

  return (
    <main className="py-12">
      <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
        🗂️ My Projects
      </h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <img 
                src={project.logo} 
                alt={project.name} 
                className="w-12 h-12 object-contain rounded-md"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.websiteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                  Visit Website <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}