import React from "react";

import frame29 from "../assets/Frame 29.png";
import frame30 from "../assets/Frame 30.png";
import frame31 from "../assets/Frame 31.png";
import frame32 from "../assets/Frame 32.png";

function Features() {
  const features = [
    {
      image: frame29,
      description: "Order easily and track deliveries in real time."
    },
    {
      image: frame30,
      description: "Manage deliveries, routes, and order updates with ease."
    },
    {
      image: frame31,
      description: "Track every delivery from pickup to doorstep."
    },
    {
      image: frame32,
      description: "Connect customers and drivers seamlessly."
    }
  ];

  return (
    <section
      id="features"
      className="bg-[#191919] px-5 md:px-10 py-6"
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#242424] border border-[#323232] rounded-xl p-4 md:p-5 flex flex-col justify-between hover:bg-[#2c2c2c] transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <img
                src={feature.image}
                alt={`Feature ${index + 1}`}
                className="w-full max-w-[230px] h-[52px] object-contain object-left"
              />
            </div>

            <p className="text-[#9e9e9e] text-[11px] leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;