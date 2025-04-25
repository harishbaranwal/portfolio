import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Globe, Server } from "lucide-react";

const About = () => {
  const services = [
    {
      title: "Frontend Development",
      icon: <Code className="h-12 w-12 text-primary mb-4" />,
      description:
        "Creating responsive and interactive user interfaces with Next.js, React, and modern CSS frameworks.",
    },
    {
      title: "Backend Development",
      icon: <Server className="h-12 w-12 text-primary mb-4" />,
      description:
        "Building robust API services and server architecture with Node.js, Express, and various databases.",
    },
    {
      title: "Full Stack Solutions",
      icon: <Globe className="h-12 w-12 text-primary mb-4" />,
      description:
        "End-to-end application development from concept to deployment with a focus on performance and scalability.",
    },
  ];

  return (
    <div id="about" className="bg-background py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">About Me</h2>
        <p className="section-subtitle text-center">
          A passionate full stack developer with expertise in modern web
          technologies
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="animate-slide-right delay-100">
            <h3 className="text-2xl font-bold text-navy-800 mb-4">
              My Journey
            </h3>
            <p className="text-navy-600 mb-4">
              As a Full Stack Developer, I specialize in building scalable web
              applications with optimized UI/UX and performance. My focus lies
              in creating efficient solutions using modern technologies and best
              practices.
            </p>
            <p className="text-navy-600">
              Currently pursuing BTech in Computer Science from Lovely
              Professional University with a strong academic record (GPA:
              8.32/10.0). I've developed multiple successful projects and
              continuously enhance my skills through professional training and
              certifications.
            </p>
          </div>

          <div className="animate-slide-right delay-200">
            <div className="bg-card border border-border rounded-lg p-6 h-full">
              <h3 className="text-2xl font-bold text-navy-800 mb-4">
                Education & Training
              </h3>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-navy-800">
                  B.Tech. in Computer Science
                </h4>
                <p className="text-navy-600">
                  Lovely Professional University, Punjab • Sep 2022 - Present
                </p>
                <p className="text-navy-600">CGPA: 8.89</p>
                <p className="text-navy-600">Dein's List TOP 10</p>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h4 className="text-lg font-semibold text-navy-800">
                    Sri Girija Sharan Inter College, Jaunpur, Uttar Pradesh
                  </h4>
                  <p className="text-navy-700">Intermediate with Science •  Apr 2020 - Mar 2022 </p>
                  <p className="text-navy-700">Percentage: 84.4%</p>
                </div>

                <div className="border-l-4 border-primary/70 pl-4 py-2">
                  <h4 className="text-lg font-semibold text-navy-800">
                    Sri Girija Sharan Inter College, Jaunpur, Uttar Pradesh
                  </h4>
                  <p className="text-navy-700">High School with Science • Apr 2018 - Mar 2022</p>
                  <p className="text-navy-700">Percentage: 86.5%</p>
                </div>

                <div className="border-l-4 border-primary/70 pl-4 py-2">
                  <h4 className="text-lg font-semibold text-navy-800">
                    Programming Pathshala
                  </h4>
                  <p className="text-navy-700">
                    Competitive Programming Bootcamp • Jan 2025 - Feb 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center text-navy-800 mb-8">
          What I Do
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center">{service.icon}</div>
                <h4 className="text-xl font-bold text-navy-800 mb-2">
                  {service.title}
                </h4>
                <p className="text-navy-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
