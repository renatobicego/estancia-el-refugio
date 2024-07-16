import { Card, CardFooter, Image, Link } from "@nextui-org/react";
import BreadcrumbsClient from "../components/BreadcrumbsClient/BreadcrumbsClient";

export default function Sections() {
  const sections = [
    {
      label: "El Casco Principal",
      link: "/secciones/el-casco-principal",
      imageSrc: "/images/secciones/elCascoPrincipal/el-casco-principal-portada.jpg",
    },
    {
      label: "La Serena",
      link: "/secciones/la-serena",
      imageSrc: "/images/secciones/laSerena/la-serena-portada.jpg",
    },
    {
      label: "El 58",
      link: "/secciones/el-58",
      imageSrc: "/images/secciones/el58/el-58-portada.jpg",
    },
    {
      label: "San Román",
      link: "/secciones/san-roman",
      imageSrc: "/images/secciones/sanRoman/san-roman-portada.jpg",
    },
  ];
  return (
    <section className="flex flex-col gap-6 w-full">
      <BreadcrumbsClient items={[
        { label: "Inicio", href: "/" },
        { label: "Secciones de la Estancia", href: "/secciones" },
      ]} />
      <h1>Secciones de la Estancia</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sections.map((section, index) => (
          <Card as={Link} href={section.link} key={index} className="max-h-[40vh] hover:opacity-100 relative">
            <div className="bg-black/50 absolute inset-0 w-full h-full z-[5] hover:bg-black/20 transition-all duration-400"></div>
            <CardFooter className="absolute z-10 bottom-8 left-4 flex-col !items-start">
              <h4 className="text-white font-semibold text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-serif drop-shadow-2xl">{section.label}</h4>
            </CardFooter>
            <Image
              removeWrapper
              alt={section.label}
              className="z-0 w-full h-full object-cover"
              src={section.imageSrc}
            />
          </Card>
        ))}
      </div>
    </section>
  );
}
