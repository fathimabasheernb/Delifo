import React from "react";

import mask from "../assets/Mask group.png";
import image1 from "../assets/image 1.png";
import image2 from "../assets/image 2.png";
import image4 from "../assets/image 4.png";

function Hero() {
  return (
    <section className="relative overflow-x-clip pt-3 md:pt-5 pb-4 text-center px-4 sm:px-6">
      {/* TOP-LEFT FLOATING GROCERY BASKET */}
      <img
        src={image4}
        alt="Shopping basket"
        className="
          hidden sm:block
          absolute
          z-10
          top-1 md:top-2
          left-[5%] lg:left-[12%]
          w-[68px] md:w-[96px]
          h-auto
          object-contain
          -rotate-12
          pointer-events-none
        "
      />

      {/* TOP-RIGHT FLOATING FOOD COMBO */}
      <img
        src={image2}
        alt="Food delivery"
        className="
          hidden sm:block
          absolute
          z-10
          top-1 md:top-2
          right-[5%] lg:right-[12%]
          w-[72px] md:w-[104px]
          h-auto
          object-contain
          rotate-12
          pointer-events-none
        "
      />

      {/* HEADLINE, DESCRIPTION & BUTTONS */}
      <div className="relative z-20 max-w-4xl mx-auto">
        <h1 className="text-[32px] sm:text-[46px] md:text-[56px] font-black tracking-[-0.025em] leading-[1.08] text-[#1f1f1f]">
          DELIVERY MANAGEMENT
          <br />
          SOFTWARE <span className="font-normal">WITH</span>
          <br />
          <span className="text-[#ff293a] italic font-bold">
            Last Mile Excellence
          </span>
        </h1>

        <p className="text-[#666666] text-xs md:text-[13px] max-w-[540px] mx-auto mt-4 leading-[1.6]">
          An effective delivery management software automates and simplifies the
          whole top-to-end delivery process. Leverage your revenue through
          delivery and dispatch software.
        </p>

        <div className="flex items-center justify-center gap-3.5 mt-6">
          <button
            type="button"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#ff3b30] to-[#e61938] text-white w-[142px] h-[38px] rounded-full text-xs font-semibold shadow-md shadow-red-200/70 hover:opacity-95 transition"
          >
            Request a Demo
          </button>

          <a
            href="#features"
            className="inline-flex items-center justify-center bg-white border border-gray-300 text-[#222222] w-[122px] h-[38px] rounded-full text-xs font-semibold hover:border-gray-900 hover:bg-gray-900 hover:text-white transition"
          >
            Features
          </a>
        </div>
      </div>

      {/* HERO ILLUSTRATION (1280 x 418 PROPORTION + UPPER-RIGHT BOX ASSET) */}
      <div className="relative max-w-[1280px] mx-auto mt-2 md:mt-3">
        <img
          src={image1}
          alt="Hands holding parcel box"
          style={{ width: "128px", height: "128px", opacity: 1 }}
          className="
            hidden lg:block
            absolute
            z-20
            top-1
            left-[71.875%]
            w-[128px]
            h-[128px]
            object-contain
            pointer-events-none
          "
        />

        <img
          src={mask}
          alt="Delivery rider, buildings and globe"
          className="relative z-10 w-full max-w-[1280px] md:h-[418px] mx-auto object-contain"
        />
      </div>
    </section>
  );
}

export default Hero;