import ContactForm from "./ContactForm";

/* eslint-disable @next/next/no-img-element */
const Contact = () => {
  return (
    <section className="min-h-[60vh] lg:min-h-[80vh] py-20 xl:py-24 2xl:py-28 3xl:py-36 lg:px-[10%]">
      <img
        src="/images/paisaje-nevado-camino.jpg"
        alt="paisaje nevado"
        className="w-full h-full object-cover absolute inset-0 brightness-90"
      />
      <div className="flex flex-col items-start rounded gap-4 bg-secondary/80 text-white relative z-10 w-auto px-6 py-10 md:px-14 md:w-2/3 lg:w-1/2 2xl:w-2/5">
        <h3 className="text-white font-serif text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">Contacto</h3>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
