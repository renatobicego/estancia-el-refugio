import { Image } from "@nextui-org/react";
import React from "react";

const Infraestructure = () => {
  return (
    <div className="bg-black flex flex-col gap-4 text-white 2xl:p-12 w-full rounded">
      <h4 className="subtitle">Infraestructura</h4>
      <p>
        La sección La Serena cuenta con una amplia vivienda de material y chapa
        de dos plantas, proporcionando un alojamiento cómodo y funcional.
        Además, dispone de un corral de ovinos, un galpón de esquila,
        caballerizas, y un depósito de herramientas y varios, asegurando que
        todas las necesidades operativas del campo estén cubiertas.
      </p>
      <div className="flex gap-2 w-full">
        <Image
          src="/images/secciones/el58/galpon.jpg"
          alt="Galpón de esquila"
          classNames={{
            wrapper: "w-1/2",
            img: "w-full h-full object-cover rounded-sm",
          }}
          radius="none"
        />
        <Image
          src="/images/secciones/el58/alojamiento.jpg"
          alt="Alojamiento"
          classNames={{
            wrapper: "w-1/2",
            img: "w-full h-full object-cover rounded-sm",
          }}
          radius="none"
        />
      </div>
    </div>
  );
};

export default Infraestructure;
