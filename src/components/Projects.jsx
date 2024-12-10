import React from 'react';
import { Code } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const projects = [
  { name: "Data Visualizer", description: "Interactive dashboard for complex data analysis", image: "https://placehold.co/200x400" },
  { name: "E-commerce Platform", description: "Full-stack MERN application with real-time inventory management", image: "https://placehold.co/200x400" },
  { name: "Task Management App", description: "Collaborative project management tool with real-time updates", image: "https://placehold.co/200x400" },
];

export default function Projects() {
  const showProjects = false; // Change this to true when you want to display the projects

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <span role="img" aria-label="projects">💻</span>
        Projects
      </h2>
      {showProjects ? (
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="p-0">
                <img src={project.image} alt={project.name} width={400} height={200} className="object-cover w-full h-48" />
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="text-md font-semibold mb-2">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="#">View Project</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg">Coming Soon...</p>
      )}
    </section>
  );
}