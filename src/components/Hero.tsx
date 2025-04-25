import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-navy-900 mb-4">
              I'm <span className="text-primary">Harish Baranwal</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-navy-700 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg text-navy-600 mb-8 max-w-xl">
              Full-Stack Developer with strong programming skills in frontend and backend development. 
              Skilled in building scalable web applications with optimized UI/UX and performance. 
              Focused on Data Structures, Algorithms, and Problem Solving.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button className="bg-primary hover:bg-primary/90">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact with Me</a>
              </Button>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/harishbaranwal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-700 hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/harishbaranwal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-700 hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:harishbaranwal2005@gmail.com?subject=Portfolio%20Contact&body=Hello%20Harish,"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-700 hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden mx-auto">
              <img
                src="/LinkedIn.jpg"
                alt="Harish Baranwal"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
