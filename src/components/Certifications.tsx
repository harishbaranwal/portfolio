import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Software Testing",
      issuer: "NPTEL",
      date: "Nov 2024",
      skills: ["Test Automation", "Unit Testing", "Integration Testing", "Bug Tracking"],
      credentialUrl: "https://drive.google.com/file/d/1VQBmceQ5ugcWoy3EI0hEWroIzDAKP5RC/view",
    },
    {
      title: "Programming in C++: A Hands-on Introduction",
      issuer: "Coursera",
      date: "Aug 2023",
      skills: ["C++", "Object-Oriented Programming", "STL", "Problem Solving"],
      credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/CV7AHRE9A8Y9",
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "Coursera",
      date: "Jul 2023",
      skills: ["Data Structures", "Algorithms", "Complexity Analysis"],
      credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/X6KSA3AQ77VX",
    },
  ];
  

  return (
    <section id="certifications" className="bg-background py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">My Certifications</h2>
        <p className="section-subtitle text-center">
          Professional certifications that validate my expertise and skills
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="card-hover flex flex-col h-full">
              <CardContent className="pt-6 flex flex-col h-full">
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-navy-900 mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-navy-600">{cert.issuer}</p>
                    </div>
                    <Badge variant="secondary" className="bg-secondary text-navy-700 w-[85px] text-center whitespace-nowrap">
                      {cert.date}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="bg-white text-navy-700"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-border">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    View Credential
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 