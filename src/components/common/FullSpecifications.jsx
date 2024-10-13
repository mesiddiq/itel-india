import { useState } from 'react';
import { FullSpecificationsSGuru4g } from '../../data/featurephonedata/SGuru4gData';

const FullSpecifications = ({FullSpecificationsData}) => {
	const [selectedTab, setSelectedTab] = useState('General');

	return (
		<div className="h-full bg-[#1c1b1b] py-[120px] px-[80px] flex flex-col gap-[52px]">
			<h1 className='font-markot text-white text-desktop/h2'>Full Specifications</h1>

			<div className=' flex flex-row bg-[#202020] w-full'>

				{/* Left Sidebar */}
				<div className="font-markot w-[300px]">
					<ul className="">
						{FullSpecificationsData.map(({ id, label, data }) => (
							<li
								key={id}
								onClick={() => setSelectedTab(label)}
								className={`flex flex-col justify-center items-start px-[36px] py-[12px] cursor-pointer p-2 text-desktop/body/1 text-grey/grey/3 h-[64px] font-markot ${selectedTab === label ? ' bg-grey/grey/5 border-l-[6px] border-[#FF0037]  bg-fullSpecificationsActiveTabgradient' : 'border-l-[6px] border-transparent bg-[#202020]'
									}`}
							>
								{label}
							</li>
						))}
					</ul>
				</div>

				{/* Right Content */}
				<div className="font-markot w-full bg-grey/grey/5 text-white pl-8">
					{FullSpecificationsData.find(tab => tab.label === selectedTab).data.map((item, index) => (
						<div key={index} className='flex flex-row gap-8 items-center h-[64px]'>
							<span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>{item.label}</span>
							<span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px]'>{item.value}</span>
						</div>
					))}
				</div>

			</div>

		</div >
	);
}

export default FullSpecifications;