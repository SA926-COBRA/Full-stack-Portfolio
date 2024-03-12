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
        my_name,
        job_title,
        title_description,
        social_media
    } = data;

    return (
        <div className="relative flex flex-col-reverse ">
            <div
                className="flex flex-col gap-3 rounded-md bg-background sm:p-0  p-5 sm:mt-0 mt-52 pt-3 sm:mb-0 sm:pt-0 sm:pb-0 sm:bg-transparent">
                <h1 className="animate-fade-left font-bold text-lg sm:text-2xl sm:mt-0 mt-2 ">Hello👋, I&apos;m {my_name}</h1>
                <h1 className="animate-fade-left font-black text-4xl sm:text-6xl text-primary/80 dark:text-primary/80 sm:dark:text-primary/60 md:w-[50%]">{job_title}</h1>
                <h2 className="animate-fade-left font-medium text-2xl sm:text-4xl">{title_description}</h2>
                <div className="animate-fade-up flex sm:gap-3 gap-2 capitalize">
                    <ContactIcons socialMedia={social_media as SocialMedia}/>
                </div>
            </div>
            <div>
                <Image priority={true} alt="hero_picture" width={500} height={800}
                       className="absolute sm:right-0 sm:-top-20 h-auto w-[25rem] animate-fade-right -top-12 -z-10 "
                       src="/portfolio_hero.png"/>
            </div>
        </div>
    );
};

export default HeroSection;
