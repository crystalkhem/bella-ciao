import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-30 mt-16 text-center pb-10 px-15"
      aria-labelledby="about-heading"
    >
      <header>
        <h2 id="about-heading" className="text-4xl font-bold text-rose-700 mb-4">
          Our Establishment
        </h2>
        <div className="border-t border-rose-500 w-20 mx-auto m-8" />
      </header>

      <article className="max-w-3xl mx-auto text-white text-lg">
        <p>
          <strong>Bella Ciao</strong> is a locally owned European-style café and creperie in{' '}
          <strong>Greensboro, North Carolina</strong>. Founded with a passion for quality
          ingredients, cozy ambiance, and authentic hospitality, our mission is to bring the charm
          of a European café experience to our local community. Whether you're stopping in for a
          handcrafted latte, indulging in one of our signature crepes, or simply enjoying a sweet
          treat, Bella Ciao offers the perfect escape. We're proud to use locally roasted{' '}
          <strong>Fortuna Coffee</strong> and freshly made ingredients daily to serve our guests the
          best.
        </p>
        <p className="mt-4">
          Visit Bella Ciao Café in Greensboro, NC to enjoy warm service, quality food, and a space
          where community and comfort come together. We’re more than just a coffee shop—we’re a
          destination for flavor and connection.
        </p>
      </article>

      <div className="border-t border-rose-500 w-20 mx-auto mb-6 mt-6" />
    </section>
  );
};

export default About;
