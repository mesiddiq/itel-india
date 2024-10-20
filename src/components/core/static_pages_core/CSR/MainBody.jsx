import React from "react";

import Accordian from "../Reusable/Accordian";
import { useState } from "react";


const Accordian2 = ({ data, title,img }) => {
  const [show, setShow] = useState(true);

  return (
    <>
    <div className=" space-y-4">
          <div onClick={() => setShow(!show)} className=" flex items-center font-markot justify-between cursor-pointer">
        <p className=" text-mobile/h3 lg:text-desktop/h3 text-brand/black">
          {title}
        </p>
        <img
          
          src={"/static_page/Right%20Chevron.png"}
          className={` transform transition-transform duration-300 ease-in-out ${
            show ? "rotate-180" : "rotate-0"
          }`}
          alt=""
        />
      </div>

      {/* Accordion content with animation */}
      <div
        className={`overflow-hidden transition-all space-y-4 duration-300 ease-in-out ${
          show ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {data.map((data, index) => {
          return (
            <p
              key={index}
              className=" text-desktop/body/2/regular text-grey/grey/5  lg:text-desktop/body/1"
            >
              {data}
            </p>
          );
        })}
        <img className="   lg:h-[432px]" src={img} alt="" />
      </div>
    </div>
    
    </>
  );
};

const MainBody = () => {
  const data = [
    {
      title: "Preamble",
      description: [
        "The aim of the Corporate Social Responsibility Policy (the “CSR Policy”) is to ensure that the Company becomes a socially responsible entity contributing towards improving the quality of life of society at large. As a Corporate Citizen receiving various benefits out of society, it is our co-extensive responsibility towards the society to return the same by adopting best practices. It is the Company’s intent to make a positive contribution to the society in which the Company operates. The objective of this Policy is to set guiding principles for carrying out CSR activities by the Company and also to set up process of execution, implementation and monitoring of the CSR activities to be undertaken by the Company.",
      ],
    },
    {
      title: "Scope",
      description: [
        " This Policy:",
        "1. shall be called the “Corporate Social Responsibility Policy” or “CSR Policy” of the Company which is developed and implemented in accordance with the provisions of Section 135 of the Act read with the CSR Rules. ",
        "2. outlines the Company’s philosophy and responsibility and lays down the guidelines and mechanism for undertaking socially impactful programs towards welfare and sustainable development of the community around the area of its operations and other parts of the country ",
        "3. shall be applicable to all CSR Activities taken up by the Company at various locations in India for the benefit of different segment of the society at large, specifically the deprivedand underprivileged segment.",
      ],
    },
    {
      title: "Mission & Purpose",
      description: [
        "To work on the popularity, adoption, and implementation of the concept of Corporate Social Responsibility while adding measurable values to”” the community and to our corporation along with managing related processes to the advantage of all concerned in a way that becomes model for other corporations for replication, to further expanding the scope.",
      ],
    },

   
  ];
  
  const data3=[
    {
        title: "CSR Projects and Activities",
        description: [
          "The Company shall undertake such projects, programs and activities which falls within the purview of schedule VII of the Act and as may be amended by the ministry from time to time.",
          "CSR activities shall exclude the activities undertaken in pursuance of its normal course of business. The CSR projects or programs or activities that benefit only the employees of the company and their families shall not be considered as CSR activities. Contribution of any amount directly or indirectly to any political party under section 182 of the Act, shall not be considered as CSR activity.",
        ],
        img:"/static_page/CSR/Mission%20&%20Purpose%20Banner.webp"
      },
  ]
  const data2 = [
    {
      title: "Objectives of the CSR Policy",
      description: [
        "The CSR Policy is laid down by the Company to ensure that the:",
        ". CSR agenda is integrated with the business",
        ". Focussed efforts are made in the identified community development areas to achieve the expected outcomes",

        ". Support in nation building and bringing inclusive growth through our CSR programs",
      ],
    },

    {
      title: "Composition of Committee",
      description: [
        " The Company will primarily focus on following welfare activities:",
        "1. Eradicating hunger, poverty and malnutrition, ‘promoting health care including preventive health care and sanitation including contribution to the Swach Bharat Kosh set-up by the Central Government for the promotion of sanitation and making available safe drinking water.",
        "2. Promoting education, including special education and employment enhancing vocation skills especially among children, women, elderly, and the differently abled and livelihood enhancement projects.",
        "3. Promoting gender equality, empowering women, setting up homes and hostels for women and orphans; setting up old age homes, day care centres and such other facilities for senior citizens and measures for reducing inequalities faced by socially and economically backward groups.",
        "4. Contribution to the Prime Minister’s National Relief Fund or any other fund set up by the Central Government for socio-economic development and relief and welfare of the Scheduled Castes, the Scheduled Tribes, other backward classes, minorities and women.",
        "5. Rural development projects.",
        "6. Slum area development.",
        "7. Any other activities may be added as prescribed under the Companies Act, 2013 and Rules made thereunder, and approved from time to time.",
      ],
    },

    {
      title: "Functions of CSR Committee",
      description: [
        "1. Formulate and recommend a Corporate Social Responsibility Policy (“CSR Policy”) of the Company, for approval by the Board of Directors.",
        "2. Approve and undertake projects that are in line with the Schedule VII to the Act and CSR policy of the Company.",
        "3. Constitution of transparent monitoring mechanisms in order to ensure the timely implementation and progress of each project/ program and activity.",
        "4. Recommend the amount of CSR expenditure for the determined CSR activities to the Board.",
        "5. Any other matter as deemed appropriate or determined by the Board from time to time.",
      ],
    },

    {
      title: "Execution of CSR Activities",
      description: [
        "The Company can form collaborative partnerships with the Government, the District Authorities, the village panchayats, NGOs in carrying out its CSR Programs. The Company may undertake CSR Programs through a registered trust or a registered society or a company established under Section 8 of the Act by the Company, either singly or along with its holding or subsidiary or associate company, or along with any other company or holding or subsidiary or associate company of such other company or otherwise  The Company may also collaborate with a trust, society or company, other than those mentioned above for undertaking its CSR projects or programs, provided that the trust, society or company has an established track record of three years in undertaking similar programs or projects.",
      ],
    },

    {
      title: "CSR Budget",
      description: [
        " The Board shall approve overall limits for CSR Activities to be undertaken by the Company. Within the overall limits approved by the Board, the CSR Committee shall approve individual projects / programs.",

        "The CSR expenditure shall be as prescribed under Section 135 of the Act and Companies (Corporate Social Responsibility) Rules, 2014. CSR expenditure will include both direct and indirect expenditures, incurred by the Company on CSR Programmes undertaken in accordance with the approved CSR Policy. Any surplus arising from any CSR projects, programmes or activities shall not form part of the business profit of a company and shall be utilized towards the CSR activities. All reasonable efforts shall be made to ensure that the annual CSR allocation is fully utilized in the respective year. However, if the Company fails to spend such amount, the Board shall, its report under Section 134 of the Companies Act, 2013, specify the reason for not spending the amount.",
      ],
    },

    {
      title: "Monitoring and Reporting Mechanism",
      description: [
        " The CSR Committee will evaluate the viability of the proposals/ programs for CSR initiatives and report the same to the board. Money expended towards CSR shall be released only against verification of utilization of funds as per approved work-plans and timelines. Verification may be done through review of documents, field visits and through an active feedback mechanism.",

        "The CSR Committee will regularly review and submit periodic reports to the Board indicating the following:",
        "Details of the CSR projects/ programmes /activities undertaken during the period;",
        "Impact assessment with key indicators in our areas of operations",
        "Details of CSR outlay, stating the budgeted and actual amount spent during the period, and reasons of variance, if any;",
        "Achievements or impacts or improvements recorded in the society due to the CSR initiatives of the Company during the period;",
        "Based on the periodic reports, the Board shall recommend and ensure that the projects/ programmes and activities included in the CSR Policy of the Company are undertaken accordingly.",
      ],
    },

    {
      title: "Location",
      description: [
        "All CSR projects / programs under this policy shall be undertaken in India. The CSR Committee shall decide on locations for implementation of the CSR projects / programs and shall give preference to the area where the Company has its operations.",
      ],
    },
    {
      title: "Programme Duration",
      description: [
        "The time period of implementation of the programme will depend on its nature, extent of coverage and the impact of the programme. The Company will follow a project based accountability approach to stress on the long term sustainability of its CSR projects.",
        "Based on the tenure of the identified projects, they will be qualified as:",
        "Short Term – up to 1 year",
        "Long term",
      ],
    },
    {
      title: "CSR Committee Meetings",
      description: [
        "1. Frequency of Meetings – the Committee will meet as and when require.",
        "2. Quorum – A minimum of two Members shall form the Quorum.",
        "3. Minutes – Minutes of the proceedings and resolutions of the CSR Committee meetings shall be signed and confirmed by the Chairman of the meeting. Minutes so signed and confirmed shall be conclusive evidence of such proceedings and resolutions. Minutes of all Committee meetings will be open for inspection at any reasonable time on reasonable notice by any member of the Board of Directors of the Company.",
      ],
    },
    {
      title: "Amendments to CSR Policy",
      description: [
        "CSR policy may be amended or revised from time to time after approval of Board of Directors upon recommendations of the CSR Committee.",
      ],
    },
    {
      title: "Disclosures",
      description: [
        "The company shall place the contents of Corporate Social Responsibility Policy on the website of the company.Annual Report on CSR Activities shall be prepared and be attached with Company’s Board Report as prescribed under the Companies Act, 2013.",
      ],
    },
    {
        title: "CSR Projects and Activities",
        description: [
           " The Company shall undertake such projects, programs and activities which falls within the purview of schedule VII of the Act and as may be amended by the ministry from time to time.",

          "  CSR activities shall exclude the activities undertaken in pursuance of its normal course of business. The CSR projects or programs or activities that benefit only the employees of the company and their families shall not be considered as CSR activities. Contribution of any amount directly or indirectly to any political party under section 182 of the Act, shall not be considered as CSR activity."    ]},
  ];
  return (
    <div className=" content px-4 font-markot">
      <div className="   space-y-8 lg:space-y-[60px]">
        <div className=" lg:space-y-8  space-y-4 text-brand/black">
          <p className="  text-mobile/h2 lg:text-desktop/h2">
            Corporate Social Responsibility Policy
          </p>
          <p className=" text-mobile/h6 lg:text-desktop/h4">
            S Mobile Devices Private Limited (Formerly S Mobile Devices Ltd)
          </p>
        </div>
        <div className=" space-y-[60px]">
          {data.map((data) => {
            return <Accordian data={data.description} title={data.title} />;
          })}
           {
            data3.map((data)=>{
                return(
                    <Accordian2 data={data.description} title={data.title} img={data.img}/>
                )
            })
           }
          {data2.map((data) => {
            return <Accordian data={data.description} title={data.title} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MainBody;
