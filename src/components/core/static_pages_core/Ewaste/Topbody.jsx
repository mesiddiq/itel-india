import { data } from "autoprefixer";


const Topbody = () => {
  const data = [
    " E-waste is a popular, informal name for electronic waste products nearing the end of their “useful life.” Telephones, pay phones, cordless phones, air conditioners, televisions, refrigerators, washing machines, mobile phones, computers, VCDs, stereos, copiers, and fax machines are common electronic products. Many of these products can be reused, refurbished, or recycled.",
    "E-waste has been one of the fastest-growing waste streams in the world. While e-waste contains valuable materials such as aluminum, copper, gold, palladium, and silver, it also contains harmful substances like cadmium, lead, and mercury. In the absence of proper awareness, disposing of e-waste in landfills can result in toxic emissions to the air, water, and soil and pose serious health and environmental hazards.",
  ];
  
  return(
    <div className=" font-markot px-3 space-y-9 content">
        {
            data.map((data,index)=>{
                return(
                <div key={index}>
                    <p className=" text-desktop/body/1 text-grey/grey/5 space-y-10">
                    {data}

                    </p>

                </div>
                )
            })
        }


<div className='lg:bg-[url("/static_page/Ewaste/Middle%20Banner.webp")] flex items-center font-markot  bg-[url("/static_page/Ewaste/Middle%20Banner%20Mobile.webp")] rounded-lg bg-cover bg-center bg-no-repeat lg:min-h-[420px]  min-h-[329px] '>
    </div>
        
    

    </div>
  );
};

export default Topbody;
