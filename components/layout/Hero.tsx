"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

import img1 from "@/public/silver-cube-bracelet.png";
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
          className="w-full aspect-square md:aspect-auto lg:h-[600px] bg-neutral-300 rounded-2xl overflow-hidden"
        >
          <CarouselContent className="w-full h-full -ml-0 *:flex *:items-center *:justify-center">
            <CarouselItem className="basis-full h-full pl-0 relative">
              <Image
                src={img1}
                alt="img1"
                className="h-full w-auto"
              />
              <button className="absolute bottom-10 right-10 flex items-center justify-center gap-2 rounded-full bg-white text-black-1 px-8 py-3">
                Shop Now
                <FaArrowRight />
              </button>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 relative">
              <Image
                src={img1}
                alt="img1"
                className="h-full w-auto"
              />
              <button className="absolute bottom-10 flex items-center justify-center gap-2 rounded-full bg-white text-black-1 px-8 py-3">
                Shop Now
                <FaArrowRight />
              </button>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0">
              <Image
                src={img1}
                alt="img1"
                className="h-full w-auto"
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
