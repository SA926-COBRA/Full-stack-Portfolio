'use client';

import React from 'react';
import Container from "@/components/Container";
import ScrollLink from "@/app/components/ScrollLink";
import {ModeToggle} from "@/components/Toggle";
import {Button} from "@/components/ui/button";
import {GitHubLogoIcon, PaperPlaneIcon} from "@radix-ui/react-icons";

const Navbar = () => {


  const links = [
    {title: 'Home', id: 'home'},
    {title: 'About', id: 'about'},
    {title: 'Skills', id: 'skills'},
    {title: 'Projects', id: 'projects'},
  ];

  return (
      <div className="">
        <Container>
          <div className="overflow-x-hidden flex my-3 sm:mx-10 xl:mx-0 mx-5 justify-between items-center">
            <GitHubLogoIcon/>
            <div className="-ml-12 hidden md:flex gap-5">
              {links.map((link) => (
                  <div key={link.id}>
                    <ScrollLink link={link}/>
                  </div>
              ))}
            </div>
            <Button className="lg:-ml-[12rem] flex gap-2 items-center justify-center" variant="default">
              <PaperPlaneIcon/>Hire me
            </Button>
            <ModeToggle/>
          </div>
        </Container>
      </div>
  );
};

export default Navbar;
