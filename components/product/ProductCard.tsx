"use client";

import Image, { StaticImageData } from "next/image";
import { BiCart } from "react-icons/bi";
import CallToActionBtn from "../ui/callToActionBtn";
import { IoMdHeartEmpty } from "react-icons/io";
import Link from "next/link";
import mongoose from "mongoose";

type ProductCardProps = {
  prodId: mongoose.Types.ObjectId;
  displayImage: string | StaticImageData;
  title: string;
  sellingPrice: string;
  costPrice: string;
};

const ProductCard = ({
  prodId,
  displayImage,
  title,
  costPrice,
  sellingPrice,
}: ProductCardProps) => {
  // const [active, setActive] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center space-y-1 lg:space-y-2">
      <Link
        href={`/product/${prodId}`}
        className="w-fit h-fit flex flex-col items-center justify-center space-y-1 lg:space-y-2"
      >
        <div
          className="size-[150px] lg:size-[250px] 2xl:size-[300px] bg-neutral-200 rounded-lg lg:rounded-xl overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-200 ease-in-out relative"
          // onMouseEnter={() => setActive(true)}
          // onMouseLeave={() => setActive(false)}
        >
          {/* image of the product */}
          <Image
            src={displayImage}
            alt="product"
            width={300}
            height={300}
            className={`w-full object-cover transition-all hover:scale-120 duration-150 ease-in-out absolute`}
          />
          {/* <Image
            src={hoverImage}
            alt="product"
            width={300}
            height={300}
            className="w-full object-cover bg-neutral-200"
          /> */}
          <IoMdHeartEmpty className="absolute right-2 top-2 lg:right-5 lg:top-5 border size-6 p-1 lg:size-8 rounded-full bg-white opacity-70 text-darkTeal hover:opacity-100 transition-all duration-200" />
        </div>

        <div className="flex flex-col items-center justify-center">
          {/* title of the product */}
          <h3 className="text-xs lg:text-base lg:leading-tight font-light">
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
      </Link>

      {/* Add to cart button */}
      <CallToActionBtn
        text="Add to Cart"
        variant="link"
        href="#"
        className="w-full flex items-center justify-center gap-2 bg-darkTeal text-ivory rounded-lg lg:rounded-xl py-2 lg:py-3 lg:px-4 hover:opacity-90 transition-all duration-200 ease-in-out"
      >
        <BiCart size={16} />
      </CallToActionBtn>
    </div>
  );
};

export default ProductCard;
