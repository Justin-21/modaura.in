"use client";

import React from "react";

const CheckoutPage = () => {
  return (
    <>
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
    </>
  );
};

export default CheckoutPage;
