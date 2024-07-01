import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function Contact() {
    const [firstH1Ref, firstH1HasIntersected] = useIntersectionObserver();
    const [secondH1Ref, secondH1HasIntersected] = useIntersectionObserver();

    return (
        <div id="contact" className="flex flex-col justify-center items-center mx-auto w-screen max-w-6.8xl px-4" style={{ height: '80vh' }}>
            <h1
                ref={firstH1Ref}
                className={`font-dm-sans font-bold text-xl md:text-[58px] leading-snug md:leading-[70px] tracking-tight md:tracking-[-1px] text-heading-text dark:text-[#D9D9D9] text-center break-words max-w-full ${
                    firstH1HasIntersected ? 'animate-fade-in-left' : ''
                }`}
            >
                For any questions please mail us:
            </h1>
            <h1
                ref={secondH1Ref}
                className={`font-dm-sans font-bold text-xl md:text-[58px] leading-snug md:leading-[70px] tracking-tight md:tracking-[-1px] bg-clip-text text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] text-center mt-4 md:mt-0 break-words max-w-full ${
                    secondH1HasIntersected ? 'animate-fade-in-right' : ''
                }`}
            >
                sahildarandale0699@gmail.com
            </h1>
        </div>
    );
}
