import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import CV from '../assets/Dorilag_Jayson.pdf';

export default function AboutMe() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <span role="img" aria-label="person">👤</span>
        About Me
      </h2>
      <p className="text-muted-foreground text-sm mb-4">
        I am Jayson Dorilag, an IT student with a growing interest in software development. I am eager to apply my skills and gain practical experience in designing, developing, and maintaining real-world applications using modern tools and technologies
      </p>
      <Button 
        variant="default" 
        className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-500 ease-out"
        asChild
      >
        <a 
          href={CV} 
          download="Dorilag_Jayson_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Download className="h-4 w-4" />
          Download CV
        </a>
      </Button>
    </section>
  );
}