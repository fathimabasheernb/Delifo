import React from "react";

import deliveryMan from "../assets/delivery-man- 1.png";

import frame34 from "../assets/Frame 34.png";
import frame35 from "../assets/Frame 35.png";
import frame351 from "../assets/Frame 35(1).png";
import frame36 from "../assets/Frame 36.png";
import frame361 from "../assets/Frame 36(1).png";
import frame37 from "../assets/Frame 37.png";

function WhyChoose() {
  const benefits = [
    {
      icon: frame34,
      title: "Smart Order Management",
      description:
        "Delivery management system with smart order allocation, efficient workflows and easy order management."
    },
    {
      icon: frame35,
      title: "Easy Pickup & Delivery Scheduling",
      description:
        "An optimized delivery interface helps manage pickups and deliveries with minimal effort."
    },
    {
      icon: frame36,
      title: "Flexible Mobile Experience",
      description:
        "Provide intuitive mobile applications for customers, drivers and administrators."
    },
    {
      icon: frame361,
      title: "Customizable for Every Business",
      description:
        "The administration and configuration of delivery management software is adaptable to business needs."
    },
    {
      icon: frame351,
      title: "Real-Time Order Tracking",
      description:
        "Locate orders throughout their journey with real-time tracking and delivery updates."
    },
    {
      icon: frame37,
      title: "Ratings & Customer Feedback",
      description:
        "Delivery management software gathers ratings and reviews to improve services."
    }
  ];

  return (
    <section className="
      relative
      w-full
      bg-white
      overflow-visible
      py-12 md:py-16
    ">

      {/* DESKTOP DELIVERY PERSON */}
      <img
        src={deliveryMan}
        alt="Delifo Delivery Professional holding a delivery box"
        className="
          hidden lg:block
          absolute
          z-20
          w-[310px]
          h-[540px]
          max-w-none
          left-0
          top-[-50px]
          object-contain
          object-center
          pointer-events-none
          select-none
        "
      />

      {/* MOBILE AND TABLET DELIVERY PERSON */}
      <div className="
        flex
        justify-center
        items-center
        mb-10
        px-4
        lg:hidden
      ">
        <img
          src={deliveryMan}
          alt="Delifo Delivery Professional"
          className="
            w-[260px]
            sm:w-[340px]
            md:w-[400px]
            h-auto
            object-contain
            object-center
          "
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="
        relative
        z-30
        w-full
        max-w-[1280px]
        mx-auto
        px-6
        lg:pl-[420px]
        xl:pl-[460px]
        lg:pr-12
      ">

        {/* HEADING */}
        <div className="mb-9">

          <h2 className="
            text-[28px]
            md:text-[36px]
            font-bold
            text-[#202020]
            tracking-tight
          ">
            Why Choose <span className="text-[#ff293a]">Delifo?</span>
          </h2>

          <p className="
            text-[#666666]
            text-xs
            md:text-[13px]
            mt-2.5
            max-w-2xl
            leading-[1.6]
          ">
            Simplify delivery operations with smart dispatch, real-time
            tracking, route optimization, and powerful analytics — all from
            one platform.
          </p>

        </div>

        {/* BENEFITS GRID */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-x-8
          gap-y-7
        ">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3.5"
            >

              <img
                src={item.icon}
                alt=""
                className="
                  w-10
                  h-10
                  object-contain
                  shrink-0
                  mt-0.5
                "
              />

              <div>

                <h3
                  className={`
                    font-bold
                    text-[13px]
                    md:text-sm
                    mb-1.5
                    ${
                      index === 1 || index === 2 || index === 5
                        ? "text-[#ff293a]"
                        : "text-[#202020]"
                    }
                  `}
                >
                  {item.title}
                </h3>

                <p className="
                  text-[#666666]
                  text-[11px]
                  leading-[1.55]
                ">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;
