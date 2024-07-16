import { Button, Link } from "@nextui-org/react";

/* eslint-disable @next/next/no-img-element */
const BePart = () => {
  return (
    <section>
      <img
        src="/images/montanias-seccion-inversion.png"
        alt="imagen paisaje montaña en blanco y negro"
        className="w-full h-full object-cover absolute inset-0 brightness-75"
      />
      <div
        className="flex flex-col items-center justify-center gap-4 z-10 text-center 
      md:max-w-[80%] lg:max-w-[60%] 2xl:max-w-[70%] 3xl:max-w-[50%] mx-auto h-full py-36 text-white"
      >
        <h2 className="drop-shadow-lg">Se parte de nuestra Historia</h2>
        <h3 className="text-white max-md:text-sm 2xl:text-lg z-10 md:max-w-[80%] lg:max-w-[60%] 2xl:max-w-[70%] drop-shadow-2xl">
          Consulte sobre nuestras oportunidades de venta y aproveche esta
          increíble inversión en la Patagonia.
        </h3>
        <Button
          as={Link}
          href="/nosotros"
          color="primary"
          className="px-5 rounded-sm"
        >
          Explorar Oportunidad
        </Button>
      </div>
    </section>
  );
};

export default BePart;
