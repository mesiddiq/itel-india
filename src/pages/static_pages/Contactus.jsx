import React, { useState } from "react";
import MainHeader from "../../components/common/header/MainHeader";

const InquiryForm = () => {
  const [subject, setSubject] = useState("");

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full mt-20 flex flex-col lg:flex-row">
        {/* Contact Section */}
        <div className="w-full lg:w-1/3 border-b  flex flex-col space-y-10 lg:border-b-0 lg:border-r border-gray-200 lg:pr-8 mb-6 lg:mb-0">
          <div className=" flex items-center space-x-2">
            <img
              className=" h-10 w-10 rounded-full bg-slate-600"
              src=""
              alt=""
            />
            <div>
              <p className="text-sm font-semibold text-[#666666]">CALL US</p>
              <p className=" font-medium text-lg">+91-120-6650888</p>
            </div>
          </div>

          <div className=" flex items-center space-x-2">
            <img
              className=" h-10 w-10 rounded-full bg-slate-600"
              src=""
              alt=""
            />
            <div>
              <p className="text-sm font-semibold text-[#666666]">Chat with us</p>
              <p className=" font-medium text-lg">info.in@transsion.com</p>
            </div>
          </div>
          <div className=" flex items-center space-x-2">
            <img
              className=" h-10 w-10 rounded-full bg-slate-600"
              src=""
              alt=""
            />
            <div>
              <p className="text-sm font-semibold text-[#666666]">BUSINESS COOPERATION</p>
              <p className=" font-medium text-lg">itelmarketing.in@transsion.com</p>
            </div>
          </div>

          <div className=" flex items-center space-x-2">
            <img
              className=" h-10 w-10 rounded-full bg-slate-600"
              src=""
              alt=""
            />
            <div>
              <p className="text-sm font-semibold text-[#666666]">SUPPORT</p>
              <p className=" font-medium text-lg">itel.care@transsion.com</p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="font-semibold text-lg">
              S Mobile Devices Private Limited
            </h2>
            <p className="text-gray-600">CIN: U32204UP2012PTC051324</p>
            <p className="text-gray-600 mt-2">
              Unit No. B – 303, Third Floor, Tower – B, Advant IT Park, Plot No.
              – 7, Sector – 142, Noida, Uttar Pradesh 201301
            </p>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="w-full lg:w-2/3 lg:pl-8">
          <h2 className="text-3xl  text-center font-bold mb-4">Inquiry Form</h2>
          <p className="text-gray-600 mb-6">
            Complete the form, and our dedicated team will swiftly reach out to
            you. <br /> We’re committed to providing prompt assistance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className=" space-y-2">
              <p className=" font-medium"> Frist Name</p>
              <input
                type="text"
                placeholder="First Name"
                className="border  border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-black"
              />
            </div>

            <div className=" space-y-2">
              <p className=" font-medium"> Last Name</p>
              <input
                type="text"
                placeholder="Last Name"
                className="border  border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-black"
              />
            </div>
          </div>

          <div className=" space-y-2">
            <p className=" font-medium">E-mail</p>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full mb-4 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-black"
            />
          </div>

          <p className="my-4 font-semibold">Subject</p>
          <div className="flex flex-wrap mb-6">
            <label className="mr-4 mb-2">
              <input
                type="radio"
                name="subject"
                value="Product"
                onChange={() => setSubject("Product")}
                className="mr-2"
              />{" "}
              Product
            </label>
            <label className="mr-4 mb-2">
              <input
                type="radio"
                name="subject"
                value="Battery"
                onChange={() => setSubject("Battery")}
                className="mr-2"
              />{" "}
              Battery
            </label>
            <label className="mr-4 mb-2">
              <input
                type="radio"
                name="subject"
                value="Software"
                onChange={() => setSubject("Software")}
                className="mr-2"
              />{" "}
              Software
            </label>
            <label className="mr-4 mb-2">
              <input
                type="radio"
                name="subject"
                value="Service Issue"
                onChange={() => setSubject("Service Issue")}
                className="mr-2"
              />{" "}
              Service Issue
            </label>
            <label className="mr-4 mb-2">
              <input
                type="radio"
                name="subject"
                value="Warranty"
                onChange={() => setSubject("Warranty")}
                className="mr-2"
              />{" "}
              Warranty
            </label>
            <label className="mr-4 mb-2">
              <input
                type="radio"
                name="subject"
                value="Other"
                onChange={() => setSubject("Other")}
                className="mr-2"
              />{" "}
              Other
            </label>
          </div>

          <div className=" space-y-3">
            <p className=" font-medium">Message</p>

            <textarea
              placeholder="Enter your message here"
              className="w-full mb-4 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-black"
              rows="4"
            ></textarea>
          </div>

          <button className="bg-black  text-white px-6 py-2 rounded-full flex justify-center  hover:bg-gray-800 w-full">
            Submit <img className="  scale-75 px-4 " src="/arrow.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Contactus = () => {
  return (
    <div>
      <MainHeader />
      <div className="  p-20 flex items-center bg-rose-500 h-screen w-screen border border-black">
        <div>
          <p className=" text-6xl text-white font-medium">Contact Us</p>
        </div>
      </div>

      <InquiryForm />
    </div>
  );
};

export default Contactus;
