import React from 'react'
import { Link } from 'react-router-dom'

const ProductData = [
    { id: 1, image: '/featurephone/superguru4g/hero.webp', name: 'Super Guru 4G', purchaseLink: '/product/super-guru-4g', price: '1,799.00' },
    { id: 2, image: '/featurephone/it5262/Backgrounds/phone_hero.webp', name: 'it5262', purchaseLink: '/product/it5262', price: '1,399.00' },
    { id: 3, image: '/featurephone/it5330/Backgrounds/phone_hero.webp', name: 'it5330', purchaseLink: '/product/it5330', price: '1,499.00' },
    { id: 4, image: '/featurephone/Power_120/Backgrounds/hero_mobile.webp', name: 'Power120', purchaseLink: '/product/power-120', price: '1,249,00' },
]

const ProductCard = ({ image, name, purchaseLink, price }) => {
    return (
        <div className="p-3 lg:py-9 flex flex-col gap-3 lg:gap-10 h-[202px] lg:h-[452px] max-w-[156px] lg:max-w-[304px] w-full rounded-[8px] bg-dark/card/bg">
            <img src={image} className="max-h-[100px] lg:max-h-[200px] object-contain" alt="Product Image" />
            <div className="flex flex-col items-center ">
                <h1 className="text-mobile/h6 lg:text-desktop/h4 text-grey/grey/1">{name}</h1>
                <p className="text-[10px] leading-4 font-bold text-grey/grey/2 lg:text-desktop/button lg:mt-4 mt-[6px]">{price}</p>
                <Link to={purchaseLink} className='flex  items-center gap-[6px] lg:gap-2 lg:mt-6 mt-1'>
                    <span className="text-mobile/small/button lg:text-desktop/button">Buy Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className='size-5 lg:size-6' width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path d="M16.6186 9.9284C16.2927 9.80157 16.0741 9.48866 16.0741 9.10212V9.01762C16.0741 8.51057 15.865 8.29933 15.364 8.29933H15.2806C14.779 8.29933 14.4031 7.91901 14.4031 7.41195V7.32746C14.4031 6.8204 14.194 6.60916 13.6924 6.60916H13.609C13.1081 6.60916 12.7316 6.22885 12.7316 5.72187V5.63729C12.7316 5.13031 13.1081 4.75 13.609 4.75H13.6924C14.194 4.75 14.5699 5.13031 14.5699 5.63729V5.72187C14.5699 6.22885 14.779 6.44017 15.2806 6.44017H15.364C15.865 6.44017 16.2415 6.8204 16.2415 7.32746V7.41195C16.2415 7.91901 16.45 8.13025 16.9516 8.13025H17.035C17.5366 8.13025 17.9124 8.51057 17.9124 9.01762V9.10212C17.9124 9.56693 18.1632 9.90492 18.6642 9.90492H18.7059C19.1443 9.90492 19.5 10.2644 19.5 10.7077V10.7923C19.5 11.2356 19.1443 11.5951 18.7059 11.5951H18.6642C18.1632 11.5951 17.9124 11.9331 17.9124 12.3979V12.4824C17.9124 12.9894 17.5366 13.3697 17.035 13.3697H16.9516C16.45 13.3697 16.2415 13.581 16.2415 14.088V14.1725C16.2415 14.6796 15.865 15.0598 15.364 15.0598H15.2806C14.779 15.0598 14.5699 15.2712 14.5699 15.7781V15.8627C14.5699 16.3697 14.194 16.75 13.6924 16.75H13.609C13.1081 16.75 12.7316 16.3697 12.7316 15.8627V15.7781C12.7316 15.2712 13.1081 14.8908 13.609 14.8908H13.6924C14.194 14.8908 14.4031 14.6796 14.4031 14.1725V14.088C14.4031 13.581 14.779 13.2007 15.2806 13.2007H15.364C15.865 13.2007 16.0741 12.9894 16.0741 12.4824V12.3979C16.0741 12.0033 16.3015 11.6856 16.6389 11.564H3.16577C2.71913 11.564 2.35714 11.1978 2.35714 10.7462C2.35714 10.2946 2.71913 9.9284 3.16577 9.9284H16.6186Z" fill="#FF0037" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

const Product = () => {
    return (
        <div className="px-4 md:px-0">
            <div className='grid grid-cols-2 lg:grid-cols-4 place-items-center gap-4 content font-markot'>
                {ProductData.map((data) => (
                    <ProductCard key={data.id} image={data.image} name={data.name} purchaseLink={data.purchaseLink} price={data.price} />
                ))}
            </div>
        </div>
    )
}

export default Product
