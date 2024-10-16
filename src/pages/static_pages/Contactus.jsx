import React, { useState } from "react";
import MainHeader from "./header/MainHeader";

const InquiryForm = () => {
  const [subject, setSubject] = useState("");

  return (
    <div className="min-h-screen flex justify-center items-center font-markot  p-4">
      <div className=" shadow-md rounded-lg p-8 w-full mt-20 flex flex-col lg:flex-row">
        {/* Contact Section */}
        <div className="w-full lg:w-1/3 border-b  flex flex-col space-y-10  lg:pr-8 mb-6 lg:mb-0">
          <div className=" flex items-center space-x-2">
            <img
              className=" h-10 w-10 rounded-full bg-slate-600"
              src=""
              alt=""
            />
            <div>
              <p className=" text-desktop/subtitle text-grey/grey/4 lg:text-desktop/title ">CALL US</p>
              <p className="  text-mobile/h6 lg:text-desktop/h4 text-brand/black">+91-120-6650888</p>
            </div>
          </div>

          <div className=" flex items-center space-x-2">
            <img
              className=" h-10 w-10 rounded-full bg-slate-600"
              src=""
              alt=""
            />
            <div>
            <p className=" text-desktop/subtitle text-grey/grey/4 lg:text-desktop/title ">Chat with us</p>
            <p className="  text-mobile/h6 lg:text-desktop/h4 text-brand/black">info.in@transsion.com</p>
            </div>
          </div>
          <div className=" flex items-center space-x-2">
            <img
              className=" h-10 w-10 rounded-full bg-slate-600"
              src=""
              alt=""
            />
            <div>
            <p className=" text-desktop/subtitle text-grey/grey/4 lg:text-desktop/title ">BUSINESS COOPERATION</p>
            <p className="  text-mobile/h6 lg:text-desktop/h4 text-brand/black">itelmarketing.in@transsion.com</p>
            </div>
          </div>

          <div className=" flex items-center space-x-2">
            <img
              className=" h-10 w-10 rounded-full bg-slate-600"
              src=""
              alt=""
            />
            <div>
            <p className=" text-desktop/subtitle text-grey/grey/4 lg:text-desktop/title ">SUPPORT</p>
            <p className="  text-mobile/h6 lg:text-desktop/h4 text-brand/black">itel.care@transsion.com</p>
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

        {/* Inquiry Form*/}
        <div className="w-full bg-bg/primary/1 lg:w-2/3 lg:pl-8">
          <h2 className=" text-mobile/h4 lg:text-desktop/h2 text-center  mb-4">Inquiry Form</h2>
          <p className=" text-desktop/body/2/regular text-grey/grey/5 mb-6">
            Complete the form, and our dedicated team will swiftly reach out to
            you. <br /> We’re committed to providing prompt assistance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className=" space-y-2">
              <p className="  text-mobile/h6 text-grey/grey/5 lg:text-desktop/h6/medium ">Frist Name</p>
              <input
                type="text"
                placeholder="First Name"
                className="w-full mb-4 border placeholder:text-desktop/body/2/regular text-desktop/body/2/regular border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-black"
                />
            </div>

            <div className=" space-y-2">
            <p className="  text-mobile/h6 text-grey/grey/5 lg:text-desktop/h6/medium "> Last Name</p>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full mb-4 border placeholder:text-desktop/body/2/regular text-desktop/body/2/regular border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-black"
                />
            </div>
          </div>

          <div className=" space-y-2">
          <p className="  text-mobile/h6 text-grey/grey/5 lg:text-desktop/h6/medium ">E-mail</p>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full mb-4 border placeholder:text-desktop/body/2/regular text-desktop/body/2/regular border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-black"
              />
          </div>

          <p className=" my-4 text-mobile/h6 text-grey/grey/5 lg:text-desktop/h6/medium ">Subject</p>
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
          <p className="  text-mobile/h6 text-grey/grey/5 lg:text-desktop/h6/medium ">Message</p>

            <textarea
              placeholder="Enter your message here"
              className="w-full mb-4 border placeholder:text-desktop/body/2/regular text-desktop/body/2/regular border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-black"
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
    <div className=" font-markot">
      <MainHeader />
      <div className="  p-20 flex items-center lg:h-[520px]  bg-itel-red h-[400px] w-screen border border-black">
        <div>
          <p className=" lg:text-desktop/h1 text-white text-mobile/h1">Contact Us</p>
        </div>
      </div>

      <InquiryForm />
    </div>
  );
};

export default Contactus;
