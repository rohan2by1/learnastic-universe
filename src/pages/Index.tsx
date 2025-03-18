
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FeaturedCourses from '@/components/home/FeaturedCourses';
import Features from '@/components/home/Features';
import TeamSection from '@/components/home/TeamSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CallToAction from '@/components/home/CallToAction';

import { courses, teamMembers, testimonials } from '@/data/sampleData';

const Index = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Featured courses (for now, just take the first 3)
  const featuredCourses = courses.filter(course => course.featured).slice(0, 3);
  const displayedTeamMembers = teamMembers.slice(0, 4);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Featured Courses Section */}
        <FeaturedCourses courses={featuredCourses} />
        
        {/* Features Section */}
        <Features />
        
        {/* Team Members Section */}
        <TeamSection members={displayedTeamMembers} />
        
        {/* Testimonials Section */}
        <TestimonialsSection testimonials={testimonials} />
        
        {/* Call to Action Section */}
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
