import React from 'react'

const SaveYourContacts = () => {
    return (
        <div className="lg:h-[800px] h-[747px] lg:bg-[url('/featurephone/it5027/Backgrounds/save_your_contact.jpg')] px-4 md:px-0 bg-[url('/featurephone/it5027/Backgrounds/save_your_contact_mobile.webp')] bg-cover pt-10 lg:pt-0">
            <div className="content font-markot relative flex flex-col lg:flex-row items-center justify-between h-full overflow-hidden">
                <div className="lg:space-y-5 max-w-[518px]">
                    <h6 className="text-mobile/h6 text-bg/primary/1 lg:text-[14px] lg:leading-[16px] lg:font-medium lg:tracking-[0.84px] uppercase">phonebook avatar</h6>
                    <h1 className="text-mobile/h4 lg:text-featurephone/heading text-bg/primary/1 mt-[10px] lg:mt-0">Save your Contacts with Contact icons</h1>
                    <h4 className="text-mobile/body/2 lg:text-featurephone/paragraph text-white mt-3 lg:mt-0">Easily organize contacts by saving names based on their specific attributes, and get a personalized contact list.</h4>
                    <div className="flex gap-4 items-center mt-5 lg:mt-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-8 lg:w-12' width="32" height="33" viewBox="0 0 32 33" fill="none">
                            <path d="M26 4.75H6C5.53587 4.75 5.09075 4.93437 4.76256 5.26256C4.43437 5.59075 4.25 6.03587 4.25 6.5V26.5C4.25 26.9641 4.43437 27.4092 4.76256 27.7374C5.09075 28.0656 5.53587 28.25 6 28.25H26C26.4641 28.25 26.9092 28.0656 27.2374 27.7374C27.5656 27.4092 27.75 26.9641 27.75 26.5V6.5C27.75 6.03587 27.5656 5.59075 27.2374 5.26256C26.9092 4.93437 26.4641 4.75 26 4.75ZM23.75 13.25H26.25V19.75H23.75V13.25ZM26.25 6.5V11.75H23.75V6.25H26C26.0663 6.25 26.1299 6.27634 26.1768 6.32322C26.2237 6.37011 26.25 6.4337 26.25 6.5ZM5.75 26.5V6.5C5.75 6.4337 5.77634 6.37011 5.82322 6.32322C5.87011 6.27634 5.9337 6.25 6 6.25H22.25V26.75H6C5.9337 26.75 5.87011 26.7237 5.82322 26.6768C5.77634 26.6299 5.75 26.5663 5.75 26.5ZM26 26.75H23.75V21.25H26.25V26.5C26.25 26.5663 26.2237 26.6299 26.1768 26.6768C26.1299 26.7237 26.0663 26.75 26 26.75ZM18.7262 21.3137C18.5585 20.6921 18.2662 20.111 17.8669 19.6058C17.4677 19.1006 16.9698 18.6818 16.4037 18.375C16.9952 17.8813 17.4202 17.2174 17.621 16.4737C17.8218 15.7299 17.7887 14.9424 17.5261 14.2181C17.2635 13.4939 16.7843 12.868 16.1535 12.4258C15.5227 11.9835 14.771 11.7462 14.0006 11.7462C13.2302 11.7462 12.4785 11.9835 11.8478 12.4258C11.217 12.868 10.7377 13.4939 10.4751 14.2181C10.2126 14.9424 10.1795 15.7299 10.3803 16.4737C10.5811 17.2174 11.0061 17.8813 11.5975 18.375C11.0313 18.6816 10.5333 19.1001 10.1339 19.605C9.7344 20.11 9.44177 20.6909 9.27375 21.3125C9.22402 21.5051 9.25285 21.7096 9.35388 21.881C9.45492 22.0523 9.61989 22.1765 9.8125 22.2262C10.0051 22.276 10.2096 22.2472 10.381 22.1461C10.5523 22.0451 10.6765 21.8801 10.7262 21.6875C11.0837 20.2975 12.4913 19.25 14 19.25C15.5087 19.25 16.9175 20.2975 17.2738 21.6863C17.3235 21.8789 17.4477 22.0438 17.619 22.1449C17.7904 22.2459 17.9949 22.2747 18.1875 22.225C18.3801 22.1753 18.5451 22.0511 18.6461 21.8797C18.7472 21.7083 18.776 21.5039 18.7262 21.3113V21.3137ZM11.75 15.5C11.75 15.055 11.882 14.62 12.1292 14.25C12.3764 13.88 12.7278 13.5916 13.139 13.4213C13.5501 13.251 14.0025 13.2064 14.439 13.2932C14.8754 13.38 15.2763 13.5943 15.591 13.909C15.9057 14.2237 16.1199 14.6246 16.2068 15.061C16.2936 15.4975 16.249 15.9499 16.0787 16.361C15.9084 16.7722 15.62 17.1236 15.25 17.3708C14.88 17.618 14.445 17.75 14 17.75C13.4033 17.75 12.831 17.5129 12.409 17.091C11.9871 16.669 11.75 16.0967 11.75 15.5Z" fill="white" />
                        </svg>
                        <h3 className="lg:text-desktop/h5/medium text-mobile/h7"> 1000 Phone Book</h3>
                    </div>
                </div>
                <div className="translate-y-10">
                    <img src="/featurephone/it5027/Backgrounds/save_your_contact_phone.webp" alt="it5027" className='max-w-[276px] lg:max-w-[414px]' />
                </div>
                <img src="/featurephone/it5027/Backgrounds/smily.webp" alt="smily" className='absolute max-w-[317px] lg:max-w-[464px] -bottom-4 lg:-bottom-8' />
            </div>
        </div>
    )
}

export default SaveYourContacts