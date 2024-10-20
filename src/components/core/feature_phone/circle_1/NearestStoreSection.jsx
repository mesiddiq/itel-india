import React from "react";

const NearestStoreSection = () => {
  return (
    <section className="flex justify-center items-center w-full py-4">
      <div className="w-full max-w-[1260px] px-4">
        {/* Mobile Design */}
        <div className="relative md:hidden bg-[#F8F6F3] rounded-xl p-6 h-[180px]">
          <h2 className="text-xl font-medium text-neutral-900">
            Find Itel's Nearby Store
          </h2>
          <p className="mt-2 text-md text-neutral-600 leading-snug">
            We are here to help you find the right phone.
          </p>
          <div className="flex items-center mt-4">
            <span className="text-sm font-medium text-neutral-900 uppercase mr-2">
              SEE MORE
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 mt-4 w-1/2">
            <img
              src="/Store_mob.png"
              alt="Store Location"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Desktop Design */}
        <div className="hidden md:block relative rounded-xl overflow-hidden bg-[#F8F6F3]">
          <img
            src="/Group 1973339742.png"
            alt="Store Location"
            className="w-full"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-10">
            <h2 className="text-3xl font-bold text-neutral-900">
              Find Your Nearest itel Store!
            </h2>
            <p className="mt-2 text-neutral-600">
              We are here to help you find the right phone.
            </p>
            <div className="flex items-center mt-6">
              <span className="text-sm font-medium text-neutral-900 uppercase mr-2">
                SEE MORE
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NearestStoreSection;
