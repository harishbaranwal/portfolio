import React from 'react';
import { Progress } from '@/components/ui/progress';
import { 
  Code2, 
  Server, 
  Cpu, 
  Layout, 
  Database, 
  Cloud, 
  Brain, 
  Users, 
  MessageSquare, 
  Lightbulb, 
  Briefcase, 
  Shield,
  GitBranch,
  Container,
  TestTube,
  Layers,
  Network,
  Package,
  Code,
  Workflow
} from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Next.js/React.js', progress: 90, icon: <Code2 className="w-6 h-6 text-primary" /> },
    { name: 'Node.js/Express.js', progress: 85, icon: <Server className="w-6 h-6 text-primary" /> },
    { name: 'Python/C++/Java', progress: 88, icon: <Cpu className="w-6 h-6 text-primary" /> },
    { name: 'HTML/CSS/Tailwind', progress: 92, icon: <Layout className="w-6 h-6 text-primary" /> },
    { name: 'SQL & NoSQL Databases', progress: 85, icon: <Database className="w-6 h-6 text-primary" /> },
    { name: 'AWS/Docker', progress: 75, icon: <Cloud className="w-6 h-6 text-primary" /> },
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: <Brain className="w-6 h-6 text-primary" /> },
    { name: 'Team Collaboration', icon: <Users className="w-6 h-6 text-primary" /> },
    { name: 'Communication', icon: <MessageSquare className="w-6 h-6 text-primary" /> },
    { name: 'Critical Thinking', icon: <Lightbulb className="w-6 h-6 text-primary" /> },
    { name: 'Work Ethics', icon: <Briefcase className="w-6 h-6 text-primary" /> },
    { name: 'Responsibility', icon: <Shield className="w-6 h-6 text-primary" /> }
  ];

  return (
    <section id="skills" className="bg-secondary/50 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">My Skills</h2>
        <p className="section-subtitle text-center">
          I've developed a diverse set of skills to deliver comprehensive solutions
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-navy-800 mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {skill.icon}
                      <span className="text-navy-800 font-medium">{skill.name}</span>
                    </div>
                    <span className="text-navy-600">{skill.progress}%</span>
                  </div>
                  <Progress value={skill.progress} className="h-2 bg-navy-200" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-navy-800 mb-6">Soft Skills & Tooling</h3>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-navy-700 mb-4">Soft Skills</h4>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-white text-navy-700 px-4 py-2 rounded-full text-sm font-medium border border-border animate-fade-in flex items-center gap-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            
            <h4 className="text-xl font-semibold text-navy-700 mb-4">Development Tools & Frameworks</h4>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {[
                { name: 'Git', icon: <GitBranch className="w-8 h-8 text-primary" /> },
                { name: 'Docker', icon: <Container className="w-8 h-8 text-primary" /> },
                { name: 'Jest', icon: <TestTube className="w-8 h-8 text-primary" /> },
                { name: 'Redux', icon: <Layers className="w-8 h-8 text-primary" /> },
                { name: 'GraphQL', icon: <Network className="w-8 h-8 text-primary" /> },
                { name: 'Webpack', icon: <Package className="w-8 h-8 text-primary" /> },
                { name: 'VS Code', icon: <Code className="w-8 h-8 text-primary" /> },
                { name: 'CI/CD', icon: <Workflow className="w-8 h-8 text-primary" /> },
              ].map((tool, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-lg text-center border border-border flex flex-col items-center justify-center card-hover animate-fade-in hover:shadow-lg transition-shadow"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tool.icon}
                  <span className="text-navy-700 text-sm font-medium mt-2">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
