import React from 'react';
import Work from './Work';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export default function About() {
  const [aboutRef, aboutHasIntersected] = useIntersectionObserver();
  const [workRef, workHasIntersected] = useIntersectionObserver();
  const [educationRef, educationHasIntersected] = useIntersectionObserver();

  return (
    <div id="about" className="p-4 md:p-6 w-full max-w-6.8xl mx-auto">
      <div ref={aboutRef} className={`mb-8 md:mb-12 ${aboutHasIntersected ? 'animate-fade-in-top' : ''}`}>
        <h2 className="text-2xl md:text-4xl font-poppins font-bold text-heading-text dark:text-[#CCCCCC] leading-tight md:leading-loose tracking-tighter mb-4">
          About Me
        </h2>
        <p className="font-poppins text-sm md:text-base text-text-gray dark:text-[#A7A7A7] leading-relaxed md:leading-normal mb-2">
          I'm Sahil Atul Darandale, a dynamic full-stack JavaScript developer specializing in crafting intuitive front-end experiences with React.js and powerful backend architectures with Node.js and Express. My passion lies in transforming complex problems into elegant, user-friendly solutions.
        </p>
      </div>
      <div ref={workRef} className={`mb-8 md:mb-12 ${workHasIntersected ? 'animate-fade-in-left' : ''}`}>
        <h1 className="text-2xl md:text-4xl font-poppins font-bold text-heading-text dark:text-[#CCCCCC] leading-tight md:leading-loose tracking-tighter mb-4">
          Work Experience
        </h1>
        <Work
          jobTitle="Associate Software Engineer"
          companyName="Xoriant Solutions Pvt. Ltd."
          location="Pune, MH, India"
          employmentType="Full Time"
          startDate="Jul 2021"
          endDate="Jul 2022"
        />
        <Work
          jobTitle="Intern"
          companyName="Dezignolics Web & Software Company"
          location="Thane, MH, India"
          employmentType="Internship"
          startDate="Jan 2020"
          endDate="Feb 2020"
        />
      </div>
      <div ref={educationRef} className={`${educationHasIntersected ? 'animate-fade-in-right' : ''}`}>
        <h1 className="text-2xl md:text-4xl font-poppins font-bold text-heading-text dark:text-[#CCCCCC] leading-tight md:leading-loose tracking-tighter mb-4">
          Education
        </h1>
        <Work
          jobTitle="Master of Science in Computer Science"
          companyName="Binghamton University, State University of New York"
          location="Binghamton, NY, USA"
          employmentType="Full Time"
          startDate="Aug 2022"
          endDate="May 2024"
        />
        <Work
          jobTitle="Bachelor of Engineering in Computer Engineering"
          companyName="University of Mumbai"
          location="Mumbai, MH, India"
          employmentType="Full Time"
          startDate="Aug 2017"
          endDate="May 2021"
        />
      </div>
    </div>
  );
}
