import { time, title } from "framer-motion/client";
import React from "react";
import { useState } from "react";


const Accordian = ({ data, title }) => {
  const [show, setShow] = useState(true);

  return (
    <>
    <div className=" space-y-4">
          <div className=" flex  items-start font-markot justify-between ">
        <p className=" text-mobile/h5 lg:text-desktop/h3 text-brand/black">
          {title}
        </p>
       
      </div>

      {/* Accordion content with animation */}
      <div
        className={`space-y-3 ${
          show ? " opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {data.map((item, index) => {
          return (
            
            < p 
              key={index}
              className=" text-desktop/body/2/regular ml-0 lg:ml-5  text-grey/grey/5  lg:text-desktop/body/1"
              dangerouslySetInnerHTML={{ __html: item }}
            />
              
            
          );
        })}
      </div>
    </div>
    
    </>
  );
};



const data = [
  {
    title:"1 . Acceptance of this Agreement",
    description: [
       " By downloading, installing, clicking on the “register” or “agree” button and/or accessing or using the ITEL Device, Software or Service, you agree to comply with and be bound by this Agreement.<b> If you do not agree to this Agreement, you may not access or use ITEL Software or Service.</b>",
 "<b>The ITEL Software and Service are not intended for or directed to children under the age of 14 (or the age considered as a “child” in the jurisdiction where you use ITEL Software or Services). If you are under the age of 14, you may not use the ITEL Software or Service or provide ITEL with any personally identifiable information.</b> If you are 14 or older but under the age of 18 (or under the age of majority in the jurisdiction where you use ITEL Software and Service) which be considered as a “Minor”, you represent that you have reviewed this Agreement with your parent or legal guardian and that you and your parent or guardian understand and consent to this Agreement. If you are a parent or guardian permitting a Minor to use the ITEL Services, you agree to: (i) supervise the Minor’s use of the ITEL Software and Service; (ii) assume all risks associated with the Minor’s use of ITEL Software and Service, including the transmission of content to and from third parties via the Internet; (iii) assume any liability resulting from the Minor’s use of ITEL Software and Service; (iv) ensure the accuracy and truthfulness of all information submitted by the Minor; and (v) assume responsibility and are bound by this Agreement for the Minor’s access and use of the ITEL Software and Service.",
      " In order to improve your user experience or enhance product safety performance, we will continue to work hard to develop new software and services, and provide you in a timely manner with software updates (including but not limited to software version upgrades, modifications, and functional perfection) or repairs. ITEL may reserve the right to modify this Agreement as necessary in accordance with applicable laws and regulations. The updated Agreement will shall supersede the original Agreement and shall come into effect after the expiration of the period stipulated by applicable law. If there is no special provision in applicable laws, the Agreement shall become effective on the date of renewal. The updated Agreement will be announced on the corresponding official website of ITEL Service for your reference at any time. If you continue to access or use the ITEL Software or Service, you will be deemed as you having read and agreed to be bound by the updated Agreement. If you do not accept the updated Agreement, please stop using ITEL Software or Service. "   ],
  },
{
    title:"2 . Permitted License Uses",
    description:[
        "Subject to the terms and conditions of this Agreement, ITEL grants you a non-exclusive, non-sublicensable, personal, revocable, limited license to access and use this Software and Service. You may install, use, display, and run the Software and Service on a ITEL device for non-commercial purposes.",
      "  ITEL system: refers to the custom operating system independently developed and owned by ITEL based on Google Android or an operating system of another brand. ITEL’s ownership over the system includes: (i) information including but not limited to codes stored on the device and other embedded software, documents, interfaces, contents and fonts provided to you via ITEL device and any material protected by the copyright of ITEL or its licensor; (ii) updates or upgrades to the software described in (i). ", 
       " This Software: refers to the system application program independently developed by ITEL that comes with ITEL system. ",
       " This Service: refers to the related various services provided by ITEL to users through this Software.  " ,
      " You may enjoy browser, recording, calculator, weather, file management, download, notepad, phone, SMS, camera, photo, address book, Bluetooth and other functions. The specific services provided are subject to the ITEL device you purchased;" , 
     " You may use this Service through mobile phones, tablets and other terminals launched by ITEL. At the same time, ITEL will continue to enrich the form of terminals for users of this Service. " ,
       "When you use ITEL devices, some software and services have separate user agreements or other rules. Please read them carefully before using the abovementioned software or services.", ]
},
{
    title:"3 . Intellectual Property; Ownership",
    description:[
       " ITEL reserves the intellectual property rights to this Software and Service and all related information content (including but not limited to UI interface design, pictures, fonts, audio, etc.) and all rights not expressly granted to you. The above intellectual property rights, including but not limited to copyright, trademark and patent rights, are protected by applicable intellectual property rights, anti-unfair competition and other respective laws, regulations and relevant international treaties. For matters not expressly authorized in this Agreement, such as commercial sales, reproduction, and permission for any third party to use this Software, you should separately obtain formal written permission from ITEL."
    ]
},{
    title:"4 . Restrictions on the use of This Software and Service",
    description:[
        "<b>You shall not take any of the following actions when using this Software and Service, including but not limited to:</b>",
       
        "<b>Releasing, transmitting, spreading or storing contents which violate laws and regulations, policies, public order and good custom, and social ethics, such as insults, defamation, violence, or violation of religion, etc; releasing, transmitting, spreading or storing fabricated information or advertising information for the purpose of misleading or deceiving others;</b>",
        " <b>Renting, lending, copying, modifying, linking, reprinting, compiling, issuing or publishing this Software and similar acts;</b>",
        "<b>Jailbreaking, reverse engineering, disassembling, decompiling, or otherwise attempting to destroy this Software; or, accessing or disturbing this Software by the use of plug-ins, Tag-ons, or third-party tools/services that are not authorized by ITEL;</b>",
        "<b>Copying, modifying, adding, deleting, operating in the form of mounting, or creating any derivative works of data of the Software, data released into any terminal memory in the course of the operation of the Software, interactive data of the client and server side in the course of the operation of the Software, and system data necessary for the operation of the Software; or adding, deleting or changing the functions or operative effect of software by modifying or fabricating the instructions and data that occur in the course of the operation of the software; or operating or publicly diffusing the software and method used for the above purposes, whether commercially or otherwise;</b>",
        "<b>Carrying out other acts which violate laws and regulations, policies, public order and good custom, and social ethics or acts which are not authorized by ITEL in writing.</b>",
        "<b>You may not, and you agree not to or enable others to, copy (except as expressly permitted by this Agreement), decompile, reverse engineer, disassemble, attempt to derive the source code of, decrypt, modify, or create derivative works of the ITEL Software or any services provided by the ITEL Software or any part thereof (except as and only to the extent any foregoing restriction is prohibited by applicable law or by licensing terms governing the use of open-source components that may be included with the ITEL Software). You agree not to remove, obscure, or alter any proprietary notices (including trademark and copyright notices) that may be affixed to or contained within the ITEL Software.</b>"  ]
},{
    title:"5 . Usage Rules of This Software and Service",
    description:[
        "You understand and agree that you should abide by the rights and obligations stipulated in this Agreement when you choose to use a ITEL device.",
        "As ITEL may develop multiple versions of software for different devices, you should choose the appropriate software for download and follow the tips to install correctly.",
        "In order to provide services of better quality and safety, ITEL may recommend you install other software during your installation of this Software. You can choose to install them or not.",
        "You understand and agree that the Software and Service may be suspended or stopped by ITEL based on our business development plans or as required by judicial, regulatory and supervisory authorities.",
        "Unless permitted by applicable law and with the written authorization of ITEL, you may not use or otherwise export or re-export ITEL Software and Service. " ]
},{
    title:"6 . Considerations on Your Use of This Software and Service",
    description:[
      
        "You fully understand and agree: when you use a specific service of this Software, relevant permissions and interfaces of your device may be required in order to achieve the corresponding features, while a separate user agreement may also be required for certain services. Please read the aforementioned relevant agreements and rules carefully before using this service;",
       " ITEL has the right to display all kinds of information to you in the process of providing this Service, including but not limited to prompts for authorization, advertising information and promotional information, etc. The information may appear in the form of system messages or pop-up windows. If you do not agree to receive certain information, you can cancel the relevant service, which may eventually lead to unavailability of the relevant service function;",
       " You understand and agree: ITEL will make commercially reasonable efforts to protect your data storage security during your use of this Service, but ITEL cannot provide a complete guarantee, including but not limited to the following situations:",
      "<b> 6.3.1 To the maximum extent permitted by law, ITEL is not responsible for your deletion or storage failure of relevant data in this Software and Service;</b>",

"<b>6.3.2 ITEL will retain the data according to the minimum retention period required for business </b>            development, unless you agree to extend the retention period or otherwise permitted by law. ITEL     also      has the right to decide at its discretion the maximum storage space of data in ITEL Device or this Software. You may back up relevant data in this Software and Service by yourself according to your own needs;",

"When you use this Service, the specific content displayed may differ depending on the version of the Software you use. You understand and agree: when you are using a certain version of this Software or entering the relevant pages of an application developed by ITEL, in order to provide you with a better service experience, the necessary information such as the installation location, size, and UI interface of the installed application on your terminal device may be adjusted, depending on the actual version provided by ITEL.",
"You fully understand and agree that, if you need to register an account when using this Software, you will be responsible for keeping the security of the registered account information and account password properly, and you will be responsible for all acts that occur under the account you registered with the ITEL device, including any contents that you publish and any consequences arising therefrom.",
"You shall judge by yourself contents that you have access to in using this Service and bear the risks arising from the use of such contents, including risks arising from the dependence upon the correctness, completeness or practicability of the contents. ITEL is unable to and will not bear any responsibility for any loss or damage suffered by you due to the above risks.",
"If ITEL finds or receives a report from others that you violated the terms of this Agreement, ITEL shall have the right at any time without notice to: delete and shield relevant contents; suspend or terminate your use of the corresponding ITEL account or all of the Service; investigate legal responsibility and take other measures. If you violate any terms of this Agreement, thus causing damage to any third party, you shall solely bear all responsibilities arising therefrom and compensate ITEL for any losses suffered by ITEL arising therefrom (including but not limited to possible administrative penalties, lawyer fees, and investigation and evidence collection fees)."
    ]
},{
    title:"6 . Updates of this Agreement",
    description:[
        "In order to better provide you with relevant Service and to guarantee the security of this Software, we may update this Software and relevant Services from time to time (including but not limited to software modification, software upgrades, partial function disabling,  function strengthen, new service development, software replacement and function improvement). You may choose whether to upgrade to the corresponding version based on your needs. In order to facilitate your experience of a better service by the ITEL device, and in compliance with applicable laws, this Software may enable automatic upgrade and update function for you by default. You can choose whether to enable this function in software settings. In case of such updates, we will notify you in an appropriate manner (including but not limited to system notifications, site messages, announcements, application store update notifications, etc.), and you have the right to choose whether to accept the updated version. Updating to the latest version may improve your user experience. If you decide not to accept the updated version provided by ITEL, you understand that you may place the Software under serious security risk or cause the Software to be unusable or unstable. Failure to update the software may cause some of the functions of the Software to be limited or rendered unusable."
    ]
},{
    title:"7 . Software and Services Provided by Third Parties",
    description:[
        "In order to facilitate your use of the ITEL device, this Software or this Service may use third-party software or services, and the results of such use and access are provided by the third party (including but not limited to the services and contents provided by the third party that you jump to through this Software, this Service, or accessed by said third party through ITEL’s open platform). In addition to the terms of this Agreement, you shall comply with the user agreements of third parties in using software or services provided by third parties on the ITEL device. ITEL cannot guarantee the security, accuracy and validity of the services and contents provided by third parties and other uncertain risks, and you shall solely bear relevant risks and responsibilities arising therefrom.",
        "Whether the third-party software or services are pre-installed in the ITEL device or activated or subscribed by yourself, you understand and agree that ITEL disclaims all express or implied warranties with respect to the security, accuracy and validity of the services and contents provided by third parties and other uncertain risks." ,
        "Any dispute between you and the above third-party software and services providers shall be settled by you and such third party with you taking relevant responsibilities, if any."
    ]
},{
    title:"8 . Fees and Advertisement",
    description:[
        "You understand and agree that although this Software and Service are currently offered to you free of charge, however, along with the continuous renewal of our Service, you may need to pay for some part of the Software or Service provided by ITEL. ITEL reserves the right to add fee-charging features and functionalities in future Service. ITEL also reserves the right to display advertisements in connection with the ITEL Software and Service to you. We will clearly notify you in case of any paid software and service in this Software before your use and you may choose whether to accept or use such paid software or service. At that time, please use such paid software or service according to our instructions (including but not limited to service fee standards, payment terms and service rules). You can use such paid software and services once you have explicitly agreed to the relevant rules and are willing to pay the fees.",
       " Your use of this Software and Service will consume your device, bandwidth, traffic and other resources. Fees for the above resources such as purchasing a ITEL device, Internet access fees, SMS fees, and payment for the Software’s value-added services shall be borne by yourself.",  ]
},
{
    title:"9 . Privacy Policy",
    description:[
       " When you are using ITEL Device, Software and Services, ITEL may need to collect personal data to provide you the Services. ITEL pays great attention to the protection of your personal data and has made the ITEL Privacy Policy , which states the detailed information of the way ITEL collects, uses, stores, transfers, and discloses your personal data.By downloading, installing or using the Services, you agree to be bound by the terms of this Agreement and its Privacy Policy, and ITEL will protect your privacy in accordance with this Privacy Policy."   ]
},
{
    title:"10 . Termination and Breach of Contract",
    description:[
"ITEL has the right to judge whether your behavior complies with the terms of this Agreement. If you are deemed to have violated relevant laws and regulations or fail to comply with any terms and conditions of this Agreement or related rules, based on the severity of your violation, ITEL and its licensors shall have the right to delete the content in violation, to limit, to suspend or to terminate your use of ITEL Software and Service without notice, and to take other measures that ITEL considers appropriate. And you will be held liable for your incompliance behavior. Once it is terminated, you must stop using this Software and Service, and delete all the Software and associated material s already copied and/or installed on your ITEL device immediately."
    ]
},{
    title:"11 . Indemnification",
    description:[
"You will indemnify, release and hold harmless ITEL, its parent, subsidiaries and affiliates, and all officers, directors, agents and employees thereof, and any party acting on ITEL’s behalf, from and against any and all third party claims, actions, liabilities, losses, damages, judgments, costs and expenses, including reasonable attorneys’ fees (collectively, “Claims”) arising out of (i) any use of the ITEL Services or products appearing on the ITEL Services by you or by any person that is not in accordance with the terms of this Agreement; (ii) any breach of this Agreement by you or by any person that you allow to use the ITEL Services; or (iii) any violation of any laws, regulations or the rights of any third party by you or by any person that you allow to use the ITEL Services or products appearing on the ITEL Services."
    ]
},{
    title:"12 . DISCLAIMERS",
    description:[
       " DISCLAIMER OF WARRANTIES. TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE ITEL SOFTWARE AND SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT ANY WARRANTIES OR GUARANTEES OF ANY KIND OR NATURE, EITHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING, BUT NOT LIMITED TO, ANY (IF ANY) IMPLIED WARRANTIES, DUTIES OR CONDITIONS OF MERCHANTABILITY, OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY OR COMPLETENESS OF RESPONSES, OF RESULTS, OF WORKMANLIKE EFFORT, OF LACK OF VIRUSES, AND OF LACK OF NEGLIGENCE, ALL WITH REGARD TO THIS SOFTWARE AND SERVICE. ",
        "THIS SOFTWARE DOES NOT CONTAIN ANY MALICIOUS CODE DESIGNED TO DESTROY YOUR DEVICE DATA OR TO OBTAIN YOUR PRIVACY INFORMATION. ITEL WILL ALSO DO ITS UTMOST TO ENSURE THE SAFE, PROMPT, EFFECTIVE, ACCURATE, RELIABLE AND CONTINUOUS OPERATION OF THIS SOFTWARE AND SERVICE, BUT WITH THE LIMITATION OF THE EXISTING TECHNOLOGY, THIS SOFTWARE AND RELATED SERVICE MAY BE AFFECTED BY VARIOUS UNSTABLE FACTORS, ITEL MAKES NO WARRANTIES OR REPRESENTATIONS THAT THE SOFTWARE IS COMPATIBLE WITH ALL SOFTWARE AND HARDWARE SYSTEMS, OR IS ERROR-FREE, CAN OPERATE WITHOUT INTERRUPTION OR THAT ANY ERRORS IN THE SOFTWARE OR RELATED SERVICE CAN BE CORRECTED. IN CASE OF CIRCUMSTANCES SUCH AS INCOMPATIBILITY OR SOFTWARE MALFUNCTION, PLEASE CONTACT US FOR TECHNICAL SUPPORT. IF THE COMPATIBILITY PROBLEM CANNOT BE SOLVED, YOU CAN DELETE THIS SOFTWARE. WITHIN THE MAXIMUM SCOPE PERMITTED BY APPLICABLE LAWS, ITEL IS EXEMPT FROM ANY OF YOUR LOSSES CAUSED HEREIN."
    ]
},
{
    title:"13 . LIMITATION OF LIABILITIES",
    description:[
       " TO THE EXTENT NOT PROHIBITED BY APPLICABLE LAW, IN NO EVENT SHALL ITEL, ITS AFFILIATES, SENIOR MANAGEMENT, DIRECTORS, EMPLOYEES OR AGENTS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, BUSINESS INTERRUPTION OR ANY OTHER INTANGIBLE DAMAGES OR LOSSES, ARISING OUT OF THE FOLLOWING REASONS, HOWEVER CAUSED, REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, TORT OR OTHERWISE) AND EVEN IF ITEL HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES: (i) YOUR USE OR INABILITY TO USE THE SERVICE;(ii) THE UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; (iii) THE DELETION OF, CORRUPTION OF, OR FAILURE TO USE YOUR TRANSMISSIONS OR DATA ON OR THROUGH THE SERVICE; (iv) STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON THE SERVICE; AND (v) ANY OTHER MATTER RELATING TO THE SERVICE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR PERSONAL INJURY, OR OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THIS LIMITATION MAY NOT APPLY TO YOU.",
      "  AT THE SAME TIME, ITEL’S MAXIMUM COMPENSATION FOR ALL YOUR LOSSES SHALL NOT EXCEED THE AMOUNT YOU PAID FOR USING/PURCHASING THE CORRESPONDING ITEL DEVICE, SOFTWARE OR SERVICES (IF PAID SERVICE IS INVOLVED) WITHIN 12 MONTHS BEFORE THE DATE OF INITIATING THE CLAIM. IF THE LAW OF YOUR REGION DOES NOT ALLOW THE LIMITATION OF LIABILITY THROUGH AN AGREEMENT. IN THIS CASE, THE APPLICABLE LAWS AND REGULATIONS SHALL APPLY." 
         
    ]
},{
    title:"14 . Governing Laws and Dispute Resolution",
    description:[
       "Governing Laws. The execution, performance, interpretation, modification and disputes settlement of this Agreement shall be governed by the laws of Hong Kong Special Administrative Region of the People’s Republic of China, excluding its conflict-of-law provisions. You agree that this Agreement is signed in Hong Kong.",
        "Any dispute or controversy between you and ITEL based on this Agreement shall be first settled through friendly negotiation. If no settlement can be reached through friendly negotiation, you unconditionally consent and agree that any claim, dispute or controversy (whether in contract, tort or otherwise) you may have against any ITEL entity, the directors, agents, and employees of any ITEL entity arising out of, relating to, or connected in any way with ITEL Services, shall be submitted to Hong Kong International Arbitration Center (HKIAC) for settlement before one (1) arbitrator in accordance with the rules of HKIAC. The arbitration shall take place in Hong Kong, China, and the arbitration proceedings and all pleadings and written evidence shall be in the English language, and judgment upon the award rendered by the arbitrators may be entered in any court having jurisdiction thereof. You will only be permitted to pursue claims against ITEL on an individual basis, not as a plaintiff or class member in any class or representative action or proceeding." 
    ]
},{
    title:"15 . General Terms",
    description:[
        "The headings of all terms of this Agreement are for reference purpose only, have no actual meanings themselves, and shall not be used as a basis for interpreting the meanings of this Agreement.",
       " If any term or provision of this Agreement is held to be invalid or unenforceable by any judicial or administrative authority for any reasons, such determination shall not affect the validity of enforceability of the remaining terms and provisions of the Agreement hereof, and the remaining provisions of this Agreement shall remain in full effect and shall be construed in accordance with its terms.",
        "If this Agreement is made in English, Arabic and other languages. In case of any discrepancy, the English version hereof shall prevail. ",
        "No Waiver. The failure of ITEL to enforce at any time any of the provisions of the ITEL Services, or the failure by ITEL to require at any time performance by you of any of the provisions of the ITEL Services, shall in no way be construed to be a present or future waiver of such provisions, nor in any way affect the right of ITEL to enforce such provision thereafter. The express waiver by ITEL of any provision, condition or requirement of the ITEL Services shall not constitute a waiver of any future obligation to comply with such provision, condition or requirement.",
        "Entire Agreement. This Agreement constitutes the entire agreement between you and ITEL governing your use of the Software and supersedes any prior agreements between you and ITEL relating to the use of the Software. You may also be subject to additional terms and conditions that may apply when you use or purchase open-source software, third-party content, or other ITEL services."
    ]
},
];

const Mainbody = () => {
  return (
    <div className=" space-y-10 lg:space-y-[60px] px-4 content">
        <div className=" space-y-2 text-grey/grey/3 ">
            <p>Last updated: July,2021</p>
            <p>Preamble</p>
            <p>Welcome to ITEL!</p>
            <p className="">ITEL MOBILE LIMITED and its global affiliates (hereinafter referred to as “ITEL” ,”we”, “us”, or “our”) hereby remind you to read and understand these Terms of Use (hereinafter referred to as “this Agreement”). This is a legal agreement between you and ITEL which governs your use of ITEL Software, Services and all the features and functions therein and any other related website or online offering whether accessed via a computer or a mobile device or through any other technology, manner or means. For proper use of ITEL system and software (hereinafter collectively referred to as the “Software”) and ITEL services (hereinafter collectively referred to as the “Service”), please read carefully and fully understand the terms and conditions herein before you use your ITEL device or download a Software mentioned in this Agreement, especially the Disclaimers, Limitation of Liabilities, Privacy Policy, Usage Rules, Applicable Law, Dispute Resolution and other sections which may have been highlighted in bold or in capital letters for your attention.</p>
        </div>
      {data.map((data) => {
        return <Accordian data={data.description} title={data.title} />;
      })}
    </div>
  );
};

export default Mainbody;
