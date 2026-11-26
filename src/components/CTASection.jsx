import React from "react";
import Delivery21 from "../assets/Delivery 2 1.png";

function CTASection() {
  return (
    <section className="bg-white px-6 md:px-10 pt-2">
      <div className="relative max-w-[1214.5px] mx-auto lg:h-[270.1131px] flex items-end">
        <div
          style={{ minHeight: "97.3135px", opacity: 1 }}
          className="
            w-full
            lg:w-[1009.8689px]
            lg:h-[97.3135px]
            lg:ml-auto
            bg-gradient-to-r from-[#ff383c] to-[#e51738]
            rounded-[6px]
            px-6 sm:px-8 lg:pl-[45px] lg:pr-8
            py-5 lg:py-0
            flex flex-col sm:flex-row items-center justify-between gap-4
          "
        >
          <h2 className="text-white text-base sm:text-lg lg:text-[21px] font-bold text-center sm:text-left leading-snug">
            Build Your Delivery Management Services On Delifo
          </h2>

          <button
            type="button"
            className="bg-white text-[#e51738] px-6 py-2 rounded-full text-xs font-bold hover:bg-gray-100 transition shrink-0"
          >
            Explore More
          </button>
        </div>

        <img
          src={Delivery21}
          alt="Delivery bike"
          style={{ width: "299.2162px", height: "270.1131px", opacity: 1 }}
          className="
            hidden lg:block
            pointer-events-none
            select-none
            absolute
            left-6
            bottom-0
            w-[299.2162px]
            h-[270.1131px]
            max-w-none
            object-contain
            object-bottom
            z-10
          "
        />

        <div className="lg:hidden flex justify-center mt-4 w-full">
          <img
            src={Delivery21}
            alt="Delivery bike"
            className="w-44 sm:w-56 h-auto object-contain pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}

export default CTASection;