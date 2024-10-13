import crystalClearSHots from '/smartphone/S24/crystal-clear-shots.png'
import dynamicBar from '/smartphone/S24/dynamic-bar.png'

const MultipleCardComponents = () => {
  return (
    // <div className="w-full h-full py-[120px] px-20 bg-[#1c1b1b]">
    //   {/* 3 level div */}
    //   <div className="flex flex-row gap-2 justify-between items-center relative">
    //     <div className="hello w-[518px] h-[784px] rounded-2xl overflow-hidden relative bg-black ">
    //       <img src={crystalClearSHots} alt="crystal-clear-shots" className='absolute bottom-0 h-2/3 object-cover'/>
          
    //       <div className='text-white w-full h-full p-10 gap-10 flex flex-col'>
    //           <span className='text-desktop/h3 text-markot bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent'>
    //               Crystal-Clear Shots
    //           </span>
    //           <div className='flex flex-col gap-5 text-desktop/h4'>
    //               <span>108MP AI Dual Rear Ultra Clear Camera</span>
    //               <span>8MP Front Camera</span>
    //           </div>
    //       </div>
    //     </div>
        
    //     <div className="flex flex-col gap-9 ">
    //         <div className=' border relative bg-black w-[738px] h-[380px]'>
    //           <img src={ultraStorageVault} alt="ultra-storage-vault" className='absolute right-0 h-2/3 object-cover'/>
    //             s
    //         </div>

    //         <div className=' border relative bg-black w-[738px] h-[380px]'>
    //           <img src={ultraStorageVault} alt="ultra-storage-vault" className='absolute right-0 h-2/3 object-cover'/>
    //             s
    //         </div>
    //     </div>
    //   </div>

    //   <div></div>
      
    //   <div></div>

    // </div>

    <section className='font-markot w-full h-full py-[40px] px-[16px] lg:py-[120px] lg:px-[80px] bg-[#1c1b1b] flex flex-col gap-5'>
      {/* upper-half-3-divs */}
      <section className='upper-half-3-divs flex flex-col lg:flex-row gap-5 justify-between'>
        
          <div className='w-full lg:w-[40%] h-[784px] rounded-2xl overflow-hidden flex flex-col relative bg-black'>

              <div className='text-white w-full h-auto p-10 gap-10 flex flex-col'>
                <span className='text-desktop/h3 text-markot bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent'>
                    Crystal-Clear Shots
                </span>
                <div className='flex flex-col gap-5 text-desktop/h4 text-nowrap'>
                    <span>108MP AI Dual Rear Ultra Clear Camera</span>
                    <span>8MP Front Camera</span>
                </div>
              </div>
              <img src={crystalClearSHots} alt="crystal-clear-shots" className='absolute bottom-[15%] scale-[200%]'/>

          </div>

          <div className='w-[60%] flex flex-col gap-5'>
              <div className='w-full h-1/2 rounded-2xl p-10 bg-ultraStorageVault bg-cover bg-top '>
                <div className='flex flex-col justify-between h-full w-[328px]'>
                  <div className='flex flex-col gap-4'>
                    <span className='text-desktop/h3 bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent'>Ultra Storage Vault</span>
                    <span className='text-desktop/h4 text-grey/grey/2 w-[257px]'>16GB* (8GB + 8GB*) RAM + 128GB ROM</span>
                  </div>
                  <span className='text-desktop/body/1 text-grey/grey/2'>*Memory Fusion Technology</span>
                </div>
              </div>

              <div className='w-full h-1/2 rounded-2xl p-10 bg-ultraStorageVault bg-cover bg-top'>
                <div className='flex flex-col justify-between h-[292px] w-[292px]'>
                    <span className='text-desktop/h3 bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent'>Quick Charge with Bypass Charging</span>
                    <span className='flex flex-col gap-5 text-desktop/h4 text-grey/grey/2 w-[257px]'>
                      <span>5000 mAh Battery</span>
                      <span>18W Fast Charging</span>
                    </span>
                </div>
              </div>
          </div>

      </section>

      {/* lower-half-3-divs */}
      <section className='lower-half-3-divs flex flex-col gap-5 justify-between'>
        
        <div className='w-full rounded-2xl flex flex-row p-[40px] bg-black h-[451px] relative'>
          <div className='flex flex-col justify-between w-[400px] h-[346px]'>
            <div className='flex flex-col gap-4'>
              <span className='w-[300px] text-desktop/h3 bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent'>Say Hello to Dynamic Bar</span>
              <span className='text-desktop/body/1 text-grey/grey/2'>Check important notifications such as battery status, incoming calls & reminders conveniently than ever before.</span>
            </div>
            <span className='text-desktop/h4 text-white'>Seamless Notification Experience</span>
          </div>
          <img src={dynamicBar} alt='dynamicBar' className='absolute left-[554px] bottom-0'/>
        </div>
        
        <div className='w-full flex flex-row gap-5'>
          
          <div className='w-[40%] rounded-2xl bg-black p-[40px]'>
            <div className='flex flex-col gap-4'>
              <span className='text-desktop/h3 bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent'>
                Dual DTS Speaker
              </span>
              <span className='text-desktop/h4 text-grey/grey/2'>
                High-Quality Surround Sound Technology
              </span>
            </div>
          </div>
          
          <div className='w-[60%] rounded-2xl bg-black py-[42px] px-[40px]'>
            <div className='flex flex-col justify-between w-[334px] h-[292px]'>
              <div className='flex flex-col gap-4'>
                <span className='text-desktop/h3 bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent'>Sleek Style: Elegant Design</span>
                <span className='text-desktop/h4 text-white'>Color Changing Technology</span>
              </div>
              <span className='text-desktop/h4 text-white'>Dawn White | Starry Black</span>
            </div>
          </div>
        
        </div>
      </section>

    </section>















    // <div className="w-full h-full py-[120px] px-20 bg-[#1c1b1b] font-markot text-gray-100">
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4">
    //     {/* Crystal-Clear Shots */}
    //     <div className="bg-black rounded-2xl lg:col-span-4 row-span-2 md:col-span-1 overflow-hidden">

    //       <div className='text-white p-10 w-full gap-10 flex flex-col'>
    //         <span className='text-desktop/h3 text-markot bg-gradient-to-r from-[#FFCF92] to-[#FFE8CB] bg-clip-text text-transparent'>
    //             Crystal-Clear Shots
    //         </span>
    //         <div className='flex flex-col gap-5 text-desktop/h4'>
    //             <span>108MP AI Dual Rear Ultra Clear Camera</span>
    //             <span>8MP Front Camera</span>
    //         </div>
    //       </div>
    //       <img src={crystalClearSHots} alt="crystal-clear-shots" className='border scale-150'/>


    //     </div>

    //     {/* Ultra Storage Vault */}
    //     <div className="bg-black rounded-lg p-6 lg:col-span-6">
    //       <h2 className="text-2xl  mb-4 text-amber-400">Ultra Storage Vault</h2>
    //       <div>
    //         <p>16GB* (8GB + 8GB*) RAM + 128GB ROM</p>
    //         <p>*Memory Fusion Technology</p>
    //       </div>
    //     </div>

    //     {/* Quick Charge */}
    //     <div className="bg-black rounded-lg p-6 lg:col-span-6">
    //       <h2 className="text-2xl font-bold mb-4 text-amber-400">Quick Charge with Bypass Charging</h2>
    //       <div>
    //         <p>5000 mAh Battery</p>
    //         <p>18W Fast Charging</p>
    //       </div>
    //     </div>

    //     {/* Dynamic Bar */}
    //     <div className="bg-black rounded-lg p-6 col-span-full">
    //       <h2 className="text-2xl font-bold mb-4 text-amber-400">Say Hello to Dynamic Bar</h2>
    //       <div>
    //         <p>Check important notifications such as battery status, incoming calls & reminders conveniently from your status.</p>
    //         <div className="mt-4 h-48 bg-gray-700 rounded-lg flex items-center justify-center">
    //           <span className="text-gray-500">Dynamic Bar Image</span>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Dual DTS Speaker */}
    //     <div className="bg-black rounded-lg p-6 lg:col-span-4">
    //       <h2 className="text-2xl font-bold mb-4 text-amber-400">Dual DTS Speaker</h2>
    //       <div>
    //         <p>High-Quality Surround Sound Technology</p>
    //       </div>
    //     </div>

    //     {/* Sleek Style */}
    //     <div className="bg-black rounded-lg p-6 lg:col-span-6">
    //       <h2 className="text-2xl font-bold mb-4 text-amber-400">Sleek Style: Elegant Design</h2>
    //       <div>
    //         <p>Color Changing Technology</p>
    //         <p>Dawn White | Starry Black</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default MultipleCardComponents