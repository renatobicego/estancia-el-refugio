import BreadcrumbsClient from "@/app/components/BreadcrumbsClient/BreadcrumbsClient";
import TitlePhoto from "../TitlePhoto";
import { Button, Link } from "@nextui-org/react";

export default function Page() {
  const titlePhotoData = {
    title: "San Román",
    subtitle: `San Román es un campo bajo y abrigado, con un paisaje típico patagónico 
    de lomadas y pampas de coirones. Es ideal para la invernada de vacas, 
    ofreciendo excelentes resultados gracias a su entorno. El campo cuenta con un 
    gran arroyo que lo atraviesa en invierno y primavera, junto con aguadas naturales, 
    proporcionando recursos hídricos esenciales.`,
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
            label: "san Román",
            href: "/secciones/san-roman",
          },
        ]}
      />
      <TitlePhoto data={titlePhotoData} />

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
