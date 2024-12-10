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
    <CardContent className="p-4">
      <h3 className="font-semibold">A Fresh Start</h3>
      <p className="text-sm text-muted-foreground">
        I’m at the starting line of my professional journey—no experience yet, but ready to learn, contribute, and see where this path takes me (hopefully with fewer coffee spills ☕ along the way).
      </p>
    </CardContent>
  </Card>
</section>
  
  );
}