import BreadcrumbsClient from "@/app/components/BreadcrumbsClient/BreadcrumbsClient";
import { Button, Link } from "@nextui-org/react";
import TitlePhoto from "../TitlePhoto";
import Infraestructure from "./Infraestructure";
import Production from "./Production";

export default function Page() {
  const titlePhotoData = {
    title: "El 58",
    subtitle:
      "Ubicado en un extenso campo de producción bovina, El 58 cuenta con grandes mallines y diversos cuadros que facilitan la producción y manejo del ganado.",
    images: [
      {
        src: "/images/secciones/el58/paisaje-montanias.jpg",
        alt: "Paisaje montañoso de la sección El 58",
        width: 3920,
        height: 2204,
      },
      {
        src: "/images/secciones/el58/el-58-portada.jpg",
        alt: "Vacas en corral",
        width: 4032,
        height: 3024,
      },
      {
        src: "/images/secciones/el58/arbol-paisaje.jpg",
        alt: "Arbol en laguna de la sección El 58",
        width: 1024,
        height: 681,
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
            label: "El 58",
            href: "/secciones/el-58",
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
