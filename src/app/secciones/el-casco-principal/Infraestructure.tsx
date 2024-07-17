import Carrousel from "@/app/components/Carrousel/Carrousel";
import { Button, Image, Link } from "@nextui-org/react";
import React from "react";

const Infraestructure = () => {
  const images = [
    {
      src: "/images/secciones/elCascoPrincipal/establo-el-refugio.jpg",
      alt: "Establo el refugio",
      width: 600,
      height: 450,
    },
    {
      src: "/images/secciones/elCascoPrincipal/casa-blanca.jpg",
      alt: "Casa blanca",
      width: 600,
      height: 450,
    },
  ];
  return (
    <div className="bg-black flex flex-col gap-4 text-white p-6 md:p-8 lg:p-10 2xl:p-12 w-full rounded">
      <h4 className="subtitle">Infraestructura</h4>
      <div>
        <p>
          La estancia cuenta con instalaciones de primera calidad que incluyen:
        </p>
        <ul className="list-disc pl-4 max-md:text-sm 2xl:text-lg max-md:leading-6">
          <li>
            <span className="font-semibold">Casa Principal:</span> Una elegante
            residencia con 5 habitaciones, 4 baños, una amplia cocina, comedor,
            lavadero y un encantador jardín con un fogón para asados. Cada
            rincón está diseñado para tu comodidad, con calefacción a gas, agua
            corriente y luz eléctrica de red.{" "}
          </li>
          <li>
            <span className="font-semibold">Casa de Encargado:</span> Cómoda
            vivienda con 2 habitaciones, cocina-comedor, living con fogón y
            baño. Casa de Peones: Tres viviendas equipadas con baños instalados,
            calefacción a leña y luz eléctrica de red.
          </li>
          <li>
            <span className="font-semibold">Galpones:</span> Incluyendo un
            galpón de material para veterinaria y despensa, un taller de
            mantenimiento, galpón de acopio y caballerizas, galpón de esquila y
            galpón de maquinarias.
          </li>
          <li>
            <span className="font-semibold">Corrales:</span> Equipados para
            vacunos y ovinos, incluyendo áreas para adiestramiento deportivo y
            manejo sanitario.
          </li>
        </ul>
      </div>
      <div className="hidden md:flex gap-2 w-full">
        <Image
          src="/images/secciones/elCascoPrincipal/establo-el-refugio.jpg"
          alt="Establo el refugio"
          classNames={{
            wrapper: "w-2/5",
            img: "w-full h-full object-cover rounded-sm",
          }}
          radius="none"
        />
        <Image
          src="/images/secciones/elCascoPrincipal/casa-blanca.jpg"
          alt="Casa blanca"
          classNames={{
            wrapper: "w-3/5",
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
          isBgBlack={true}
        />
      </div>
      <div className="flex gap-4 w-full mt-4 max-md:flex-wrap-reverse">
        <Image
          src="/images/secciones/elCascoPrincipal/interior-casa.png"
          alt="Interior de la casa"
          classNames={{
            wrapper: "w-full md:w-1/2",
            img: "w-full h-full object-cover rounded-sm",
          }}
          radius="none"
        />
        <div className="flex flex-col gap-2 md:gap-4 flex-1 lg:mt-10">
          <h4 className="subtitle">Alojamiento para Huéspedes</h4>
          <p>
            Ofrecemos un chalet secundario de 130 m² especialmente diseñado para
            recibir a nuestros visitantes, con cocina comedor, baño, living
            estar con hogar a leña, dormitorio principal y una habitación
            adicional con tres camas.
          </p>
          <Button
            as={Link}
            href="/informacion"
            color="primary"
            className="px-5 rounded-sm self-start"
          >
            Explorar Más
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Infraestructure;
