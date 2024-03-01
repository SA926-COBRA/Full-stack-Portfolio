import React from 'react';
import Container from "@/components/Container";
import me from "@/change_data/hero_section.json";

const AboutMe = () => {
  return (
      <div id="about">
        <div className="p-5 border-t bg-background sm:p-10 w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
          <Container>
            <div className="flex flex-col gap-2 sm:gap-4">
              <div className="font-semibold sm:text-3xl text-2xl">
                About Me
              </div>
              <div className="text-muted-foreground sm:w-[47%] sm:leading-8">
                {me.about_me}
              </div>
            </div>
          </Container>
        </div>
      </div>

  );
};

export default AboutMe;
