
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Star, Clock, BookOpen, Users } from "lucide-react";

export interface CourseProps {
  id: string;
  title: string;
  description: string;
  image: string;
  creator: string;
  rating: number;
  students: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  featured?: boolean;
}

const CourseCard = ({ course, className }: { course: CourseProps; className?: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  const levelColors = {
    Beginner: "bg-green-100 text-green-700",
    Intermediate: "bg-blue-100 text-blue-700",
    Advanced: "bg-purple-100 text-purple-700"
  };

  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-300 card-hover",
        isHovered ? "shadow-lg" : "shadow-sm",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Course Image */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img 
          src={course.image} 
          alt={course.title}
          className={cn(
            "object-cover w-full h-full transition-all duration-500",
            isHovered ? "scale-105" : "scale-100"
          )}
          loading="lazy"
        />
        {course.featured && (
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 text-xs font-medium rounded">
            Featured
          </div>
        )}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-medium rounded">
          {course.category}
        </div>
        <div className={cn(
          "absolute top-3 right-3 px-2 py-1 text-xs font-medium rounded",
          levelColors[course.level]
        )}>
          {course.level}
        </div>
      </div>

      {/* Course Content */}
      <CardContent className="p-5">
        {/* Title and Rating */}
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="text-lg font-semibold line-clamp-2">{course.title}</h3>
          <div className="flex items-center shrink-0">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="ml-1 text-sm font-medium">{course.rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Creator */}
        <p className="text-sm text-muted-foreground mb-3">
          by <span className="font-medium">{course.creator}</span>
        </p>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {course.description}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <div className="flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1" />
            {course.duration}
          </div>
          <div className="flex items-center">
            <Users className="w-3.5 h-3.5 mr-1" />
            {course.students.toLocaleString()} students
          </div>
          <div className="flex items-center">
            <BookOpen className="w-3.5 h-3.5 mr-1" />
            {Math.floor(Math.random() * 20) + 5} lessons
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0 flex items-center justify-end">
        <Button size="sm">Start Learning</Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
