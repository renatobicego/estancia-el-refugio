import { Image } from "@nextui-org/react";
import React from "react";
import Carrousel from "@/app/components/Carrousel/Carrousel";

const Infraestructure = () => {
  const images = [
    {
      src: "/images/secciones/el58/vacas-corral.jpg",
      alt: "Vacas en corral",
      width: 600,
      height: 450,
    },
    {
      src: "/images/secciones/el58/personal-trabajando.jpg",
      alt: "Personal dedicado trabajando en el corral de vacas",
      width: 600,
      height: 450,
    },
  ];

  return (
    <div className="bg-black flex flex-col gap-4 text-white p-6 md:p-8 lg:p-10 2xl:p-12 w-full rounded">
      <h4 className="subtitle">Infraestructura</h4>
      <p>
        La sección está equipada con una vivienda de material y corrales tanto
        para ovinos como para vacunos. Además, dispone de una manga y un cepo,
        así como un cargadero sin balanza, asegurando una eficiente gestión del
        ganado.
      </p>
      <div className="hidden md:flex gap-2 w-full">
        <Image
          src="/images/secciones/el58/vacas-corral.jpg"
          alt="Vacas en corral"
          classNames={{
            wrapper: "w-1/2",
            img: "w-full h-full object-cover rounded-sm",
          }}
          radius="none"
        />
        <Image
          src="/images/secciones/el58/personal-trabajando.jpg"
          alt="Personal dedicado trabajando en el corral de vacas"
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
