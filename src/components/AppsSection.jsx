import React from "react";

import customerApp from "../assets/Group 466.png";
import driverApp from "../assets/Group 468.png";

import googlePlay from "../assets/Store download button(1).png";
import appStore from "../assets/Store download button.png";

function AppsSection() {
  const apps = [
    {
      title: "Customer App",
      description:
        "Give customers complete visibility with real-time tracking, instant notifications, and a seamless ordering experience.",
      image: customerApp
    },
    {
      title: "Driver App",
      description:
        "Help drivers manage deliveries with smart navigation, optimized routes and real-time delivery updates.",
      image: driverApp
    }
  ];

  return (
    <section className="bg-white px-6 md:px-10 py-14">
      <div className="max-w-[1214.5px] mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.5fr] gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#202020]">
            Powerful Apps
            <br />
            for <span className="text-[#ff2e3d]">Every User</span>
          </h2>

          <p className="text-[#666666] text-xs md:text-sm leading-6 mt-5 max-w-sm">
            Powerful mobile apps designed to connect customers and drivers,
            making ordering, delivery management, and real-time tracking simple
            and seamless.
          </p>

          {/* DOWNLOAD BUTTONS */}
          <div className="mt-8">
            <p className="text-xs text-[#666666] mb-3">Download From</p>

            <div className="flex gap-3 items-center">
              <img
                src={googlePlay}
                alt="Get it on Google Play"
                className="w-[136px] h-[46px] object-contain cursor-pointer"
              />

              <img
                src={appStore}
                alt="Download on the App Store"
                className="w-[136px] h-[46px] object-contain cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* APP SCREENSHOTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {apps.map((app, index) => (
            <div key={index} className="overflow-hidden rounded-2xl">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AppsSection;