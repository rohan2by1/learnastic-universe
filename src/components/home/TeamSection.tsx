
import React from 'react';
import TeamMemberCard, { TeamMemberProps } from '@/components/TeamMemberCard';

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
