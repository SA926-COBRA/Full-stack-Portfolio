'use client';

import React from 'react';
import Container from "@/components/Container";
import ScrollLink from "@/app/components/ScrollLink";
import {ModeToggle} from "@/components/Toggle";
import {Button} from "@/components/ui/button";
import {EnvelopeOpenIcon, GitHubLogoIcon, PaperPlaneIcon, ResumeIcon} from "@radix-ui/react-icons";

const Navbar = () => {


  const links = [
    {title: 'Home', id: 'home'},
    {title: 'About', id: 'about'},
    {title: 'Skills', id: 'skills'},
    {title: 'Projects', id: 'projects'},
  ];

  return (
      <div className="border-b">
        <Container>
          <div className="flex my-3 sm:mx-10 xl:mx-0 mx-5 justify-between items-center">
            <GitHubLogoIcon />
            <div className="-ml-12 hidden sm:flex gap-5">
              {links.map((link) => (
                  <div key={link.id}>
                    <ScrollLink link={link}/>
                  </div>
              ))}
              <Button className="ml-10 flex gap-2 items-center justify-center" variant="default"><PaperPlaneIcon />Hire me</Button>
            </div>
            <div className="sm:hidden">Home</div>
            <ModeToggle/>
          </div>
        </Container>
      </div>
  );
};

export default Navbar;
