import ProductListingBanner from './smartphoneProduct/ProductListingBanner'
import ProductListLaptop from './smartphoneProduct/ProductListLaptop'
import ProductListMobile from './smartphoneProduct/ProductListMobile'

export default function ProductPage() {
    return (
        <>
            <main className="font-markot lg:px-8 lg:pt-12 bg-[#1c1c1c]">

                {/* Adjusted for all devices */}
                <ProductListingBanner />

                {/* Seperate sections for mobile and laptop */}
                <div className='hidden lg:block'>
                    <ProductListLaptop />
                </div>
                <div className='block lg:hidden'>
                    <ProductListMobile />
                </div>

            </main>
                    
        </>
    )
}