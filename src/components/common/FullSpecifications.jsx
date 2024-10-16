/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';

const FullSpecifications = ({ FullSpecificationsData, mode }) => {
	const [selectedTab, setSelectedTab] = useState('General');

	const handleTabChange = (label) => setSelectedTab(label);

	return (
		<div className={`px-4 py-[60px] lg:py-[120px] ${mode == 'light' ? 'bg-[#fbfbfb]' : 'bg-[#1C1B1B]'}`}>
			<div className={`h-full lg:content flex flex-col gap-6 lg:gap-[52px] ${mode == 'light' ? 'bg-[#fbfbfb]' : ''}`}>
				
				<h1 className={`font-markot ${mode == 'light' ? 'text-black' : 'text-white'} text-desktop/h4 lg:text-desktop/h2`}>Full Specifications</h1>
				<div className={`flex flex-row w-full ${mode == 'light' ? 'bg-[#fbfbfb]' : 'bg-[#202020]'}}`}>
					
					{/* Left Sidebar */}
					<div className={`font-markot w-[120px] lg:w-[300px] ${mode == 'light' ? 'bg-[#fbfbfb]' : 'bg-[#202020]'} `}>
						<ul className="">
							{
								FullSpecificationsData.map( ({ id, label, data }) => (
									<li
										key={id}
										onClick={() => handleTabChange(label)}
										className={`flex flex-col justify-center items-start px-[20px] lg:px-[36px] py-[12px] cursor-pointer p-2 text-desktop/body/2/medium lg:text-desktop/body/1 text-grey/grey/3 h-[64px] font-markot ${selectedTab === label ? `${mode == 'light' ? 'bg-grey/grey/1' : 'bg-grey/grey/5'} border-l-[6px] border-[#FF0037]  bg-fullSpecificationsActiveTabgradient` : `border-l-[6px] border-transparent ${mode == 'light' ? 'bg-[#fbfbfb]' : 'bg-[#202020]'}`}`}>
										{label}
									</li>
								))
							}
						</ul>
					</div>

					{/* Right Content */}
					<div className={`font-markot px-3 lg:px-0 w-full ${mode == 'light' ? 'bg-grey/grey/1' : 'bg-grey/grey/5'} text-white lg:pl-8`}>
						{
							FullSpecificationsData.find( tab => tab.label === selectedTab ).data.map( (item, index, array) => (
								<div key={index} className={`flex flex-col lg:flex-row gap-1 lg:gap-8 items-start lg:items-center lg:h-[64px] py-1 lg:py-0 ${index !== array.length - 1 ? 'border-b border-blue/blue/5/10 ' : ''}`}>
									<span className='text-desktop/caption lg:text-desktop/body/2/medium text-grey/grey/2 lg:text-grey/grey/3 lg:px-[36px] lg:py-[12px] text-left lg:w-[300px]'>{item.label}</span>
									<span className={`text-desktop/overline lg:text-desktop/body/2/regular ${mode == 'light' ? 'text-grey/grey/3' : 'text-grey/grey/3 lg:text-grey/grey/2'} lg:w-full lg:px-[36px] lg:py-[12px]`}>{item.value}</span>
								</div>
							))
						}
					</div>

				</div>

			</div>
		</div >
	);
}

export default FullSpecifications;