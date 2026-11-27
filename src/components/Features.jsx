import React from "react";

import frame29 from "../assets/Frame 29(1).png";
import frame30 from "../assets/Frame 30(1).png";
import frame31 from "../assets/Frame 31(1).png";
import frame32 from "../assets/Frame 32(1).png";

function Features() {
  const features = [
    {
      image: frame29,
      description: "Order easily and track deliveries in real time.",
    },
    {
      image: frame30,
      description: "Manage deliveries, routes, and order updates with ease.",
    },
    {
      image: frame31,
      description: "Track every delivery from pickup to doorstep.",
    },
    {
      image: frame32,
      description: "Connect customers and drivers seamlessly.",
    },
  ];

  return (
    <section
      id="features"
      className="w-full bg-[#191919] px-5 md:px-10 py-6"
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {features.map((feature, index) => (
          <button
            key={index}
            type="button"
            className="
              group
              w-full max-w-[250px]
              h-[120px]
              mx-auto
              p-0
              bg-[#242424]
              border border-[#323232]
              rounded-xl
              flex flex-col
              items-center
              gap-[10px]
              overflow-hidden
              text-left
              cursor-pointer
              transition-all duration-300
              hover:border-[#ff383c]
              hover:bg-[#2b2b2b]
              hover:-translate-y-1
              hover:shadow-lg hover:shadow-red-500/10
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#ff383c]
            "
          >
            {/* Image fills the complete 250 x 60 area */}
            <img
              src={feature.image}
              alt={`Feature ${index + 1}`}
              className="
                block
                w-full
                h-[60px]
                shrink-0
                object-fill
                transition-transform duration-300
                group-hover:scale-[1.02]
              "
            />

            {/* Description */}
            <p className="
              w-full
              px-3
              text-[11px]
              leading-relaxed
              text-[#999999]
              transition-colors duration-300
              group-hover:text-white
            ">
              {feature.description}
            </p>

          </button>
        ))}

      </div>
    </section>
  );
}

export default Features;