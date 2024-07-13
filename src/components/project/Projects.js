import React from 'react';
import ProjectCard from "./ProjectCard";
import BiteStatsImage from '../../assets/images/BiteStats.png'; // Ensure this path is correct

export default function Projects() {
    return (
        <div id="projects" className="flex flex-col items-center py-8 mx-auto min-h-screen w-screen max-w-6.8xl">
            <h1 className="font-poppins text-tech-title font-bold text-heading-text dark:text-[#CCCCCC] leading-26 text-center">Projects</h1>
            <h2 className="font-poppins text-2xl font-regular text-text-gray dark:text-custom-gray leading-26 mt-4 text-center">Things I've built so far</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 w-full px-4 md:px-8 justify-center">
                <ProjectCard
                    imageSrc={BiteStatsImage}
                    imageWidth="375px"
                    imageHeight="200px"
                    title="BiteStats"
                    description="BiteStats is a Chrome extension designed to help users track and analyze their food delivery orders from Grubhub and DoorDash. It provides detailed insights and visualizations using charts and statistics."
                    techStack={['React', 'Chart.js', 'Material-UI', 'Day.js']}
                    livePreviewLink="https://chromewebstore.google.com/detail/ilmpifekkgnmlhkipkfckaockaobdfel/preview?hl=en-GB&authuser=0" // Add the actual link
                    viewCodeLink="https://github.com/SDev6699/bitestats" // Add the actual link
                />
                <ProjectCard
                    imageSrc="https://via.placeholder.com/375x200" // Replace with your actual image source
                    imageWidth="375px"
                    imageHeight="200px"
                    title="Project Title goes here"
                    description="This is sample project description. Random things are here in description. This is a sample project lorem ipsum generator for dummy content."
                    techStack={['HTML', 'JavaScript', 'SASS', 'React']}
                    livePreviewLink="#"
                    viewCodeLink="#"
                />
                <ProjectCard
                    imageSrc="https://via.placeholder.com/375x200" // Replace with your actual image source
                    imageWidth="375px"
                    imageHeight="200px"
                    title="Project Title goes here"
                    description="This is sample project description. Random things are here in description. This is a sample project lorem ipsum generator for dummy content."
                    techStack={['HTML', 'JavaScript', 'SASS', 'React']}
                    livePreviewLink="#"
                    viewCodeLink="#"
                />
                {/* <ProjectCard
                    imageSrc="https://via.placeholder.com/375x200" // Replace with your actual image source
                    imageWidth="375px"
                    imageHeight="200px"
                    title="Project Title goes here"
                    description="This is sample project description. Random things are here in description. This is a sample project lorem ipsum generator for dummy content."
                    techStack={['HTML', 'JavaScript', 'SASS', 'React']}
                    livePreviewLink="#"
                    viewCodeLink="#"
                />
                <ProjectCard
                    imageSrc="https://via.placeholder.com/375x200" // Replace with your actual image source
                    imageWidth="375px"
                    imageHeight="200px"
                    title="Project Title goes here"
                    description="This is sample project description. Random things are here in description. This is a sample project lorem ipsum generator for dummy content."
                    techStack={['HTML', 'JavaScript', 'SASS', 'React']}
                    livePreviewLink="#"
                    viewCodeLink="#"
                />
                <ProjectCard
                    imageSrc="https://via.placeholder.com/375x200" // Replace with your actual image source
                    imageWidth="375px"
                    imageHeight="200px"
                    title="Project Title goes here"
                    description="This is sample project description. Random things are here in description. This is a sample project lorem ipsum generator for dummy content."
                    techStack={['HTML', 'JavaScript', 'SASS', 'React']}
                    livePreviewLink="#"
                    viewCodeLink="#"
                /> */}
            </div>
        </div>
    );
}
