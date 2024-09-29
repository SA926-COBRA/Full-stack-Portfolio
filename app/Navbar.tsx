'use client';

import React from 'react';
import Container from "@/components/Container";
import ScrollLink from "@/app/components/ScrollLink";
import {ModeToggle} from "@/components/Toggle";
import {Button} from "@/components/ui/button";
import {PaperPlaneIcon} from "@radix-ui/react-icons";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

const Navbar = () => {
  const links = [
    {title: 'Home', id: 'home'},
    {title: 'About', id: 'about'},
    {title: 'Skills', id: 'skills'},
    {title: 'Projects', id: 'projects'},
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };


  return (
      <div className="">
        <Container>
          <div className="flex animate-fade-down my-3 xl:mx-0 mx-5 justify-between items-center">
            <Avatar className="hover:shadow-primary transition-all duration-500 shadow-xl shadow-primary/50 ">
              <AvatarImage rel="apple-touch-icon" src="favicon.ico"/>
              <AvatarFallback>DP</AvatarFallback>
            </Avatar>
            <div className="-ml-12 hidden transition-all md:flex gap-5">
              {links.map((link) => (
                  <div key={link.id}>
                    <ScrollLink link={link}/>
                  </div>
              ))}
            </div>
            <Button onClick={() => scrollToSection('hire_me')}
                    className="lg:-ml-[12rem] flex gap-2 items-center justify-center shadow-xl shadow-primary/50 hover:shadow-primary transition-all duration-500 hover:translate-y-0.5"
                    variant="default">
              <PaperPlaneIcon/>Hire me
            </Button>
            <ModeToggle/>
          </div>
        </Container>
      </div>
  );
};

export default Navbar;
