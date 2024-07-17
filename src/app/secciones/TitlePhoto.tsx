import { Image } from "@nextui-org/react";
import React from "react";
import Carrousel from "../components/Carrousel/Carrousel";

interface TitlePhotoProps {
  data: {
    title: string;
    subtitle: string;
    images: {
      src: string;
      alt: string;
    }[];
  };
}

const TitlePhoto = ({ data }: TitlePhotoProps) => {
  const { title, subtitle, images } = data;
  return (
    <>
      <h1>{title}</h1>
      <p className="font-semibold md:text-lg 2xl:text-xl">{subtitle}</p>
      <div className="hidden md:flex gap-2">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          classNames={{
            wrapper: "w-2/3 rounded-sm",
            img: "w-full h-full object-cover rounded-sm",
          }}
          radius="none"
        />
        <div className="flex flex-col gap-2 flex-1">
          <Image
            src={images[1].src}
            alt={images[1].alt}
            classNames={{
              wrapper: "!max-w-full h-1/2",
              img: "w-full h-full object-cover rounded-sm",
            }}
            radius="none"
          />
          <Image
            src={images[2].src}
            classNames={{
              wrapper: "!max-w-full h-1/2",
              img: "w-full h-full object-cover rounded-sm",
            }}
            alt={images[2].alt}
            radius="none"
          />
        </div>
      </div>
      <div className="md:hidden w-full">
        <Carrousel images={images} withBorder={false} addPadding={false}/>

      </div>
    </>
  );
};

export default TitlePhoto;
