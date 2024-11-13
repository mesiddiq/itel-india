import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='lg:bg-[url("/static_page/pagenotfound/notfound2.png")] flex items-center font-markot  bg-[url("/static_page/pagenotfound/notfound.png")] bg-cover bg-center bg-no-repeat lg:min-h-[720px]  min-h-[400px]'>
      <div className=' lg:space-y-4 space-y-6 content flex flex-col font-markot lg:w-[564px] justify-center px-4 items-center'>

        <div className=' lg:space-y-4 space-y-4 '>
          <p className=' text-center lg:text-desktop/h2 text-mobile/h1'>Page not Found</p>
          <p className='  lg:text-desktop/body/1 text-center'>Sorry, Seems like you might have landed on the  wrong link or the page doesn’t exist or removed. Please press back to continue with the website.</p>

        </div>
        <Link to={'/'}>
          <button className=' flex items-center justify-center lg:space-x-2 bg-[url("/Buttons.png")]  lg:w-[208px] lg:h-[48px]  bg-no-repeat  bg-cover bg-center rounded-lg '>
            <p className='  text-brand/black text-desktop/button '>BACK TO HOME</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
              <path d="M16.6384 6.04146C16.2581 5.8935 16.0031 5.52844 16.0031 5.07748V4.9789C16.0031 4.38733 15.7591 4.14088 15.1747 4.14088H15.0774C14.4922 4.14088 14.0537 3.69718 14.0537 3.10561V3.00703C14.0537 2.41547 13.8097 2.16902 13.2245 2.16902H13.1272C12.5427 2.16902 12.1035 1.72532 12.1035 1.13385V1.03517C12.1035 0.443699 12.5427 0 13.1272 0H13.2245C13.8097 0 14.2482 0.443699 14.2482 1.03517V1.13385C14.2482 1.72532 14.4922 1.97186 15.0774 1.97186H15.1747C15.7591 1.97186 16.1984 2.41547 16.1984 3.00703V3.10561C16.1984 3.69718 16.4416 3.94363 17.0268 3.94363H17.1241C17.7093 3.94363 18.1478 4.38733 18.1478 4.9789V5.07748C18.1478 5.61975 18.4404 6.01407 19.0249 6.01407H19.0736C19.5851 6.01407 20 6.43345 20 6.95066V7.04934C20 7.56655 19.5851 7.98593 19.0736 7.98593H19.0249C18.4404 7.98593 18.1478 8.38025 18.1478 8.92253V9.0211C18.1478 9.61267 17.7093 10.0564 17.1241 10.0564H17.0268C16.4416 10.0564 16.1984 10.3028 16.1984 10.8944V10.993C16.1984 11.5845 15.7591 12.0281 15.1747 12.0281H15.0774C14.4922 12.0281 14.2482 12.2747 14.2482 12.8662V12.9648C14.2482 13.5563 13.8097 14 13.2245 14H13.1272C12.5427 14 12.1035 13.5563 12.1035 12.9648V12.8662C12.1035 12.2747 12.5427 11.831 13.1272 11.831H13.2245C13.8097 11.831 14.0537 11.5845 14.0537 10.993V10.8944C14.0537 10.3028 14.4922 9.85912 15.0774 9.85912H15.1747C15.7591 9.85912 16.0031 9.61267 16.0031 9.0211V8.92253C16.0031 8.46224 16.2684 8.09159 16.662 7.94969H0.943396C0.422318 7.94969 0 7.52248 0 6.99557C0 6.46867 0.422318 6.04146 0.943396 6.04146H16.6384Z" fill="#FF0037" />
            </svg>
          </button>
        </Link>

      </div>
    </div>
  )
}

export default NotFound