import React from 'react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {renderSocialMedia} from "@/app/HeroSection";
import Link from "next/link";

const Footer = ({data}: { data: HeroSection }) => {
  return (
      <div className="flex justify-between items-center flex-col gap-5 sm:flex-row ">
        <div className="flex sm:flex-row flex-col items-center gap-5 sm:gap-10">
          <Avatar className="border">
            <AvatarImage src="https://avatars.githubusercontent.com/u/56775744?s=96&v=4" />
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>
          <div className="text-muted-foreground text-sm sm:text">
            Designed & built by <Link className="underline font-semibold hover:text-foreground transition-all" href="https://github.com/dragon-devs">dragon-devs </Link>
          </div>
        </div>
        <div className="flex sm:gap-5 gap-3 capitalize">
          {renderSocialMedia(data.social_media)}
        </div>
      </div>
  );
};

export default Footer;
