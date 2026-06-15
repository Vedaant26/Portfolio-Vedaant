'use client';

import {
  RiLinkedinFill,
  RiGithubFill,
} from 'react-icons/ri';

import Link from 'next/link';
import { SiLeetcode } from 'react-icons/si';
import { FaDev } from 'react-icons/fa';

const icons = [
  {
    path: 'www.linkedin.com/in/vedaant-mitra-214131288',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/Vedaant26',
    name: <RiGithubFill />,
  },
  {
    path: 'https://leetcode.com/u/vedaant04_/',
    name: <SiLeetcode />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target="_blank" rel="noopener noreferrer" >
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
