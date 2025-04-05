import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex items-center justify-center flex-col text-center mb-12 h-screen bg-[url(/crepe1.png)] bg-center md:bg-cover bg-fixed"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Accessible and semantic H1 */}
      <h1
        id="hero-heading"
        className="relative z-10 text-white font-extrabold text-5xl md:text-7xl leading-tight drop-shadow-lg"
      >
        <span className="block text-7xl">Bella Ciao</span>
        <span className="block text-2xl md:text-3xl font-normal italic mt-3">
          European Café & Creperie
        </span>
        <span className="block text-lg md:text-xl font-light mt-1">
          Greensboro, NC
        </span>
      </h1>

      {/* Supporting Info */}
      <address className="flex flex-col items-center relative z-10 not-italic mt-6 text-white text-lg md:text-xl">
        <p>3612 Spring Garden St #A, Greensboro, NC 27407</p>
        <div className='flex'>
                <a className="bg-red-600 items-center hover:bg-red-700 shadow-sm p-2 px-10 rounded-xl mt-3 text-xl" href="tel:13364588100" >
            (336) 458-8100
          </a></div>
      </address>
    </section>
  );
};

export default Hero;
