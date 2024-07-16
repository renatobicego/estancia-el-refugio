import { Image } from "@nextui-org/react";
import React from "react";

const Production = () => {
  return (
    <div className="bg-salmon flex flex-col gap-4 text-white 2xl:p-12 w-full rounded">
      <h5 className="subtitle">Producción Ganadera y Personal Dedicado</h5>
      <p>
        Esta sección se dedica principalmente a la cría de ganado bovino, con un
        rodeo de raza Polled Hereford (65%) y Aberdeen Angus (35%). Actualmente,
        hay un stock de 450 vacas, con un potencial estimado de 650-700 vacas
        madres. Además, producimos lana de alta calidad con una finura de 20
        micrones, rindiendo al peine un 64% y con un peso promedio de vellón de
        4 kg. En la última zafra, obtuvimos 5800 kg de lana. <br />
        Contamos con un equipo de 5 personas permanentes, incluyendo 3 puesteros
        y 2 recorredores, que aseguran el cuidado y mantenimiento de la
        estancia.
      </p>

      <div className="flex gap-2">
        <Image
          src="/images/secciones/elCascoPrincipal/vacas.jpg"
          alt="Vaca con sus crias"
          classNames={{
            wrapper: "w-1/2",
            img: "w-full h-full object-cover rounded-sm",
          }}
          radius="none"
        />
        <Image
          src="/images/secciones/elCascoPrincipal/personal-trabajando-ovejas.jpg"
          alt="Personal dedicado trabajando con ovejas"
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

export default Production;
