"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { BiCart } from "react-icons/bi";
import CallToActionBtn from "../ui/callToActionBtn";

type Props = {
  displayImage: string | StaticImageData;
  hoverImage: string | StaticImageData;
  title: string;
  sellingPrice: string;
  costPrice: string;
};

const ProductCard = ({
  displayImage,
  hoverImage,
  title,
  costPrice,
  sellingPrice,
}: Props) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="w-fit h-fit flex flex-col items-center justify-center space-y-3">
        <div
          className="size-[150px] lg:size-[250px] 2xl:size-[280px] bg-neutral-200 rounded-md overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-200 ease-in-out"
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        >
          {/* image of the product */}
          <Image
            src={!active ? displayImage : hoverImage}
            alt="product"
            width={300}
            height={300}
            className="w-full object-cover"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          {/* title of the product */}
          <h3 className="text-sm lg:text-base">
            {title ? title : "Product Name"}
          </h3>
          {/* cost of the product */}
          <div className="flex items-baseline space-x-1 lg:space-x-2 leading-tight">
            <h2 className="font-bold text-sm lg:text-lg">
              {sellingPrice ? sellingPrice : "Selling Price"}
            </h2>
            <h3 className="text-xs lg:text-base line-through text-neutral-600">
              {costPrice ? costPrice : "Cost Price"}
            </h3>
          </div>
        </div>

        {/* Add to cart button */}
        <CallToActionBtn
          text="Add to Cart"
          variant="link"
          href="#"
          className="w-full flex items-center justify-center gap-2 bg-darkTeal text-ivory rounded-md py-2 lg:py-3 lg:px-4 hover:opacity-85 transition-all duration-200 ease-in-out"
        >
          <BiCart size={16} />
        </CallToActionBtn>
      </div>
    </>
  );
};

export default ProductCard;
