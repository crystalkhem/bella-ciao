
const Items = () => {
  return (
    <section
    id="items"
    aria-labelledby="items-heading"
    className="scroll-mt-15 bg-[#f3efe8] py-20 px-6 md:px-16"
  >
    <h2 id="items-heading" className="sr-only">Featured Café Items</h2>
  
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
      {/* Item 1 */}
      <article>
        <img
          src="/crepesquare.JPG"
          alt="Sweet and savory crepes made to order"
          className="w-full h-64 object-cover mb-6"
        />
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-4xl font-serif text-cozy-gold font-semibold italic">01</span>
          <h3 className="text-lg font-bold tracking-wide uppercase text-gray-800">Crepes</h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          Sweet and savory crepes made to order with fresh, high-quality ingredients.
        </p>
      </article>
  
      {/* Item 2 */}
      <article>
        <img
          src="/coffeecup.JPG"
          alt="Handcrafted Fortuna Coffee cup"
          className="w-full h-64 object-cover mb-6"
        />
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
        <img
          src="/macarons.JPG"
          alt="Freshly baked macarons and pastries"
          className="w-full h-64 object-cover mb-6"
        />
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-4xl font-serif text-cozy-gold font-semibold italic">03</span>
          <h3 className="text-lg font-bold tracking-wide uppercase text-gray-800">Pastries</h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          Freshly baked pastries perfect for pairing with your favorite coffee.
        </p>
      </article>
    </div>
  </section>  
  )
}

export default Items;