import React from "react";
// import Avatar from "../../assets/Group1973339886.png";

function LanyardSection() {
  return (
    <section className="flex justify-center items-center m-8 p-8">
      <div className="relative w-full max-w-5xl overflow-hidden">
        {/* Background image */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ed72f8a066228e7b21072cf3ebf8aab93324eab090a318a5c3304b33c2f07f4"
          alt="Background"
          className="absolute inset-y-8 w-full h-full object-fill"
        />

        {/* Content container */}
        <div className="relative flex z-10">
          {/* Left side with image */}
          <div className="w-1/2">
            <img
              src={'Avatar'}
              alt="Man with lanyard"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right side with text */}
          <div className="w-1/2 py-12 px-8 flex flex-col justify-center">
            <h3 className="text-sm font-medium tracking-wider uppercase text-gray-700">
              MOVE IN STYLE
            </h3>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
              Lightweight and
              <br />
              Handy to Carry
            </h2>
            <p className="mt-4 text-sm text-gray-700">
              Keep your device accessible and secure with this stylish and
              practical accessory - Lanyard.
            </p>

            {/* Lanyard offer */}
            <div className="mt-8 flex items-center">
              <div className="flex flex-col">
                <img
                  src='/Icon.png'
                  alt="Lanyard icon"
                  className="w-36 h-36 mb-[-10px] ml-[-30px]"
                />
                <span className="font-bold text-lg uppercase bg-gradient-to-r from-gray-900 to-red-600 bg-clip-text text-transparent">
                  GET FREE EXTRA LANYARD
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Background circles */}
        <div className="absolute top-0 right-0 w-64 h-64">
          <div className="absolute right-0 top-0 w-16 h-16 bg-white opacity-20 rounded-full"></div>
          <div className="absolute right-12 top-8 w-12 h-12 bg-white opacity-20 rounded-full"></div>
          <div className="absolute right-24 top-4 w-8 h-8 bg-white opacity-20 rounded-full"></div>
          <div className="absolute right-4 top-20 w-10 h-10 bg-white opacity-20 rounded-full"></div>
          <div className="absolute right-20 top-24 w-14 h-14 bg-white opacity-20 rounded-full"></div>
          <div className="absolute right-36 top-16 w-6 h-6 bg-white opacity-20 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export default LanyardSection;
