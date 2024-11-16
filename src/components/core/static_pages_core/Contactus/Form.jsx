
import React, { useState } from "react";
import { div } from "framer-motion/client";

const SubjectSelector = ({ selectedSubject, onSelectSubject }) => {
  const subjects = ['Product', 'Battery', 'Software', 'Service Issue', 'Warranty', 'Other'];

  return (
    <div className="flex flex-wrap">
      {subjects.map((subject, index) => (
        <div
          key={index}
          onClick={() => onSelectSubject(subject)}
          className="flex cursor-pointer px-4 items-center"
        >
          <div
            className={`h-6 w-6 rounded-full border-[4px] transition-all duration-300 ${
              selectedSubject === subject ? 'bg-red-500' : 'text-gray-600'
            }`}
          ></div>
          <div
            className={`flex items-center lg:text-desktop/body/2/regular justify-center lg:w-[118px] h-12 cursor-pointer rounded-md transition-all duration-300 ${
              selectedSubject === subject ? 'text-red-500' : 'text-gray-600'
            }`}
          >
            {subject}
          </div>
        </div>
      ))}
    </div>
  );
};

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    selectedSubject: null,
    message: '',
  });

  const [errors, setErrors] = useState({});

  const buttonData = [
    { img: "/Group%201973339728.png", title: "CALL US", info: "+91-120-6650888",link:"tel:1206650888" },
    { img: "/Group%201973339728.png", title: "BUSINESS COOPERATION", info: "itelmarketing.in@transsion.com", link:"mailto:info.in@transsion.com" },
    { img: "/Group%201973339728.png", title: "SUPPORT", info: "itel.care@transsion.com" ,link:"mailto:itel.care@transsion.com"},
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubjectSelect = (subject) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedSubject: subject,
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required.";
    if (!formData.lastName) newErrors.lastName = "Last Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.selectedSubject) newErrors.selectedSubject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert("Form submitted successfully!");
    } catch (error) {
      alert("Failed to submit the form.");
    }
  };

  return (
    <div className="content lg:pb-[120px] xl:space-y-0 space-y-[60px] pb-[60px] font-markot items-center flex xl:flex-row flex-col  justify-between px-4">
      <div className="xl:space-y-[42px] space-y-[32px] xl:w-[402px]">
        {buttonData.map((data, index) => (
          <div key={index} className="space-x-3 flex items-center">
            <img className="lg:w-[29px] h-[21px] w-[24px] lg:h-[26px]" src={data.img} alt="" />
            <div className="lg:space-y-2 space-y-1">
              <p className="text-desktop/subtitle lg:text-desktop/title text-grey/grey/4">{data.title}</p>
              <a href={data.link}>
                  <p className="text-brand/black text-mobile/h6 lg:text-desktop/h4">{data.info}</p>
              </a>
            
            </div>
          </div>
        ))}

        <div className="border  border-grey/grey/4"></div>

        <div className="space-y-[28px] lg:space-y-9">
          <div>
            <p className="text-smoky/black text-mobile/h5 lg:text-desktop/h4">S Mobile Devices Private Limited</p>
          </div>
          <div className="space-y-3">
            <p className="lg:text-desktop/h5 text-mobile/h6 text-grey/grey/4">Corporate Identity Number (CIN)</p>
            <p className="text-brand/black lg:text-desktop/body/2/regular">U32204UP2012PTC051324</p>
          </div>
          <div className="space-y-[12px]">
            <p className="lg:text-desktop/h5 text-mobile/h6 text-grey/grey/4">Registered Office</p>
            <p className="text-brand/black lg:text-desktop/body/2/regular">
              Unit No. B – 303, Third Floor, Tower – B, Advant IT Park, Plot No.
              – 7, Sector – 142, Noida, Uttar Pradesh 201301
            </p>
          </div>
        </div>
      </div>

      <div className='lg:bg-[url("/static_page/contactus/Form%20BG.webp")] bg-[url("/static_page/contactus/Form%20BG%20Mobile.webp")] lg:space-y-10 space-y-[32px] lg:min-h-[837px] lg:max-w-[735px] p-4 lg:p-[52px] bg-cover bg-center rounded-2xl'>
        <div className="flex flex-col space-y-3 lg:space-y-4 justify-center">
          <p className="text-center text-brand/black text-mobile/h4 lg:text-desktop/h2">Inquiry Form</p>
          <p className="text-center text-desktop/body/2/regular text-grey/grey/5">
            Complete the form, and our dedicated team will swiftly reach out to you. We're committed to providing prompt assistance to you.
          </p>
        </div>

        <div className="text-brand/black space-y-[24px]">
          <div className="space-y-6">
            <div className="lg:space-x-5 lg:space-y-0 space-y-[24px] flex lg:flex-row flex-col justify-between">
              <div className="space-y-[12px] w-full">
                <p className="text-mobile/h6 text-grey/grey/5 lg:text-desktop/h6/medium">First Name</p>
                <input
                  name="firstName"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="p-3 bg-transparent border border-grey/grey/4 rounded-xl w-full"
                  type="text"
                />
                {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
              </div>
              <div className="space-y-[12px] w-full">
                <p className="text-mobile/h6 text-grey/grey/5 lg:text-desktop/h6/medium">Last Name</p>
                <input
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="p-3 bg-transparent border border-grey/grey/4 rounded-xl w-full"
                  type="text"
                />
                {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
              </div>
            </div>
            <div className="space-y-[12px] w-full">
              <p className="text-mobile/h6 text-grey/grey/5 lg:text-desktop/h6/medium">E-MAIL</p>
              <input
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleInputChange}
                className=" p-3 bg-transparent border border-grey/grey/4 rounded-xl w-full"
                type="email"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="space-y-[12px] w-full">
              <p className="text-mobile/h6 text-grey/grey/5 lg:text-desktop/h6/medium">SUBJECT</p>
              <SubjectSelector selectedSubject={formData.selectedSubject} onSelectSubject={handleSubjectSelect} />
              {errors.selectedSubject && <p className="text-red-500">{errors.selectedSubject}</p>}
            </div>
            <div className="space-y-[12px] w-full">
              <p className="text-mobile/h6 text-grey/grey/5 lg:text-desktop/h6/medium">MESSAGE</p>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                className=" p-3 bg-transparent border border-grey/grey/4 rounded-xl w-full"
                rows="4"
              ></textarea>
              {errors.message && <p className="text-red-500">{errors.message}</p>}
            </div>
          </div>
        </div>

        <div onClick={handleSubmit} className="   py-3 space-x-2 rounded-full bg-[#1A1A1A] flex w-full items-center justify-center">
            <p className="  text-white  text-desktop/button ">SUBMIT</p>
            <img src="/static_page/homepage/arrow.png" alt="" />
          </div>
      </div>
    </div>
  );
};

export default Form;
