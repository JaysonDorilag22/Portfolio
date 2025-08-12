import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const educationData = [
  {
    name: "Technological University of the Philippines - Taguig",
    status: "Currently Enrolled",
    course: "Bachelor of Science in Information Technology",
    logo: "https://www.tupt.edu.ph/assets/images/logo.png" // Placeholder for the logo
  },
];

export default function Education() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <span role="img" aria-label="education">📚</span>
        Education
      </h2>
      {educationData.map((edu, index) => (
        <Card key={index} className="mb-4">
          <CardContent className="p-4 flex items-center gap-4">
            <img src={edu.logo} alt={`${edu.name} logo`} width={40} height={40} className="rounded-full" />
            <div>
              <h3 className="font-semibold">{edu.name}</h3>
              <p className="text-sm text-muted-foreground">{edu.status}</p>
              {edu.course && <p className="text-sm text-muted-foreground">{edu.course}</p>}
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}