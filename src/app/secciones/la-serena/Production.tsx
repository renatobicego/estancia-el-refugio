import { Image } from "@nextui-org/react";
import React from "react";

const Production = () => {
  return (
    <div className="bg-salmon flex flex-col gap-4 text-white p-6 md:p-8 lg:p-10 2xl:p-12 w-full rounded">
      <h5 className="subtitle">Producción Ganadera</h5>
      <p>
        La producción ovina en La Serena se desarrolla principalmente en
        esta sección, aprovechando al máximo los recursos naturales del terreno.
        La gestión del ganado se realiza en campos de invierno y verano,
        asegurando que los animales estén en las mejores condiciones durante
        todas las estaciones del año. La Serena se destaca por su eficiencia y
        calidad en la producción ovina, ofreciendo un entorno ideal para el
        desarrollo y crecimiento de la actividad ganadera, albergando 1600 lanares con
        un porcentaje de señalada del 75%.
      </p>
      <div className="flex gap-2 flex-wrap">
        <video
          className="object-cover w-full md:w-1/2"
          width="1920"
          height="1080"
          preload="auto"
          muted
          loop
          playsInline
          autoPlay
        >
          <source
            src="/images/secciones/laSerena/video-ovejas-en-corral.mov"
            type="video/mp4"
          />
        </video>
        <Image
          src="/images/secciones/laSerena/ovejas-en-corral-2.jpg"
          alt="Ovejas en corral"
          className="rounded-sm max-md:w-full"
        />
      </div>
    </div>
  );
};

export default Production;
