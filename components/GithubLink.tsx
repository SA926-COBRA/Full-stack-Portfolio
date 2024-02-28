// GitHubLink.js

import React from 'react';
import Link from "next/link";
import {IoLogoGithub} from "react-icons/io";

const GitHubLink = ({username}: { username: string }) => {
  const githubUrl = `https://github.com/${username}`;

  return (
      <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
        <IoLogoGithub size={20}/>
      </Link>
  );
};

export default GitHubLink;
