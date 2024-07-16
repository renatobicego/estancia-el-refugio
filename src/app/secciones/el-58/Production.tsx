import { Image } from "@nextui-org/react";
import React from "react";

const Production = () => {
  return (
    <div className="bg-salmon flex flex-col gap-4 text-white 2xl:p-12 w-full rounded">
      <h5 className="subtitle">Producción Ganadera</h5>
      <p>
        El 58 se especializa en la recría de ovinos. Anualmente, se venden alrededor de
        200 corderos, destacando la calidad y eficiencia en la producción ovina.{" "}
        <br /> En cuanto a la producción bovina, El 58 mantiene un rodeo
        compuesto por un 65% de raza Polled Hereford y un 35% de Aberdeen Angus.
        Actualmente, hay un stock de 450 vacas, con un potencial estimado de
        alcanzar entre 650 y 700 vacas madres, lo que subraya el crecimiento y
        desarrollo sostenible en esta área.
      </p>
      <div className="flex gap-2">
        <video
          className="object-cover w-1/2"
          width="1920"
          height="1080"
          preload="auto"
          muted
          loop
          playsInline
          autoPlay
        >
          <source
            src="/images/secciones/el58/vacas-corral.mp4"
            type="video/mp4"
          />
        </video>
        <Image
          src="/images/secciones/el58/personal-trabajando-ovejas.jpg"
          alt="Personal dedicado trabajando en el corral de ovejas"
          className="rounded-sm"
        />
      </div>
    </div>
  );
};

export default Production;
