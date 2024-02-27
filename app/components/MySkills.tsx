import React from 'react';
import Container from "@/components/Container";

const MySkills = ({skills}: { skills: object }) => {
  return (
      <div>
        <div className="p-5 border-t bg-background sm:p-10 w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
          <Container>
            <div className="flex justify-end items-end">
              <div className="flex flex-col gap-3">
                <div className="font-semibold sm:text-3xl text-2xl">
                  My Skills
                </div>
                <div>
                  Technologies I&apos;ve been working with recently.
                </div>
                <div className="sm:w-[23rem] flex gap-3 flex-wrap">
                  {renderSkills(skills, 100)}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
  );
};

export const renderSkills = (skills: object, size: number) => {
  let count = 0;
  return Object.entries(skills).map(([skill, value]) => {
    if (value === true && count < size) {
      count++;
      return (
          <div key={skill}>
            <div className="sm:w-12 sm:h-12 h-10 w-10 bg-foreground rounded-full flex justify-center items-center">
              DP
            </div>
          </div>
      );
    }
    return null;
  });
};
export default MySkills;
