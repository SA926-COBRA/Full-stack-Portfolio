import React from 'react';
import Container from "@/components/Container";

const Navbar = () => {
  const links = [
    {title: 'Home', href: '/'},
    {title: 'Dashboard', href: '/dashboard'},
    {title: 'Projects', href: '/projects/grid'},
    {title: 'Teams', href: '/teams'},
    {title: 'Profile', href: '/users/me'},
  ];

  return (
      <div className="border-b">
        <Container>
          <div className="flex sm:my-5 my-3 sm:mx-5 xl:mx-0 mx-3 justify-between items-center">
            <div className="p-1 hidden sm:flex gap-10" >
              {links.map(link => (
                  <div key={link.href} className="">{link.title}</div>
              ))}
            </div>
          </div>
        </Container>
      </div>
  );
};

export default Navbar;
