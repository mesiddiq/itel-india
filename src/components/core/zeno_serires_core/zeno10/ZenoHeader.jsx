import React from 'react'

const ZenoHeader = () => {
    return (
        <div className="py-3 lg:py-6 bg-[#242424] px-4 md:px-0">
            <div className="content flex justify-between items-center">
                <div className="flex items-center lg:gap-3 gap-2">
                    <img src="/smartphone/zeno10/hero/symbol.webp" alt="Symbol " className='lg:w-16 w-10 ' />
                    <img src="/smartphone/zeno10/hero/zeno10.png" alt="Zeno 10 Logo" className='lg:w-[154px] md:w-[154px] w-[104.24px]' />
                </div>
                <div className="hidden md:flex gap-8 items-center text-white">
                    <a href="#overview" className={`text-desktop/body/1`}>Overview</a>
                    <a href="#specifications" className={`text-desktop/body/1 `}>Specifications</a>
                </div>
                <a href="https://amzn.in/d/hDpj5DV" target="_blank" className="lg:p-[12px_24px] p-[8px_14px] border-2 text-white hover:text-black transition-all duration-300 hover:bg-white border-zeno-solid flex gap-2 items-center rounded-full">
                    <span className="lg:text-desktop/button uppercase text-mobile/button">buy now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M18.6384 11.0415C18.2581 10.8935 18.0031 10.5284 18.0031 10.0775V9.9789C18.0031 9.38733 17.7591 9.14088 17.1747 9.14088H17.0774C16.4922 9.14088 16.0537 8.69718 16.0537 8.10561V8.00703C16.0537 7.41547 15.8097 7.16902 15.2245 7.16902H15.1272C14.5427 7.16902 14.1035 6.72532 14.1035 6.13385V6.03517C14.1035 5.4437 14.5427 5 15.1272 5H15.2245C15.8097 5 16.2482 5.4437 16.2482 6.03517V6.13385C16.2482 6.72532 16.4922 6.97186 17.0774 6.97186H17.1747C17.7591 6.97186 18.1984 7.41547 18.1984 8.00703V8.10561C18.1984 8.69718 18.4416 8.94363 19.0268 8.94363H19.1241C19.7093 8.94363 20.1478 9.38733 20.1478 9.9789V10.0775C20.1478 10.6198 20.4404 11.0141 21.0249 11.0141H21.0736C21.5851 11.0141 22 11.4334 22 11.9507V12.0493C22 12.5666 21.5851 12.9859 21.0736 12.9859H21.0249C20.4404 12.9859 20.1478 13.3802 20.1478 13.9225V14.0211C20.1478 14.6127 19.7093 15.0564 19.1241 15.0564H19.0268C18.4416 15.0564 18.1984 15.3028 18.1984 15.8944V15.993C18.1984 16.5845 17.7591 17.0281 17.1747 17.0281H17.0774C16.4922 17.0281 16.2482 17.2747 16.2482 17.8662V17.9648C16.2482 18.5563 15.8097 19 15.2245 19H15.1272C14.5427 19 14.1035 18.5563 14.1035 17.9648V17.8662C14.1035 17.2747 14.5427 16.831 15.1272 16.831H15.2245C15.8097 16.831 16.0537 16.5845 16.0537 15.993V15.8944C16.0537 15.3028 16.4922 14.8591 17.0774 14.8591H17.1747C17.7591 14.8591 18.0031 14.6127 18.0031 14.0211V13.9225C18.0031 13.4622 18.2684 13.0916 18.662 12.9497H2.9434C2.42232 12.9497 2 12.5225 2 11.9956C2 11.4687 2.42232 11.0415 2.9434 11.0415H18.6384Z" fill="#EC1F26" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default ZenoHeader