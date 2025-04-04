
const Hours = () => {
  return (


<section id='hours' className="scroll-mt-20 bg-neutral-900 text-white py-16 px-6 md:px-20">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
    {/* Left Image */}
    <div className="hidden md:w-1/3 md:flex overflow-hidden rounded-[200px]">
      <img
        src="/espresso.webp"
        alt="Barista with coffee"
        className="object-cover w-full h-full"
      />
    </div>

    {/* Middle Content */}
    <div className="w-full md:w-1/3 text-center">
      <p className="uppercase text-sm tracking-wide text-gray-300 mb-2">
        Operating Schedule
      </p>
      <h2 className="text-4xl font-bold text-white mb-6 font-serif">Working Hours</h2>
      <div className="border-t border-rose-500 w-12 mx-auto mb-6" />
      <div className="space-y-4 text-left">
        {[
          ['Monday', 'Closed'],
          ['Tuesday', '8 AM – 7 PM'],
          ['Wednesday', '8 AM – 7 PM'],
          ['Thursday', '8 AM – 7 PM'],
          ['Friday', '8 AM – 7 PM'],
          ['Saturday', '10 AM – 7 PM'],
          ['Sunday', '10 AM – 5 PM'],
        ].map(([day, time]) => (
          <div key={day} className="flex justify-between border-b border-gray-700 pb-1">
            <span className="font-semibold text-white">{day}</span>
            <span className="text-gray-300">{time}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 px-6 py-2 bg-rose-600 text-white font-semibold rounded shadow-sm transition-all">
        Come Visit Us!
      </div>
    </div>

    {/* Right Image */}
    <div className="hidden md:w-1/3 md:flex overflow-hidden rounded-[200px]">
      <img
        src="/coffee.jpg"
        alt="Café interior"
        className="object-cover w-full h-full"
      />
    </div>
  </div>
</section>

  )
}

export default Hours