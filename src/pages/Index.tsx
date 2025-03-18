
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckCircle, Sparkles, GraduationCap, BookOpen, Users, Code, Github } from "lucide-react";

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CourseCard, { CourseProps } from '@/components/CourseCard';
import TeamMemberCard from '@/components/TeamMemberCard';
import Testimonial from '@/components/Testimonial';
import Footer from '@/components/Footer';

import { courses, teamMembers, testimonials } from '@/data/sampleData';

const Index = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Categories for the filter section
  const categories = [
    "All Categories",
    "Web Development",
    "Data Science",
    "Design",
    "Business",
    "Marketing",
    "Mobile Development"
  ];

  // Features for the features section
  const features = [
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

  // Benefits list
  const benefits = [
    "Access to all courses completely free",
    "Learn at your own pace with lifetime access",
    "Downloadable resources and course materials",
    "Regular updates with the latest industry trends",
    "Mobile-friendly learning platform for on-the-go access",
    "Opportunity to contribute to course content"
  ];

  // Featured courses (for now, just take the first 3)
  const featuredCourses = courses.filter(course => course.featured).slice(0, 3);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <main className="flex-grow">
        <Hero />
        
        {/* Featured Courses Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-12">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Featured Courses
              </span>
              <h2 className="heading-2 mb-4">Expand Your Knowledge</h2>
              <p className="text-muted-foreground max-w-3xl">
                Discover our most popular courses handpicked by our team, covering in-demand skills across various domains.
              </p>
            </div>
            
            {/* Course Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featuredCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            
            {/* Call to Action */}
            <div className="flex justify-center mt-12">
              <Link to="/courses">
                <Button size="lg" variant="outline" className="group">
                  View all courses
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
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
        
        {/* Team Members Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-12">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Meet Our Team
              </span>
              <h2 className="heading-2 mb-4">The Developers Behind LumiED</h2>
              <p className="text-muted-foreground max-w-3xl">
                Our team of talented developers is passionate about creating free, high-quality educational content for everyone.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {teamMembers.slice(0, 4).map(member => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section 
          className="py-20 bg-gradient-to-b from-muted/30 to-white relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[10%] left-[15%] w-64 h-64 rounded-full bg-blue-400/5 blur-3xl"></div>
            <div className="absolute bottom-[10%] right-[15%] w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center text-center mb-12">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Student Testimonials
              </span>
              <h2 className="heading-2 mb-4">What Our Students Say</h2>
              <p className="text-muted-foreground max-w-3xl">
                Don't just take our word for it. Hear from our students who have transformed their careers with our courses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Featured Testimonial */}
              <div className="lg:col-span-2 row-span-2">
                <Testimonial testimonial={testimonials[0]} variant="featured" className="h-full" />
              </div>
              
              {/* Regular Testimonials */}
              {testimonials.slice(1).map(testimonial => (
                <div key={testimonial.id}>
                  <Testimonial testimonial={testimonial} variant="compact" />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-24 bg-primary/5 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            <div className="absolute top-[30%] right-[-10%] w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
            <div className="absolute bottom-[20%] left-[-10%] w-96 h-96 rounded-full bg-blue-400/5 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl bg-white border shadow-sm p-8 md:p-12">
                <div className="flex flex-col items-center text-center mb-8">
                  <h2 className="heading-2 mb-4">Ready to Start Your Learning Journey?</h2>
                  <p className="text-muted-foreground max-w-2xl">
                    Join thousands of students worldwide and start learning the skills that will advance your career - completely free.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Benefits</h3>
                    <ul className="space-y-3">
                      {benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0 mr-2 mt-0.5" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-6 flex flex-col justify-center">
                    <div className="p-5 rounded-lg bg-primary/5 border border-primary/10">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-semibold">Join Our Community</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Get started now and access all courses completely free. No credit card required.
                      </p>
                      <Button size="lg" className="w-full">Get Started</Button>
                    </div>
                    
                    <div className="text-center text-sm text-muted-foreground">
                      Want to contribute? <Link to="#" className="text-primary font-medium">Learn how to get involved</Link>
                    </div>
                  </div>
                </div>
                
                <div className="text-center pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    Have questions? <Link to="#" className="text-primary font-medium">Contact our support team</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
