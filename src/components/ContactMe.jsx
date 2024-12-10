import React from "react";
import { Mail, Github, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ContactMe() {
  return (
    <section className="text-center mb-16">
      <h2 className="text-2xl font-semibold mb-6 flex items-center justify-center gap-2">
        <span role="img" aria-label="contact">
          📧
        </span>
        Contact Me
      </h2>
      <p className="mb-6">Let's collaborate and bring your ideas to life!</p>
      <div className="flex justify-center space-x-4">
        <Button variant="outline" size="icon" asChild>
          <Link to="mailto:jaysondorilag1@gmail.com" aria-label="Email">
            <Mail className="h-4 w-4" />
          </Link>
        </Button>
        {/* <Button variant="outline" size="icon" asChild>
          <Link
            to={{ pathname: "https://www.linkedin.com/in/jsondev" }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
        </Button> */}
        <Button variant="outline" size="icon" asChild>
          <Link
            to="https://www.facebook.com/jayson.dorilag"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link
            to="https://github.com/JaysonDorilag22"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
