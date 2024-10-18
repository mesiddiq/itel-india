import React from 'react'

const Storage = () => {
  return (
    <div className='relative text-white w-full flex h-max md:h-[680px] bg-cover bg-center' style={{backgroundImage: "url(/P_Series/storage.png)"}}>
    <div className='content w-full md:flex-row flex flex-col pt-8'>
     <div data-aos="fade-right"className="w-full md:w-1/2 h-full flex p-4 lg:p-0 items-center px-4 lg:p-0">
     <div className='flex flex-col gap-[48px]  '>
<div className="flex flex-col gap-[12px]">
  <h2 className='text-mobile/h3 md:text-desktop/h2'>Mega Storage: <br/>
  Multi-task at Ease</h2>
  <p className='text-mobile/body/2 md:text-desktop/body/large'>Unlock endless possibilities with the itel P55 5G's impressive storage capacity. Store, game, and <br/> multitask without limits.</p>
</div>
<div className="md:flex-row flex flex-col gap-[24px]">
<div className="flex flex-col border-r-white gap-[8px]">

<h4 className='text-mobile/h5 d:text-desktop/h4'>12 GB* 6GB + 6GB*</h4>
<h4 className='text-desktop/h4' >Desktop</h4>
<p className='text-mobile/small/body md:text-desktop/caption'>*With Memory Fusion</p>
</div>
<div className="flex flex-col gap-[8px]">

  <h4 className='text-desktop/h4'>128 GB</h4>
  <p className='text-desktop/body/large'>ROM Storage</p>
</div>
</div>
     </div>
     </div>
     <div className="w-full md:w-1/2 h-full">
     <img src='/P_Series/vector4.png' className='w-full h-full bg-cover opacity-50'></img>
     </div>
    </div></div>
  )
}

export default Storage