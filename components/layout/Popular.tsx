"use client";

import { products } from "@/constants/data";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import ProductCard from "../product/ProductCard";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const Popular = () => {
  return (
    <section className="w-full">
      <div
        id="popular-section"
        className="w-full flex flex-col space-y-3 lg:space-y-10"
      >
        <h3 className="text-xl lg:text-5xl text-center tracking-tighter">
          <span className="font-semibold">Popular</span> Collection
        </h3>
        <div className="w-full flex lg:gap-3">
          <Carousel
            opts={{
              align: "start",
              dragFree: true,
            }}
            plugins={[WheelGesturesPlugin()]}
            className="w-full"
          >
            <CarouselContent className="w-full h-full lg:justify-between -ml-0">
              {products.map((item, index) => (
                <CarouselItem
                  className="pl-0"
                  key={index}
                >
                  <ProductCard
                    key={index}
                    prodId={index}
                    title={item.title}
                    displayImage={item.displayImage}
                    costPrice={item.costPrice}
                    sellingPrice={item.sellingPrice}
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

export default Popular;
