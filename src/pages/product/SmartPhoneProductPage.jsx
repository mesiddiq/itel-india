import React from 'react'

// import rootReducer from '../'
import Tabs from './smartphoneProduct/Tabs'
import Filters from './smartphoneProduct/Filters'
import ProductList from './smartphoneProduct/ProductList'

export default function ProductPage() {
    return (

        <div className="container mx-auto px-4 py-8 bg-[#131313]">
            <h1 className="text-3xl font-bold mb-8">Smartphone Store</h1>
            <Tabs />
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/4">
                    <Filters />
                </div>
                <div className="w-full md:w-3/4">
                    <ProductList />
                </div>
            </div>
        </div>
    )
}