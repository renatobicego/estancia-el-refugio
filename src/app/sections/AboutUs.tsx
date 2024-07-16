/* eslint-disable @next/next/no-img-element */
import { Button, Link } from "@nextui-org/react";
import React from "react";

const AboutUs = () => {
  return (
    <section>
      <img
        src="/images/imagen-paisaje-montania-sobre-nosotros.png"
        alt="imagen paisaje montaña sobre nosotros"
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="flex flex-col items-center justify-center gap-4 z-10 text-center 
      md:max-w-[80%] lg:max-w-[60%] 2xl:max-w-[70%] 3xl:max-w-[60%] mx-auto h-full py-36 text-white">
        <h2>
          Un lugar único en el corazón de la{" "}
          <span className="text-primary">Patagonia</span>
        </h2>
        <h3 className="text-white max-md:text-sm 2xl:text-lg z-10 md:max-w-[80%] lg:max-w-[60%] 2xl:max-w-[70%]">
          Somos un establecimiento ganadero ubicado al pie del cerro Nahuel Pan,
          fundado por los primeros ocupantes de estas tierras.
        </h3>
        <Button as={Link} href="/nosotros" color="primary" className="px-5 rounded-sm">
          Sobre Nosotros
        </Button>
      </div>
    </section>
  );
};

export default AboutUs;
