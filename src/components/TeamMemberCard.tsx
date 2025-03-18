
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BookOpen, Code, Github, Users } from "lucide-react";

export interface TeamMemberProps {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  projectsCount: number;
  githubStars: number;
  contributionsCount: number;
  specialties: string[];
}

const TeamMemberCard = ({ member }: { member: TeamMemberProps }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 card-hover">
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row">
          {/* Team Member Image */}
          <div className="relative sm:w-1/3 aspect-square sm:aspect-auto">
            <img 
              src={member.image} 
              alt={member.name}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
          
          {/* Team Member Details */}
          <div className="flex-1 p-5 sm:p-6">
            <div className="flex flex-col h-full">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{member.title}</p>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-4 my-4">
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-primary" />
                  <span className="text-sm">{member.projectsCount} projects</span>
                </div>
                <div className="flex items-center">
                  <Github className="w-4 h-4 mr-2 text-primary" />
                  <span className="text-sm">{member.githubStars.toLocaleString()} stars</span>
                </div>
                <div className="flex items-center">
                  <Code className="w-4 h-4 mr-2 text-primary" />
                  <span className="text-sm">{member.contributionsCount.toLocaleString()} contributions</span>
                </div>
              </div>
              
              {/* Bio */}
              <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-grow">
                {member.bio}
              </p>
              
              {/* Specialties */}
              <div className="flex flex-wrap gap-2 mb-4">
                {member.specialties.map((specialty, index) => (
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
                <Button size="sm">View Projects</Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
