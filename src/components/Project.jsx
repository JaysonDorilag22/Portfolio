import { ProjectCard } from "./ProjectCard"
import Resumify from "../assets/resumify/Resumify.png"
import slide1 from "../assets/resumify/slide1.png"
import slide2 from "../assets/resumify/slide2.png"
import slide3 from "../assets/resumify/slide3.png"
import slide4 from "../assets/resumify/slide4.png"
export default function Project() {
  const projects = [
    {
      logo: Resumify,
      name: "Resumify",
      description: "A simple resume builder with export to word",
      websiteImages: [
        slide1,
        slide2,
        slide3,
        slide4
      ],
      technologies: ["React"],
      websiteUrl: "https://resume-builder-k0f3.onrender.com/"
    },
    // {
    //   logo: "/placeholder.svg?height=150&width=150",
    //   name: "Project B",
    //   description: "An e-commerce platform with advanced product recommendation system.",
    //   websiteImages: [
    //     "/placeholder.svg?height=200&width=300",
    //     "/placeholder.svg?height=200&width=300",
    //     "/placeholder.svg?height=200&width=300",
    //   ],
    //   technologies: ["Vue.js", "Node.js", "MongoDB", "AWS"],
    // },
  ]

  return (
    <main className=" py-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </main>
  )
}
