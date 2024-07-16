import { Button, Link } from "@nextui-org/react";
import React from "react";

const SectionsMap = () => {
  return (
    <section className="py-10 sm:py-12 md:py-[3.25rem] max-xs:min-h-[85lvh] xs:max-md:min-h-[70lvh] lg:min-h-[60vh] 2xl:min-h-[70vh]">
      <picture className="w-full absolute inset-0">
        <source
          srcSet="/images/secciones-mapa.png"
          media="(min-width: 640px) and (max-width: 1699px)"
        />
        <source
          srcSet="/images/secciones-mapa-bg.png"
          media="(min-width: 1700px)"
        />
        <img
          className="object-cover w-full h-full sm:object-left"
          src="/images/secciones-mapa-mobile.png"
          alt=""
        />
      </picture>
      <div className="bg-black/70 flex flex-col items-center sm:justify-start justify-center gap-4 max-sm:text-center relative z-10 
      py-8 px-4 md:pl-6 md:pr-8 sm:w-2/5 md:w-[45%] lg:w-1/3 xl:pl-8 rounded">
        <h5 className="text-white font-medium md:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl">
          Ubicada a 25 km de Esquel, la estancia se divide en cuatro secciones
          principales
        </h5>
        <Button
          as={Link}
          href="/secciones"
          color="primary"
          className="px-5 rounded-sm sm:self-start"
        >
          Ver Secciones
        </Button>
      </div>
    </section>
  );
};

export default SectionsMap;
