"use client";

import hoverImage from "@/public/modauraLogoDark.png";
import displayImage from "@/public/silver-cube-bracelet.png";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import ProductCard from "../product/ProductCard";
import
  {
    Carousel,
    CarouselContent,
    CarouselItem
  } from "../ui/carousel";

const Latest = () => {
  return (
    <section className="w-full">
      <div
        id="latest-section"
        className="w-full flex flex-col space-y-3 lg:space-y-8"
      >
        <h3 className="font-medium text-xl lg:text-5xl text-center">
          Latest Collection
        </h3>
        <div className="lg:w-full flex gap-3">
          <Carousel
            opts={{
              align: "start",
              dragFree: true,
            }}
            plugins={[WheelGesturesPlugin()]}
            className="w-full"
          >
            <CarouselContent className="lg:w-full h-full lg:justify-between -ml-0">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  className="pl-0"
                  key={index}
                >
                  <ProductCard
                    key={index}
                    title={"Latest " + (index + 1).toString()}
                    displayImage={displayImage}
                    hoverImage={hoverImage}
                    costPrice="Rs. 1999"
                    sellingPrice="Rs. 999"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Latest;
