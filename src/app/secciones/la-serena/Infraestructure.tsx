import { Image } from "@nextui-org/react";
import React from "react";
import Carrousel from "@/app/components/Carrousel/Carrousel";

const Infraestructure = () => {
  const images = [
    {
      src: "/images/secciones/laSerena/galpon.jpg",
      alt: "Galpón de esquila",
      width: 600,
      height: 450,
    },
    {
      src: "/images/secciones/laSerena/alojamiento.jpg",
      alt: "Alojamiento",
      width: 600,
      height: 450,
    },
  ];

  return (
    <div className="bg-black flex flex-col gap-4 text-white p-6 md:p-8 lg:p-10 2xl:p-12 w-full rounded">
      <h4 className="subtitle">Infraestructura</h4>
      <p>
        La sección La Serena cuenta con una amplia vivienda de material y chapa
        de dos plantas, proporcionando un alojamiento cómodo y funcional.
        Además, dispone de un corral de ovinos, un galpón de esquila,
        caballerizas, y un depósito de herramientas y varios, asegurando que
        todas las necesidades operativas del campo estén cubiertas.
      </p>
      <div className="hidden md:flex gap-2 w-full">
        <Image
          src="/images/secciones/laSerena/galpon.jpg"
          alt="Galpón de esquila"
          classNames={{
            wrapper: "w-1/2",
            img: "w-full h-full object-cover rounded-sm",
          }}
          radius="none"
        />
        <Image
          src="/images/secciones/laSerena/alojamiento.jpg"
          alt="Alojamiento"
          classNames={{
            wrapper: "w-1/2",
            img: "w-full h-full object-cover rounded-sm",
          }}
          radius="none"
        />
      </div>
      <div className="md:hidden w-full">
        <Carrousel
          images={images}
          addPadding={false}
          withBorder={false}
          isBgBlack
        />
      </div>
    </div>
  );
};

export default Infraestructure;
