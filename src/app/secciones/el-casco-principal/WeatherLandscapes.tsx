import { Image } from "@nextui-org/react";
import React from "react";

const WeatherLandscapes = () => {
  return (
    <div className="bg-secondary flex flex-col gap-4 text-white 2xl:p-12 w-full rounded">
      <h4 className="subtitle">Clima y Paisaje</h4>
      <p>
        El Casco Principal se caracteriza por sus montañas con bosques de lenga
        y ciprés, arroyos y una laguna de 60 hectáreas. La finca incluye una
        veranada con valles mallinosos y múltiples cuadros para la producción
        bovina. En este bloque se encuentra la casa principal de la estancia.{" "}
        <br />
        Las lluvias varían entre 400 mm en las áreas más alejadas y 700 mm en la
        parte principal, llegando a 1000 mm en años excepcionales. A pesar de
        estas variaciones, los campos no suelen ser muy nevadores, lo que
        asegura que la nieve no interfiera significativamente con la actividad
        ganadera. <br /> 
        El campo cuenta con extensiones de mallines y chacras para el
        cultivo de alfalfas, todas alimentadas por aguadas naturales y arroyos.
        La hacienda se maneja en campos de invierno (invernada) y verano
        (veranada), asegurando un manejo eficiente del ganado.
      </p>
      <div className="flex gap-2 w-full">
        <Image
          src="/images/secciones/elCascoPrincipal/paisaje-nevado.png"
          alt="Paisaje nevado"
          classNames={{
            wrapper: "w-1/2 max-h-[400px] !max-w-[50%]",
            img: "w-full h-full object-cover",
          }}
          radius="none"
        />
        <Image
          src="/images/secciones/elCascoPrincipal/paisaje-montania-nevada.png"
          alt="Paisaje con montaña nevada"
          classNames={{
            wrapper: "w-1/2 max-h-[400px] !max-w-[50%]",
            img: "w-full h-full object-cover",
          }}
          radius="none"
        />
      </div>
    </div>
  );
};

export default WeatherLandscapes;
