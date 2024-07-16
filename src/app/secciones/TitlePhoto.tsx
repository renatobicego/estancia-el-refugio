import { Image } from "@nextui-org/react";
import React from "react";

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
      <div className="flex gap-2">
        <Image
          src={"/images/secciones/" + images[0].src}
          alt={images[0].alt}
          classNames={{
            wrapper: "w-2/3 rounded-sm",
            img: "w-full h-full object-cover rounded-sm",
          }}
          radius="none"
        />
        <div className="flex flex-col gap-2 flex-1">
          <Image
            src={"/images/secciones/" + images[1].src}
            alt={images[1].alt}
            className="rounded-sm"
            radius="none"
          />
          <Image
            src={"/images/secciones/" + images[2].src}
            className="rounded-sm"
            alt={images[2].alt}
            radius="none"
          />
        </div>
      </div>
    </>
  );
};

export default TitlePhoto;
