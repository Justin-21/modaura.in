import React from "react";

const Footer = () => {
  return (
    <section>
      <div className="w-screen h-full bg-beige flex flex-col items-start justify-start mt-16 px-4 lg:px-28 pt-4 lg:pt-8 pb-16 lg:pb-24 font-urbanist tracking-wide space-y-10">
        <div className="flex flex-col lg:flex-row w-full items-start lg:justify-between space-y-4">
          <div className="flex flex-col xl:space-y-2">
            <h4 className="text-lg lg:text-xl uppercase">All Jewellery</h4>
            <ul className="text-sm lg:text-base">
              <li>Earrings</li>
              <li>Necklaces</li>
              <li>Bracelets</li>
              <li>Rings</li>
              <li>Gift Boxes</li>
              <li>Personalised Jewellery</li>
            </ul>
          </div>

          <div className="flex flex-col xl:space-y-2">
            <h4 className="text-lg lg:text-xl uppercase">Info</h4>
            <ul className="text-sm lg:text-base">
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms Of Service</li>
              <li>Refund Policy</li>
              <li>FAQ&apos;s</li>
              <li>Shipping Policy</li>
              <li>Track Order</li>
            </ul>
          </div>

          <div className="[&_p]:text-sm lg:[&_p]:text-base xl:space-y-2">
            <h4 className="text-lg lg:text-xl uppercase">Contact Us</h4>
            <div>
              <p>Modaura E-commerce Pvt. Ltd.</p>
              <p>support@modaura.in</p>
              <p>Whatsapp +91 9876543210</p>
              <p>XYZ Delhi - 110003</p>
              <p>India</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg lg:text-xl uppercase">Join Our Community</h4>
          <ul className="flex flex-col lg:flex-row space-x-8 text-sm lg:text-base space-y-1 lg:space-y-0">
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>

        <div className="text-sm lg:text-base">©2024, Modaura Jewellery</div>
      </div>
    </section>
  );
};

export default Footer;
