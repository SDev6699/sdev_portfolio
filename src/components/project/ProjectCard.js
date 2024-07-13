import React from 'react';
import linkIcon from "../../assets/images/link.png";
import githubLogo from "../../assets/images/github_logo.png";

export default function ProjectCard({ imageSrc, imageWidth, imageHeight, title, description, techStack, livePreviewLink, viewCodeLink }) {
    return (
        <div className="relative p-1 bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] rounded-lg overflow-hidden w-full max-w-[375px] h-auto mx-auto group">
            <div className="relative rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 w-full h-full flex flex-col">
                <div className="flex justify-center items-center" style={{ width: '100%', height: imageHeight }}>
                    <img
                        src={imageSrc}
                        alt="Project"
                        className="object-cover"
                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-poppins text-xl md:text-2xl font-medium text-heading-text dark:text-[#CCCCCC] leading-26">{title}</h3>
                    <p className="text-text-gray dark:text-custom-gray mt-2 text-sm md:text-base flex-grow">
                        {description}
                    </p>
                    <p className="text-text-gray dark:text-custom-gray mt-4 text-sm md:text-base">
                        <span className="font-semibold">Tech stack: </span>{techStack.join(', ')}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                        <a href={livePreviewLink} className="flex items-center opacity-0 transform translate-x-[-20px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-text-gray dark:text-custom-gray dark:hover:text-[#D9D9D9] hover:text-heading-text text-sm md:text-base" target="_blank" rel="noopener noreferrer">
                            <img className="h-4 w-4 md:h-6 md:w-6 mr-1" src={linkIcon} alt="Link Logo" />
                            Live Preview
                        </a>
                        <a href={viewCodeLink} className="flex items-center opacity-0 transform translate-x-[20px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-text-gray dark:text-custom-gray dark:hover:text-[#D9D9D9] hover:text-heading-text text-sm md:text-base" target="_blank" rel="noopener noreferrer">
                            <img className="h-4 w-4 md:h-6 md:w-6 mr-1" src={githubLogo} alt="Github Logo" />
                            View Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
