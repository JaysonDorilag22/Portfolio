import React from 'react';
import { Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Experience() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <span role="img" aria-label="experience">💼</span>
        Experience
      </h2>
      
      <Card className="mb-4">
        <CardContent className="p-4 flex items-center gap-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Telstra_logo.svg/1792px-Telstra_logo.svg.png" 
            alt="Telstra logo" 
            width={40} 
            height={40} 
            className="rounded-md object-contain"
          />
          <div className="flex-1">
            <h3 className="font-semibold">IT Intern</h3>
            <p className="text-sm text-muted-foreground">Telstra</p>
            <p className="text-xs text-muted-foreground mb-2">March 17, 2025 - July 9, 2025</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Power Apps</span>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Power Automate</span>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Power BI</span>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">SharePoint</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* <Card className="mb-4">
        <CardContent className="p-4">
          <h3 className="font-semibold">A Fresh Start</h3>
          <p className="text-sm text-muted-foreground">
            I'm at the starting line of my professional journey—no experience yet, but ready to learn, contribute, and see where this path takes me (hopefully with fewer coffee spills ☕ along the way).
          </p>
        </CardContent>
      </Card> */}
    </section>
  );
}