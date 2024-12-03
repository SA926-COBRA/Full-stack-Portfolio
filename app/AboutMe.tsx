import React from 'react';
import Container from "@/components/Container";
import me from "@/change_data/hero_section.json";

const AboutMe = () => {
    return (
        <div id="about">
            <div
                className="p-5 border-t  bg-background sm:p-10 w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
                <Container>
                    <div className="flex flex-col gap-2 sm:gap-4 ">
                        <h2 className=" tracking-tighter font-semibold sm:text-3xl text-2xl animate-fade-left">
                            About Me
                        </h2>
                        <p className="text-muted-foreground sm:w-[47%] sm:leading-8 animate-fade-left">
                            {me.about_me}
                        </p>
                        <div className="flex-wrap flex gap-2 animate-fade-left">
                            <p>&quot;{me.quote}&quot;</p><p className="font-semibold"> - {me.author}</p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>

    );
};

export default AboutMe;
