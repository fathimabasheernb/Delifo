import React from "react";

import customer from "../assets/Group 263.png";
import driver from "../assets/Group 262.png";
import admin from "../assets/Group 264.png";

function AdvancedFeatures() {
  const features = [
    {
      number: "1",
      image: customer,
      title: "Customer Application",
      description:
        "Customer can have a uber- like management system with real-time tracking."
    },
    {
      number: "2",
      image: driver,
      title: "Driver Application",
      description:
        "Drivers can know the new orders and manage deliveries accordingly. Analyzing the profile"
    },
    {
      number: "3",
      image: admin,
      title: "Admin Panel",
      description:
        "Analytic data of all orders are stored in admin dashboard of a delivery dispatch software."
    }
  ];

  return (
    <section className="bg-white px-6 md:px-10 pt-14 pb-6">
      <div className="max-w-[1214.5px] mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5">
          <div>
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#202020] tracking-tight">
              Advanced Features Of
              <span className="text-[#ff293a]"> Delifo</span>
            </h2>

            <p className="text-[#666666] text-xs md:text-[13px] mt-2.5 max-w-xl leading-[1.6]">
              Stay ahead of the competition with a powerful delivery management
              platform that streamlines operations, optimizes deliveries, and
              supports business growth.
            </p>
          </div>

          <div className="flex gap-3 shrink-0">
            <button
              type="button"
              className="bg-gradient-to-r from-[#ff3b30] to-[#e61938] text-white px-6 py-2.5 rounded-full text-xs font-semibold hover:opacity-95 transition"
            >
              Explore More
            </button>

            <button
              type="button"
              className="bg-white border border-gray-300 text-[#202020] px-6 py-2.5 rounded-full text-xs font-semibold hover:border-gray-900 hover:bg-gray-900 hover:text-white transition"
            >
              Request a Demo
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
          {features.map((feature, index) => (
            <div key={index} className="relative text-center pt-3">
              <span
                aria-hidden="true"
                className="pointer-events-none select-none absolute -top-3 left-1/2 -translate-x-20 text-[96px] leading-none font-black text-[#fff0f1]"
              >
                {feature.number}
              </span>

              <img
                src={feature.image}
                alt={feature.title}
                className="relative z-10 w-[108px] h-[108px] object-contain mx-auto"
              />

              <h3 className="relative z-10 text-sm md:text-[15px] font-bold text-[#202020] mt-4">
                {feature.title}
              </h3>

              <p className="relative z-10 text-[#777777] text-[11px] leading-[1.5] mt-2 max-w-[230px] mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdvancedFeatures;