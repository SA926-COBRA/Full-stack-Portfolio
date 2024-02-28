import React from 'react';
import Container from "@/components/Container";
import about_me from "@/change_data/about_me.json";

const AboutMe = () => {
  return (
      <div id="about">
        <div className="p-5 border-t bg-background sm:p-10 w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
          <Container>
            <div className="flex flex-col gap-2 sm:gap-4">
              <div className="font-semibold sm:text-3xl text-2xl">
                About Me
              </div>
              <div className="text-muted-foreground sm:w-[50%] sm:leading-8">
                {about_me.write_about_yours}
              </div>
            </div>
          </Container>
        </div>
      </div>

  );
};

export default AboutMe;
