import React, { useState } from 'react'
import { For } from 'react-haiku'
import { AboutItel, MediaLinks, ProductsLink, SupportLinks, SocialMediaLinks } from '../../../data/FooterData'
import { Link } from 'react-router-dom'

const ArrowRight = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path d="M10.5929 8.98647C10.5929 8.5839 10.3245 8.38261 9.95545 8.38261H9.88835C9.48577 8.38261 9.18384 8.08068 9.18384 7.6781V7.61101C9.18384 7.20843 9.0161 7.04069 8.61352 7.04069H8.54643C8.14385 7.04069 7.84192 6.73876 7.84192 6.33618V6.26908C7.84192 5.86651 7.67418 5.69877 7.2716 5.69877H7.20451C6.80193 5.69877 6.5 5.39684 6.5 4.99426V4.92716C6.5 4.52459 6.80193 4.22266 7.20451 4.22266H7.2716C7.67418 4.22266 7.97611 4.52459 7.97611 4.92716V4.99426C7.97611 5.39684 8.14385 5.56458 8.54643 5.56458H8.61352C9.0161 5.56458 9.31803 5.86651 9.31803 6.26908V6.33618C9.31803 6.73876 9.48577 6.9065 9.88835 6.9065H9.95545C10.358 6.9065 10.66 7.20843 10.66 7.61101V7.6781C10.66 8.04713 10.8612 8.31552 11.2638 8.31552H11.2974C11.6494 8.31552 11.9348 8.60089 11.9348 8.95293V9.02002C11.9348 9.37206 11.6494 9.65744 11.2974 9.65744H11.2638C10.8612 9.65744 10.66 9.92582 10.66 10.2948V10.3619C10.66 10.7645 10.358 11.0665 9.95545 11.0665H9.88835C9.48577 11.0665 9.31803 11.2342 9.31803 11.6368V11.7039C9.31803 12.1064 9.0161 12.4084 8.61352 12.4084H8.54643C8.14385 12.4084 7.97611 12.5761 7.97611 12.9787V13.0458C7.97611 13.4484 7.67418 13.7503 7.2716 13.7503H7.20451C6.80193 13.7503 6.5 13.4484 6.5 13.0458V12.9787C6.5 12.5761 6.80193 12.2742 7.20451 12.2742H7.2716C7.67418 12.2742 7.84192 12.1064 7.84192 11.7039V11.6368C7.84192 11.2342 8.14385 10.9323 8.54643 10.9323H8.61352C9.0161 10.9323 9.18384 10.7645 9.18384 10.3619V10.2948C9.18384 9.89227 9.48577 9.59034 9.88835 9.59034H9.95545C10.3245 9.59034 10.5929 9.38905 10.5929 8.98647Z" fill="white" />
        </svg>
    )
}

const Footer = () => {

    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
    }

    return (
        <>
            <footer className='font-markot'>
                <div className="bg-[#171717] py-10 lg:pt-[60px] lg:pb-10 px-4 md:px-0">
                    <div className="content flex justify-between flex-wrap flex-col lg:flex-row lg:gap-10 gap-7">
                        <div className="flex flex-col gap-8 max-w-[328px] ">
                            <div className="flex  justify-between gap-5">
                                <Link to='/'>
                                    <img src="/static_page/footer/itel.svg" alt="Itel" className='max-w-[57px]' />
                                </Link>
                                <div className="flex gap-2 lg:gap-3">
                                    <For each={SocialMediaLinks} render={({ id, icon, link, alt }, idx) => (
                                        <a key={id} href={link} target="_blank" className='size-10 group rounded-full bg-white/10 flex items-center justify-center'>
                                            <img src={icon} alt={alt} className='size-6 group-hover:scale-125 transition-all duration-300' />
                                        </a>
                                    )}
                                    />
                                </div>
                            </div>
                            <div className="lg:space-y-4 space-y-3">
                                {/* newsletter */}
                                <p className="text-desktop/subtitle text-white/40">Subscribe</p>
                                <label htmlFor="email" className="bg-white/10 relative bg-blend-multiply lg:p-4 p-3 rounded-lg border-2 border-grey/grey/4 block">
                                    <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" id="email" className='lg:text-desktop/body/2/regular bg-transparent text-white w-full outline-none border-none' placeholder='Enter your email address' />
                                    <button onClick={handleSubmit} type="submit" className='absolute right-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                                            <path fillRule="evenodd" clip-rule="evenodd" d="M14.4864 17.5L11.091 15.2148L9.72181 16.3628L9.1657 13.9189L15.0954 8.72567L7.98554 12.8097L4.63672 10.3935L17.6367 6.5L14.4864 17.5Z" fill="#FFFEF2" />
                                        </svg>
                                    </button>
                                </label>
                                <p className="lg:text-desktop/body/2/regular ">Join our newsletter to stay up to date on features and releases</p>
                            </div>
                        </div>
                        <div className="space-y-4 lg:space-y-5">
                            <h3 className="text-desktop/subtitle text-white/40">
                                Products
                            </h3>
                            <div className="space-y-[10px] lg:space-y-3">
                                <For each={ProductsLink} render={({ id, label, link }, idx) => (
                                    <Link key={id} to={link} className="flex items-center gap-0.5">
                                        <span className="text-desktop/caption">{label}</span>
                                        <ArrowRight />
                                    </Link>
                                )} />
                            </div>
                        </div>
                        <div className="space-y-4 lg:space-y-5">
                            <h3 className="text-desktop/subtitle text-white/40">
                                Support
                            </h3>
                            <div className="space-y-[10px] lg:space-y-3">
                                <For each={SupportLinks} render={({ id, label, link }, idx) => (
                                    <Link key={id} to={link} className="flex items-center gap-0.5">
                                        <span className="text-desktop/caption">{label}</span>
                                        <ArrowRight />
                                    </Link>
                                )} />
                            </div>
                        </div>
                        <div className="flex flex-col lg:gap-3  gap-7 ">
                            <div className="space-y-4 lg:space-y-5">
                                <h3 className="text-desktop/subtitle text-white/40">
                                    Media Room
                                </h3>
                                <div className="space-y-[10px] lg:space-y-3">
                                    <For each={MediaLinks} render={({ id, label, link }, idx) => (
                                        <Link key={id} to={link} className="flex items-center gap-0.5">
                                            <span className="text-desktop/caption">{label}</span>
                                            <ArrowRight />
                                        </Link>
                                    )} />
                                </div>
                            </div>
                            <div className="space-y-4 lg:space-y-5">
                                <h3 className="text-desktop/subtitle text-white/40">
                                    About
                                </h3>
                                <div className="space-y-[10px] lg:space-y-3">
                                    <For each={AboutItel} render={({ id, label, link }, idx) => (
                                        <Link key={id} to={link} className="flex items-center gap-0.5">
                                            <span className="text-desktop/caption">{label}</span>
                                            <ArrowRight />
                                        </Link>
                                    )} />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4 lg:space-y-5">
                            <h3 className="text-desktop/subtitle text-white/40">
                                Contact
                            </h3>
                            <div className="space-y-[10px] lg:space-y-3">
                                <a href='tel:18004190525' className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                        <path d="M12.8152 11.1938C12.8152 11.4038 12.7685 11.6196 12.6693 11.8296C12.5702 12.0396 12.4418 12.238 12.2727 12.4246C11.9868 12.7396 11.6718 12.9671 11.316 13.113C10.966 13.2588 10.5868 13.3346 10.1785 13.3346C9.58352 13.3346 8.94768 13.1946 8.27685 12.9088C7.60602 12.623 6.93518 12.238 6.27018 11.7538C5.59935 11.2638 4.96352 10.7213 4.35685 10.1205C3.75602 9.5138 3.21352 8.87797 2.72935 8.21297C2.25102 7.54797 1.86602 6.88297 1.58602 6.2238C1.30602 5.5588 1.16602 4.92297 1.16602 4.3163C1.16602 3.91964 1.23602 3.54047 1.37602 3.19047C1.51602 2.83464 1.73768 2.50797 2.04685 2.2163C2.42018 1.8488 2.82852 1.66797 3.26018 1.66797C3.42352 1.66797 3.58685 1.70297 3.73268 1.77297C3.88435 1.84297 4.01852 1.94797 4.12352 2.09964L5.47685 4.00714C5.58185 4.15297 5.65768 4.28714 5.71018 4.41547C5.76268 4.53797 5.79185 4.66047 5.79185 4.7713C5.79185 4.9113 5.75102 5.0513 5.66935 5.18547C5.59352 5.31964 5.48268 5.45964 5.34268 5.59964L4.89935 6.06047C4.83518 6.12464 4.80602 6.20047 4.80602 6.2938C4.80602 6.34047 4.81185 6.3813 4.82352 6.42797C4.84102 6.47464 4.85852 6.50964 4.87018 6.54464C4.97518 6.73714 5.15602 6.98797 5.41268 7.2913C5.67518 7.59464 5.95518 7.9038 6.25852 8.21297C6.57352 8.52214 6.87685 8.80797 7.18602 9.07047C7.48935 9.32714 7.74018 9.50214 7.93852 9.60714C7.96768 9.6188 8.00268 9.6363 8.04352 9.6538C8.09018 9.6713 8.13685 9.67714 8.18935 9.67714C8.28852 9.67714 8.36435 9.64214 8.42852 9.57797L8.87185 9.14047C9.01768 8.99464 9.15768 8.8838 9.29185 8.8138C9.42602 8.73214 9.56018 8.6913 9.70601 8.6913C9.81685 8.6913 9.93352 8.71464 10.0618 8.76714C10.1902 8.81964 10.3243 8.89547 10.4702 8.99464L12.401 10.3655C12.5527 10.4705 12.6577 10.593 12.7218 10.7388C12.7802 10.8846 12.8152 11.0305 12.8152 11.1938Z" stroke="#FFFEF2" stroke-width="0.875" stroke-miterlimit="10" />
                                    </svg>
                                    <span className="text-desktop/caption">+91-120-6650888</span>
                                </a>
                                <a href='mailto:info.in@transsion.com' className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                        <path d="M9.91602 12.4596H4.08268C2.33268 12.4596 1.16602 11.5846 1.16602 9.54297V5.45964C1.16602 3.41797 2.33268 2.54297 4.08268 2.54297H9.91602C11.666 2.54297 12.8327 3.41797 12.8327 5.45964V9.54297C12.8327 11.5846 11.666 12.4596 9.91602 12.4596Z" stroke="#FFFEF2" stroke-width="0.875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path opacity="0.9" d="M9.91732 5.75L8.09148 7.20833C7.49065 7.68667 6.50482 7.68667 5.90398 7.20833L4.08398 5.75" stroke="#FFFEF2" stroke-width="0.875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-desktop/caption">info.in@transsion.com</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-[#1e1e1e] font-markot flex items-center justify-center">
                    <div className="gap-3 lg:gap-11 flex flex-col items-center lg:flex-row">
                        <p className="text-desktop/caption text-[#A3A89F]">
                            &copy; 2021 itel. All right reserved
                        </p>
                        <div className="gap-11 flex">
                            <Link to={'/privacy-policy-itel-mobile-india'} className="text-desktop/caption text-[#A3A89F]">
                                Privacy Policy
                            </Link>
                            <Link to={'/terms-of-use-itel-mobile-india'} className="text-desktop/caption text-[#A3A89F]">
                                Terms of service
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer