import BreadcrumbsClient from "@/app/components/BreadcrumbsClient/BreadcrumbsClient";
import TitlePhoto from "../TitlePhoto";
import Infraestructure from "./Infraestructure";
import WeatherLandscapes from "./WeatherLandscapes";
import Production from "./Production";
import { Button, Link } from "@nextui-org/react";

export default function Page() {
  const titlePhotoData = {
    title: "El Casco Principal",
    subtitle: `Ubicado en un pintoresco paisaje montañoso, el Casco Principal está
        rodeado de bosques naturales de lenga y ciprés, arroyos cristalinos,
        vertientes naturales y una impresionante laguna de 60 hectáreas. Este
        rincón de la Patagonia ofrece una experiencia única y auténtica.`,
    images: [
      {
        src: "elCascoPrincipal/el-casco-principal-portada.jpg",
        alt: "Casa de la estancia",
      },
      {
        src: "elCascoPrincipal/paisaje-el-casco-principal.png",
        alt: "Paisaje de montañas",
      },
      {
        src: "elCascoPrincipal/vaca-laguna.png",
        alt: "Vaca y laguna",
      },
    ],
  };

  return (
    <section className="flex flex-col gap-4 md:gap-5 lg:gap-6 w-full text-black">
      <BreadcrumbsClient
        items={[
          { label: "Inicio", href: "/" },
          { label: "Secciones de la Estancia", href: "/secciones" },
          {
            label: "El Casco Principal",
            href: "/secciones/el-casco-principal",
          },
        ]}
      />
      <TitlePhoto data={titlePhotoData} />
      <Infraestructure />
      <WeatherLandscapes />
      {/* <Production /> */}
      <h5 className="subtitle lg:max-w-[60%]">
        Descubra todos los detalles y oportunidades únicas de nuestra propiedad.
        ¡Explore su próxima inversión!
      </h5>
      <Button
        as={Link}
        href="/informacion"
        color="primary"
        className="px-5 rounded-sm self-start"
      >
        Explorar Oportunidad
      </Button>
    </section>
  );
}
