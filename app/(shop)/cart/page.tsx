"use client";

import useCartStore from "@/app/stores/useCartStore";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsHandbag } from "react-icons/bs";
import { LuMinus, LuPlus } from "react-icons/lu";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCartStore();
  const [cartItem, setCartItem] = useState(cart.length);
  const [promoCode, setPromoCode] = useState("");

  //calculate cart value
  const subtotal = 0;

  useEffect(() => {
    setCartItem(cart.length);
  }, [cart]);

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
          {/* item subtotal section */}
          <div className="w-2/3 h-full bg-[#ececec] rounded-2xl flex flex-col gap-5 p-10">
            <span className="text-3xl font-medium">Cart Summary</span>

            {/* Image section to display product and quantity */}

            {cart.map((product) => (
              <div
                key={product?._id?.toString()}
                className="bg-white rounded-3xl overflow-hidden flex w-full h-full"
              >
                <div className="flex w-full h-full p-5">
                  <Image
                    src={product.images && product.images[0]}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="size-[150px] rounded-lg"
                  />

                  {/* Details of the product */}
                  <div className="w-full flex flex-col items-start justify-between p-5">
                    <div className="w-full flex items-start justify-between">
                      <div className="flex flex-col">
                        <span className="font-medium">{product.name}</span>
                        <span className="font-light text-sm line-through">
                          ₹ {product?.price?.mrp}
                        </span>
                        <span className="font-semibold text-xl">
                          ₹ {product?.price?.sellingPrice}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-1">
                        <button className="p-2 rounded-full border cursor-pointer hover:border-neutral-500">
                          <LuMinus />
                        </button>
                        <div className="px-5 rounded-full border py-1">
                          {product.quantity}
                        </div>
                        <button className="p-2 rounded-full border cursor-pointer hover:border-neutral-500">
                          <LuPlus />
                        </button>
                      </div>
                    </div>

                    <div
                      className="cursor-pointer font-semibold"
                      onClick={() => removeFromCart(product._id.toString())}
                    >
                      Remove
                    </div>
                  </div>
                </div>

                <div></div>
              </div>
            ))}

            <div className="w-full flex justify-end">
              <button
                onClick={() => clearCart()}
                className="bg-red-500 rounded-full px-4 py-2 w-fit text-ivory cursor-pointer hover:bg-red-600 transition"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Subtotal Section */}
          <div className="w-1/3">
            <ul className="*:flex flex flex-col *:justify-between gap-3 w-full">
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
