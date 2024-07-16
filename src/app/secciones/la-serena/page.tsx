import BreadcrumbsClient from "@/app/components/BreadcrumbsClient/BreadcrumbsClient";
import TitlePhoto from "../TitlePhoto";
import { Button, Link } from "@nextui-org/react";
import Infraestructure from "./Infraestructure";
import Production from "./Production";

export default function Page() {
  const titlePhotoData = {
    title: "La Serena",
    subtitle: `La Serena es un campo de producción ovina ubicado en una zona estratégica, 
    prácticamente adyacente al aeropuerto de Esquel. La sección está dividida en 
    dos grandes cuadros, dedicados a la invernada y la veranada, lo que garantiza una 
    gestión eficiente y sostenible del ganado ovino durante todo el año.`,
    images: [
      {
        src: "laSerena/paisaje-montania.jpg",
        alt: "Paisaje montañoso",
      },
      {
        src: "laSerena/ovejas-en-corral.jpg",
        alt: "Ovejas en corral",
      },
      {
        src: "laSerena/la-serena-portada.jpg",
        alt: "Paisaje con árbol",
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
            label: "La Serena",
            href: "/secciones/la-serena",
          },
        ]}
      />
      <TitlePhoto data={titlePhotoData} />
      <Infraestructure />
      <Production /> 
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
