import React from 'react';
import { Link } from "react-scroll";

export default function Navigation() {
    return (
        <nav className="flex flex-col text-text-gray dark:text-custom-gray md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12">
            <Link to="home" smooth={true} duration={500} className="font-dm-sans font-medium text-xl dark:hover:text-[#D9D9D9] hover:text-heading-text cursor-pointer">Home</Link>
            <Link to="about" smooth={true} duration={500} className="font-dm-san font-medium text-xl dark:hover:text-[#D9D9D9] hover:text-heading-text cursor-pointer">About</Link>
            <Link to="techstack" smooth={true} duration={500} className="font-dm-sans font-medium text-xl dark:hover:text-[#D9D9D9] hover:text-heading-text cursor-pointer">TechStack</Link>
            <Link to="projects" smooth={true} duration={500} className="font-dm-sans font-medium text-xl dark:hover:text-[#D9D9D9] hover:text-heading-text cursor-pointer">Projects</Link>
            <Link to="contact" smooth={true} duration={500} className="font-dm-sans font-medium text-xl dark:hover:text-[#D9D9D9] hover:text-heading-text cursor-pointer">Contact</Link>
        </nav>
    );
}
