
import React from 'react';
import Testimonial, { TestimonialProps } from '@/components/Testimonial';

interface TestimonialsSectionProps {
  testimonials: TestimonialProps[];
}

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-white relative overflow-hidden">
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
  );
};

export default TestimonialsSection;
