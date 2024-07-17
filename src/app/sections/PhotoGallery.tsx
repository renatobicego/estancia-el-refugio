import { Button, Link } from "@nextui-org/react";
import Carrousel from "../components/Carrousel/Carrousel";
import { images } from "../utils/imagesData";

const PhotoGallery = () => {
  return (
    <section className="bg-black">
      <div className="flex flex-col items-start justify-center gap-4 z-10 text-center  mx-auto h-full py-20 xl:py-24 2xl:py-28 3xl:py-36 text-white">
        <h4 className="text-white font-serif text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-semibold">
          Galería de Fotos
        </h4>
        <Carrousel
          images={images}
          withBorder={true}
          addPadding={true}
          isBgBlack={true}
        />
        <Button
          as={Link}
          href="/nosotros"
          color="secondary"
          className="px-5 rounded-sm self-center"
        >
          Ver Más Fotos
        </Button>
      </div>
    </section>
  );
};

export default PhotoGallery;
