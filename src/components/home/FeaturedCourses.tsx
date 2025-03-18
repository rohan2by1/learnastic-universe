
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CourseCard, { CourseProps } from '@/components/CourseCard';

interface FeaturedCoursesProps {
  courses: CourseProps[];
}

const FeaturedCourses = ({ courses }: FeaturedCoursesProps) => {
  return (
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
          {courses.map(course => (
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
  );
};

export default FeaturedCourses;
