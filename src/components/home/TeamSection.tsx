
import React from 'react';
import TeamMemberCard, { TeamMemberProps } from '@/components/TeamMemberCard';
import { Badge } from "@/components/ui/badge";
import { BookOpenCheck, GraduationCap, CheckCircle, FileText } from "lucide-react";

interface TeamSectionProps {
  members: TeamMemberProps[];
}

const TeamSection = ({ members }: TeamSectionProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Meet Our Team
          </span>
          <h2 className="heading-2 mb-4">The Developers Behind LumiED</h2>
          <p className="text-muted-foreground max-w-3xl">
            Our team of talented developers is passionate about creating free, high-quality educational content for everyone.
          </p>
        </div>
        
        {/* Learning benefits section */}
        <div className="max-w-4xl mx-auto mb-16 p-8 rounded-2xl bg-muted/30 border shadow-sm">
          <h3 className="text-xl font-semibold text-center mb-6">Enhance Your Learning Experience</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start p-4 rounded-lg bg-white border shadow-sm">
              <div className="mr-4 mt-1">
                <div className="p-2 rounded-full bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Practical Assignments</h4>
                <p className="text-sm text-muted-foreground">
                  Each course includes hands-on assignments to test your knowledge and reinforce your learning.
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-4 rounded-lg bg-white border shadow-sm">
              <div className="mr-4 mt-1">
                <div className="p-2 rounded-full bg-primary/10">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Course Certification</h4>
                <p className="text-sm text-muted-foreground">
                  Receive a certificate upon successful completion of the course and its assignments.
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-4 rounded-lg bg-white border shadow-sm">
              <div className="mr-4 mt-1">
                <div className="p-2 rounded-full bg-primary/10">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Track Your Progress</h4>
                <p className="text-sm text-muted-foreground">
                  Monitor your performance and see where you stand in your learning journey.
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-4 rounded-lg bg-white border shadow-sm">
              <div className="mr-4 mt-1">
                <div className="p-2 rounded-full bg-primary/10">
                  <BookOpenCheck className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Real-world Skills</h4>
                <p className="text-sm text-muted-foreground">
                  Our assignments are designed to build practical skills that you can apply in real projects.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            <Badge variant="outline" className="px-3 py-1 text-xs bg-primary/5">
              All courses, assignments, and certificates are completely free
            </Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {members.map(member => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
