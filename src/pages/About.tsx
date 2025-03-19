import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BookOpen, CheckCircle, Heart, BarChart3, Users, Trophy, GraduationCap, Globe, Clock } from "lucide-react";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamMemberCard from '@/components/TeamMemberCard';

import { teamMembers } from '@/data/sampleData';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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
  
  const stats = [
    { number: "100K+", label: "Students Worldwide" },
    { number: "200+", label: "Expert Instructors" },
    { number: "500+", label: "Courses Available" },
    { number: "50+", label: "Countries Reached" }
  ];
  
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
        <section className="bg-muted/30 py-16 md:py-24 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-2 mb-6">Our Story</h1>
              <p className="text-lg text-muted-foreground mb-8 text-balance">
                Founded in 2024, LumiED was created with a simple mission: to make high-quality education accessible to everyone, regardless of geographic or financial constraints.
              </p>
              <div className="flex justify-center space-x-4">
                <Button size="lg">Join Our Team</Button>
                <Button size="lg" variant="outline">Contact Us</Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="mission" className="max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-3 mb-12">
                <TabsTrigger value="mission">Our Mission</TabsTrigger>
                <TabsTrigger value="team">Our Team</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>
              
              <TabsContent value="mission" className="space-y-12">
                <div className="text-center mb-16">
                  <h2 className="heading-3 mb-4">Our Mission & Values</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    We're dedicated to transforming lives through education by providing accessible, high-quality learning experiences that empower individuals to achieve their full potential.
                  </p>
                </div>
                
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
              
              <TabsContent value="team" className="space-y-12">
                <div className="text-center mb-16">
                  <h2 className="heading-3 mb-4">Meet Our Leadership</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Our team combines expertise in education, technology, and business to create the best learning experiences for our students.
                  </p>
                </div>
                
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
                
                <div className="mt-16">
                  <div className="text-center mb-12">
                    <h3 className="heading-3 mb-4">Our Core Team</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Meet the talented developers who created this platform and are passionate about sharing knowledge with the world.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-8">
                    {teamMembers.map(member => (
                      <TeamMemberCard key={member.id} member={member} />
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="achievements" className="space-y-12">
                <div className="text-center mb-16">
                  <h2 className="heading-3 mb-4">Our Achievements</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    A timeline of our journey and the milestones we've reached along the way.
                  </p>
                </div>
                
                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/70 before:via-primary/50 before:to-primary/5 md:before:mx-auto md:before:right-0 md:before:left-0 md:space-y-0">
                  {achievements.map((achievement, idx) => (
                    <div key={idx} className={cn(
                      "relative flex flex-col md:flex-row md:justify-between md:items-center gap-6",
                      idx % 2 === 0 ? "md:flex-row-reverse" : ""
                    )}>
                      <div className="absolute left-5 md:left-1/2 md:transform md:-translate-x-1/2 h-10 w-10 rounded-full bg-white border-4 border-primary flex items-center justify-center">
                        <achievement.icon className="h-4 w-4 text-primary" />
                      </div>
                      
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
                      
                      <div className="hidden md:block md:w-5/12" />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
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
                  <h3 className="text-xl font-semibold">Why Join LumiED?</h3>
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
                    <div className="text-center mb-4">
                      <h4 className="font-semibold">Free Access</h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        All our resources and courses are completely free. No subscriptions, no hidden fees.
                      </p>
                    </div>
                    <Button size="lg" className="w-full">Get Started</Button>
                  </div>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    Join our <Link to="#" className="text-primary font-medium">open-source community</Link> and contribute to our mission
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
