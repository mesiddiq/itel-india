import { useState } from 'react';

const FullSpecifications = ({ FullSpecificationsData, mode }) => {
	const [selectedTab, setSelectedTab] = useState('General');

	const handleTabChange = (label) => setSelectedTab(label);

	return (
		<div className="">
			<div className={`h-full py-[120px] content flex flex-col gap-[52px] ${mode == 'light' ? 'bg-[#fbfbfb]' : 'bg-[#202020]'}`}>
				<h1 className={`font-markot ${mode == 'light' ? 'text-black' : 'text-white'} text-desktop/h2`}>Full Specifications</h1>
				<div className={`flex flex-row w-full ${mode == 'light' ? 'bg-[#fbfbfb]' : 'bg-[#202020]'}}`}>
					{/* Left Sidebar */}
					<div className={`font-markot w-[300px]  `}>
						<ul className="">
							{FullSpecificationsData.map(({ id, label, data }) => (
								<li
									key={id}
									onClick={() => handleTabChange(label)}
									className={`flex flex-col justify-center items-start px-[36px] py-[12px] cursor-pointer p-2 text-desktop/body/1 text-grey/grey/3 h-[64px] font-markot ${selectedTab === label ? `${mode == 'light' ? 'bg-grey/grey/1' : 'bg-grey/grey/5'} border-l-[6px] border-[#FF0037]  bg-fullSpecificationsActiveTabgradient` : `border-l-[6px] border-transparent ${mode == 'light' ? 'bg-[#fbfbfb]' : 'bg-[#202020]'}`
										}`}
								>
									{label}
								</li>
							))}
						</ul>
					</div>

					{/* Right Content */}
					<div className={`font-markot w-full ${mode == 'light' ? 'bg-grey/grey/1' : 'bg-grey/grey/5'} text-white pl-8`}>
						{FullSpecificationsData.find(tab => tab.label === selectedTab).data.map((item, index) => (
							<div key={index} className='flex flex-row gap-8 items-center h-[64px]'>
								<span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>{item.label}</span>
								<span className={`text-desktop/body/2/regular ${mode == 'light' ? 'text-grey/grey/3' : 'text-grey/grey/2'} w-full px-[36px] py-[12px]`}>{item.value}</span>
							</div>
						))}
					</div>

				</div>
			</div>

		</div >
	);
}

export default FullSpecifications;