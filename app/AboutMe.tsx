import React from 'react';
import Container from "@/components/Container";
import me from "@/change_data/hero_section.json";

const AboutMe = () => {
  return (
      <div id="about">
        <div className="p-5 border-t bg-background sm:p-10 w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
          <Container>
            <div className="flex flex-col gap-2 sm:gap-4">
              <h1 className="font-semibold sm:text-3xl text-2xl">
                About Me
              </h1>
              <p className="text-muted-foreground sm:w-[47%] sm:leading-8">
                {me.about_me}
              </p>
                <div className="flex-wrap flex gap-2">
                    <p>"Simplicity is the key of brilliance"</p><p className="font-semibold"> - Bruce lee</p>
                </div>
            </div>
          </Container>
        </div>
      </div>

  );
};

export default AboutMe;
