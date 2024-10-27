import { Link } from 'react-router-dom'

const HomePageButtons = () => {
    return (
        <div className='flex gap-4 flex-wrap py-10 justify-center '>
            <div className=" flex flex-col gap-4">
                <h1 className="text-2xl">S series</h1>
                <Link to='/product/s23'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        s-23
                    </button>
                </Link>
                <Link to='/product/s23p'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        s-23-plus
                    </button>
                </Link>
                <Link to='/product/s24'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        s-24
                    </button>
                </Link>
            </div>
            <div className=" flex flex-col gap-4">
                <h1 className="text-2xl">A series</h1>
                <Link to='/product/a05-i'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        A-05i
                    </button>
                </Link>
                <Link to='/product/a70'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        A-70
                    </button>
                </Link>
                <Link to='/product/a23-s'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        A-23s
                    </button>
                </Link>
                <Link to='/product/a50'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        A-50
                    </button>
                </Link>
                <Link to='/product/a50-c'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        A-50 c
                    </button>
                </Link>
                <Link to='/product/a05'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        A-05
                    </button>
                </Link>
            </div>
            <div className=" flex flex-col gap-4">
                <h1 className="text-2xl">product - P series</h1>
                <Link to='/product/p55-5g'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        p-55 5G
                    </button>
                </Link>
                <Link to='/product/p55'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        p-55
                    </button>
                </Link>
                <Link to='/product/p55-plus'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        p-55-plus
                    </button>
                </Link>
                <Link to='/product/p55-t'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        p-55-T
                    </button>
                </Link>
            </div>
            <div className=" flex flex-col gap-4">
                <h1 className="text-2xl">Feature Phones</h1>
                <Link to='/product/ace-2-power'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        Ace 2 Power
                    </button>
                </Link>
                <Link to='/product/super-guru-4g'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        s guru 4g
                    </button>
                </Link>
                <Link to='/product/super-guru-400'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        s guru 400
                    </button>
                </Link>
                <Link to='/product/super-guru-600'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        s guru 600
                    </button>
                </Link>
                <Link to='/product/power-120'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        Power 120
                    </button>
                </Link>
                <Link to='/product/power-450'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        Power 450
                    </button>
                </Link>
                <Link to='/product/it5027'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        IT 5027
                    </button>
                </Link>
                <Link to='/product/it5262'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        IT 5262
                    </button>
                </Link>
                <Link to='/product/it5330'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        IT 5330
                    </button>
                </Link>
                <Link to='/product/it2175p'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        IT 2175P
                    </button>
                </Link>
                <Link to='/product/circle-1'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        Circle 1
                    </button>
                </Link>
            </div>
            <div className=" flex flex-col gap-4">
                <h1 className="text-2xl">Static Pages</h1>
                <Link to='/homepage'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        Home
                    </button>
                </Link>
                <Link to='/products'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        Product Listing
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
                <Link to='/screenreplacement'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        Screen Replacement
                    </button>
                </Link>
                <Link to='/e-waste-management'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        E-Waste Management
                    </button>
                </Link>
                <Link to='/100-days-promise'>
                    <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded' type="button">
                        100 Days Promise
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default HomePageButtons