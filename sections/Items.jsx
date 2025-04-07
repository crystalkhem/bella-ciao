import Image from "next/image";

const Items = () => {
  return (
    <section
      id="items"
      aria-labelledby="items-heading"
      className="scroll-mt-15 bg-[#f3efe8] py-20 px-6 md:px-16"
    >
      <h2
        id="items-heading"
        className="text-color-[#f3efe8] text-4xl font-bold text-black mb-4 text-center"
      >
        Featured Café Items
      </h2>
      <div className="border-t border-rose-500 w-20 mx-auto m-5 mb-8" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Item 1 */}
        <article>
          <div className="relative w-full h-64 mb-6 shadow-xl">
            <Image
              src="/crepesquare.webp"
              alt="Sweet and savory crepes made to order"
              fill
              className="object-cover" priority={true}
            />
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-serif text-cozy-gold font-semibold italic">01</span>
            <h3 className="text-lg font-bold tracking-wide uppercase text-gray-800">Custom Crepes</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Sweet and savory crepes made to order with fresh, high-quality ingredients.
          </p>
        </article>

        {/* Item 2 */}
        <article>
          <div className="relative w-full h-64 mb-6 shadow-xl">
            <Image
              src="/coffeecup.webp"
              alt="Handcrafted Fortuna Coffee cup"
              fill
              className="object-cover" priority={true}
            />
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-serif text-cozy-gold font-semibold italic">02</span>
            <h3 className="text-lg font-bold tracking-wide uppercase text-gray-800">Great Coffee</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Enjoy handcrafted drinks featuring Fortuna Coffee, a local Greensboro roaster.
          </p>
        </article>

        {/* Item 3 */}
        <article>
          <div className="relative w-full h-64 mb-6 shadow-xl">
            <Image
              src="/macarons.webp"
              alt="Freshly baked macarons and pastries"
              fill
              className="object-cover" priority={true}
            />
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-serif text-cozy-gold font-semibold italic">03</span>
            <h3 className="text-lg font-bold tracking-wide uppercase text-gray-800">Delicious Pastries</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Freshly baked pastries perfect for pairing with your favorite coffee.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Items;
