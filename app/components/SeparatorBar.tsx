import React from 'react';
import Container from "@/components/Container";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";

const SeparatorBar = ({data}: { data: HeroSection }) => {
  const renderSkills = () => {
    let count = 0;
    return Object.entries(data.skills).map(([skill, value]) => {
      if (value === true && count < 6) {
        count++;
        return (
            <div key={skill}>
              <div className="h-10 w-10 bg-foreground rounded-full"></div>
            </div>
        );
      }
      return null;
    });
  };

  return (
      <div className="sm:px-10 px-5 py-3 bg-background w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
        <Container>
          <div className="flex md:flex-row gap-3 flex-col justify-between">
            <div className="flex sm:flex-row flex-col gap-3 sm:gap-12">
            <div className="sm:flex grid grid-cols-4 gap-3">
              <div className="font-bold text-5xl">{data.experience_years}</div>
              <div className="uppercase w-32 border-l pl-3">years of experience</div>
            </div>
            <div className="sm:flex grid grid-cols-4 gap-3">
              <div className="font-bold text-5xl">{data.projects_completed_count}</div>
              <div className="uppercase w-60 border-l pl-3">projects completed worldwide</div>
            </div>
          </div>
          <div className="flex gap-3">
            {renderSkills()}
          </div>
          </div>
        </Container>
      </div>
  )
      ;
};

export default SeparatorBar;
