import React from "react";
import { useState } from "react";


const Accordian = ({ data, title }) => {
  const [show, setShow] = useState(true);

  return (
    <>
    <div className=" space-y-4">
          <div className=" flex  items-start font-markot justify-between ">
        <p className=" text-mobile/h4 lg:text-desktop/h3 text-brand/black">
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
              className=" text-desktop/body/2/regular text-grey/grey/5  lg:text-desktop/body/1"
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
    title: "ITEL MOBILE LIMITED",
    description: [
      "ITEL MOBILE LIMITED and its global affiliates (global affiliates are companies related to ITEL MOBILE LIMITED by common ownership or control, collectively referred to as “ITEL”, “we”, “us”, “our”) fully respect your privacy and will do our utmost to protect the security of your personal information. We may collect, use or otherwise process your personal information based on your consent or in accordance with the relevant provisions of applicable laws and regulations during your use of ITEL Software or Service. This Privacy Policy (hereinafter referred to as “Policy”) is meant to help you understand how we collect, use, disclose, process and protect your personal information with regard to your use of ITEL products or services, your rights regarding the personal information provided to us, and how we safeguard your rights. This Policy applies to all ITEL devices, websites, and online applications that refer to or link to this Policy (collectively, our “Services”) regardless of whether you use a computer, mobile phone, tablet, or TV to access our Services. In consideration of the many products and services of ITEL, this Policy may not cover all scenarios of collecting and using personal information. We may supplement it through the privacy policy of specific products or services or otherwise notify you when we collect your information. For example, depending on the type of ITEL products or services you use and the country where you are located, the way we collect and use your personal information may differ for different products and services. A specific privacy policy may apply to a particular ITEL product or Service with additional privacy information collected therein. Any part not covered by such specific privacy policy of the particular ITEL product or service shall be subject to the content of this Policy.",
      "It is important to note that this Policy does not apply to services provided to you by other third parties. You may receive links, content, products or services provided by third parties. Please choose carefully whether to access them. We encourage you to carefully review the privacy policies of any Third Parties you access before submitting any personal information.",
      "We have chosen to use plain language in order to make sure that you fully understand this Policy and make your own choices. We have also marked or highlighted key terms in bold or capital letters for your attention. We will also notify you by a pop-up window when you first use our service to help you understand the core terms of this Policy.",
      "Before using our products or services, providing your personal information to us or allowing us to collect your personal information, please read this Policy carefully to understand our practices regarding your personal information and access it frequently to understand the updates to this Policy. If we update this Policy, we will notify you by announcements in the product or website to let you know about the changes we made. By accessing or using our Services after we have placed such a notice, you are deemed to have accepted the updated Privacy Policy. You can check the “Effective Date” posted at the top of the Privacy Policy for the latest update time.",
    ],
  },
  {
    title:
      "This Privacy Policy will help you understand the following contents:",
    description: [
      "How We Collect and Use Your Personal Information",
      "How We Use Cookies and Similar Technologies",
      "How We Store and Protect Your Personal Information",
      "How We Share, Transfer and Disclose Your Personal Information and Data",
      "How Your Personal Information is Transferred Across Borders",
      "Your Rights to Your Personal Information",
      "How We Handle the Personal Information of Children",
      "Third-Party Service Providers and Services",
      "Supplement and Update of the Policy",
      "Joint Controller",
      "How to Contact Us",
    ],
  },
  {
    title: "How We Collect and Use Your Personal Information",
    description: [
      "ITEL firmly believes that the fundamental privacy rights should not differ depending on where you live in the world. Any information relating to an identified or identifiable individual, in particular by reference to the individual’s name, identification number, location data, and online identifier or to one or more factors specific to the physical, physiological, genetic, mental of that natural person will be treated as “Personal Information” by ITEL, regardless of where such natural person lives.",
      "We only collect the information that is necessary for specified, concrete, explicit and legitimate purposes and will ensure that the information is not further processed in a manner that is incompatible with those purposes. You have the right to choose whether or not to provide the personal information when you use ITEL products or services or when we have requested. You are not required to provide your personal information to ITEL, but in some cases, if you choose not to do so, we will not be able to provide you with related products or services, nor will we be able to respond or resolve the problems you’ve encountered. We will collect and use your personal information only for the purposes described in this Policy. The following describes your personal information that we collect:",
    ],
  },
  {
    title: "1.1 Information you provide directly to us",
    description: [
      " In order to enable you to access our product features and services, we will ask you to provide necessary personal information. The following are some examples:",
      "Account information. When you register for ITEL products or services, such as creating an APP account, participating in community forum interactions, you may need to provide: your phone number, name, nickname, profile picture, date of birth, nationality, age, email address, photos, the city where you are located and other needed information depending on the features of different products or services; In order to log in to the relevant system more conveniently, such as using face recognition or fingerprint unlocking for quick login, you may need to provide the corresponding facial or fingerprint biometric information;",
      "Order information. When you purchase our products or services online or offline, in order to ensure that the products or services can be provided to you accurately in a timely manner, we may ask you to provide information such as the recipient’s name, account information, ID number, phone number, zip code, shipping and billing address, and credit card information to process your order;",
      "After-sales information. When you need us to provide after-sales service or customer support or hope that we solve the problem you encountered when using the products or services, you may need to provide information such as your name, phone number, device information, shipping and billing address, problem descriptions when filling out the warranty card / electronic warranty card or giving feedback on the problem;",
      "Other information you provide to us. For example, when you participate in our promotional activities such as sweepstakes, prize quiz and fan trial research, you may need to provide your nickname, profile picture, name, phone number and other needed information according to different scenarios.",
    ],
  },
  {
    title:
      "1.2 Information we obtain during your use of our products or services",
    description: [
      "  The personal information ITEL collects depends on how you interact with ITEL. During your use of ITEL products or services, as needed to provide you with products or services, we will collect the necessary information with your authorization or consent, including:",
      "Device or SIM-related information. Given that certain services will be for a particular type of device, in the process of activating a business and using the device, we may collect device-related information in the process of activating such service or using such device, such as the device name, device model, IMEI number (International Mobile Equipment Identity ), GAID number(Google advertising Identity), IMSI number (International Mobile Subscriber Identity), IP address(Internet Protocol Address), Mac address(Media Access Control Address), SN (product Serial Number); version and type of, itelOS ,CPU ID, Build number, ROM(Read-Only Memory) version, Android version, Android ID, Space ID, system language; mobile country or region settings, phone latitude and longitude, device manufacturer information and model name, device hardware basic configuration information and status, network operator and network connection type, device or user identification card information (Subscriber Identity Module).",
      "Log information. When you use our products or services, we may collect certain information and store it in log files, such as service access time, access frequencies, usage time, temporary historical messages, standard system logs, event information (errors, crashes, restarts, upgrades), data usage and other log information generated by using the services.",
      "Location information (only applies to specific services). When you need to use certain location-based services, such as using navigation software, checking the weather conditions in a geographic location, retrieving your phone’s location, sharing your geographic location with others. We may, with your consent, collect and process approximate or precise and accurate information about the actual location of the equipment you use such as community identifier, location area code, tracking area code, router area code, mobile country code, mobile network code, frequency, latitude and longitude information, time zone settings, country or area code, name of the city, and language settings. Without doubt, unless you provide consent or in order to comply with a legal requirement by the relevant country or region, we will not continue to collect your location information to identify your whereabouts. You can restrict access to location information of each application at any time directly on your mobile device via “Settings” > “Location (paths may differ for different versions)",
      "Cookies information. Our websites, interactive applications, ITEL products and advertisements may use technologies such as Cookies, Pixel Tags and Web Beacons to collect and store your relevant personal information.",
      "Information regarding your use of Applications. When you use applications, we may collect information related to your application usage such as application basic information (e.g. application list, application ID), SDK (Software Development Kit) information, system update settings, application settings (e.g., region setting, languages setting, time zone setting, fonts), access and exit application time, application status record (e.g. downloading, installing, updating, deleting).",
      "Health Information. When you are using certain sports products such as sports health service, we may collect information relating to your health status, including your physical or mental conditions, such as your gender, height, weight, date of birth, heartbeat, heart rate and steps.",
      "Voice information. When you use voice commands to control some certain service, we may store the voice you recorded on our servers. If we work with a third-party service provider that provides speech-to-text conversion services for us, such third-party providers may receive and store certain voice commands.",
      "Third Party Information. We may collect and use the information specific to you that may be assigned by third party service providers and business partners, for example, your advertising ID assigned by a third party.",
      "Other personal information. Different types of your personal information may be obtained for different types of products or services. For personal information not covered by this Policy, the relevant product or service will inform you of your personal information that may be collected through the specific privacy policy of said product or service or by notification or other means, and will obtain your consent prior to its collection.",
    ],
  },
  {
    title: "1.3 Information obtained from other sources",
    description: [
      "Where permitted by law, we may obtain your personal information from other individuals, business entities, public channels or other third parties acting at your direction, our partners who work with us to provide our products and services and assist us in information security and fraud prevention, and from other lawful sources. The following are some examples:",
      "when you use third-party social networking services or pre-installed third-party applications, we may also obtain your personal information from these services or applications;",
      "we may collect and use the information specific to you that may be assigned by third party service providers and business partners, e.g., your advertising ID assigned by a third party;",
      "for certain services that might include account and financial transactions, with your authorization, we may also validate the information you provide, such as phone number through legitimate third-party for security and fraud prevention purposes;",
      "when you direct other third parties to share data with ITEL, e.g., you may direct your mobile operator to share information about your account with us for account activation;",
      "information about you that others provided to us, e.g., when other third parties purchase products for you via our service, they will provide us your delivery address.",
      "We will explain it to you at the time of collection of the above information and obtain your consent. ITEL may also use other methods to collect other information about you, your device or your use of services, which will be explained to you at the time of collection and we will obtain your consent.",
      "For research purposes, we may use datasets that contain different types of information that could be associated with an identifiable individual. When acquiring such datasets, we will collect them in accordance with applicable law (including the law in the jurisdiction in which the datasets are hosted). We do not and will not attempt to reidentify individuals from such datasets when we are using such datasets for the purpose of research and development.",
      "",
      "",
      "",
    ],
  },

  {
    title: "1.4 Collection and use of non-personal information",
    description: [
      "We may also collect other types of information that have no direct or indirect connection with individuals. According to applicable local laws, this information may not be defined as personal information. We will give you examples of such information below. Please note that this information without any personal identity cannot be used to identify an individual. The purpose of our collection is to understand how you use our products and services, and to continuously improve our services to better meet user needs based on such information. Since this type of information is not personal information, we will decide on how we collect, use, disclose and transfer such non-personal information. Only when such non-personal information is used in combination with other information to identify a specific natural person, or when it is used in combination with personal information, will this information be regarded as personal information. In this case, we will anonymize and de-identify this type of information, unless with your consent or otherwise according to laws and regulations.",
      "1 . Statistics of device and product sales, and various statistical summary information, such as screen size, device version, registration time, version information.",
      "2 . Statistical data generated when you install, use, uninstall a specific service and/or the applications within, such as non-identifiable device-related information, website visits, downloads, daily usage events, page access events, page access time events and session events; the use of Apps APK name, App version, App usage, opening times, crash data, App data usage.",
      "3 . Requests and execution of server commands, such as data Command ID, OS version number, software version number, command version number.",
      "4 . Network monitoring data, such as request time, number of request or error request;",
      "5 . When users using notification box to receive notifications, such as OS version, task ID, command version, notification package name, notification type, notification status;",
      "6 . Phone Launcher data, such as App ID, application name, APK name, APP version, browser UA parameters, device type, network connection type.",
      "7 . Collection of App data, such as application startup event, application crash event (e.g., logs automatically generated after the application crashed), application installation event, application uninstallation event, battery usage information, brightness adjustments.",
      "It needs to be emphasized and stated again that, due to the large number of our products and services, the content and scenarios of personal information collected by ITEL as listed herein cannot cover all of our business scenarios. For any part that is not included in this Policy, we will supplement it by specifying in the privacy policy of specific products or services, or by notification or other means when collecting data in specific business scenarios.",
    ],
  },
  {
    title: "Purpose of our use of personal information",
    description: [
      "When we need to fulfill our obligations to you under the Terms of Use and/or service contract, or when we believe that it is necessary for protecting legitimate interests of us or a third party after our assessment, with your consent, we may process your personal information for the purposes described in this Policy. We may also process your personal data for compliance with and enforcement of applicable legal obligations. We will strictly abide by the content of this Policy and its updates when using your personal information.",
      "1 . To provide you with registration services and account management services. We will use the basic information you filled out during registration to provide you with the corresponding registration services and subsequent account management services.",
      "2 . To provide customer support and related services for your purchase and post-purchase activities. For example, you may need to provide necessary information when we offer delivery services, warranty services, technical support, or quickly locate and fix existing abnormal issues via feedback of error reports.",
      "3 . To provide you with information services for your needs or interests. For example, we or a third party may use your location information to provide you with weather forecast push, geographic location navigation and other related information services; we may use your personal information, analyze your usage habits and behavior preferences, and provide you with notification or content push services based on your consent.",
      "4 . To continue to provide you with better products and services, we may invite you to participate in our product improvement and user experience related programs or interactive activities. After you join our programs or activities, we may collect your necessary personal information such as mobile phone numbers (mainly used for research and revisits), device information, operation behavior data, location information and log information for statistical analysis, so as to continuously improve and optimize products and provide a better user experience.",
      "5 . To conduct relevant commercial promotional activities. If you take part in a sweepstake, contest, or similar promotion, we may use the information you provide to administer those programs. If you no longer wish to receive certain types of promotional materials, you may opt out by the method provided in the message (e.g., the unsubscribe link at the bottom of the message) unless otherwise specified in applicable laws. You would have more information in the part of “Your Rights to Your Personal Information” below.",
      "6 . To provide location-based services. When using ITEL OS services, location information may also be used by us to provide you with the service and accurate details about that location for the best possible user experience, for example, weather details, location access (as part of the Android platform). You may turn off location services in the “Location Information” option in “Settings” or turn off the use of location services of an app at any time.",
      "7 . To provide location-based services. When using ITEL OS services, location information may also be used by us to provide you with the service and accurate details about that location for the best possible user experience, for example, weather details, location access (as part of the Android platform). You may turn off location services in the “Location Information” option in “Settings” or turn off the use of location services of an app at any time.",
      "8 . To provide push service and notification service for the purpose of evaluating advertising performance and send notifications from ITEL OS Service about software updates or new product announcements, including information about sales and promotions, we will collect the application relevant information (for example, the app version ID, APK name), and device relevant information (for example, model type, brand). We may use your personal information for the purpose of sending you push messages that offer or advertise our products and services and/or selected third party products and services. This is only done with your consent, where required under applicable laws. You may opt-out from receiving marketing information from us and third parties at any time by changing your preferences in the “Application and Notification” option in “Settings”, or managing your preferences through the third-party app/website using ITEL push. You can get more information for “Your Rights to Your Personal Information” section below.",
      "9 . To provide personalized services and content, including advertisements. For better protection of your privacy, we do use a unique identifier rather than your name, email, or other information by which you can be directly identified, to provide you with personalized products, services, advertising and other activities. We may create profiles by analyzing the aforementioned information and building segments (putting your personal information in one or more segments). Targeted advertising will be conducted with your consent only to the extent required by applicable laws.",
      "We may combine the aforementioned information with other information (including information across different services or devices such as computers, mobile phones, and other connected devices) to provide and improve our products, services, content, and advertising. You have the right to opt-out from receiving personalized advertisements and to object to user profiling at any time, including identification analysis for direct marketing and automated decision-making purposes. In order to exercise these rights, you can opt out at any time through the opt out option in the corresponding software and product.",
    ],
  },
  {
    title: "What are Cookies and Similar Technologies",
    description: [
      "Cookies are small text files that are stored on your mobile device by us to ensure that this software’s normal operation and your convenient access to it. Cookies usually contain identifiers, site names, and some numbers and characters. Our websites, online services, interactive applications, email and other information services may use Cookies and other similar technologies such as Pixel Tags and Web Beacons. We generally treat information collected by Cookies and similar technologies as non-personal information as they do not contain any of your personally identifiable information. However, to the extent that Internet Protocol (IP) addresses or similar identifiers are considered personal information by the laws of the countries concerned, we will also follow the laws of the countries concerned.",
      "We and our partners use Cookies or similar tracking technologies to better understand the use of mobile software on your device, to understand how often you use the app, events that occur within the app, cumulative usage, performance data, and where the app is downloaded from; we and our partners use Cookies or similar tracking technologies to analyze trends, administer the site, track user behavior on the site, and collect demographic information about our user base as a whole. For example: we may cooperate with third parties to display ads on our websites or to manage our ads on other websites. Our third-party partners may use Cookies or similar tracking technologies to show you ads based on your browsing history and interests.",
      "We will not use cookies for any purpose other than those stated in this Policy. You can manage or delete Cookies according to your preferences. You can clear all the cookies saved on your mobile device through the “Setting” option of the corresponding software and product (paths may slightly differ for different device and service), or you can choose not to be tracked and opt out ads based on interests by deleting all Cookies or resetting the mobile end device (clearing the content and data).",
    ],
  },
  {
    title: "How We Store and Protect Your Personal Information",
    description: [
      "How we store your personal information",
      "The personal information collected with your consent will be stored in accordance with the laws and regulations on the personal privacy data protection of the countries concerned. To the extent not prohibited by local laws and regulations, we may also store the collected personal information in countries or regions outside the country where the business is located.",

      "Currently, ITEL may store your personal information in: India and/or Ireland.",

      "In particular:",

      "The personal information collected and generated during our operations in India will be stored on servers located in India.",

      " The personal information collected and generated in our business outside India will be stored on servers in Ireland.",

      " According to business conditions, we may use servers in other regions or countries in the future, and we will update this Policy at that time.",

      "Whether we store personal information in the country where the business is located, or in other countries or regions to the extent that doing so does not violate laws and regulations, we will retain it in accordance with the relevant laws and regulations on data storage. At the same time, we will consider the characteristics, scope and purpose of personal information processing, the risks that may be encountered in the processing, and the serious consequences caused by the damage, etc., and implement the necessary security measures. For example, we will use encryption and de-identification methods to store the personal information collected. We will also keep the information for the shortest storage period specified by law. For those not specified by law, we will retain the information according to the shortest storage period required for business. For data that exceeds the storage period, or data that you request us to delete, we will delete said data accordingly or take other appropriate measures without violating the relevant laws and regulations.",

      " How we protect your personal information",
      "We will take other necessary measures to protect the security of your personal information and prevent data from being misused, unauthorized access, and unauthorized modification, disclosure or destruction, etc.",

      "We implement security safeguards designed to protect your personal information and regularly monitor our systems for possible vulnerabilities and attacks, and we use administrative, technical, and physical safeguards to protect your personal information by taking the types of the personal information, the processing, and the threats posed themselves into account. We are constantly working to improve on these safeguards to keep your personal data secure.",

      " Nevertheless, we need to remind you that no matter how perfect the measures are, there is no absolute guarantee of avoiding the occurrence of data storage security incidents. If a data breach event occurs, we will report it to the corresponding regulatory authorities as required by the relevant laws and regulations, and provide the type of personal data involved in the breach, the number of data subjects, the possible consequences of the breach, and the remedial measures we intend to take according to the requirements of the regulatory authorities. We will take the best possible measures to remedy or mitigate the damage and consequences of data breach. When permitted or required by laws and regulations, we will inform you of the possible consequences or significant damage to you in a timely manner, so that you can take appropriate measures promptly to protect your rights as much as possible.",

      "There is no absolutely safe website, Internet transmission, computer system and wireless connections. In addition to the necessary protective measures we have taken, users have to strengthen the awareness of privacy security risks. For example, when you access third-party websites, links, products or services from our services, for the security of any data collected by those websites, links, products or services, please read through the terms and conditions of those third-parties carefully. We do not take any legal responsibility for data security issues caused by such third parties. If you find that certain contents, advertisements or features in our websites, products or services may be provided by a third party and may possibly endanger your privacy and security, please contact us promptly, as we will handle it with priority in accordance with laws and regulations.",
    ],
  },
  {
    title:
      "How We Share, Transfer and Disclose Your Personal Information and Data",
    description: [
      " When sharing, transferring, and disclosing your personal information, we uphold the principles and requirements of minimization, necessity, and legality. Under normal circumstances, we do not share, transfer or disclose your personal information externally. However, to the extent permitted by applicable laws and regulations, we may share, transfer and disclose your personal information in the following situations:",
      "1 . How we share your personal information",
      "We do not sell any personal information to third parties. In order to provide you with timely services, your personal information may be shared with ITEL affiliated companies. We will only share your information within ITEL affiliated companies for legitimate and explicit purposes, and only share the information necessary to provide the services, and are bound by the purposes stated in this Privacy Policy. If a purpose concerned is not included in this Policy, we will state it in the corresponding privacy policy or notice of the specific product or service.",
      "We may share the necessary personal information with authorized third-party partners (including technical service providers, data storage service providers, after-sales service providers, marketing promotion service providers, third-party SDK service providers, etc.) for the performance of certain features or to provide you with better service and a better user experience. For example, when you purchase ITEL products, ITEL may need to provide your relevant personal information to the logistics service provider to arrange delivery; when providing you with after-sales service, we may need to provide your relevant personal information to the after-sales service provider in order to offer better service and support. We uphold the principles of minimization, necessity, and legality to carry out such sharing. Before sharing information, we will sign strict confidentiality agreements with authorized partners and require them to take relevant confidentiality and security measures to process personal information in accordance with this Policy and applicable laws in your jurisdiction. In addition, we will also require them to provide data security capabilities and information security qualifications (e.g., grade protection assessment, information security management system). When we embed the SDK of an authorized partner or other similar applications in the Software, we will notify you promptly and request the SDK service provider that obtains the information to protect your data security.",
      "In order to provide evaluation, analysis or other business services, we may also share your non-personal information with third parties. For example, we may use aggregated data to help partners (e.g., advertising service providers) understand the effectiveness, feedback and usage trends of their services.",
      "In the event of a merger, acquisition or bankruptcy liquidation, asset transfer and other related transaction, if a personal information transfer is involved, we will require the new entity or organization holding your personal information to continue to be bound by this Policy through an agreement or other appropriate measures, and we will require such subject to take confidentiality and security measures of a degree no less than the requirements of this Policy to process personal information.",

      "2 . How we transfer your personal information",
      "ITEL will not transfer your information to any other parties, except in the following circumstances:",
      "Obtain your explicit consent.",
      "If ITEL involves in a merger, acquisition or sale of all or part of its assets, which may affect your personal information, we will issue a prominent notice via email and/or on our website or other appropriate methods to inform you of any changes in the ownership and your rights of your personal information, and any choices you may have about your personal information.",
      "In the case that has been explained in this privacy policy or notified you by other means.",
      "3 . How we disclose your personal information",
      "According to the legal requirements, legal procedures, litigation and/or requests from government departments and authorities, ITEL may need to disclose your personal information. If the disclosure is necessary or appropriate for national security, law enforcement, or other matters of public importance, we may also disclose information about you.",

      "Additionally, we may share your personal information with:",

      "Our attorneys, lawyers, accountants, auditors, or similar consultants, when we request them to provide professional advice.",
      "Investors and other relevant third parties, if actual or potential sales or other company transactions occur and are related to entities within the ITEL Group.",
      "Other third parties, for example, the disclosure of specific information with your authorization.",
    ],
  },
  {
    title: "How Your Personal Information is Transferred Across Borders",
    description: [
      "As a globally operating company, we have resources or servers in different countries or regions worldwide to support our products and services. In order to better provide services to you, for the purposes described in this Policy, and to the extent permitted by applicable local laws and regulations and with your authorized consent, we may transfer your personal information to these resources or servers for storage or processing, we may also transfer your personal information to third-party service providers and business partners and your data may therefore also be transmitted to other countries or regions. The privacy protection laws of these countries or regions may be different, and the jurisdiction in which these global resources or servers are located may or may not protect personal information to the same standards as in your jurisdiction. However, we will still strive to comply with our Privacy Policy to protect your personal information, and we will follow the legal requirements of the country or region where the personal information is located to carry out the corresponding cross-border transfer and other processing of personal information.",
      " In the circumstance that we transfer personal information outside of your jurisdiction, whether it transferred to our affiliates or third-party service providers, we will comply with relevant applicable laws. We will take appropriate security measures and safeguards to make sure that all such transfers meet the requirements of applicable local data protection laws.",
    ],
  },
  {
    title: "Your Rights to Your Personal Information",
    description: [
      " As a data subject, you have a series of rights to your personal information, including the right to confirm, access, correct, delete, withdraw consent, and lodge complaints (hereinafter referred to as “request”). We fully understand and respect your rights, and such rights will be subject to specific exclusions and exceptions under applicable laws. We will also take active steps to ensure that your rights are effectively protected. However, please understand and note that for security reasons, we may need to verify your identity before processing your request. In principle, we do not charge a fee for your lawful and reasonable request, but we will charge a certain reasonable fee for repeated requests that exceed the reasonable limit where applicable, and based on actual administrative costs permitted by the applicable laws. We may reject requests that are unreasonably repetitive, require excessive technical means (for example, to develop new systems or fundamentally change existing practices), pose risks to the legal rights of others or are extremely impractical, or violate the mandatory provisions by law. ",
      " 6.1 Right to confirm and access",

      "We inform you how we collect and process personal information through this Policy or in the form of a privacy policy or notice of the specific product or service. You have the right to confirm or reject such collection and processing via a check box or other methods. However, after you reject, some features that require your explicit authorization and consent to use may no longer be available. You can directly access the personal information you have provided to us in the interface of our products or services. For those that you are unable to access, you can send an email to privacy@transsion.com. We will handle it promptly after receiving your email.",
      "6.2 Right to correct and delete",

      "When your personal information is changed, or when you find that your personal information collected and processed by us is inaccurate or incomplete, you have the right to ask us to make corrections or additions. You can directly correct or modify some of your personal information on the relevant product/service function pages. When your personal information collected by us has fulfilled the purpose of collection or is no longer required, or when you find that our collection and processing of your personal information violates the provisions of laws and regulations or this Privacy Policy, you have the right to ask us to delete the relevant personal information. For personal information that we have not provided you with a channel for correction or deletion, you can request that it be corrected or deleted by contacting privacy@transsion.com.",
      "  However, we may not grant your deleting request in some situations, for example, if you ask us to delete your transaction data when TRANSSION is legally obligated to keep a record of that transaction to comply with the applicable local law. Please also kindly note that if you request to delete your information from our products and services, we may not remove the corresponding information from the backup system immediately due to some applicable local laws and technological limitations, however, we will securely store your personal information and isolate it from any further processing until the backup is updating or can be deleted or be made anonymous.",
      " 6.3 Right to withdraw consent",
      " To achieve the respective features of our various products or services, we will require necessary personal information in accordance with the applicable local laws. This is described in the “How We Collect and Use Your Personal Information” part of this Policy. You can withdraw your consent previously granted to us for a specific purpose by deleting information, turning off device features, and requesting to withdraw consent, including the collection, use and/or disclosure of your personal information that we manage or control. If the method of request to withdraw consent is clearly stated in the privacy policy or notice of the specific product or service, please follow it accordingly. If not specified, you can send the relevant request to privacy@transsion.com. We will process your request within a reasonable time after you send the request, and thereafter will not collect, use and/or disclose your personal information in accordance with your request.",
      " If you withdraw your consent, you may not be able to continue receiving the part and/or full benefit of ITEL’s products and services. The withdrawal of your consent or authorization will not affect the validity of our previous processing activities based on your consent.",
      " 6.4 Right to cancel a service or account",
      "You can click on the “Settings” button in a specific app if you wish to cancel a specific product or service, or you can contact us via privacy@transsion.com.",
      " We hereby kindly remind you that, if you wish to cancel a certain service or account, such cancellation may prevent you from using some of ITEL products and services, and such act of account cancellation is irreversible. Once you cancel your account, we will delete or de-identification your relevant information.",
    ],
  },
  {
    title: "Right to complain",
    description: [
      "You have the right to lodge a complaint by sending us an email at privacy@transsion.com. We will respond promptly after receiving your complaint. If you are unsatisfied with our response, especially if our processing of personal information violates your legitimate rights and interests, you may refer your complaint or report to your local statutory personal data protection department, or file a lawsuit with a competent court.",
      
    ],
  },
  {
    title: "Right to control your privacy settings",
    description: [

      "You have the right to control your privacy settings and restrict our collection, use, disclosure, or processing of your personal information via such privacy settings, below are some examples of your control over your privacy settings:",

"Choose to sign in or log out of your ITEL account.",
"Select to turn on or turn off the User Experience Program and Location Access features.",
"Switch on or off for other services and features which deal with sensitive or personal information (e.g., face unlock, fingerprint lock). You may obtain more details regarding your device’s security status in the ITEL Security app as well.",
"if you have previously agreed to our use of your personal information for the above-mentioned purposes, you may change your decision by contacting us via privacy@transsion.com." ,  
    ],
  },
  {
    title:'Rights in some jurisdictions',
    description:[
    "  Particularly, according to the applicable laws of some jurisdictions, you may have the following data subjects rights:",
"Right to restriction processing. You have the right to request our restriction on the processing of your personal information. We shall consider the grounds regarding your restriction request. If the grounds are in the compliance with applicable data protection laws, we will process your personal information under applicable circumstances in such laws and notify you before the restriction of processing is lifted.",
"Right to automated decision-making. You have the right to refuse the processing based on automated decision-making, including profiling and other automated processing which may have legal or similar effects on you.",
"Right to data portability. You have the right to apply for your personal information to be transmitted to another data controller in a structured and commonly used format.",
"We have the right to refuse to process your requests or only respond to some of your requests where an exemption applies or when we are otherwise entitled to do so under applicable laws, for example, some requests are manifestly unfounded or obviously excessive or it requires the disclosure of information of third parties.",
    ]
  },
  {
    title:'How We Handle the Personal Information of Children',
    description:[
      "ITEL understands the importance of safeguarding the personal data of children, therefore, children under the age of 14 or the equivalent age as specified by law in your jurisdiction (we will define children mainly based on the laws and regulations of the country or region where our business is located because laws of different countries may differ when defining the age of children) are not allowed to use our products or services without the consent and guidance of their legal guardians and such practice shall be permitted by relevant laws and regulations. In principle, we do not provide services directly to children, do not actively collect children’s personal data or do not use children’s personal information for the purposes of marketing. We will only collect, use and disclose a child’s personal information with the explicit permission and consent of the child’s guardian, to the extent permitted by law, and when it is indeed necessary to collect such information. If at any time the guardian needs to access, modify or delete the personal information related to the child under guardianship, please contact us by methods as described herein, and we will respond in a timely manner. If you find that a child’s information has been collected to us without the awareness of the legal guardian, please send an email to privacy@transsion.com to contact us. We will remove the relevant information as soon as possible. If we find that we have collected the personal information of a child without the prior consent of a verifiable guardian, we will also remove the relevant content as soon as possible.",
 
    ]
  },
  {
    title:'Third-Party Service Providers and Services',
    description:[
      "When you use ITEL products or services (which involves map navigation, voice support, video player, system cleaning and security-related services, gaming, statistics, payment processing, information filtering, etc.), you may receive links to third-party websites or content and services provided by third parties other than us, and some third parties’ products or services can be accessed in the form of SDKs and others. You can choose whether to visit or accept the third-party websites, products, and services at your sole discretion. Our Privacy Policy does not apply to products and services provided by any third party. Since we are not able to substantially control a third party, we are not responsible for the third party’s collection and processing of your personal information. Therefore, when you submit any information to a third party, please carefully review the third party’s privacy policy and take care of your personal information."
 
    ]
  },
  {
    title:'Supplement and Update of the Policy',
    description:[
    "  We reserve the right to update or modify this Policy from time to time in order to reflect the changes in our business, technology and applicable law and practice. In case of any modification of this Policy, we will notify you of the latest Policy via the official ITEL website https://www.itel-mobile.com or mobile device notifications. Please pay attention to our official website and mobile device notifications for the latest updates of this Privacy Policy. Although this Privacy Policy may be modified, your rights under this Policy will not be diminished without your explicit consent.",
"we will ask for your explicit consent again in accordance with applicable laws before we collect additional personal information from you or when we use or disclose your personal information for new purposes. Your continued use of the products and services on the website, mobile and/or any other device constitutes your agreement to the updated Privacy Policy. ",
"The content of ITEL products or services described herein may vary according to the type of product you use, your system version, or requirements of local laws and regulations. ",  ]
  },
  {
    title:"Joint Controller",
    description:[
"Shanghai Transsion Co., Ltd. and CHONGQING TRANSSION COMMUNICATION TECHNOLOGY LIMITED are joint controllers with us and we are jointly responsible for processing your personal information. ITEL MOBILE LIMITED , Shanghai Transsion Co., Ltd. and CHONGQING TRANSSION COMMUNICATION TECHNOLOGY LIMITED  take the reponsibilities severally under the applicable laws. You can contact us for more details regarding the joint controllership by the contact information in section XI. “How to Contact Us”."
    ]
  },
  {
    title:"How to Contact Us",
    description:[
    "  If you have any comments, questions or concerns with respect to our Privacy Policy or practices of personal information protection, please contact us via:",
"Email: privacy@transsion.com (Note: This mailbox is used for receiving messages related to our Privacy Policy or our protection of personal information only)",

"We will review your privacy or personal information requests as soon as possible and respond to you in 15-30 days after verifying your user identity. If your request itself involves any complicated or significant issue, we may ask you for more information.",
"If you are not satisfied with our response, especially when you believe that your legitimate rights and interests have been violated by us, you can seek remedy from relevant data protection regulatory authority in your jurisdiction. If you consult us, we will provide information on the relevant complaint channels that may be applicable based on your circumstance.",
"Thank you for your time to read our Privacy Policy!"
    ]
  }
];

const Mainpage = () => {
  return (
    <div className=" space-y-10 lg:space-y-[60px] px-4 content">
      {data.map((data) => {
        return <Accordian data={data.description} title={data.title} />;
      })}
    </div>
  );
};

export default Mainpage;
