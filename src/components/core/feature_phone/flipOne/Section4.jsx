import React from 'react'

const Section4 = () => {
    return (
        <section className='lg:h-[800px] h-[680px] md:h-[750px] relative bg-[radial-gradient(71.13%_100%_at_50.87%_100%,_#732706_0%,_#D85820_100%)] px-4 md:px-2 overflow-hidden'>

            <img src="/featurephone/flipOne/SquarePattern.svg" alt="7 days power backup" className='absolute left-1/2 -translate-x-1/2  bottom-10 lg:bottom-0 lg:scale-100 scale-150 ' />
            <div className="content lg:pb-[55px] h-full flex flex-col lg:flex-row lg:items-end pt-10 lg:pt-0">
                <div className="max-w-[386px]">
                    <h1 className="text-mobile/h4 md:text-desktop/h3 lg:text-desktop/h2 text-white">7 Days Power Backup</h1>
                    <p className="text-mobile/body/2 md:text-mobile/body/large lg:text-featurephone/paragraph text-white/90 lg:mt-[20px] mt-[14px]">With super battery mode and a 1200mAh battery - stay connected, stay charged with Flip One</p>
                    <div className="flex gap-4 lg:gap-6 lg:mt-[56px] mt-5 ">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M30 34.4062V35.4062C30 36.7124 29.1652 37.8237 28 38.2355V43.4062C28 43.9585 27.5522 44.4062 27 44.4062C26.4478 44.4062 26 43.9585 26 43.4062V38.4062H22V43.4062C22 43.9585 21.5522 44.4062 21 44.4062C20.4478 44.4062 20 43.9585 20 43.4062V38.2355C18.8348 37.8237 18 36.7124 18 35.4062V34.4062H15C14.4477 34.4062 14 33.9585 14 33.4062V17.4062C14 16.854 14.4477 16.4062 15 16.4062H16V5.40625C16 4.85397 16.4477 4.40625 17 4.40625H31C31.5522 4.40625 32 4.85397 32 5.40625V16.4062H33C33.5522 16.4062 34 16.854 34 17.4062V33.4062C34 33.9585 33.5522 34.4062 33 34.4062H30ZM28 34.4062H20V35.4062C20 35.8939 20.349 36.3001 20.811 36.3885C20.8722 36.3766 20.9354 36.3707 21 36.3707C21.092 36.3707 21.181 36.3831 21.2656 36.4062H26.7344C26.819 36.3831 26.908 36.3707 27 36.3707C27.0646 36.3707 27.1278 36.3766 27.189 36.3885C27.651 36.3001 28 35.8939 28 35.4062V34.4062ZM18 16.4062H30V6.40625H18V16.4062ZM22 13.4062C22 13.9585 21.5522 14.4062 21 14.4062C20.4478 14.4062 20 13.9585 20 13.4062V11.4062C20 10.854 20.4478 10.4062 21 10.4062C21.5522 10.4062 22 10.854 22 11.4062V13.4062ZM28 13.4062C28 13.9585 27.5522 14.4062 27 14.4062C26.4478 14.4062 26 13.9585 26 13.4062V11.4062C26 10.854 26.4478 10.4062 27 10.4062C27.5522 10.4062 28 10.854 28 11.4062V13.4062ZM16 18.4062V32.4062H32V18.4062H16Z" fill="white" />
                            </svg>
                            <h6 className="text-mobile/h6 lg:text-desktop/h6/medium text-grey/grey/1">Type-C Charging</h6>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                <path d="M15.75 14H12.25V0.875C12.25 0.642936 12.1578 0.420376 11.9937 0.256282C11.8296 0.0921874 11.6071 0 11.375 0H5.25C3.85761 0 2.52226 0.553124 1.53769 1.53769C0.553124 2.52226 0 3.85761 0 5.25V36.75C0 38.1424 0.553124 39.4777 1.53769 40.4623C2.52226 41.4469 3.85761 42 5.25 42H11.375C11.6071 42 11.8296 41.9078 11.9937 41.7437C12.1578 41.5796 12.25 41.3571 12.25 41.125V28H15.75C17.6065 28 19.387 27.2625 20.6997 25.9497C22.0125 24.637 22.75 22.8565 22.75 21C22.75 19.1435 22.0125 17.363 20.6997 16.0503C19.387 14.7375 17.6065 14 15.75 14ZM15.75 26.25H11.375C11.1429 26.25 10.9204 26.3422 10.7563 26.5063C10.5922 26.6704 10.5 26.8929 10.5 27.125V40.25H5.25C4.32174 40.25 3.4315 39.8812 2.77513 39.2249C2.11875 38.5685 1.75 37.6783 1.75 36.75V5.25C1.75 4.32174 2.11875 3.4315 2.77513 2.77513C3.4315 2.11875 4.32174 1.75 5.25 1.75H10.5V14.875C10.5 15.1071 10.5922 15.3296 10.7563 15.4937C10.9204 15.6578 11.1429 15.75 11.375 15.75H15.75C17.1424 15.75 18.4777 16.3031 19.4623 17.2877C20.4469 18.2723 21 19.6076 21 21C21 22.3924 20.4469 23.7277 19.4623 24.7123C18.4777 25.6969 17.1424 26.25 15.75 26.25Z" fill="white" />
                                <path d="M36.75 0H25.375C25.1429 0 24.9204 0.0921874 24.7563 0.256282C24.5922 0.420376 24.5 0.642936 24.5 0.875V14.875C24.5 15.1071 24.5922 15.3296 24.7563 15.4937C24.9204 15.6578 25.1429 15.75 25.375 15.75H29.75C31.1424 15.75 32.4777 16.3031 33.4623 17.2877C34.4469 18.2723 35 19.6076 35 21C35 22.3924 34.4469 23.7277 33.4623 24.7123C32.4777 25.6969 31.1424 26.25 29.75 26.25H25.375C25.1429 26.25 24.9204 26.3422 24.7563 26.5063C24.5922 26.6704 24.5 26.8929 24.5 27.125V41.125C24.5 41.3571 24.5922 41.5796 24.7563 41.7437C24.9204 41.9078 25.1429 42 25.375 42H36.75C38.1424 42 39.4777 41.4469 40.4623 40.4623C41.4469 39.4777 42 38.1424 42 36.75V5.25C42 3.85761 41.4469 2.52226 40.4623 1.53769C39.4777 0.553124 38.1424 0 36.75 0ZM40.25 36.75C40.25 37.6783 39.8813 38.5685 39.2249 39.2249C38.5685 39.8812 37.6783 40.25 36.75 40.25H26.25V28H29.75C31.6065 28 33.387 27.2625 34.6997 25.9497C36.0125 24.637 36.75 22.8565 36.75 21C36.75 19.1435 36.0125 17.363 34.6997 16.0503C33.387 14.7375 31.6065 14 29.75 14H26.25V1.75H36.75C37.6783 1.75 38.5685 2.11875 39.2249 2.77513C39.8813 3.4315 40.25 4.32174 40.25 5.25V36.75Z" fill="white" />
                            </svg>
                            <h6 className="text-mobile/h6 lg:text-desktop/h6/medium text-grey/grey/1">Universal Compability</h6>
                        </div>
                    </div>
                </div>
                <div className="lg:static">
                    <img src="/featurephone/flipOne/flipphone3.webp" alt="Flip Phone" className='absolute -bottom-20 lg:bottom-0 left-1/2 -translate-x-1/2 z-10 max-w-[259px] lg:max-w-max' />
                    <img src="/featurephone/flipOne/battery.webp" alt="Long Lasting Experience" className='absolute z-20 bottom-0 right-1/2 max-w-[180px] lg:max-w-max ' />
                    <img src="/featurephone/flipOne/charcter3.webp" alt="Character" className='absolute z-20 bottom-0 -right-1/3 lg:right-0' />
                    <img src="/featurephone/flipOne/flipkiya.webp" alt="Flip Kiya" className='absolute lg:top-10 left-1/2 -translate-x-1/2 top-1/3' />
                </div>
            </div>
        </section>
    )
}

export default Section4