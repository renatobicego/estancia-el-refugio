import { Image } from "@nextui-org/react";
import React from "react";

const Infraestructure = () => {
  return (
    <div className="bg-black flex flex-col gap-4 text-white p-6 md:p-8 lg:p-10 2xl:p-12 w-full rounded">
      <h5 className="subtitle">Infraestructura</h5>
      <p>
        Vivienda de material. Caballerizas. Galpón de madera y otro de material
        (antigua esquila). Corrales de ovinos en desuso. San Román cubre una
        superficie de 4040 hectáreas, con acceso directo desde la Ruta Nacional
        40, lo que facilita su manejo y operación.
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
            src="/images/secciones/sanRoman/ruta-vacas.mov"
            type="video/mp4"
          />
        </video>
        <Image
          src="/images/secciones/sanRoman/arroyo.jpg"
          alt="Arroyo"
          className="rounded-sm max-md:w-full"
        />
      </div>
    </div>
  );
};

export default Infraestructure;
