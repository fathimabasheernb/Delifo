import React from "react";

function Features() {

  const features = [
    {
      title: "Customer App",
      description: "Easy ordering and real-time delivery updates.",
      icon: "♙"
    },
    {
      title: "Driver App",
      description: "Manage deliveries, routes and driver activities.",
      icon: "♧"
    },
    {
      title: "Live Tracking",
      description: "Track every delivery from pickup to destination.",
      icon: "◎"
    },
    {
      title: "Smart Delivery",
      description: "Connect customers and deliveries seamlessly.",
      icon: "♧"
    }
  ];

  return (

    <section
      id="features"
      className="bg-[#191919] px-5 md:px-16 py-7"
    >

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">

        {features.map((feature, index) => (

          <div
            key={index}
            className="bg-[#252525] border border-[#333] rounded-lg p-4 md:p-5 hover:bg-[#303030] transition duration-300"
          >

            <div className="flex justify-between items-center mb-4">

              <h3 className="text-white font-semibold text-xs md:text-sm">
                {feature.title}
              </h3>

              <span className="text-white text-xl">
                {feature.icon}
              </span>

            </div>

            <p className="text-gray-400 text-[10px] md:text-xs leading-relaxed">
              {feature.description}
            </p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Features;