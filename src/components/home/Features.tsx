
import React from 'react';
import { BookOpen, Users, GraduationCap, Code } from "lucide-react";

// Feature type
interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const Features = () => {
  // Features for the features section
  const features: Feature[] = [
    {
      icon: BookOpen,
      title: "Expert-Led Courses",
      description: "Learn from detailed courses created by industry professionals with years of practical experience"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a community of learners to share knowledge and grow together"
    },
    {
      icon: GraduationCap,
      title: "Practical Skills",
      description: "Gain hands-on experience with projects and exercises that build real-world skills"
    },
    {
      icon: Code,
      title: "Open Source",
      description: "All our content is free and open source, developed collaboratively by the community"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="heading-2 mb-4">A Learning Experience Like No Other</h2>
          <p className="text-muted-foreground max-w-3xl">
            We've designed every aspect of our platform to ensure you have the best learning experience possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white border shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
