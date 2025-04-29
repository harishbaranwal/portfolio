import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Shine E-commerce",
      description:
        "Shine-Ecommerce is a MERN stack-based online shopping platform with features like user authentication, product management, and seamless checkout.",
      image: "/shine.png",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      githubUrl: "https://github.com/harishbaranwal/Shine_Ecommerce",
      liveUrl: "https://shineecommerce.vercel.app/",
    },
    {
      id: 2,
      title: "Crypto Trading Wallet Platform",
      description:
        "A crypto platform for trading and managing wallets. Users can create wallets, trade crypto, and view transaction history.",
      image: "/p-2.png",
      category: "frontend",
      technologies: ["React", "TypeScript", "Redux", "Firebase", "ChartJS"],
      githubUrl: "https://github.com/harishbaranwal/Crypto-Trading-Wallet-Platform",
      liveUrl: "https://trade-pulse-finance.lovable.app/",
    },
    {
      id: 3,
      title: "Full-stack Notes App ",
      description:
        "A scalable RESTful API for notes management with authentication, authorization and data validation.",
      image: "/p-3.png",
      category: "backend",
      technologies: ["PHP", "PostgreSQL", "JWT", "Docker"],
      githubUrl: "https://github.com/harishbaranwal/Notes-App",
      liveUrl: "https://chrono-note-craft.lovable.app",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">My Projects</h2>
        <p className="section-subtitle text-center">
          Here are some of the projects I've worked on
        </p>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {["all", "frontend", "backend", "fullstack"].map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                className="capitalize"
                onClick={() => setFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-navy-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-secondary text-navy-700"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-0 flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
