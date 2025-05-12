import hoverImage from "@/public/modauraLogoDark.png";
import ProductCard from "../product/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { products } from "@/constants/data";

const Popular = () => {
  return (
    <section className="w-full">
      <div
        id="popular-section"
        className="w-full flex flex-col space-y-3 lg:space-y-8"
      >
        <h3 className="font-bold text-xl lg:text-4xl text-center">
          Popular Collection
        </h3>
        <div className="w-full flex lg:gap-3">
          <Carousel
            opts={{
              align: "start",
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="w-full h-full space-x-2 lg:justify-between -ml-0">
              {products.map((item, index) => (
                <CarouselItem
                  className="pl-0"
                  key={index}
                >
                  <ProductCard
                    key={index}
                    title={item.title}
                    displayImage={item.displayImage}
                    hoverImage={hoverImage}
                    costPrice={item.costPrice}
                    sellingPrice={item.sellingPrice}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Popular;
