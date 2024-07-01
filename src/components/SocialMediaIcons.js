import React from 'react';
import githubLogo from "../assets/images/github_logo.png";
import twitterLogo from "../assets/images/twitter_logo.png";
import linkedinLogo from "../assets/images/linkedin_logo.png";

export default function SocialMediaIcons() {
    return (
        <div className="flex space-x-4">
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                <img className="h-8 w-8" src={githubLogo} alt="Github Logo"/>
            </a>
            <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
                <img className="h-8 w-8" src={twitterLogo} alt="Twitter Logo"/>
            </a>
            <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
                <img className="h-8 w-8" src={linkedinLogo} alt="Linkedin Logo"/>
            </a>
        </div>
    );
}
