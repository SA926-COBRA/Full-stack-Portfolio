import React from 'react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Link from "next/link";
import ContactIcons from "@/app/components/ContactIcons";
import Image from "next/image";

interface SocialMedia {
  [key: string]: string;
}

const Footer = ({data}: { data: HeroSection }) => {
  return (
      <div className="flex justify-between items-center animate-fade-up flex-col gap-5 sm:flex-row ">
        <div className="flex sm:flex-row flex-col items-center gap-5 sm:gap-10">
          <Avatar className="shadow-xl shadow-primary ">
            <AvatarImage rel="apple-touch-icon" src="favicon.ico"/>
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>
          <div className="text-muted-foreground sm:text-sm text-xs flex justify-center sm:justify-start">
            <div className="flex sm:flex-row flex-col gap-0 sm:gap-2">
              <p className="flex gap-1">
                <span className="text-muted-foreground">Developed & designed by</span> <Link
                className="flex items-center hover:underline hover:text-foreground transition-all font-semibold"
                href="https://github.com/dragon-devs ">
                <Image src='/dragondevs-logo.png'
                       alt='dragondevs'
                       width={100}
                       height={100}
                       className="w-4 h-4 rounded-full mr-1"
                /> dragondevs</Link>
              </p>
              <p>
                The source code is available on <Link
                className="underline font-semibold hover:text-foreground transition-all"
                href="https://github.com/dragon-devs/my-portfolio">Github</Link>.
              </p>
            </div>
          </div>

        </div>
        <div className="flex sm:gap-5 gap-3 capitalize">
          <ContactIcons socialMedia={data.social_media as SocialMedia}/>
        </div>
      </div>
  )
    ;
};

export default Footer;
