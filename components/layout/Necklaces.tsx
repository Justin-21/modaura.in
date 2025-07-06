// /* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// import displayImage from "@/public/silver-cube-bracelet.png";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import ProductCard from "../product/ProductCard";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

import useProductStore from "@/app/stores/useProductStore";

const Necklaces = () => {
  const { products } = useProductStore();

  const necklaces = products.filter(
    (product) => product.category.toUpperCase() === "NECKLACE"
  );

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
              {necklaces.slice(0, 6).map((necklace) => (
                <CarouselItem className="pl-0" key={necklace._id.toString()}>
                  <ProductCard
                    prodId={necklace._id}
                    title={necklace.name}
                    displayImage={necklace.images[0]}
                    costPrice={`Rs. ${necklace.price.mrp}`}
                    sellingPrice={`Rs. ${necklace.price.sellingPrice}`}
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
