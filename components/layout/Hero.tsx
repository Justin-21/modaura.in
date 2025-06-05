"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

import img1 from "@/public/products/product 1.jpg";
import img2 from "@/public/products/product 2.jpg";
import img3 from "@/public/products/product 3.jpg";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
            }),
            WheelGesturesPlugin(),
          ]}
          opts={{
            loop: true,
            align: "start",
          }}
          className="w-full aspect-square lg:aspect-[2/1] max-h-[80vh] bg-neutral-300 rounded-lg lg:rounded-4xl overflow-hidden"
        >
          <CarouselContent className="w-full h-full -ml-0 *:flex *:items-center *:justify-center">
            <CarouselItem className="basis-full h-full pl-0 relative">
              <Image
                src={img1}
                alt="img1"
                className="h-auto w-auto object-cover"
              />
              <button className="absolute bottom-5 right-5 lg:bottom-10 lg:right-10 flex items-center justify-center gap-2 rounded-full bg-white text-black-1 max-sm:text-xs px-4 py-2 lg:px-8 lg:py-3">
                Shop Now
                <FaArrowRight />
              </button>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 relative">
              <Image
                src={img2}
                alt="img1"
                className="h-auto w-full object-top object-cover"
              />
              <button className="absolute bottom-5 lg:bottom-10 flex items-center justify-center gap-2 rounded-full bg-white text-black-1 max-sm:text-xs px-4 py-2 lg:px-8 lg:py-3">
                Shop Now
                <FaArrowRight />
              </button>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0">
              <Image
                src={img3}
                alt="img1"
                className="object-cover"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        <div className="flex gap-2 py-3 lg:pt-3">
          {Array.from({ length: count }).map((_, index) => (
            <div
              key={index}
              className={`border border-black h-2 rounded-full transition-all duration-300 ${
                current === index ? "bg-black w-10" : "w-2"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
