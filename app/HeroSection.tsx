import React from 'react';
import Image from "next/image";
import ContactIcons from "@/app/components/ContactIcons";

interface Props {
  data: HeroSection;
}

type SocialMedia = {
  [key: string]: string;
};

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


  return (
      <div className="relative flex flex-col-reverse">
        <div
            className="flex flex-col gap-3  bg-background sm:p-0 p-5 sm:mt-0 mt-52 pt-3 sm:mb-0 sm:pt-0 sm:pb-0 sm:bg-transparent">
          <div className="font-bold text-lg sm:text-2xl ">{intro}</div>
          <div
              className="font-black text-4xl sm:text-6xl text-primary/80 dark:text-primary/50 md:w-[50%]">{job_title}</div>
          <div className="font-medium text-2xl sm:text-4xl">{title_description}</div>
          <div className="flex sm:gap-3 gap-2 capitalize">
            <ContactIcons socialMedia={social_media as SocialMedia}/>
          </div>
        </div>
        <div>
          <Image className="absolute sm:right-5 sm:-top-20 -top-12 -z-10 "
                 src="/portfolio_hero.png" alt="hero_picture" width={450} height={800}/>
        </div>
      </div>
  );
};

export const renderSocialMedia = (social_media: object) => {
  let count = 0;
  return Object.entries(social_media).map(([link, value]) => {
    if (value) {
      return <div key={value}
                  className="sm:w-9 sm:h-9 h-7 w-7 bg-foreground rounded-full flex justify-center items-center">DP</div>;
    }
    return null;
  });
};
export default HeroSection;
