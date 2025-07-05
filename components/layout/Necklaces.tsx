/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import displayImage from "@/public/silver-cube-bracelet.png";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import ProductCard from "../product/ProductCard";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { useEffect, useState } from "react";

const Necklaces = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch(`/api/products?category=necklace`);
      debugger;
      const data = await res.json();
      setData(data);
    }
    fetchProducts();
  }, []);

  return (
    <section className="w-full">
      <div
        id="necklaces-section"
        className="w-full flex flex-col space-y-3 lg:space-y-8"
      >
        <h3 className="text-xl lg:text-5xl text-center tracking-tighter">
          Shop For <span className="font-semibold">Necklaces</span>
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
              {data.map((item: any, index) => (
                <CarouselItem className="pl-0" key={index}>
                  <ProductCard
                    key={index}
                    prodId={index}
                    title={item.name}
                    displayImage={displayImage}
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

export default Necklaces;
