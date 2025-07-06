"use client";

// import displayImage from "@/public/silver-cube-bracelet.png";
import ProductCard from "../product/ProductCard";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import useProductStore from "@/app/stores/useProductStore";

const Bracelets = () => {
  const { products } = useProductStore();

  const bracelets = products.filter(
    (product) => product.category.toUpperCase() === "BRACELET"
  );

  return (
    <section className="w-full">
      <div
        id="bracelets-section"
        className="w-full flex flex-col space-y-3 lg:space-y-8"
      >
        <h3 className="text-xl lg:text-5xl text-center tracking-tighter">
          Shop For <span className="font-semibold">Bracelets</span>
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
              {bracelets.slice(0, 6).map((bracelet) => (
                <CarouselItem className="pl-0" key={bracelet._id.toString()}>
                  <ProductCard
                    prodId={bracelet._id}
                    title={bracelet.name}
                    displayImage={bracelet.images[0]}
                    costPrice={`Rs. ${bracelet.price.mrp}`}
                    sellingPrice={`Rs. ${bracelet.price.sellingPrice}`}
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

export default Bracelets;
