import React from 'react';
import Navigation from "./Navigation";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Footer() {
    return (
        <div className="py-4 mx-auto w-screen max-w-6.8xl">
            <div className="border-t border-[#666666] mb-4 w-full"></div>
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-8 ml-0 md:ml-auto text-text-gray">
                    <p className="font-dm-sans text-base leading-6 mb-2 md:mb-0">+1 607 338 075</p>
                    <p className="font-dm-sans text-base leading-6 mb-2 md:mb-0">sdaradnale0699@gmail.com</p>
                    <SocialMediaIcons />
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mb-15">
                <Navigation />
                <p className="font-dm-sans text-base p-2 leading-6 text-text-gray mt-4 md:mt-0">
                    Designed and built by Sahil Darandale with <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]">Love</span> & <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]">Coffee</span>
                </p>
            </div>
        </div>
    );
}
