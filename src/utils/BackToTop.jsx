import React, { useState, useEffect } from 'react'
import './BackToTop.css'

export default function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            const scrollHeight = document.documentElement.scrollHeight
            const clientHeight = document.documentElement.clientHeight
            const scrollThreshold = (scrollHeight - clientHeight) * 0.25

            if (window.scrollY > scrollThreshold) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div onClick={scrollToTop} className={`fixed lg:right-10 right-4 bottom-4 lg:bottom-8 font-markot text-itel-red z-[499] transition-all duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-40'}`}>
            <button className="bttbtn ">
                <svg width="20" height="20" className='btticon -rotate-90' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="vuesax/twotone/arrow-right">
                        <g id="vuesax/twotone/arrow-right_2">
                            <g id="arrow-right">
                                <path id="Union" d="M15.1154 9.20252C14.7985 9.07922 14.586 8.775 14.586 8.3992V8.31705C14.586 7.82408 14.3827 7.6187 13.8956 7.6187H13.8146C13.3269 7.6187 12.9615 7.24895 12.9615 6.75598V6.67383C12.9615 6.18086 12.7582 5.97548 12.2705 5.97548H12.1894C11.7024 5.97548 11.3363 5.60574 11.3363 5.11284V5.03061C11.3363 4.53772 11.7024 4.16797 12.1894 4.16797H12.2705C12.7582 4.16797 13.1236 4.53772 13.1236 5.03061V5.11284C13.1236 5.60574 13.3269 5.81119 13.8146 5.81119H13.8956C14.3827 5.81119 14.7488 6.18086 14.7488 6.67383V6.75598C14.7488 7.24895 14.9514 7.45433 15.4391 7.45433H15.5202C16.0078 7.45433 16.3733 7.82408 16.3733 8.31705V8.3992C16.3733 8.8511 16.6171 9.17969 17.1042 9.17969H17.1447C17.571 9.17969 17.9167 9.52918 17.9167 9.96019V10.0424C17.9167 10.4734 17.571 10.8229 17.1447 10.8229H17.1042C16.6171 10.8229 16.3733 11.1515 16.3733 11.6034V11.6856C16.3733 12.1785 16.0078 12.5483 15.5202 12.5483H15.4391C14.9514 12.5483 14.7488 12.7537 14.7488 13.2466V13.3288C14.7488 13.8217 14.3827 14.1914 13.8956 14.1914H13.8146C13.3269 14.1914 13.1236 14.3969 13.1236 14.8898V14.972C13.1236 15.4649 12.7582 15.8346 12.2705 15.8346H12.1894C11.7024 15.8346 11.3363 15.4649 11.3363 14.972V14.8898C11.3363 14.3969 11.7024 14.0271 12.1894 14.0271H12.2705C12.7582 14.0271 12.9615 13.8217 12.9615 13.3288V13.2466C12.9615 12.7537 13.3269 12.3839 13.8146 12.3839H13.8956C14.3827 12.3839 14.586 12.1785 14.586 11.6856V11.6034C14.586 11.2198 14.8071 10.911 15.1351 10.7927H2.03625C1.60201 10.7927 1.25008 10.4367 1.25008 9.99761C1.25008 9.55853 1.60201 9.20252 2.03625 9.20252H15.1154Z" fill="#FF0037" />
                            </g>
                        </g>
                    </g>
                </svg>
            </button>
        </div>
    )
}