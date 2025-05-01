import hoverImage from "@/public/modauraLogoDark.png";
import displayImage from "@/public/silver-cube-bracelet.png";
import ProductCard from "../product/ProductCard";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const Earrings = () => {
  return (
    <section className="w-full">
      <div
        id="earrings-section"
        className="w-full flex flex-col space-y-3 lg:space-y-8"
      >
        <h3 className="font-bold text-xl lg:text-4xl text-center">
          Shop For Earrings
        </h3>
        <div className="lg:w-full flex gap-3">
          <Carousel
            opts={{
              align: "start",
              dragFree: true,
            }}
            className="w-full overflow-hidden"
          >
            <CarouselContent className="lg:w-full h-full space-x-2 lg:justify-between -ml-0">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  className="pl-0"
                  key={index}
                >
                  <ProductCard
                    key={index}
                    title={"Silver Cube Bracelet " + (index + 1).toString()}
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

export default Earrings;
