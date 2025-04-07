import React from "react";
import About from "@/sections/About";
import Highlights from "@/sections/Items";
import Hours from "@/sections/Hours";
import Testimonials from "@/sections/Testimonials";
import Hero from "@/sections/Hero";
import Footer from "@/components/Footer";
import { Playfair_Display  } from "next/font/google";
import Head from "next/head";

const playfair = Playfair_Display({
 subsets: ['latin'] })

export default function HomePage() {
    <Head>
    <title>Bella Ciao | European Café & Creperie in Greensboro, NC</title>
    <meta
      name="description"
      content="Bella Ciao is a European-style café in Greensboro, NC offering artisanal crepes, locally roasted coffee, and a cozy atmosphere. Visit us for a charming taste of Europe."
    />
    <meta
      name="keywords"
      content="Greensboro café, creperie, European café, coffee shop, Bella Ciao, artisanal crepes, Fortuna coffee, pastries, cozy café"
    />
    <meta name="author" content="Bella Ciao Café" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      property="og:title"
      content="Bella Ciao Café – Creperie & Coffee in Greensboro, NC"
    />
    <meta
      property="og:description"
      content="Experience a cozy European café vibe in Greensboro. Sweet and savory crepes, fresh coffee, and welcoming charm await."
    />
    <meta property="og:image" content="/preview.webp" />
    <meta property="og:url" content="https://yourwebsite.com" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />

    <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CafeOrCoffeeShop",
        "name": "Bella Ciao",
        "image": "https://yourwebsite.com/preview.webp",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "3612-A Spring Garden Street",
          "addressLocality": "Greensboro",
          "addressRegion": "NC",
          "postalCode": "27407",
          "addressCountry": "US"
        },
        "url": "https://yourwebsite.com",
        "telephone": "+1-555-123-4567",
        "servesCuisine": ["Coffee", "Crepes", "Pastries"],
        "priceRange": "$",
        "openingHours": [
          "Tu-Su 09:00-17:00"
        ]
      })
    }} />
  </Head>

  return (
    <div className={` bg-neutral-900 ${playfair.className}`}>
      <Hero  />
      <About className='h-screen flex flex justify-center align-center'/>
      <Highlights />
      <Hours />
      <Testimonials />
      <Footer />
      
    </div>
  );
}
