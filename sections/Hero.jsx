import React from 'react';
import { Playfair_Display_SC } from 'next/font/google';

const play900 = Playfair_Display_SC({
  weight: ['700'],
  style: ['italic'],
 subsets: ['latin'] })

const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex items-center justify-center flex-col text-center mb-12 h-screen bg-[url(/crepe1.webp)] bg-center md:bg-cover bg-fixed"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Accessible and semantic H1 */}
      <h1
        id="hero-heading"
        className="relative z-10 text-white font-extrabold text-5xl md:text-7xl leading-tight drop-shadow-lg"
      >
        <span className={`${play900.className}  block text-6xl md:text-7xl`}>Bella Ciao</span>
        <span className="block text-2xl md:text-3xl font-normal italic mt-3">
          European Café & Creperie
        </span>
      </h1>

      {/* Supporting Info */}
      <address className="flex flex-col items-center relative z-10 not-italic mt-6 text-white text-lg md:text-xl">
        <p>3612 Spring Garden St #A</p>
        <p> Greensboro, NC 27407</p>
        <div className='flex'>
                <a className="bg-red-600 items-center hover:bg-red-700 shadow-xl p-1 px-10 rounded-xl mt-3 " href="tel:13364588100" >
            (336) 458-8100
          </a></div>
      </address>
    </section>
  );
};

export default Hero;
