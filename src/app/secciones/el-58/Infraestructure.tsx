import { Image } from "@nextui-org/react";
import React from "react";

const Infraestructure = () => {
  return (
    <div className="bg-black flex flex-col gap-4 text-white 2xl:p-12 w-full rounded">
      <h4 className="subtitle">Infraestructura</h4>
      <p>
        La sección está equipada con una vivienda de material y corrales tanto
        para ovinos como para vacunos. Además, dispone de una manga y un cepo,
        así como un cargadero sin balanza, asegurando una eficiente gestión del
        ganado.
      </p>
      <div className="flex gap-2 w-full">
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
          alt="Personal dedicado trabajando el en corral de vacas"
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
