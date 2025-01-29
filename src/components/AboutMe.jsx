import React from 'react';

export default function AboutMe() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <span role="img" aria-label="person">👤</span>
        About Me
      </h2>
      <p className="text-muted-foreground text-sm">
      I am Jayson Dorilag, an IT student with a growing interest in software development. I am eager to apply my skills and gain practical experience in designing, developing, and maintaining real-world applications using modern tools and technologies
      </p>
    </section>
  );
}