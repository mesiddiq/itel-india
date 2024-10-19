import React from 'react'
import { Link } from 'react-router-dom'

const HomePageButtons = () => {
    return (
        <div className='flex gap-4 items-center flex-wrap py-10 justify-center '>
            <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                <Link to='/homepage'>Home</Link>
                {/* <span>Home</span> */}
            </button>
            <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                <Link to='/smartphones/s-series/s23'>s-23</Link>
            </button>
            <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                <Link to='/smartphones/s-series/s23p'>s-23-plus</Link>
            </button>
            <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                <Link to='/smartphones/s-series/s24'>s-24</Link>
            </button>
            <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                <Link to='/smartphones/p-series/p55-5g'>p-55 5G</Link>
            </button>
            <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                <Link to='/smartphones/p-series/p55'>p-55</Link>
            </button>
            <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                <Link to='/smartphones/p-series/p55t'>p-55T</Link>
            </button>
            <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                <Link to='/featurephones/super-guru-4g'>s guru 4g</Link>
            </button>
            <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                <Link to='/featurephones/super-guru-400'>s guru 400</Link>
            </button>
            <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                <Link to='/featurephones/power-120'>Power 120</Link>
            </button>
            <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                <Link to='/featurephones/power-450'>Power 450</Link>
            </button>
            <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                <Link to='/featurephones/it-5027'>IT 5027</Link>
            </button>
            <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                <Link to='/featurephones/circle1'>Circle 1</Link>
            </button>
            <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                <Link to='/featurephones/it-5330'>IT 5330</Link>
            </button>
            <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                <Link to='/featurephones/it-2175p'>IT 2175P</Link>
            </button>
            <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                <Link to='/support'>Support</Link>
            </button>
            <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                <Link to='/csr'>CSR</Link>
            </button>
            <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                <Link to='/aboutus'>About us</Link>
            </button>
            <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                <Link to='/contactus'>Contact us</Link>
            </button>
            <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                <Link to='/servicecenters'>Service Centers</Link>
            </button>
            <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                <Link to='/support/screenreplacement'>Screen Replacement</Link>
            </button>
            <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                <Link to='/support/e-waste-management'>E-Waste Management</Link>
            </button>
            <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                <Link to='/support/100-days-promise'>100 Days Promise</Link>
            </button>
        </div>
    )
}

export default HomePageButtons