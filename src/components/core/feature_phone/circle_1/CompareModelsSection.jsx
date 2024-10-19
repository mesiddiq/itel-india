// import React from "react";
// import guruImg from "../../assets/White 3.png";
// import it5262Img from "../../assets/nav 2.png";
// import it5330Img from "../../assets/A70 2.png";
// import compareLogo from "../../assets/compare_modal.png";
// import arrowPng from "../../assets/Union.png";

// function CompareModelsSection() {
//   const models = [
//     {
//       name: "Super Guru 4G",
//       price: "₹1,269.00",
//       image: guruImg,
//       specs: {
//         Camera: "50MP AI Dual Rear Camera",
//         Memory: "Up to 32+4(2+2)GB*",
//         Dimensions: "50MP AI Dual Rear Camera",
//         Processor: "Octa-core Processor",
//         Battery: "4000mAh",
//       },
//     },
//     {
//       name: "it5262",
//       price: "₹1,269.00",
//       image: it5262Img,
//       specs: {
//         Camera: "50MP AI Dual Rear Camera",
//         Memory: "Up to 32+4(2+2)GB*",
//         Dimensions: "50MP AI Dual Rear Camera",
//         Processor: "Octa-core Processor",
//         Battery: "4000mAh",
//       },
//     },
//     {
//       name: "it5330",
//       price: "₹1,269.00",
//       image: it5330Img,
//       specs: {
//         Camera: "50MP AI Dual Rear Camera",
//         Memory: "Up to 32+4(2+2)GB*",
//         Dimensions: "50MP AI Dual Rear Camera",
//         Processor: "Octa-core Processor",
//         Battery: "4000mAh",
//       },
//     },
//   ];

//   return (
//     <section className="flex flex-col justify-center items-center py-12 md:py-32 w-full">
//       <div className="flex flex-col w-full px-4 md:max-w-[1260px]">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 md:gap-10">
//           <h2 className="text-4xl md:text-4xl font-medium tracking-tighter text-neutral-900">
//             Compare Models
//           </h2>
//           <button className="flex gap-2 items-center text-sm text-stone-900">
//             <img
//               loading="lazy"
//               src={compareLogo}
//               className="w-5 md:w-[25px] aspect-[1.04]"
//               alt="Compare Logo"
//             />
//             <span className="underline text-lg font-medium text-neutral-600">
//               Compare other models
//             </span>
//           </button>
//         </div>

//         {/* Cards Container */}
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 mt-6 md:mt-9">
//           {models.map((model, index) => (
//             <div
//               key={index}
//               className="flex flex-col p-4 md:p-6 rounded-xl md:rounded-3xl bg-stone-50"
//             >
//               {/* Model Image */}
//               <div className="flex justify-center h-[160px] md:h-[200px]">
//                 <img
//                   src={model.image}
//                   alt={model.name}
//                   className="object-contain h-full"
//                 />
//               </div>

//               {/* Model Details */}
//               <div className="flex flex-col md:flex-row md:justify-between gap-1 mt-4">
//                 <div className="text-lg md:text-xl font-medium text-neutral-900">
//                   {model.name}
//                 </div>
//                 <div className="text-lg md:text-xl font-bold text-rose-600">
//                   {model.price}
//                 </div>
//               </div>

//               {/* Model Specs */}
//               <div className="flex flex-col mt-4 md:mt-7 space-y-3 text-sm">
//                 {Object.entries(model.specs).map(([key, value], i) => (
//                   <div
//                     key={i}
//                     className="flex flex-col md:flex-row md:justify-between md:items-start items-center text-center md:text-left"
//                   >
//                     <div className="font-bold text-neutral-600">{key}</div>
//                     <div className="text-neutral-900">{value}</div>
//                   </div>
//                 ))}
//               </div>

//               {/* Buy Now Button */}
//               <button className="flex gap-2 justify-center items-center px-4 py-2 mt-6 border border-gray-300 rounded-full text-sm font-bold uppercase text-neutral-900">
//                 BUY NOW
//                 <img src={arrowPng} className="w-5" alt="Arrow" />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default CompareModelsSection;
