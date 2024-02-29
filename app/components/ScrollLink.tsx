import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavLink {
  title: string;
  id: string;
}

interface Props {
  link: NavLink;
  className?: "link" | "default" | "destructive";
}

const ScrollLink = ({ link, className="link" }: Props) => {
  const scrollToSection = () => {
    const element = document.getElementById(link.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const buttonVariant = className && ["link", "default", "destructive"].includes(className)
    ? className
    : "default";

  return (
    <div>
      <Button className="text-foreground transition-all" variant={buttonVariant} onClick={() => scrollToSection()}>
        {link.title}
      </Button>
    </div>
  );
};

export default ScrollLink;
