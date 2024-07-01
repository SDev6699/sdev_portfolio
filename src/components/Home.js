import React from 'react';
import sahilPhoto from "../assets/images/photo.jpg";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import resume from "../assets/Sahil_s_Resume.pdf"; // Import the resume file

export default function Home() {
    const [elementRef, hasIntersected] = useIntersectionObserver();

    return (
        <div
            id="home"
            ref={elementRef}
            className="flex flex-col md:flex-row justify-between items-center p-8 mx-auto h-screen w-screen max-w-6.8xl"
        >
            <div className={`text-left dark:text-[#D9D9D9] text-heading-text mb-8 md:mb-0 ${
                hasIntersected ? 'animate-fade-in-bottom' : ''
            }`}>
                <p className="text-[40px] md:text-[58px] font-bold">Hi &#128075;,</p>
                <p className="text-[40px] md:text-[58px] leading-[50px] md:leading-[70px] tracking-[-1px] font-bold">My name is</p>
                <p className="text-[40px] md:text-[58px] leading-[50px] md:leading-[70px] tracking-[-1px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]">Sahil Darandale</p>
                <p className="text-[40px] md:text-[58px] leading-[50px] md:leading-[70px] tracking-[-1px] font-bold">I build things for the web</p>
                <p className="text-[24px] md:text-[32px] leading-[30px] md:leading-[40px] mt-4 font-medium">Let's create something amazing together!</p>
                <div className="mt-6">
                    <a
                        href={resume} // Use the imported resume path
                        download="Sahil_Darandale_Resume.pdf"
                        className="inline-flex items-center bg-gray-800 px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:animate-none"
                    >
                        <svg
                            className="w-5 h-5 mr-2"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19.5 13.5L12 21m0 0L4.5 13.5M12 21V3"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                            ></path>
                        </svg>
                        Download Resume
                    </a>
                </div>
            </div>
            <div className="flex items-center h-full">
                <div className="relative rounded-full p-[5px] md:p-[10px] bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]">
                    <div className="rounded-full bg-white">
                        <img className="h-64 w-64 md:h-80 md:w-80 rounded-full object-cover" src={sahilPhoto} alt="Sahil Profile" />
                    </div>
                </div>
            </div>
        </div>
    );
}
