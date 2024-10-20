import React from 'react'
import HeroBanner from '../../components/core/static_pages_core/ServiceCenter/HeroBanner'
import Card from '../../components/core/static_pages_core/ServiceCenter/Card'
import Bottom from '../../components/core/static_pages_core/ServiceCenter/Bottom'

const ServiceCenters = () => {
  return (
    <div className=' lg:space-y-[100px] space-y-[72px]'> 
      <HeroBanner/>
      <Card/>
      <Bottom/>
    </div>
  )
}

export default ServiceCenters



// import React from "react";
// import MainHeader from "./header/MainHeader";

// const ServiceCenters = () => {
  
//   return (
//     <div className=" font-markot">
//       <MainHeader />
//       <div className='lg:bg-[url("/banners/Frame%201973341368.png")] bg-[url("/banners/moblie%20-%20service%20center%20BG.png")]  bg-cover bg-center lg:min-h-[520px] w-full lg:p-20 p-10'>
//         <p className=" text-white lg:text-desktop/h1 lg:w-[851px] text-mobile/h1 w-[280px] font-markot ">
//           Weekend Bonanza at itel Service Center
//         </p>

//         <div className=" lg:w-[751px] grid grid-cols-1 lg:grid-cols-3 mt-5  gap-7">
        
//           <div className=" flex gap-3   items-center">
//             <img
//               src={"/static_page/user-add.png"}
//               className=" h-[42px]"
//               alt=""
//             />
//             <div className=" text-white font-markot">
//               <p className=" lg:text-desktop/h4">100% Discount</p>
//               <p className="  lg:text-desktop/body/large">on Labor Charges</p>
//             </div>
//           </div>
//           <div className=" flex gap-3 items-center">
//             <img src={"/static_page/clock.png"} className=" h-[42px]" alt="" />
//             <div className=" text-white font-markot">
//               <p className=" lg:text-desktop/h4">10% Discount</p>
//               <p className="  lg:text-desktop/body/large">on Accessories</p>
//             </div>
//           </div>
//         </div>

      
//       </div>

//       <div className=" grid lg:grid-cols-3 grid-cols-1 gap-10 lg:p-20 p-5">
//         {card_data.map((data) => {
//           return (
//             <>
//               <div
//                 data-aos="fade-up"
//                 className="  space-y-4  flex lg:flex-col flex-row  mt-10 items-center"
//               >
//                 <img
//                   className="  lg:w-[322px] lg:h-[290px] w-[141px] h-[127px] "
//                   src={data.img}
//                 />
//                 <div className=" flex flex-col  justify-center items-center">
//                   <p className="  text-black/1  text-desktop/h4 ">
//                     {data.service_name}
//                   </p>
//                   <div className=" flex justify-center items-center  mt-2">
                 
//                   </div>
//                 </div>
//               </div>
//             </>
//           );
//         })}
//       </div>

//       <div
//         data-aos="fade-up"
//         className=" bg-bg/primary/1 lg:space-y-0 space-y-10  p-0 lg:p-10 flex flex-col lg:flex-row items-center justify-between mb-10 "
//       >
//         <div className=" space-y-6 lg:py-0 py-5">
//           <p className="  text-mobile/h4 lg:text-desktop/h2">
//             Find itel Service Center
//           </p>
//           <p className=" text-desktop/body/1 lg:text-desktop/body/large">
//             1300+ Service Centers across India
//           </p>
//           <div className=" space-y-2">
//             <img
//               className=" lg:h-[52px] h-[32px]  w-[125px] lg:w-[204px]"
//               src={"./static_page/f1c08f89cb24ebaf7ed62560f4388684 1.png"}
//               alt=""
//             />
//             <p className=" text-mobile/small/button text-grey/grey/5">
//               Our Official Service Partner
//             </p>
//           </div>

         
//         </div>

//         <img
//           className=" h-[360px] w-[320px]  lg:h-[432px] lg:w-[372px]"
//           src={"/static_page/OBJECTS.png"}
//           alt=""
//         />
//       </div>
//     </div>
//   );
// };

// export default ServiceCenters;
