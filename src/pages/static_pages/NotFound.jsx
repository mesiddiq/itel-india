import React from 'react'

const NotFound = () => {
  return (
    <div className='lg:bg-[url("/pagenotfound/notfound2.png")] flex items-center font-markot  bg-[url("/pagenotfound/notfound.png")] bg-cover bg-center bg-no-repeat lg:min-h-[720px]  min-h-[400px]'>
      <div className=' lg:space-y-4 space-y-6 content flex flex-col font-markot lg:w-[564px] justify-center px-4 items-center'>

       <div className=' lg:space-y-4 space-y-4 '>
        <p className=' text-center lg:text-desktop/h2 text-mobile/h1'>Page not Found</p>
        <p className='  lg:text-desktop/body/1 text-center'>Sorry, Seems like you might have landed on the  wrong link or the page doesn’t exist or removed. Please press back to continue with the website.</p>
      
       </div>
          <p className=' bg-white px-4 text-brand/black py-3 rounded-lg text-desktop/button '>BACK TO HOME</p>

       </div>
    </div>
  )
}

export default NotFound