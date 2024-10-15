import React from 'react'

const Storage = () => {
  return (
    <div className='relative text-white w-full flex h-[680px] bg-cover bg-center' style={{backgroundImage: "url(/P_Series/storage.png)"}}>
     <div className="w-1/2 h-full flex justify-center items-center">
     <div className='flex flex-col gap-[48px]  '>
<div className="flex flex-col gap-[12px]">
  <h2 className='text-desktop/h2'>Mega Storage: <br/>
  Multi-task at Ease</h2>
  <p className='text-desktop/body/large'>Unlock endless possibilities with the itel P55 5G's<br/> impressive storage capacity. Store, game, and <br/> multitask without limits.</p>
</div>
<div className="flex gap-[24px]">
<div className="flex flex-col border-r-white gap-[8px]">

<h4 className='text-desktop/h4'>12 GB* 6GB + 6GB*</h4>
<h4 className='text-desktop/h4' >Desktop</h4>
<p className='text-desktop/caption'>*With Memory Fusion</p>
</div>
<div className="flex flex-col gap-[8px]">

  <h4 className='text-desktop/h4'>128 GB</h4>
  <p className='text-desktop/body/large'>ROM Storage</p>
</div>
</div>
     </div>
     </div>
     <div className="relative w-1/2 h-full">
     <img src='/P_Series/vector3.png' className='w-full h-full bg-cover opacity-50'></img>
     </div>
    </div>
  )
}

export default Storage