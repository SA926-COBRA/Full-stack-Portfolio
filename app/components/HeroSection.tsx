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
        return <div key={value}>{link}</div>;
      }
      return null;
    });
  };

  return (
      <Container>
        <div className="relative flex flex-col-reverse">
          <div className="flex flex-col gap-3">
            <div className="font-bold text-2xl">{intro}</div>
            <div className="font-black text-6xl text-primary/50 md:w-[50%]">{job_title}</div>
            <div className="font-medium text-4xl ">{title_description}</div>
            <div className="flex gap-3 capitalize">{renderSocialMedia()}</div>
          </div>
          <div>
            <Image className="absolute sm:right-5 w-auto h-auto sm:h-[35rem] sm:w-auto -top-20 -z-10 "
                   src="/portfolio_hero.png" alt="hero_picture" width={500} height={500}/>
          </div>
        </div>
      </Container>
  );
};

export default HeroSection;
