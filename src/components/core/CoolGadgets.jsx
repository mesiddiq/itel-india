import React from "react";

const CoolGadgets = () => {
  return (
    <section className="py-10 px-5">
      <div className="mx-auto max-w-full">
        <h2 className="text-4xl font-bold ml-10 mb-1">
          Peep into Our Cool Gadgets
        </h2>

        {/* Image Section */}
        {/* uploaded the image itself could be made better by using the actual resources */}
        <div className="flex justify-center">
          <div className="p-4 rounded-lg">
            <img
              src="/main.png"
              alt="Gadget 1"
              className="w-full h-screen object-cover"
            />
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-base leading-relaxed text-gray-200 text-center mx-4">
          Check out our lineup of dope gadgets, from itel smartwatches to
          earbuds, blending connectivity with style. Stay ahead of the curve
          with itel's smart gear—perfect for your vibe!
        </p>

        {/* Explore Button */}
        <div className="flex ml-5">
          <button className="mt-6 flex text-white font-semibold text-lg hover:text-purple-500 cursor-pointer transition-all duration-300 ease-in-out">
            Explore
            <span className="ml-2 text-xl hover:translate-x-1 transition-transform duration-300 ease-in-out">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoolGadgets;
