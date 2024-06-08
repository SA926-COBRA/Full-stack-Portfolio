import React from 'react';
import Container from "@/components/Container";
import FrameworkIcons from "@/app/components/FrameworkIcons";

type Skills = {
  [key: string]: boolean;
};
const MySkills = ({data}: { data: HeroSection }) => {
  return (
      <div id="skills">
        <div
            className=" p-5 bg-background sm:p-10 w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
          <Container>
            <div className="flex justify-end items-end animate-fade-up">
              <div className="flex flex-col gap-3">
                <h1 className="font-semibold sm:text-3xl text-2xl">
                  My Skills
                </h1>
                <p className="text-muted-foreground">
                  Technologies I&apos;ve been working with recently
                </p>
                <div className="sm:w-[23rem] flex gap-3 flex-wrap">
                  <FrameworkIcons skills={data.skills as Skills} size={100}/>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
  );
};

export default MySkills;
