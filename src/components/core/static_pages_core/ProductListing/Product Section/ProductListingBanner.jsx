import curlyLine from '/product-listing/curlyHeader.svg'
import readmore from '/product-listing/read-more.svg'
// import hritik from '/product-listing/banner-asset-image.png'

const ProductListingBanner = () => {
return (

    <section className=" w-full h-[400px] md:h-[329px] font-markot bg-[#EBE8E2] lg:rounded-2xl relative overflow-hidden">
        
        <div className=' overflow-hidden flex md:flex-row flex-col bg-[#EBE8E2] h-full w-full rounded-2xl bg-no-repeat bg-center md:bg-right bg-cover md:bg-auto' style={{ backgroundImage: `url(${curlyLine})`}}>
            {/* <section className='w-full md:w-1/2 h-full flex justify-center items-end absolute -bottom-5 md:top-5 right-0'>
                <img src={hritik} className=''/>
            </section> */}
            
            <section className='pl-5 md:pl-10 py-5 md:py-11 md:h-full md:w-1/2 w-full flex flex-col md:justify-between'>
                <div className='flex flex-col'>
                    <h3 className='text-base md:text-2xl font-medium tracking-[-2%]'>
                        The Wait is Over!
                    </h3>
                    <h3 className='text-4xl md:text-5xl font-medium leading-[57.6px] tracking-[-0.04em] text-left text-[#FF0037]'>
                        Presenting S24
                    </h3>
                </div>
                
                <section className='flex flex-row'>
                    <img src={readmore} className='w-1/3'/>
                </section>
            </section>
            
        </div>

    </section>
    
)
}

export default ProductListingBanner
//styleName: Desktop/H2;
