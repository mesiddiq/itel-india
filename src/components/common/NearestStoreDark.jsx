import React from 'react'
import { Link } from 'react-router-dom'

const NearestStoreDark = ({ dark=true }) => {
    return (
        <div className="px-4 md:px-0 font-markot">
            <section className={`space-y-2 ${dark ? 'bg-dark/card/bg' : 'bg-bg/primary/1'} lg:space-y-2 lg:h-[260px] md:rounded-[16px] rounded-[8px] content bg-[url('/static_page/findstore_mobile.svg')] bg-cover bg-center lg:bg-[url('/static_page/findstore.svg')] lg:p-10 p-4 h-[180px]`}>
                <h3 className={`lg:text-desktop/h3 text-mobile/h5/medium ${dark ? 'text-white' : 'text-brand/black'}`}>Find Your Nearest itel Store!</h3>
                <p className={`lg:text-desktop/body/1 text-desktop/body/2/regular ${dark ? 'text-white/80' : 'text-black/80'}`}>We are here to help you find the right phone.</p>
                <div className='w-fit'>
                    <Link to={'/support/service-center-locator'}>
                        <button className={`lg:text-desktop/button text-mobile/button ${dark ?'text-white':'text-black/1 '} flex items-center gap-1`}>
                            SEE MORE
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                <path d="M12.5234 5.15234L17.5818 10.2107L12.5234 15.269" stroke="#FF0037" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3.41406 10.2109H17.4391" stroke="#FF0037" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default NearestStoreDark