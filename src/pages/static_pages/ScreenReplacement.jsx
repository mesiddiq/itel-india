import Herosection from "../../components/core/static_pages_core/Screenreplacement/Herosection"
import Cards from "../../components/core/static_pages_core/Screenreplacement/Cards"
import AssuranceCard from "../../components/core/static_pages_core/Screenreplacement/AssuranceCard"
import Terms from "../../components/core/static_pages_core/Screenreplacement/T&Q"
import { Helmet } from "react-helmet"
const ScreenReplacement = () => {
  return (
    <>
     <Helmet>
    <title>Get a Free Screen Replacement</title>
            <meta name="description" content={`itel new phone,new screen replacement,ITEL Free Screen Replacement,itel mobile warranty,itel screen replacement,mobile phone replacement,phone screen repair,one time screen replacement offer`} />
      
    </Helmet>

    <div className=' lg:space-y-[120px] space-y-[60px]'> 
     <Herosection/>
     <Cards/>
     <AssuranceCard/>
     <Terms/>
    </div>
   
    </>
  )
}

export default ScreenReplacement





















































// import React from "react";


// const ScreenReplacement = () => {
//   return (
//     <>
//       <div className=" font-markot content overflow-hidden">
       
//         <div className='bg-cover bg-center lg:p-20 p-5 flex items-center h-screen w-screen border border-black'>
//           <div className=" lg:w-[784px] w-[280px]">
//             <p className="   text-mobile/h1 lg:text-desktop/h1  text-white font-medium">
//               Get a Free Screen Replacement
//             </p>

//             <p className=" mt-5 text-desktop/body/1 lg:text-desktop/body/large text-white">
//               Got a new itel phone? No worries about cracks! With our One-Time
//               Screen Replacement Promise, if your screen gets damaged within the
//               first 100 days, we’ll replace it for free*
//             </p>
//           </div>
//         </div>

//         <div className=" w-screen mt-10 p-10">
//           <p className=" text-mobile/h4 lg:text-desktop/h2 text-brand/black text-center">
//             One-Time Screen Replacement
//           </p>

//           <div className=" mt-12 grid gap-10 grid-cols-1  lg:grid-cols-4">
//             <div>
//               <img
//                 src=""
//                 alt=""
//                 className=" h-10 w-10 border border-black rounded-full"
//               />
//               <p className=" mt-3 text-mobile/h5/medium lg:text-desktop/h4 text-brand/black">
//                 Swap Guarantee
//               </p>
//               <p className=" lg:text-desktop/body/1 mt-3  text-grey/grey/5 text-sm">
//                 If your Itel phone screen gets damaged within 100 days, we'll
//                 hook you up with a new one.
//               </p>
//             </div>
//             <div>
//               <img
//                 src=""
//                 alt=""
//                 className=" h-10 w-10 border border-black rounded-full"
//               />
//               <p className=" mt-3 text-mobile/h5/medium lg:text-desktop/h4 text-brand/black">
//               Same Specs, Same Vibes
//               </p>
//               <p className=" lg:text-desktop/body/1 mt-3  text-grey/grey/5 text-sm">
//               Your replacement phone will be the same model or one with similar specs, so you won’t miss a beat.
//               </p>
//             </div>
//             <div>
//               <img
//                 src=""
//                 alt=""
//                 className=" h-10 w-10 border border-black rounded-full"
//               />
//               <p className=" mt-3 text-mobile/h5/medium lg:text-desktop/h4 text-brand/black">
//               Fresh Look
//               </p>
//               <p className=" lg:text-desktop/body/1 mt-3 text-grey/grey/5 text-sm">
//               The swapped phone might look just like your old one or even better—score!
//               </p>
//             </div>
//             <div>
//               <img
//                 src=" "
//                 alt=""
//                 className=" h-10 w-10 border border-black rounded-full"
//               />
//               <p className=" mt-3 text-mobile/h5/medium  lg:text-desktop/h4 text-brand/black">
//               Normal Warranty After 100 Days

//               </p>
//               <p className=" lg:text-desktop/body/1 mt-3  text-grey/grey/5 text-sm">
//               Once 100 days are up, the usual repair warranty kicks in.
//               </p>
//             </div>
//           </div>

//           <div className=" h-screen flex items-center   justify-center   ">
//             <div className=" w-full p-20  bg-gray-500 flex items-center rounded-xl  h-[70%]">
//               <div>
//                 <p className=" text-4xl text-white font-medium">
//                   itel Assurance
//                 </p>
//                 <p className=" text-white mt-4">
//                   Get free original screen replacement: Enjoy your phone
//                   <br/> without the stress— itel's got your back!
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className=" bg-bg/secondry p-10 ">
//         <p className=" text-mobile/h4 lg:text-desktop/h2 text-brand/black text-center">
//             Terms & Conditions
//           </p>
//           <div className=" px-10 mt-10  space-y-1 text-desktop/body/1  text-grey/grey/5">
//             <p>
//               1. The policy is not valid after 100 days of product purchase
//               only, except for the original purchaser of the product(customer).
//             </p>
//             <p>
//               2. Valid proof of purchase is required to avail of the policy.
//             </p>
//             <p>3. Labor costs INR 500 + Taxes to be borne by the customer.**</p>
//             <p>
//               4.Phones must be in an identifiable condition by its IMEI no./IMEI
//               sticker
//             </p>
//             <p>
//               5.Other parts besides the screen if found damaged/defective for
//               whatsoever reason are chargeable to the customer.
//             </p>
//             <p>
//               6.If the device is repaired by an unauthorised person, water
//               damage, abuse, misuse, fire, earthquake, war and other natural
//               disasters, or force majeure caused by the damage are not covered
//               under the itel Mobile Warranty.
//             </p>
//             <p>
//               7.The itel Mobile phone suffering from catastrophic damage such as
//               being crushed or bent for whatever reason is not eligible for free
//               screen replacement.
//             </p>
//             <p>
//               7.Only the screen cannot be claimed by the customer without repair
//               at an authorized service center.
//             </p>
//             <p>
//               8.Kindly refer to the box package for the offer available with the
//               product. Policies/Offers can be model-specific.
//             </p>
//           </div>
//           <div className=" ">
//             <p className="  text-desktop/h4 mt-5">Disclaimer </p>

//             <div className=" px-10 mt-10  space-y-1 text-desktop/body/1  text-grey/grey/5">
//               <p>
//                 * itel mobiles reserves the right to change or withdraw the
//                 above-mentioned policies without prior notice.
//               </p>
//               <p>
//                 ** Labor cost is not applicable for Vision Series, P series and
//                 S Series products.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ScreenReplacement;
