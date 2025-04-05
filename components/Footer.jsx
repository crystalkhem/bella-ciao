const Footer = () => {
  return (
    <footer
      id="contact"
      className="scroll-mt-14 flex flex-col items-center bg-neutral-900 text-white px-6 py-16"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <h2 className="text-4xl font-bold text-rose-500 " itemProp="name">
        Contact Us
      </h2>
      <div className="border-t border-neutral-500 w-20 mx-auto m-5" />

      <address
        className="not-italic mb-6 text-center text-base leading-relaxed"
        itemProp="address"
        itemScope
        itemType="https://schema.org/PostalAddress"
      >
        <p className="mb-2">
          <strong>Phone:</strong>{' '}
          <a
            href="tel:13364588100"
            className="text-rose-400 hover:underline"
            itemProp="telephone"
          >
            (336) 458-8100
          </a>
        </p>
        <p className="mb-2">
          <strong>Address:</strong>
          <br />
          <span itemProp="streetAddress">3612 Spring Garden St #A</span>
          <br />
          <span itemProp="addressLocality">Greensboro</span>,{' '}
          <span itemProp="addressRegion">NC</span>{' '}
          <span itemProp="postalCode">27407</span>
        </p>
        <p className="text-white">Just minutes from UNC Greensboro!</p>
      </address>
      <div className="border-t border-neutral-500 w-20 mx-auto mb-8" />

      <div className="w-full h-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.466993582506!2d-79.8566833237288!3d36.06125650900399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88531b7a6151afcf%3A0x7c88beeeee798cbb!2sBella%20Ciao!5e1!3m2!1sen!2sus!4v1743193469055!5m2!1sen!2sus"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
          title="Map to Bella Ciao, Greensboro NC"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
