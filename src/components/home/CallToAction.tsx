
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const CallToAction = () => {
  // Benefits list
  const benefits = [
    "Access to all courses completely free",
    "Learn at your own pace with lifetime access",
    "Downloadable resources and course materials",
    "Regular updates with the latest industry trends",
    "Mobile-friendly learning platform for on-the-go access",
    "Opportunity to contribute to course content"
  ];

  return (
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
  );
};

export default CallToAction;
