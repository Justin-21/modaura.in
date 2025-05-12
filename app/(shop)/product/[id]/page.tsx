"use client";

import CallToActionBtn from "@/components/ui/callToActionBtn";
import displayImage from "@/public/silver-cube-bracelet.png";
import Image from "next/image";
// import { useParams } from "next/navigation";
import { IoMdAdd, IoMdHeart } from "react-icons/io";
import { MdCancel, MdLocalShipping } from "react-icons/md";
import { RiSubtractLine } from "react-icons/ri";

import { FAQs } from "@/constants/data";

import Popular from "@/components/layout/Popular";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { BiSolidOffer } from "react-icons/bi";

const Page = () => {
  // const params = useParams();
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="w-full md:h-[600px] flex max-sm:flex-col items-start justify-between relative overflow-scroll mt-5 gap-5 lg:gap-10">
        {/* Images of the product */}
        <div className="w-full md:w-1/2 size-fit md:sticky md:top-0">
          <div className="w-full flex max-lg:flex-col-reverse max-sm:items-center justify-between max-lg:gap-2 lg:space-x-2.5">
            <div className="max-lg:w-full flex lg:flex-col max-lg:space-x-2 md:space-y-2 *:max-lg:size-14 *:size-20 ">
              <Image
                src={displayImage}
                alt="Product Image"
                className="object-cover w-full aspect-square"
              />
              <Image
                src={displayImage}
                alt="Product Image"
                className="object-cover w-full aspect-square"
              />
              <Image
                src={displayImage}
                alt="Product Image"
                className="object-cover w-full aspect-square"
              />
            </div>

            <Image
              src={displayImage}
              alt="Product Image"
              className="object-cover aspect-square max-lg:size-full xl:size-[540px]"
            />
          </div>
        </div>

        {/* Description of the product */}
        <div className="md:w-1/2 flex flex-col space-y-5">
          <ul className="*:tracking-wide space-y-2 lg:space-y-5">
            <li className="flex flex-col">
              <span className="font-semibold text-2xl lg:text-4xl">
                Silver Cube Bracelet
              </span>
              <span className="font-medium">
                A bright shiny cubical bracelet fot the Gen-zs.
              </span>
            </li>
            <li className="font-medium">Reviews</li>
            <li className="font-bold flex items-baseline space-x-3">
              <span className="text-black-1 text-2xl">Rs. 1999</span>
              <span className="text-darkTeal text-lg line-through">
                Rs. 999
              </span>
            </li>
          </ul>

          {/* Quantity of the product */}
          <div className="w-full flex h-full *:border *:border-darkTeal">
            <button
              className="h-10 w-10 flex items-center justify-center bg-darkTeal text-ivory rounded-l"
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
              }}
            >
              <RiSubtractLine size={20} />
            </button>

            <span className="px-6 py-2 h-10 w-20 text-center">{quantity}</span>

            <button
              className="h-10 w-10 flex items-center justify-center bg-darkTeal text-ivory rounded-r"
              onClick={() => {
                setQuantity(quantity + 1);
              }}
            >
              <IoMdAdd size={20} />
            </button>
          </div>

          <div className="w-full space-y-2">
            <CallToActionBtn
              text="Add To Cart"
              className="w-full bg-linear-to-r from-darkTeal to-teal-500 py-3 text-ivory uppercase tracking-wide font-medium rounded-md lg:text-lg"
              variant="default"
            />

            <CallToActionBtn
              text="Add To Wishlist"
              className="w-full bg-ivory border-2 border-darkTeal py-3 text-darkTeal font-semibold uppercase tracking-wide rounded-md flex gap-2 "
              variant="default"
            >
              <IoMdHeart size={20} />
            </CallToActionBtn>
          </div>

          <div className="w-full flex flex-col items-center justify-center">
            <span className="w-full flex gap-2 items-center justify-center py-2 rounded-t-md font-medium text-ivory bg-darkTeal">
              <BiSolidOffer size={20} /> Available Offers
            </span>
            <ul className="w-full flex flex-col *:py-2 border border-darkTeal rounded-b-md *:border-b *:border-darkTeal *:last:border-b-0">
              <li className="text-sm text-center">
                <h5>
                  Flat <span className="font-bold">Rs. 500</span> off on
                  purchases over Rs. 1999
                </h5>
                <span className="font-bold">Use MODAURA500</span>
              </li>
              <li className="text-sm text-center">
                <h5>
                  Flat <span className="font-bold">Rs. 500</span> off on
                  purchases over Rs. 1999
                </h5>
                <span className="font-bold">Use MODAURA500</span>
              </li>
            </ul>
          </div>

          {/* Product Details */}
          <div>
            <h3 className="font-semibold text-lg">Product Details</h3>
            <p className="text-sm tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatibus, cumque, voluptates, quibusdam quisquam voluptatibus
              cumque voluptates quibusdam quisquam voluptatibus cumque
              voluptates quibusdam.
            </p>
          </div>

          <div className="grid grid-cols-2 space-y-2">
            <div className="flex flex-col">
              <span className="font-semibold">Color</span>
              <span className="text-sm text-gray-500">Silver</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Material</span>
              <span className="text-sm text-gray-500">
                Copper With Electroplating
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Diameter</span>
              <span className="text-sm text-gray-500">0.7cm (Adjustable)</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Category</span>
              <span className="text-sm text-gray-500">Bracelet</span>
            </div>
          </div>

          <Accordion
            type="multiple"
            className="space-y-2 *:border *:border-neutral-400 *:rounded-md"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center space-x-2">
                  <MdCancel
                    size={20}
                    className="text-red-600"
                  />
                  <span className="font-semibold">Cancellation Policies</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center space-x-2">
                  <MdLocalShipping
                    size={20}
                    className="text-darkTeal"
                  />
                  <span className="font-semibold">Shipping & Returns</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="w-full">
        <Popular />
      </div>

      {/* FAQs */}
      <div className="xl:w-1/2">
        <h1 className="font-semibold text-lg">Frequently Asked Questions</h1>

        <Accordion
          type="multiple"
          className="space-y-2 *:border-b *:border-neutral-400"
        >
          {FAQs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="*:tracking-wide"
            >
              <AccordionTrigger className="flex-row-reverse justify-end">
                <span className="font-semibold">{faq.query}</span>
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Page;
