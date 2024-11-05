import React from 'react'

const Transform = () => {
    return (
        <div>
            <div className='bg-[#111] relative lg:py-[100px] font-markot h-[436px] md:h-auto'>
                <div className="content px-4 md:px-0">
                    <div className="xl:max-w-[600px] md:max-w-[500px] max-w-[290px] flex flex-col lg:gap-4 gap-3">
                        <h1 className="lg:text-desktop/h3 text-mobile/h5/medium">
                            Transform Every Moment with itel's Family-Friendly Smart TVs!
                        </h1>
                        <h4 className="text-grey/grey/2 lg:text-desktop/body/1 text-desktop/body/2/regular">
                            Experience high-quality entertainment for every generation— all at a budget-friendly price.
                        </h4>
                    </div>
                </div>
                <img src="/static_page/homepage/movie.png" alt="watching moview" className='absolute bottom-0 right-0 max-w-[245px] lg:max-w-[525px]' />
            </div>
            <img src="/static_page/homepage/pattern.svg" alt="pattern" className='w-screen object-cover h-[80px] lg:h-auto' />
        </div>
    )
}

export default Transform