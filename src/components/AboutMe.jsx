import React from 'react';

export default function AboutMe() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <span role="img" aria-label="person">👤</span>
        About Me
      </h2>
      <p className="text-muted-foreground text-sm">
        As a passionate MERN stack developer, I specialize in transforming complex data structures into intuitive, user-friendly web applications. With a keen eye for design and a love for clean code, I bring the best of both worlds to every project.
      </p>
    </section>
  );
}