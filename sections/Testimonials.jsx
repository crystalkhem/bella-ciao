const Testimonials = () => {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="mt-16 text-center bg-[#f3efe8] py-20 px-5"
    >
      <h2 id="testimonials-heading" className="text-3xl font-bold text-rose-700 mb-4">
        What Our Customers Say
      </h2>

      <div className="border-t border-rose-500 w-20 mx-auto mb-6 mt-6" />

      <div className="max-w-4xl mx-auto space-y-6 text-left">
        <blockquote className="text-black italic border-l-4 border-red-500 pl-4">
          “The best crepes I’ve had since my trip to Paris. Bella Ciao is a hidden gem in Greensboro!”
          <footer className="block mt-2 text-sm text-rose-700 font-semibold">— Rachel M.</footer>
        </blockquote>

        <blockquote className="text-black italic border-l-4 border-red-500 pl-4">
          “Cozy vibe, incredible coffee, and the lavender latte? *Chef’s kiss!*”
          <footer className="block mt-2 text-sm text-rose-700 font-semibold">— Jamal T.</footer>
        </blockquote>

        <blockquote className="text-black italic border-l-4 border-red-500 pl-4">
          “My go-to study spot. Great food, great Wi-Fi, and even better atmosphere.”
          <footer className="block mt-2 text-sm text-rose-700 font-semibold">— Emily W.</footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonials;
