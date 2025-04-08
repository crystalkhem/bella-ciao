import React from 'react'
import Image from "next/image";



const Menu = () => {
  return (
    <section id='menu' className='relative py-2 scroll-mt-20 mb-2 md:p-15 w-full h-auto bg-black'>

<h2
        id="items-heading"
        className="text-white text-4xl font-bold text-black mb-4 text-center"
      >
        Menu
      </h2>

      <div className="border-t border-rose-500 w-20 mx-auto mt-4" />
    <Image src='/menu.webp' 
    alt='Bella Ciao Menu'
    className='' 
    width='1920'
    height='1080'
    sizes="100vw" 
    ></Image>
</section>



  )
}

export default Menu;