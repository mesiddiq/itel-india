import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col w-full bg-gradient-to-r from-[#EBE8E2] to-[#e7a59b]">
      {/* Background circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-8 transform rotate-180">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="w-[100px] h-[100px] md:w-[249.18px] md:h-[232.84px] rounded-[133.78px] bg-white opacity-20"
            />
          ))}
        </div>
      </div>
      {/* Main content */}
      <div className="flex-grow flex flex-col md:flex-row items-center px-4 md:px-9 pt-11 pb-24 max-w-7xl mx-auto w-full z-10">
        <div className="flex flex-col max-w-2xl mb-8 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-tight text-neutral-900 mb-3">
            Circle 1
          </h1>
          <p className="text-xl md:text-2xl tracking-normal leading-6 text-gray-500 mb-6">
            Unique Design with Round Screen | Inbuilt BT Caller | Lanyard to
            Carry Around
          </p>
          <div>
            <button className="flex items-center px-6 py-3 bg-black text-white font-medium uppercase rounded-lg hover:bg-gray-800 transition-colors">
              Buy Now
              <ArrowRight className="ml-2" color="red" size={24} />
            </button>
          </div>
        </div>
        <div className="flex-shrink-0 ml-5 mt-10 md:ml-auto">
          <img
            src="/circle-1-phone.png"
            alt="Circle 1 Device"
            className="w-64 md:w-[400px] h-auto object-contain"
          />
        </div>
      </div>
      {/* Navigation bar */}
      <nav className="absolute bottom-0 left-0 right-0 bg-black text-white py-4 px-9">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img
              src="/circle-1-logo.svg"
              alt="Circle 1 logo"
              className="w-10 h-10"
            />
            <span className="text-2xl font-medium">Circle 1</span>
          </div>
          {/* Nav Links - Hide on small screens */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#overview" className="font-bold uppercase">
              Overview
            </a>
            <a
              href="#specifications"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Specifications
            </a>
          </div>
          {/* Buy Now Button - Always visible */}
          <a
            href="#buy-now"
            className="flex gap-2 items-center px-6 py-3 my-auto font-bold tracking-normal leading-tight text-center uppercase bg-white rounded-3xl text-neutral-900 max-md:px-5"
          >
            <span>BUY NOW</span>
            <ArrowRight color="#FF0037" size={24} />
          </a>
        </div>
      </nav>
    </section>
  );
};

export default HeroSection;