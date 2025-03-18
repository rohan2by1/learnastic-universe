
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BookOpen, CheckCircle, Heart, BarChart3, Users, Trophy, GraduationCap, Globe, Clock } from "lucide-react";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InstructorCard from '@/components/InstructorCard';

import { instructors } from '@/data/sampleData';

const About = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Mission & values
  const values = [
    {
      icon: BookOpen,
      title: "Quality Education",
      description: "We provide top-tier educational content created by industry experts and continuously updated to reflect the latest trends."
    },
    {
      icon: Heart,
      title: "Student Success",
      description: "We measure our success by the achievements of our students. Your growth is our primary objective."
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description: "We foster a diverse and supportive learning environment where everyone feels welcome and valued."
    },
    {
      icon: BarChart3,
      title: "Continuous Improvement",
      description: "We constantly refine our courses and platform based on feedback and emerging best practices."
    }
  ];
  
  // Stats
  const stats = [
    { number: "100K+", label: "Students Worldwide" },
    { number: "200+", label: "Expert Instructors" },
    { number: "500+", label: "Courses Available" },
    { number: "50+", label: "Countries Reached" }
  ];
  
  // Team members
  const teamMembers = [
    {
      name: "Alexandra Lee",
      title: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      bio: "Former education consultant with a passion for making quality education accessible to everyone."
    },
    {
      name: "Marcus Johnson",
      title: "Chief Learning Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      bio: "PhD in Educational Technology with 15 years of experience in curriculum development."
    },
    {
      name: "Sophia Rodriguez",
      title: "Head of Content",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
      bio: "Former university professor specializing in creating engaging educational material."
    },
    {
      name: "David Chen",
      title: "CTO",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      bio: "Tech innovator with a background in AI and a mission to enhance the learning experience through technology."
    }
  ];
  
  // Achievements
  const achievements = [
    {
      icon: Trophy,
      title: "Best E-Learning Platform",
      year: "2023",
      description: "Recognized as the top online learning platform by Education Technology Review."
    },
    {
      icon: Users,
      title: "1 Million Student Milestone",
      year: "2022",
      description: "Celebrated reaching one million students across our platform worldwide."
    },
    {
      icon: GraduationCap,
      title: "Excellence in STEM Education",
      year: "2022",
      description: "Awarded for our contributions to STEM education and career development."
    },
    {
      icon: Globe,
      title: "International Expansion",
      year: "2021",
      description: "Successfully expanded our platform to serve students in over 50 countries."
    },
    {
      icon: Clock,
      title: "5-Year Anniversary",
      year: "2020",
      description: "Marked five years of transforming online education and student success."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-muted/30 py-16 md:py-24 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-2 mb-6">Our Story</h1>
              <p className="text-lg text-muted-foreground mb-8 text-balance">
                Founded in 2018, EduLearn was created with a simple mission: to make high-quality education accessible to everyone, regardless of geographic or financial constraints.
              </p>
              <div className="flex justify-center space-x-4">
                <Button size="lg">Join Our Team</Button>
                <Button size="lg" variant="outline">Contact Us</Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Tabs */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="mission" className="max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-3 mb-12">
                <TabsTrigger value="mission">Our Mission</TabsTrigger>
                <TabsTrigger value="team">Our Team</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>
              
              {/* Mission & Values Tab */}
              <TabsContent value="mission" className="space-y-12">
                <div className="text-center mb-16">
                  <h2 className="heading-3 mb-4">Our Mission & Values</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    We're dedicated to transforming lives through education by providing accessible, high-quality learning experiences that empower individuals to achieve their full potential.
                  </p>
                </div>
                
                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {values.map((value, idx) => (
                    <Card key={idx} className="overflow-hidden border shadow-sm">
                      <CardContent className="p-6">
                        <div className="flex flex-col space-y-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <value.icon className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold">{value.title}</h3>
                          <p className="text-muted-foreground">{value.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {/* Stats */}
                <div className="mt-16 py-12 px-6 bg-muted/30 rounded-xl border">
                  <div className="text-center mb-10">
                    <h3 className="heading-3">Our Impact</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                          {stat.number}
                        </div>
                        <div className="text-sm sm:text-base text-muted-foreground font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              {/* Team Tab */}
              <TabsContent value="team" className="space-y-12">
                <div className="text-center mb-16">
                  <h2 className="heading-3 mb-4">Meet Our Leadership</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Our team combines expertise in education, technology, and business to create the best learning experiences for our students.
                  </p>
                </div>
                
                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {teamMembers.map((member, idx) => (
                    <Card key={idx} className="overflow-hidden border shadow-sm">
                      <CardContent className="p-0">
                        <div className="flex flex-col sm:flex-row">
                          <div className="relative sm:w-1/3 aspect-square sm:aspect-auto">
                            <img 
                              src={member.image} 
                              alt={member.name}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="flex-1 p-6">
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-sm text-primary font-medium mt-1 mb-3">{member.title}</p>
                            <p className="text-muted-foreground">{member.bio}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {/* Instructors Section */}
                <div className="mt-16">
                  <div className="text-center mb-12">
                    <h3 className="heading-3 mb-4">Our Top Instructors</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Learn from industry experts who are passionate about sharing their knowledge and helping you succeed.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-8">
                    {instructors.map(instructor => (
                      <InstructorCard key={instructor.id} instructor={instructor} />
                    ))}
                  </div>
                  
                  <div className="text-center mt-10">
                    <Button variant="outline" size="lg">View All Instructors</Button>
                  </div>
                </div>
              </TabsContent>
              
              {/* Achievements Tab */}
              <TabsContent value="achievements" className="space-y-12">
                <div className="text-center mb-16">
                  <h2 className="heading-3 mb-4">Our Achievements</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    A timeline of our journey and the milestones we've reached along the way.
                  </p>
                </div>
                
                {/* Timeline */}
                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/70 before:via-primary/50 before:to-primary/5 md:before:mx-auto md:before:right-0 md:before:left-0 md:space-y-0">
                  {achievements.map((achievement, idx) => (
                    <div key={idx} className={cn(
                      "relative flex flex-col md:flex-row md:justify-between md:items-center gap-6",
                      idx % 2 === 0 ? "md:flex-row-reverse" : ""
                    )}>
                      {/* Timeline Circle */}
                      <div className="absolute left-5 md:left-1/2 md:transform md:-translate-x-1/2 h-10 w-10 rounded-full bg-white border-4 border-primary flex items-center justify-center">
                        <achievement.icon className="h-4 w-4 text-primary" />
                      </div>
                      
                      {/* Content */}
                      <div className={cn(
                        "ml-16 md:ml-0 md:w-5/12",
                        idx % 2 === 0 ? "md:text-right" : "md:text-left"
                      )}>
                        <Card className="overflow-hidden border shadow-sm h-full">
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="text-xl font-semibold">{achievement.title}</h3>
                            </div>
                            <div className="inline-block px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium mb-3">
                              {achievement.year}
                            </div>
                            <p className="text-muted-foreground">{achievement.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                      
                      {/* Add spacer div for alignment */}
                      <div className="hidden md:block md:w-5/12" />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Join Us Section */}
        <section className="py-16 md:py-24 bg-muted/30 border-t">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl border shadow-sm p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="heading-2 mb-4">Join Our Learning Community</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Become part of a global community of learners and start your journey towards mastering new skills.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Why Join EduLearn?</h3>
                  <ul className="space-y-3">
                    {[
                      "Access to 500+ courses across various domains",
                      "Learn from industry experts with real-world experience",
                      "Flexible learning schedule that fits your lifestyle",
                      "Join a community of like-minded learners",
                      "Earn recognized certificates to boost your career",
                      "Lifetime access to course materials and updates"
                    ].map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mr-2 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-6 flex flex-col justify-center">
                  <div className="p-5 rounded-lg bg-primary/5 border border-primary/10 relative">
                    <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
                      POPULAR
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-semibold">Yearly Membership</h4>
                      <div className="text-right">
                        <span className="text-2xl font-bold">$199</span>
                        <span className="text-xs text-muted-foreground block">$16.58/month</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Full access to all courses and features for an entire year.
                    </p>
                    <Button size="lg" className="w-full">Get Started</Button>
                  </div>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    Not ready to commit? Try our <Link to="#" className="text-primary font-medium">7-day free trial</Link>
                  </div>
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

export default About;
