"use client";

// import displayImage from "@/public/silver-cube-bracelet.png";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import ProductCard from "../product/ProductCard";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

import useProductStore from "@/app/stores/useProductStore";

const HomePageSection = ({
  section,
  sectionId,
}: {
  section: string;
  sectionId: string;
}) => {
  const { products } = useProductStore();

  const items = products.filter(
    (product) => product.category.toUpperCase() === section.toUpperCase()
  );

  return (
    <section className="w-full place-items-center space-y-5">
      <div
        id={sectionId}
        className="w-full flex flex-col items-center justify-center space-y-3 lg:space-y-8 text-center"
      >
        <div className="flex">
          <h3 className="text-xl lg:text-5xl tracking-tighter w-full">
            Shop For <span className="font-semibold">{section}s</span>
          </h3>
          <div className="flex items-center justify-center hover:underline hover:underline-offset-2 cursor-pointer transition-all">
            View All {section}s
          </div>
        </div>

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
              {items.slice(0, 6).map((item) => (
                <CarouselItem className="pl-0" key={item._id.toString()}>
                  <ProductCard
                    _id={item._id}
                    name={item.name}
                    images={item.images}
                    price={item.price}
                    category={""}
                    description={""}
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

export default HomePageSection;
