
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PlayCircle, ArrowRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xPercent = x / rect.width;
      const yPercent = y / rect.height;
      
      const layers = heroRef.current.querySelectorAll('.parallax-layer');
      layers.forEach((layer, i) => {
        const depth = (i + 1) * 0.01;
        const moveX = (xPercent - 0.5) * depth * 50;
        const moveY = (yPercent - 0.5) * depth * 50;
        (layer as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div ref={heroRef} className="relative w-full overflow-hidden bg-gradient-to-b from-background to-background/40">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-layer absolute top-[10%] left-[15%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="parallax-layer absolute top-[40%] right-[10%] w-96 h-96 rounded-full bg-blue-400/5 blur-3xl"></div>
        <div className="parallax-layer absolute bottom-[5%] left-[25%] w-72 h-72 rounded-full bg-indigo-400/5 blur-3xl"></div>
        <div className="parallax-layer absolute top-[20%] right-[30%] w-32 h-32 rounded-full bg-sky-400/10 blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-8 md:space-y-10">
            {/* Badge */}
            <div 
              className="inline-flex items-center px-3 py-1 rounded-full 
                      bg-white border border-muted shadow-sm
                      text-sm font-medium text-foreground/80 animate-fade-in"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              <span>Experience the future of learning</span>
            </div>
            
            {/* Headline */}
            <h1 className="heading-1 animate-slide-in">
              <span className="block text-balance">
                Learn, Grow, and <span className="text-primary">Master</span> Your Skills
              </span>
              <span className="block text-2xl sm:text-3xl font-medium mt-4 text-muted-foreground">
                An immersive educational platform designed for the modern learner
              </span>
            </h1>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
              <Button size="lg" className="font-medium group">
                Explore courses
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button size="lg" variant="outline" className="font-medium">
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch intro
              </Button>
            </div>
            
            {/* Metrics */}
            <div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-12 md:mt-16 w-full
                      py-8 px-4 sm:px-8 md:px-12 rounded-xl
                      bg-white/80 backdrop-blur border border-muted shadow-sm
                      animate-fade-in" 
              style={{animationDelay: "0.4s"}}
            >
              {[
                { number: "100+", label: "Courses" },
                { number: "50+", label: "Expert Instructors" },
                { number: "15k+", label: "Students" },
                { number: "4.8", label: "Avg. Rating" }
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="text-3xl sm:text-4xl font-bold text-foreground">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
