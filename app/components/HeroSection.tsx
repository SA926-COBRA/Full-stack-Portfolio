import React from 'react';
import Image from "next/image";
import Container from "@/components/Container";

interface Props {
  data: HeroSection;
}

const HeroSection = ({data}: Props) => {
  const {
    intro,
    job_title,
    title_description,
    experience_years,
    projects_completed_count,
    skills,
    social_media
  } = data;

  const renderSocialMedia = () => {
    let count = 0;
    return Object.entries(social_media).map(([link, value]) => {
      if (value) {
        return <div key={value} className="sm:w-9 sm:h-9 h-7 w-7 bg-foreground rounded-full flex justify-center items-center">DP</div>;
      }
      return null;
    });
  };

  return (
        <div className="relative flex flex-col-reverse ">
          <div className="flex flex-col gap-3 sm:mt-0 mt-52 bg-background/35 pb-10 -mb-11 pt-3 sm:mb-0 sm:pt-0 sm:pb-0 sm:bg-transparent">
            <div className="font-bold text-lg sm:text-2xl ">{intro}</div>
            <div className="font-black text-3xl sm:text-6xl text-primary/80 dark:text-primary/50 md:w-[50%]">{job_title}</div>
            <div className="font-medium text-2xl sm:text-4xl">{title_description}</div>
            <div className="flex sm:gap-3 gap-2 capitalize">{renderSocialMedia()}</div>
          </div>
          <div>
            <Image className="absolute sm:right-5  sm:h-[35rem] sm:w-auto sm:-top-20 -top-12 -z-10 "
                   src="/portfolio_hero.png" alt="hero_picture" width={500} height={500}/>
          </div>
        </div>
  );
};

export default HeroSection;
