import curlyLine from '/product-listing/curlyHeader.svg'
import readmore from '/product-listing/read-more.svg'
const hritik = '/smartphone/color-pro-5g/HeroBanner/HeroImage.webp'

const ProductListingBanner = () => {
return (

    <section className=" w-full h-[400px] md:h-[329px] bg-[#EBE8E2] lg:rounded-2xl relative overflow-hidden">
        
        <div className=' overflow-hidden flex md:flex-row flex-col bg-[#EBE8E2] h-full w-full rounded-2xl bg-no-repeat bg-center md:bg-right bg-cover md:bg-auto' style={{ backgroundImage: `url(${curlyLine})`}}>
            <section className='z-0 w-full md:w-1/2 h-full flex justify-center items-end absolute right-0 scale-[80%] xs:scale-[60%] sm:scale-[40%] md:scale-[80%] lg:scale-[60%] -bottom-[100px] xs:-bottom-[120px] sm:-bottom-[120px] md:-bottom-[120px] lg:-bottom-[180px]'>
                <img src={hritik} alt='ITEL Color Pro 5G' className=''/>
            </section>
            
            <section className='pl-5 md:pl-10 py-5 md:py-11 md:h-full md:w-1/2 w-full flex flex-col md:justify-between'>
                <div className='flex flex-col'>
                    <h3 className='text-base md:text-2xl font-medium tracking-[-2%]'>
                        The Wait is Over!
                    </h3>
                    {/* Laptop Text */}
                    <h1 className='z-10 hidden md:block text-4xl md:text-5xl font-medium leading-[57.6px] tracking-[-0.04em] text-left text-[#FF0037]'>
                        Presenting Color Pro 5G
                    </h1>
                    {/* Mobile Text */}
                    <h1 className='z-10 block md:hidden text-4xl md:text-5xl font-medium leading-[57.6px] tracking-[-0.04em] text-left text-[#FF0037]'>
                        Presenting<br/>Color Pro 5G
                    </h1>
                </div>
                
                <a href="/product/color-pro-5g" className='cursor-pointer z-0'>
                    <section className='flex flex-row'>
                        <img src={readmore} className='w-1/3'/>
                    </section>
                </a>
            </section>
            
        </div>

    </section>
    
)
}

export default ProductListingBanner
//styleName: Desktop/H2;
