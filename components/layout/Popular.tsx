import hoverImage from "@/public/modauraLogoDark.png";
import displayImage from "@/public/silver-cube-bracelet.png";
import ProductCard from "../product/ProductCard";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const Popular = () => {
  return (
    <>
      <div id="popular-section" className="w-full flex flex-col space-y-3 lg:space-y-8">
        <h3 className="font-bold text-xl lg:text-3xl text-center">
          Popular Collection
        </h3>
        <div className="lg:w-full flex gap-3">
          <Carousel
            opts={{
              align: "start",
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
    </>
  );
};

export default Popular;
