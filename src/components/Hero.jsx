import React from "react";

import mask from "../assets/Mask group.png";
import image2 from "../assets/image 2.png";
import image4 from "../assets/image 4.png";

function Hero() {

  return (

    <section className="relative pt-5 md:pt-8 text-center px-5">

      {/* FLOATING SHOPPING BASKET */}

      <img
        src={image4}
        alt="Shopping basket"
        className="
          absolute
          z-10
          top-0
          left-[5%] md:left-[9%]
          w-20 sm:w-24 md:w-36
          h-auto
          object-contain
          -rotate-12
        "
      />

      {/* FLOATING FOOD IMAGE */}

      <img
        src={image2}
        alt="Food delivery"
        className="
          absolute
          z-10
          top-0
          right-[5%] md:right-[9%]
          w-20 sm:w-24 md:w-36
          h-auto
          object-contain
          rotate-12
        "
      />

      {/* MAIN CONTENT */}

      <div className="relative z-20 max-w-4xl mx-auto">

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-[#252525]">

          DELIVERY MANAGEMENT

          <br />

          SOFTWARE <span className="font-light">WITH</span>

          <br />

          <span className="text-red-500 italic font-semibold">
            Last Mile Excellence
          </span>

        </h1>

        {/* DESCRIPTION */}

        <p className="text-gray-500 text-xs md:text-sm max-w-xl mx-auto mt-5 leading-6">

          An effective delivery management system automates and
          simplifies the way you manage delivery processes.
          Leverage your business through smart delivery solutions.

        </p>

        {/* BUTTONS */}

        <div className="flex justify-center gap-4 mt-6">

          <button className="bg-red-500 text-white px-7 py-3 rounded-full text-xs font-semibold shadow-lg shadow-red-200 hover:bg-red-600 transition">

            Request a Demo

          </button>

          <button className="bg-white border border-gray-300 text-gray-800 px-7 py-3 rounded-full text-xs font-semibold hover:bg-gray-900 hover:text-white transition">

            Features

          </button>

        </div>

      </div>


      {/* MAIN ILLUSTRATION */}

      <div className="relative w-full max-w-7xl mx-auto mt-4 md:mt-6 h-[300px] sm:h-[350px] md:h-[400px]">

        <img
          src={mask}
          alt="Delivery rider, buildings and globe"
          className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            w-[125%]
            max-w-none
            h-full
            object-contain
            object-bottom
          "
        />

      </div>

    </section>

  );

}

export default Hero;