
// import rootReducer from '../'
// import SeriesTags from './smartphoneProduct/SeriesTags'
// import Filters from './smartphoneProduct/Filters'
// import ProductList from './smartphoneProduct/ProductList'
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
        // <div className="container mx-auto px-4 py-8 bg-[#131313]">
        //     <h1 className="text-3xl font-bold mb-8">Smartphone Store</h1>
        //     <SeriesTags />
        //     <div className="flex flex-col md:flex-row gap-8">
        //         <div className="w-full md:w-1/4">
        //             <Filters />
        //         </div>
        //         <div className="w-full md:w-3/4">
        //             <ProductList />
        //         </div>
        //     </div>
        // </div>
    )
}