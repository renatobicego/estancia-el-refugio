"use client";
import { Button, Image, ScrollShadow } from "@nextui-org/react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Carrousel = ({
  images,
  withBorder,
}: {
  images: any;
  withBorder: boolean;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="flex flex-col items-center w-full border border-white rounded p-4">
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex items-start transition-height py-6">
          {images.map((image: any, index: number) => (
            <div
              key={index}
              className="flex flex-col items-start gap-1 mx-2 flex-[0_0_auto] w-full md:max-w-[70%] lg:max-w-[50%] 2xl:max-w-[40%]"
            >
              <Image
                radius="none"
                classNames={{
                    wrapper: "max-md:w-full"
                }}
                className="object-cover lg:h-[50vh] h-[230px] 3xl:h-[400px] rounded-sm"
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
              {image.description && (
                <p className="text-sm italic">{image.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          isIconOnly
          radius="full"
          variant="bordered"
          className="text-white"
          onPress={scrollPrev}
        >
          <FaArrowLeft />
        </Button>
        <Button
          isIconOnly
          radius="full"
          variant="bordered"
          className="text-white"
          onPress={scrollNext}
        >
          <FaArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Carrousel;
