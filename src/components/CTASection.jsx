
import React from "react";
import Delivery21 from "../assets/Delivery 2 1.png";

function CTASection() {
  return (
    <section className="relative w-full bg-white z-30">

      <div className="relative w-full min-h-[300px] lg:min-h-[300px]">

        {/* Red Banner */}
        <div
          className="
            absolute
            right-0
            bottom-0
            w-[82%]
            sm:w-[85%]
            lg:w-[88%]
            min-h-[115px]
            lg:h-[115px]
            bg-gradient-to-r
            from-[#ff383c]
            to-[#e51738]
            rounded-l-[8px]
            z-10
            flex
            items-center
          "
        >

          {/* Banner Content */}
          <div
            className="
              w-full
              pl-[110px]
              sm:pl-[150px]
              md:pl-[190px]
              lg:pl-[230px]
              pr-5
              sm:pr-8
              lg:pr-16
              flex
              flex-col
              sm:flex-row
              items-center
              justify-between
              gap-4
            "
          >
            <h2
              className="
                text-white
                text-sm
                sm:text-base
                md:text-lg
                lg:text-[21px]
                font-bold
                leading-snug
                text-center
                sm:text-left
              "
            >
              Build Your Delivery Management Services On Delifo
            </h2>

            <button
              type="button"
              className="
                relative
                overflow-hidden
                shrink-0
                bg-white
                text-[#e51738]
                px-7
                py-3
                rounded-full
                text-xs
                font-bold
                shadow-md
                transition-all
                duration-300
                hover:bg-[#252525]
                hover:text-white
                hover:scale-105
                hover:shadow-xl
                active:scale-95
              "
            >
              <span className="relative z-10">
                Explore More
              </span>
            </button>
          </div>
        </div>

        {/* Delivery Bike Overlay */}
        <div
          className="
            absolute
            left-0
            bottom-0
            z-20
            w-[190px]
            sm:w-[230px]
            md:w-[260px]
            lg:w-[299px]
            group
          "
        >
          <img
            src={Delivery21}
            alt="Delivery bike"
            className="
              w-full
              h-auto
              object-contain
              object-bottom
              transition-transform
              duration-700
              ease-in-out
              group-hover:-translate-y-3
              group-hover:translate-x-2
              pointer-events-none
              select-none
            "
          />
        </div>

      </div>
    </section>
  );
}

export default CTASection;