import React from "react";
import promoPhoneHand from "../assets/Group 70(1).png";

function SmarterPromoBanner() {
  return (
    <section className="relative w-full bg-white py-4 overflow-hidden">
      {/* Hidden SVG ClipPath definition for the upward red arch */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="redArchClip" clipPathUnits="objectBoundingBox">
            {/* Top arches up (0, 0.08 -> control 0.5, -0.06 -> 1, 0.08)
                Bottom arches up (1, 1 -> control 0.5, 0.86 -> 0, 1) */}
            <path d="M 0,0.08 Q 0.5,-0.06 1,0.08 L 1,1 Q 0.5,0.86 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        style={{ clipPath: "url(#redArchClip)" }}
        className="w-full bg-gradient-to-r from-[#ff333f] via-[#f22138] to-[#e51738] text-white px-6 md:px-16 pt-20 pb-12 md:pt-24 md:pb-8"
      >
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Left Content */}
          <div className="md:col-span-6 z-10 pb-6 md:pb-16">
            <h2 className="text-[32px] sm:text-[38px] md:text-[44px] font-bold leading-[1.15] tracking-tight">
              Smarter Delivery
              <br />
              Management
            </h2>

            <p className="text-white/90 text-sm leading-[1.6] mt-4 max-w-[420px]">
              Delifo is a no-code delivery management software for Setting up
              and managing on-demand e-commerce enterprises Delifo is a no-code
              delivery management software for
            </p>

            <button
              type="button"
              className="mt-7 bg-white text-[#e51738] px-8 py-3 rounded-full text-xs font-bold hover:bg-gray-100 transition shadow-sm"
            >
              Explore More
            </button>
          </div>

          {/* Right Image */}
          <div 
          className="
          hidden lg:block
          absolute
          z-20
          w-[600px]
          h-[245px]
          max-w-none
          right-0
          bottom-0
          object-contain
          object-bottom
          pointer-events-none
          select-none
          "
          >
            <img
              src={promoPhoneHand}
              alt="Delifo mobile app growth and analytics"
              className="w-full max-w-[460px] md:max-w-[535px] h-auto object-contain block translate-y-4"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default SmarterPromoBanner;