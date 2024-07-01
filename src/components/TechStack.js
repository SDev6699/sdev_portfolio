import React from 'react';
import AWS from '../assets/images/icons/AWS.png';
import Bootstrap from '../assets/images/icons/Bootstrap.png';
import CSS3 from '../assets/images/icons/CSS3.png';
import Docker from '../assets/images/icons/Docker.png';
import Express from '../assets/images/icons/Express.png';
import Firebase from '../assets/images/icons/Firebase.png';
import Git from '../assets/images/icons/Git.png';
import GraphQL from '../assets/images/icons/GraphQL.png';
import HTML5 from '../assets/images/icons/HTML5.png';
import MaterialUI from '../assets/images/icons/Material UI.png';
import MongoDB from '../assets/images/icons/MongoDB.png';
import MySQL from '../assets/images/icons/MySQL.png';
import NestJS from '../assets/images/icons/Nest.js.png';
import NextJS from '../assets/images/icons/Next.js.png';
import NodeJS from '../assets/images/icons/Node.js.png';
import Nodemon from '../assets/images/icons/Nodemon.png';
import PostgreSQL from '../assets/images/icons/PostgresSQL.png';
import Postman from '../assets/images/icons/Postman.png';
import ReactLogo from '../assets/images/icons/React.png'; // Renamed to ReactLogo
import Redis from '../assets/images/icons/Redis.png';
import Redux from '../assets/images/icons/Redux.png';
import TailwindCSS from '../assets/images/icons/Tailwind CSS.png';
import TypeScript from '../assets/images/icons/TypeScript.png';
import VSCode from '../assets/images/icons/Visual Studio Code (VS Code).png';
import ViteJS from '../assets/images/icons/Vite.js.png';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const techStack = [
  { src: AWS, alt: 'AWS' },
  { src: Bootstrap, alt: 'Bootstrap' },
  { src: CSS3, alt: 'CSS3' },
  { src: Docker, alt: 'Docker' },
  { src: Express, alt: 'Express' },
  { src: Firebase, alt: 'Firebase' },
  { src: Git, alt: 'Git' },
  { src: GraphQL, alt: 'GraphQL' },
  { src: HTML5, alt: 'HTML5' },
  { src: MaterialUI, alt: 'MaterialUI' },
  { src: MongoDB, alt: 'MongoDB' },
  { src: MySQL, alt: 'MySQL' },
  { src: NestJS, alt: 'NestJS' },
  { src: NextJS, alt: 'NextJS' },
  { src: NodeJS, alt: 'NodeJS' },
  { src: Nodemon, alt: 'Nodemon' },
  { src: PostgreSQL, alt: 'PostgreSQL' },
  { src: Postman, alt: 'Postman' },
  { src: ReactLogo, alt: 'React' }, // Updated to ReactLogo
  { src: Redis, alt: 'Redis' },
  { src: Redux, alt: 'Redux' },
  { src: TailwindCSS, alt: 'TailwindCSS' },
  { src: TypeScript, alt: 'TypeScript' },
  { src: VSCode, alt: 'VSCode' },
  { src: ViteJS, alt: 'ViteJS' },
];

export default function TechStack() {
  const [textRef, textHasIntersected] = useIntersectionObserver();
  const [iconsRef, iconsHaveIntersected] = useIntersectionObserver();

  return (
    <div id="techstack" className="p-8 flex flex-col items-center mx-auto min-h-screen w-screen max-w-6.8xl">
      <div ref={textRef} className={`text-center mb-16 ${textHasIntersected ? 'animate-fade-in-top' : ''}`}>
        <h1 className="font-poppins text-tech-title font-bold text-heading-text dark:text-[#CCCCCC] leading-26">My Tech Stack</h1>
        <h2 className="font-poppins text-tech-subtitle font-regular text-text-gray dark:text-[#A7A7A7] leading-26 mt-4">Technologies I've been working with recently</h2>
      </div>
      <div ref={iconsRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-40 gap-y-10">
        {techStack.map((tech, index) => (
          <div key={index} className={`relative group tech-item ${iconsHaveIntersected ? (Math.floor(index / 5) % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right') : ''}`}>
            <img src={tech.src} alt={tech.alt} className="w-16 h-16" />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-xs text-center py-1 opacity-0 group-hover:opacity-100">
              {tech.alt}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
