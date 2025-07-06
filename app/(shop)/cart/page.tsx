"use client";

import { Separator } from "@/components/ui/separator";
import { cartProducts } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsHandbag } from "react-icons/bs";

const CartPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cartItem, setCartItem] = useState(1);
  const [promoCode, setPromoCode] = useState("");

  const subtotal =
    parseInt(cartProducts[0].costPrice) + parseInt(cartProducts[1].costPrice);

  return (
    <>
      {/* capture cart state from zustand and render conditionally */}
      {cartItem === 0 ? (
        <div className="text-center w-full h-full flex flex-col items-center justify-center gap-5 my-5 py-10 shadow-lg border border-neutral-200">
          <div className="flex flex-col items-center justify-center gap-5">
            <BsHandbag className="size-30 fill-darkTeal" />
            <article className="flex flex-col">
              <span className="text-2xl font-semibold">
                Your cart is empty!!!
              </span>
              <span className="font-light text-sm">
                Add items to your cart now.
              </span>
            </article>
          </div>

          <Link
            href="/"
            className="bg-darkTeal opacity-85 hover:opacity-100 w-[200px] h-[40px] rounded text-ivory place-content-center shadow transition-all`"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="w-full h-full flex justify-between gap-5 font-urbanist">
          {/* section to display all the details of the customer */}
          <div className="w-full h-full flex flex-col space-y-2">
            <span className="text-3xl font-medium">Delivery Information</span>

            <form>
              <label htmlFor="full-name">Full Name</label>
              <input
                type="text"
                id="full-name"
                className="py-2 w-full rounded-xl px-3 placeholder:text-sm focus:outline-none border border-neutral-300 focus:bg-white"
                onChange={() => {}}
                placeholder="Tatiya Vicchu"
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="py-2 w-full rounded-xl px-3 placeholder:text-sm focus:outline-none border border-neutral-300 focus:bg-white"
                onChange={() => {}}
                placeholder="tatiya@gmail.com"
              />

              <label htmlFor="phone-number">Phone Number</label>
              <input
                type="tel"
                id="phone-number"
                className="py-2 w-full rounded-xl px-3 placeholder:text-sm focus:outline-none border border-neutral-300 focus:bg-white"
                onChange={() => {}}
                placeholder="+91 9876543210"
              />
            </form>
          </div>

          {/* item subtotal section */}
          <div className="w-full h-full bg-[#ececec] rounded-2xl flex flex-col gap-5 p-10">
            <span className="text-3xl font-medium">Cart Summary</span>

            {/* Image section to display product and quantity */}
            <div className="flex flex-col gap-5">
              {cartProducts.map((product, _) => (
                <div
                  key={_}
                  className="bg-white rounded-3xl overflow-hidden flex items-center gap-5"
                >
                  <Image
                    src={product.displayImage}
                    alt="p-1"
                    width={200}
                    height={200}
                    className="size-[150px]"
                  />

                  {/* Details of the product */}
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">{product.title}</span>
                    <span className="font-light text-sm line-through">
                      ₹ {product.costPrice}
                    </span>
                    <span className="font-semibold text-xl">
                      ₹ {product.sellingPrice}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <Separator className="bg-neutral-300" />

            <ul className="*:flex flex flex-col *:justify-between gap-3">
              <li>
                <p>Subtotal</p>
                <p>₹ {subtotal}</p>
              </li>
              <li>
                <p>Discount</p>
                <p>- ₹ 2000</p>
              </li>
              <li>
                <p>Delivery</p>
                <p>₹ 999</p>
              </li>
              <li>
                <p>Taxes</p>
                <p>₹ 999</p>
              </li>
            </ul>

            <div className="flex items-center justify-between font-semibold">
              <span>Total</span>
              <span>Rs. 1999</span>
            </div>

            <Separator className="bg-neutral-300" />

            <div className="flex flex-col gap-2">
              <span className="text-sm">Do you have a promotional code?</span>
              <div className="flex bg-white rounded-full">
                <input
                  type="text"
                  name="apply promo code"
                  className="py-2 w-full rounded-full px-3 placeholder:text-sm focus:outline-none"
                  onChange={(e) => {
                    e.preventDefault();
                    setPromoCode(e.target.value);
                  }}
                  placeholder="Enter promo code"
                />
                <button
                  type="submit"
                  className="px-5 text-nowrap bg-darkTeal rounded-full text-white"
                >
                  apply code
                </button>
              </div>

              {promoCode}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
