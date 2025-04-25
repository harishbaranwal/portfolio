import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import TypingAnimation from "./ui/typing-animation";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center py-12 sm:py-16 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="animate-fade-in text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-2 sm:mb-3"
            >
              <TypingAnimation text="I'm Harish Baranwal" className="text-primary" />
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-navy-700 mb-3 sm:mb-4"
            >
              Full Stack Developer
            </motion.h2>
            <p className="text-sm sm:text-base text-navy-600 mb-4 sm:mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Full-Stack Developer with strong programming skills in frontend and backend development. 
              Skilled in building scalable web applications with optimized UI/UX and performance. 
              Focused on Data Structures, Algorithms, and Problem Solving.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6 justify-center lg:justify-start">
              <Button className="bg-primary hover:bg-primary/90 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2">
                View Projects <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
              <Button variant="outline" asChild className="text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2">
                <a href="#contact">Contact with Me</a>
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4">
              <a
                href="https://github.com/harishbaranwal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-700 hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://linkedin.com/in/harishbaranwal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-700 hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="mailto:harishbaranwal2005@gmail.com?subject=Portfolio%20Contact&body=Hello%20Harish,"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-700 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          <div className="relative mt-6 lg:mt-0">
            <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden mx-auto">
              <img
                src="/LinkedIn.jpg"
                alt="Harish Baranwal"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
