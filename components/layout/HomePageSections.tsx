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
        <h3 className="text-xl lg:text-5xl tracking-tighter">
          Shop For <span className="font-semibold">{section}s</span>
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

        <div className="cursor-pointer transition-all font-urbanist hover:-translate-y-0.5 border border-neutral-400 px-4 py-2 hover:border-black-1">
          View All {section}s
        </div>
      </div>
    </section>
  );
};

export default HomePageSection;
