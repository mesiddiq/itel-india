import React from "react";
import { useState } from "react";


const SubjectSelector = () => {
  // List of subjects to choose from
  const subjects = ['Product', 'Battery', 'Software', 'Service Issue', 'Warranty', 'Other'];

  // State to track the selected subject
  const [selectedSubject, setSelectedSubject] = useState(null);

  // Function to handle click and update the selected subject
  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
  };

  return (
    <div className="flex gap-3 justify-evenly  flex-wrap">
      {subjects.map((subject, index) => (
        <div
          key={index}
          className={`flex items-center justify-center w-24 h-12 cursor-pointer rounded-md border-2 transition-all duration-300 ${
            selectedSubject === subject
              ? 'border-red-500 text-red-500'
              : 'border-gray-400 text-gray-600'
          }`}
          onClick={() => handleSubjectClick(subject)}
        >
          {subject}
        </div>
      ))}
    </div>
  );
};


const Form = () => {
  const buttondata = [
    {
      img: "/Group%201973339728.png",
      title: "CALL US",
      info: "+91-120-6650888",
    },
    {
      img: "/Group%201973339728.png",
      title: "CHAT WITH US",
      info: "info.in@transsion.com",
    },
    {
      img: "/Group%201973339728.png",
      title: "BUSINESS COOPERATION",
      info: "itelmarketing.in@transsion.com",
    },
    {
      img: "/Group%201973339728.png",
      title: "SUPPORT",
      info: "itel.care@transsion.com",
    },
  ];
  return (
    <div className=" content lg:pb-[120px] lg:space-y-0 space-y-[60px] pb-[60px] font-markot flex lg:flex-row flex-col justify-between  px-4 ">
      <div className=" lg:space-y-[42px]  space-y-[32px] lg:w-[402px]">
        {buttondata.map((data) => {
          return (
            <div className=" space-x-3  flex items-center">
              <img
                className="  lg:w-[29px] h-[21px] w-[24px] lg:h-[26px]"
                src={data.img}
                alt=""
              />
              <div className="lg:space-y-2 space-y-1">
                <p className=" text-desktop/subtitle lg:text-desktop/title text-grey/grey/4">
                  {data.title}
                </p>
                <p className=" text-brand/black text-mobile/h6 lg:text-desktop/h4">
                  {data.info}
                </p>
              </div>
            </div>
          );
        })}

        <div className=" border border-grey/grey/4"></div>

        <div className=" space-y-[28px] lg:space-y-9">
          <div>
            <p className="  text-smoky/black text-mobile/h5  lg:text-desktop/h4 ">
              S Mobile Devices Private Limited
            </p>
          </div>
          <div className=" space-y-3">
            <p className=" lg:text-desktop/h5 text-mobile/h6 text-grey/grey/4 ">
              Corporate Identity Number (CIN)
            </p>
            <p className="  text-brand/black lg:text-desktop/body/2/regular">
              U32204UP2012PTC051324
            </p>
          </div>
          <div className=" space-y-[12px]">
          <p className=" lg:text-desktop/h5 text-mobile/h6 text-grey/grey/4 ">
              Registered Office
            </p>
            <p className="  text-brand/black lg:text-desktop/body/2/regular">
              Unit No. B – 303, Third Floor, Tower – B, Advant IT Park, Plot No.
              – 7, Sector – 142, Noida, Uttar Pradesh 201301
            </p>
          </div>
        </div>
      </div>

      <div className=' lg:bg-[url("/static_page/contactus/Form%20BG.webp")]   bg-[url("/static_page/contactus/Form%20BG%20Mobile.webp")]  lg:space-y-10  space-y-[32px] lg:min-h-[837px] p-4 lg:p-[52px] bg-cover bg-center rounded-2xl'>
        <div className=" flex flex-col  space-y-3  lg:space-y-4 justify-center">
          <p className=" text-center text-brand/black text-mobile/h4 lg:text-desktop/h2 ">
            Inquiry Form
          </p>
          <p className=" text-center  text-desktop/body/2/regular text-grey/grey/5">
            Complete the form, and our dedicated team will swiftly reach out to
            you. We're committed to providing prompt assistance to you.
          </p>
        </div>

        <div className=" text-brand/black space-y-[24px]">
          <div className=" space-y-6 ">
            <div className="   lg:space-x-5 lg:space-y-0  space-y-[24px] flex lg:flex-row flex-col    justify-between">
              <div className=" space-y-[12px] w-full">
              <p className=" text-mobile/h6  text-grey/grey/5  lg:text-desktop/h6/medium">
                  Frist Name
                </p>
                <input
                  placeholder=" Enter Frist Name"
                  className=" py-3 bg-transparent border border-grey/grey/4 rounded-xl  w-full"
                  type="text"
                />
              </div>
              <div className=" space-y-[12px] w-full">
              <p className=" text-mobile/h6  text-grey/grey/5  lg:text-desktop/h6/medium">
                  Last Name
                </p>
                <input
                  placeholder=" Enter Last Name"
                  className=" py-3 bg-transparent border border-grey/grey/4 rounded-xl  w-full"
                  type="text"
                />
              </div>
            </div>
            <div>
              <div className="space-y-[12px] w-full">
              <p className=" text-mobile/h6  text-grey/grey/5  lg:text-desktop/h6/medium">
                  E-MAIL
                </p>
                <input
                  placeholder="E-mail"
                  className=" px-1 py-3 bg-transparent border border-grey/grey/4 rounded-xl  w-full"
                  type="text"
                />
              </div>
            </div>

            <div>
              <div className=" space-y-[12px] w-full">
                <p className=" text-mobile/h6  text-grey/grey/5  lg:text-desktop/h6/medium">
                Message
                </p>
               <SubjectSelector/>
            </div>
           </div>

            <div>
              <div className=" space-y-[12px] w-full">
                <p className="  text-grey/grey/5 text-mobile/h6 lg:text-desktop/h6/medium">
                Subject
                </p>
                <textarea
                  placeholder="E-mail"
                  className=" h-[143px] px-1 py-3 bg-transparent border border-grey/grey/4 rounded-xl  w-full"
                  type="text"
                />
              </div>
            </div>


          </div>

          <div className="  py-3 space-x-2 rounded-full bg-[#1A1A1A] flex w-full items-center justify-center">
            <p className="  text-white  text-desktop/button ">SUBMIT</p>
            <img src="/arrow.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
