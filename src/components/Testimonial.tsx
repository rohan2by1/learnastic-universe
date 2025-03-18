
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

export interface TestimonialProps {
  id: string;
  content: string;
  author: {
    name: string;
    title: string;
    image: string;
  };
  rating: number;
  course?: string;
  date?: string;
}

const Testimonial = ({ 
  testimonial, 
  variant = "default",
  className
}: { 
  testimonial: TestimonialProps;
  variant?: "default" | "compact" | "featured";
  className?: string;
}) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={cn(
          "w-4 h-4", 
          i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
        )} 
      />
    ));
  };

  if (variant === "compact") {
    return (
      <Card className={cn("overflow-hidden shadow-sm", className)}>
        <CardContent className="p-4">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={testimonial.author.image}
              alt={testimonial.author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h4 className="text-sm font-medium">{testimonial.author.name}</h4>
              <p className="text-xs text-muted-foreground">{testimonial.author.title}</p>
            </div>
          </div>
          
          <div className="flex mb-2">
            {renderStars(testimonial.rating)}
          </div>
          
          <p className="text-sm line-clamp-3">{testimonial.content}</p>
        </CardContent>
      </Card>
    );
  }

  if (variant === "featured") {
    return (
      <Card className={cn(
        "overflow-hidden shadow-sm border-primary/20",
        "bg-gradient-to-br from-primary/5 to-transparent",
        className
      )}>
        <CardContent className="p-6">
          <div className="flex mb-4">
            {renderStars(testimonial.rating)}
          </div>
          
          <blockquote className="mb-6">
            <p className="text-lg font-medium italic text-balance">"{testimonial.content}"</p>
          </blockquote>
          
          <div className="flex items-center gap-4">
            <img
              src={testimonial.author.image}
              alt={testimonial.author.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold">{testimonial.author.name}</h4>
              <p className="text-sm text-muted-foreground">{testimonial.author.title}</p>
              {testimonial.course && (
                <p className="text-xs text-primary mt-1">On: {testimonial.course}</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Default variant
  return (
    <Card className={cn("overflow-hidden shadow-sm", className)}>
      <CardContent className="p-6">
        <div className="flex mb-4">
          {renderStars(testimonial.rating)}
        </div>
        
        <blockquote className="mb-6">
          <p className="text-base text-balance">"{testimonial.content}"</p>
        </blockquote>
        
        <div className="flex items-center gap-3">
          <img
            src={testimonial.author.image}
            alt={testimonial.author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-medium">{testimonial.author.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.author.title}</p>
          </div>
        </div>
        
        {testimonial.course && (
          <p className="text-xs text-muted-foreground mt-3">
            Course: {testimonial.course}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default Testimonial;
