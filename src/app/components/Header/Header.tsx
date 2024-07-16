"use client";
import useScrollPosition from "@/app/utils/hooks/useScrollPosition";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaChevronDown, FaUser } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname()

  const menuItems = [
    {
      label: "Inicio",
      link: "/",
    },
    {
      label: "Nuestras Secciones",
      link: "/secciones",
    },
    {
      label: "Oportunidad de Inversión",
      link: "/informacion",
    },
    {
      label: "Puntos de Interés y Actividades",
      link: "/actividades",
    },
    {
      label: "Sobre Nosotros",
      link: "/nosotros",
    },
    {
      label: "Contacto",
      link: "/contacto",
    },

  ];

  const isBgTransparent = pathname.includes("secciones")
  const textColor = isBgTransparent ? "text-black" : "text-white"

  const { y: scrollY } = useScrollPosition();
  const opacity = Math.min(Math.round(scrollY / 1.5), 75);

  const headerStyle = {
    backgroundColor:pathname.includes("/secciones") ? `rgba(255, 255, 255, ${opacity}%)` : '',
    // backgroundColor: `rgba(255, 255, 255, ${opacity}%)`,
  };


  return (
    <Navbar
      isBlurred={false}
      isBordered={false}
      style={headerStyle}
      classNames={{
        base: `${isBgTransparent ? "bg-black/30 lg:bg-transparent" : "bg-black/30"} ${isMenuOpen ? "backdrop-blur-sm" : ""}`,
        wrapper: `max-w-full px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 ${textColor}`,
        menu: `bg-black/30 backdrop-blur-sm px-4 md:px-8 py-4`,
      }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="pr-3" justify="start">
        <NavbarBrand>
          <p className="font-bold text-inherit">Estancia El Refugio</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="lg:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent
        className="hidden lg:flex gap-4 items-center"
        justify="end"
      >
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className={`p-0 bg-transparent ${textColor} data-[hover=true]:bg-transparent`}
                endContent={<FaChevronDown />}
                radius="sm"
                variant="light"
              >
                Nuestras Secciones
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Nuestras secciones"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem key="casco-principal">
              El Casco Principal
            </DropdownItem>
            <DropdownItem key="el-58">El 58</DropdownItem>
            <DropdownItem key="la-serena">La Serena</DropdownItem>
            <DropdownItem key="san-roman">San Román</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className={`p-0 bg-transparent ${textColor} data-[hover=true]:bg-transparent`}
                endContent={<FaChevronDown />}
                radius="sm"
                variant="light"
              >
                Sobre Nosotros
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="sobre nosotros"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem key="conoce-mas">Conocé Más</DropdownItem>
            <DropdownItem key="galeria-fotos">Galería de Fotos</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link size="sm" className={`pb-1 ${textColor}`} href="#">
            Oportunidad de Inversión
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link size="sm" className={`pb-1 ${textColor}`} href="#">
            Puntos de Interés y Actividades
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="secondary" className="rounded-sm" href="#">
            Contacto
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`w-full ${textColor}`}
              href={item.link}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
