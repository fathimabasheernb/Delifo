import React from "react";

import solution1 from "../assets/Group 1321314529.png";
import solution2 from "../assets/Group 1321314534.png";
import solution3 from "../assets/Group 1321314535.png";
import solution4 from "../assets/Group 1321314536.png";

import handoverImage from "../assets/ChatGPT Image Jul 15, 2026, 12_43_12 PM 1.png";

import realtimeIcon from "../assets/Frame 36(2).png";
import easyIcon from "../assets/Frame 36(3).png";
import satisfactionIcon from "../assets/Frame 36(4).png";
import platformsIcon from "../assets/Frame 36(5).png";

function CompleteSolutionAndSmarter() {
  const solutions = [
    {
      image: solution1,
      title: "Smart Order Management",
    },
    {
      image: solution2,
      title: "Live Delivery Tracking",
    },
    {
      image: solution3,
      title: "Route Optimization",
    },
    {
      image: solution4,
      title: "Delivery Analytics",
    },
  ];

  const leftFeatures = [
    {
      icon: realtimeIcon,
      title: "Real-time Monitoring",
      description:
        "Track drivers in real-time, monitor deliveries, and quickly reassign orders to ensure faster, more efficient operations.",
    },
    {
      icon: easyIcon,
      title: "Easy delivery management",
      description:
        "Optimize delivery routes, improve driver productivity, and ensure faster, on-time deliveries while simplifying driver payouts.",
    },
  ];

  const rightFeatures = [
    {
      icon: satisfactionIcon,
      title: "Customer Satisfaction",
      description:
        "Deliver a seamless customer experience with easy ordering, real-time notifications, proof of delivery, and valuable customer feedback.",
    },
    {
      icon: platformsIcon,
      title: "Web, iOS, and Android",
      description:
        "Manage deliveries across web and mobile with a unified platform that ensures seamless fulfillment and efficient operations.",
    },
  ];

  return (
    <div className="relative w-full overflow-x-clip">
      {/* PART 1: DARK SECTION - COMPLETE DELIVERY MANAGEMENT SOLUTION */}
      <section className="relative bg-[#1b1b1b] text-white pt-14 pb-40 md:pb-48 px-6 md:px-10">
        <div className="max-w-[1214.5px] mx-auto text-center">
          <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-bold tracking-[-0.02em]">
            Complete Delivery{" "}
            <span className="text-[#ff293a]">Management Solution</span>
          </h2>

          <p className="text-[#9e9e9e] text-[11px] md:text-[12.5px] mt-2.5 max-w-2xl mx-auto leading-relaxed">
            Powerful tools to manage every step of your delivery operations with
            greater speed, visibility, and control.
          </p>

          {/* 4 CIRCULAR SOLUTION CARDS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10">
            {solutions.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[155px] h-[155px] sm:w-[175px] sm:h-[175px] object-contain"
                />
                <h3 className="text-[11.5px] md:text-[12.5px] font-medium text-white mt-3">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* CENTER BRIDGING PERSON (BELOW THE 4 LABELS, BRIDGING INTO WHITE SECTION) */}
        <div className="hidden lg:flex justify-center absolute inset-x-0 -bottom-44 xl:-bottom-48 z-20 pointer-events-none">
          <img
            src={handoverImage}
            alt="Delifo delivery professional handing parcel to customers"
            className="w-[260px] xl:w-[290px] h-auto object-contain select-none"
          />
        </div>
      </section>

      {/* PART 2: WHITE SECTION - SMARTER DELIVERY MANAGEMENT + BRIDGING IMAGE */}
      <section className="relative bg-white pt-12 lg:pt-16 pb-20 px-6 md:px-10">
        <div className="max-w-[1214.5px] mx-auto">
          {/* MOBILE / TABLET BRIDGING IMAGE */}
          <div className="flex justify-center -mt-28 mb-6 lg:hidden relative z-20">
            <img
              src={handoverImage}
              alt="Delifo delivery professional handing parcel to customers"
              className="w-[210px] sm:w-[240px] h-auto object-contain pointer-events-none select-none"
            />
          </div>

          {/* SECTION HEADING (TOP-LEFT) */}
          <div className="mb-8 lg:mb-6">
            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold text-[#1e1e1e] tracking-[-0.02em] leading-[1.12]">
              Smarter <span className="text-[#ff293a]">Delivery</span>
              <br />
              <span className="text-[#ff293a]">Management</span>
            </h2>
          </div>

          {/* 3-COLUMN LAYOUT: LEFT FEATURES | CENTER GAP FOR BRIDGING IMAGE | RIGHT FEATURES */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-8 items-start">
            {/* LEFT 2 FEATURES */}
            <div className="lg:col-span-4 space-y-7">
              {leftFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-10 h-10 object-contain shrink-0 mt-0.5"
                  />
                  <div>
                    <h3 className="text-[13px] md:text-[14px] font-bold text-[#1e1e1e]">
                      {feature.title}
                    </h3>
                    <p className="text-[11px] text-[#6e6e6e] leading-[1.55] mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CENTER SPACER SO TEXT DOESN'T OVERLAP THE BRIDGING IMAGE */}
            <div className="hidden lg:block lg:col-span-4" />

            {/* RIGHT 2 FEATURES */}
            <div className="lg:col-span-4 space-y-7">
              {rightFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-10 h-10 object-contain shrink-0 mt-0.5"
                  />
                  <div>
                    <h3 className="text-[13px] md:text-[14px] font-bold text-[#1e1e1e]">
                      {feature.title}
                    </h3>
                    <p className="text-[11px] text-[#6e6e6e] leading-[1.55] mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CompleteSolutionAndSmarter;