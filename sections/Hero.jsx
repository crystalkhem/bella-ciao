import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex items-center justify-center flex-col text-center mb-12 h-screen bg-[url(/crepe1.png)] bg-center md:bg-cover bg-fixed"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Accessible and semantic H1 */}
      <h1
        id="hero-heading"
        className="relative z-10 text-white font-extrabold text-5xl md:text-7xl leading-tight drop-shadow-lg"
      >
        <span className="block">Bella Ciao</span>
        <span className="block text-2xl md:text-3xl font-normal italic mt-3">
          European Café & Creperie
        </span>
        <span className="block text-lg md:text-xl font-light mt-1">
          Greensboro, NC
        </span>
      </h1>

      {/* Supporting Info */}
      <address className="relative z-10 not-italic mt-6 text-white text-lg md:text-xl">
        <p>3612 Spring Garden St #A, Greensboro, NC 27407</p>
        <p className="bg-red-500 p-2 rounded-xl mt-3 text-xl md:text-2xl">
          <a href="tel:13364588100" className="hover:underline">
            (336) 458-8100
          </a>
        </p>
      </address>
    </section>
  );
};

export default Hero;
