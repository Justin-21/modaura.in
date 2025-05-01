import React from "react";

const Footer = () => {
  return (
    <section>
      <div className="w-screen h-full bg-beige flex flex-col items-start justify-start mt-16 px-4 lg:px-12 pt-4 lg:pt-8 lg:pb-24 font-urbanist space-y-10">
        <div className="flex w-full items-start justify-between">
          <div>
            <h4 className="text-xl uppercase tracking-wide">All Jewellery</h4>
            <ul>
              <li>Earrings</li>
              <li>Necklaces</li>
              <li>Bracelets</li>
              <li>Rings</li>
              <li>Gift Boxes</li>
              <li>Personalised Jewellery</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms Of Service</li>
              <li>Refund Policy</li>
              <li>FAQ&apos;s</li>
              <li>Shipping Policy</li>
              <li>Track Order</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl uppercase tracking-wide">Contact Us</h4>
            <p>Modaura E-commerce Pvt. Ltd.</p>
            <p>support@modaura.in</p>
            <p>Whatsapp - +91 9876543210</p>
            <p>XYZ Delhi - 110003</p>
            <p>India</p>
          </div>
        </div>

        <div>
          <h4 className="text-xl uppercase tracking-wide">
            Join Our Community
          </h4>
          <ul className="flex space-x-8">
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>

        <div>©2024, Modaura Jewellery</div>
      </div>
    </section>
  );
};

export default Footer;
