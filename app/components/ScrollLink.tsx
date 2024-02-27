'use client';
import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";

interface NavLink {
  title: string;
  id: string;
}

interface Props {
  link: NavLink;
}
const ScrollLink = ({link}: Props) => {
  const scrollToSection = () => {
    const element = document.getElementById(link.id);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };
  return (
      <div>
        <Button className="text-foreground" variant="link" onClick={() => scrollToSection()}>
          {link.title}
        </Button>
      </div>
  );
};

export default ScrollLink;
