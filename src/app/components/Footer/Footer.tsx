import { Button, Divider, Link } from "@nextui-org/react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const navItems = [
    {
      label: "Nuestra Historia",
      link: "/nosotros",
    },
    {
        label: "Conocé Nuestra Estancia",
        link: "/secciones"
    },
    {
        label: "Puntos de Interés y Actividades",
        link: "/actividades"
    },
    {
        label: "Detalles de la Propiedad",
        link: "/informacion"
    },
  ];
  return (
    <footer className="w-full px-6 md:px-8 lg:px-[10%] text-white bg-black pt-10 pb-6">
      <div className="w-full flex justify-between items-start max-md:flex-col gap-6">
        <nav>
          <ul className="flex flex-col items-start gap-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link className="text-white text-xs md:text-sm 2xl:text-base" href={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col gap-2 items-start md:items-end">
            <h6 className="font-semibold">Estancia El Refugio</h6>
            <div className="flex gap-2">
                <Button isIconOnly variant="light" className="text-white rounded-sm" as={Link} href="#">
                    <FaInstagram className="size-6"/>
                </Button>
                <Button isIconOnly variant="light" className="text-white rounded-sm" as={Link} href="#">
                    <FaFacebook className="size-6"/>
                </Button>
            </div>
        </div>
      </div>
      <Divider className="bg-white w-full my-4" orientation="horizontal"/>
      <p className="text-xs xl:text-sm">© 2024. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
