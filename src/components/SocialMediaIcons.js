import React from 'react';
import githubLogo from "../assets/images/github_logo.png";
import twitterLogo from "../assets/images/twitter_logo.png";
import linkedinLogo from "../assets/images/linkedin_logo.png";

export default function SocialMediaIcons() {
    return (
        <div className="flex space-x-4">
            <a href="https://github.com/SDev6699" target="_blank" rel="noopener noreferrer">
                <img className="h-8 w-8" src={githubLogo} alt="Github Logo"/>
            </a>
            <a href="https://x.com/darandale72397" target="_blank" rel="noopener noreferrer">
                <img className="h-8 w-8" src={twitterLogo} alt="Twitter Logo"/>
            </a>
            <a href="https://www.linkedin.com/in/sahil-atul-darandale-16b0a31a0/" target="_blank" rel="noopener noreferrer">
                <img className="h-8 w-8" src={linkedinLogo} alt="Linkedin Logo"/>
            </a>
        </div>
    );
}
