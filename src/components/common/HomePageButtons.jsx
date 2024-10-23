import React from 'react'
import { Link } from 'react-router-dom'

const HomePageButtons = () => {
    return (
        <div className='flex gap-4 flex-wrap py-10 justify-center '>
            <div className=" flex flex-col gap-10">
                <h1 className="text-2xl">Smartphones - S series</h1>
                <Link to='/smartphones/s-series/s23'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        s-23
                    </button>
                </Link>
                <Link to='/smartphones/s-series/s23p'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        s-23-plus
                    </button>
                </Link>
                <Link to='/smartphones/s-series/s24'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        s-24
                    </button>
                </Link>
            </div>
            <div className=" flex flex-col gap-10">
                <h1 className="text-2xl">Smartphones - A series</h1>
                <Link to='/smartphones/a-series/a05i'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        A-05i
                    </button>
                </Link>
                <Link to='/smartphones/a-series/a70'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        A-70
                    </button>
                </Link>
                <Link to='/smartphones/a-series/a50'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        A50
                    </button>
                </Link>
                <Link to='/smartphones/a-series/a05'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        A05s
                    </button>
                </Link>
            </div>
            <div className=" flex flex-col gap-10">
                <h1 className="text-2xl">Smartphones - P series</h1>
                <Link to='/smartphones/p-series/p55-5g'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        p-55 5G
                    </button>
                </Link>
                <Link to='/smartphones/p-series/p55'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        p-55
                    </button>
                </Link>
                <Link to='/smartphones/p-series/p55plus'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        p-55-plus
                    </button>
                </Link>
                <Link to='/smartphones/p-series/p55t'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        p-55-T
                    </button>
                </Link>
            </div>
            <div className=" flex flex-col gap-10">
                <h1 className="text-2xl">Feature Phones</h1>
                <Link to='/featurephones/super-guru-4g'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        s guru 4g
                    </button>
                </Link>
                <Link to='/featurephones/super-guru-400'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        s guru 400
                    </button>
                </Link>
                <Link to='/featurephones/super-guru-600'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        s guru 600
                    </button>
                </Link>
                <Link to='/featurephones/power-120'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        Power 120
                    </button>
                </Link>
                <Link to='/featurephones/power-450'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        Power 450
                    </button>
                </Link>
                <Link to='/featurephones/it-5027'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        IT 5027
                    </button>
                </Link>
                <Link to='/featurephones/it-5262'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        IT 5262
                    </button>
                </Link>
                <Link to='/featurephones/circle1'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        Circle 1
                    </button>
                </Link>
                <Link to='/featurephones/it-5330'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        IT 5330
                    </button>
                </Link>
                <Link to='/featurephones/it-2175p'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        IT 2175P
                    </button>
                </Link>
            </div>
            <div className=" flex flex-col gap-10">
                <h1 className="text-2xl">Static Pages</h1>
                <Link to='/homepage'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        Home
                    </button>
                </Link>
                <Link to='/support'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        Support
                    </button>
                </Link>
                <Link to='/csr'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        CSR
                    </button>
                </Link>
                <Link to='/aboutus'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        About us
                    </button>
                </Link>
                <Link to='/contactus'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        Contact us
                    </button>
                </Link>
                <Link to='/servicecenters'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        Service Centers
                    </button>
                </Link>
                <Link to='/support/screenreplacement'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        Screen Replacement
                    </button>
                </Link>
                <Link to='/support/e-waste-management'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        E-Waste Management
                    </button>
                </Link>
                <Link to='/support/100-days-promise'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        100 Days Promise
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default HomePageButtons