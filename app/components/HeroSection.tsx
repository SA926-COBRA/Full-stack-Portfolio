import React from 'react';
import hero_section from '../../personal_details/hero_section.json';
import Image from "next/image";

const HeroSection = () => {
  const {
    intro,
    job_title,
    title_description,
    experience_years,
    projects_completed_count,
    skills,
    social_media
  } = hero_section;

  const renderSkills = () => {
    let count = 0;
    return Object.entries(skills).map(([skill, value]) => {
      if (value === true && count < 8) {
        count++;
        return <div key={skill}>{skill}</div>;
      }
      return null;
    });
  };
  const renderSocialMedia = () => {
    let count = 0;
    return Object.entries(social_media).map(([link, value]) => {
      if (value) {
        return <div key={value}>{link}</div>;
      }
      return null;
    });
  };


  return (
      <div className="relative flex flex-col-reverse flex-wrap">
        <div className="flex flex-col gap-3">
          <div className="font-bold text-2xl">{intro}</div>
          <div className="font-black text-6xl text-primary/50 md:w-[50%]">{job_title}</div>
          <div className="font-medium text-4xl ">{title_description}</div>
          <div className="flex gap-3 capitalize">{renderSocialMedia()}</div>
        </div>
        <div>
          <Image className="absolute sm:right-5 w-auto h-auto sm:h-[35rem] sm:w-auto -top-20 -z-10 " src="/portfolio_hero.png" alt="hero_picture"  width={500} height={500}  />
        </div>
      </div>
  );
};

export default HeroSection;
