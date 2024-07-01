import React from 'react';
import SocialMediaIcons from "./SocialMediaIcons";
import Navigation from './Navigation';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center p-4 pt-8 mx-auto w-screen max-w-6.8xl">
            <div className="ml-5 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-24">
                <Navigation />
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-24">
                <SocialMediaIcons />
                <DarkModeToggle/>
            </div>
        </div>
    );
}
