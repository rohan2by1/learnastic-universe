
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BookOpen, Star, Users } from "lucide-react";

export interface InstructorProps {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  coursesCount: number;
  studentsCount: number;
  rating: number;
  specialties: string[];
}

const InstructorCard = ({ instructor }: { instructor: InstructorProps }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 card-hover">
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row">
          {/* Instructor Image */}
          <div className="relative sm:w-1/3 aspect-square sm:aspect-auto">
            <img 
              src={instructor.image} 
              alt={instructor.name}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
          
          {/* Instructor Details */}
          <div className="flex-1 p-5 sm:p-6">
            <div className="flex flex-col h-full">
              <h3 className="text-xl font-semibold">{instructor.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{instructor.title}</p>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-4 my-4">
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-primary" />
                  <span className="text-sm">{instructor.coursesCount} courses</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-primary" />
                  <span className="text-sm">{instructor.studentsCount.toLocaleString()} students</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-2 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm">{instructor.rating.toFixed(1)} rating</span>
                </div>
              </div>
              
              {/* Bio */}
              <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-grow">
                {instructor.bio}
              </p>
              
              {/* Specialties */}
              <div className="flex flex-wrap gap-2 mb-4">
                {instructor.specialties.map((specialty, index) => (
                  <span 
                    key={index}
                    className="text-xs px-2 py-1 bg-muted rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
              
              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <Button size="sm" variant="outline">View Profile</Button>
                <Button size="sm">View Courses</Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InstructorCard;
