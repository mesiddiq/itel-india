import { useState } from 'react';

const tabs = [
  { name: 'General', content: (
    <div className="flex flex-col">
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Model</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>S24</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Colors</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>Starry Black, Dawn White & Costaline Blue</span>
      </div>
    </div>
  ) },
  { name: 'Display Features', content: (
    <div className="flex flex-col">
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Display Size</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>16.76 cm (6.6 inch)</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Resolution</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>1612x720 Pixels</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Resolution Type</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>HD+</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Dimension</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>Dimension</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Technology</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>G+F, Incell</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Refresh Rate</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>180 Hz</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Touch Sampling Rate</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>Touch Sampling Rate</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Pixel Density</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>267 ppi</span>
      </div>
    </div>
  ) },
  { name: 'OS & Processor', content: (
    <div className="flex flex-col">
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Operating System</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>Android 13</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Chipset</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>Unisoc</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Processor Core</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>Hexa Core</span>
      </div>
    </div>
  ) },
  { name: 'Camera', content: (
    <div className="flex flex-col">
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Rear Camera</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>108 MP AI Dual Rear</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Rear Flash</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>Yes</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Front Camera</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>8MP</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Front Flash</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>Yes</span>
      </div>
    </div>
  ) },
  { name: 'Battery', content: (
    <div className="flex flex-col">
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Battery Capacity</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>5000 mAh</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Battery Type</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>Lithium Ion</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Fast Charging</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>18W</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>USB</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>Type-C</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Standby</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>15h</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Talktime</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>12 hours</span>
      </div>
    </div>
  ) },
  {
    name: 'Memory & Storage',
    content: (
      <div className="flex flex-col">
        <div className='flex flex-row gap-8 items-center h-[64px] '>
          <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>RAM</span>
          <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>8 GB</span>
        </div>
        <div className='flex flex-row gap-8 items-center h-[64px] '>
          <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>ROM</span>
          <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>128 GB</span>
        </div>
        <div className='flex flex-row gap-8 items-center h-[64px] '>
          <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>User Memory</span>
          <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>120 GB</span>
        </div>
        <div className='flex flex-row gap-8 items-center h-[64px] '>
          <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Expandable</span>
          <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>120 GB</span>
        </div>
      </div>
    ),
  },
  { name: 'Connectivity', content: (
    <div className="flex flex-col">
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Display Size</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>16.76 cm (6.6 inch)</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Resolution</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>1612x720 Pixels</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Resolution Type</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>HD+</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Dimension</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>Dimension</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Technology</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>G+F, Incell</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Refresh Rate</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>180 Hz</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Touch Sampling Rate</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>Touch Sampling Rate</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Pixel Density</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>267 ppi</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Touch Sampling Rate</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>Touch Sampling Rate</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Pixel Density</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>267 ppi</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Touch Sampling Rate</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>Touch Sampling Rate</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Pixel Density</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>267 ppi</span>
      </div>
      
    </div>
  ) },
  { name: 'Additional', content: (
    <div className="flex flex-col">
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Display Size</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>16.76 cm (6.6 inch)</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Resolution</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>1612x720 Pixels</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Resolution Type</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>HD+</span>
      </div>
      <div className='flex flex-row gap-8 items-center h-[64px] '>
        <span className='text-desktop/body/2/medium text-grey/grey/3 px-[36px] py-[12px] text-left w-[300px]'>Dimension</span>
        <span className='text-desktop/body/2/regular text-grey/grey/2 w-full px-[36px] py-[12px] '>Dimension</span>
      </div>
    </div>
  ) },
];

const FullSpecifications = () => {
  const [selectedTab, setSelectedTab] = useState('Memory & Storage');

  return (
    <div className="h-full bg-[#1c1b1b] py-[120px] px-[80px] flex flex-col gap-[52px]">
      <h1 className='font-markot text-white text-desktop/h2'>Full Specifications</h1>
      
      <div className=' flex flex-row bg-[#202020] w-full'>
        
        {/* Left Sidebar */}
        <div className="font-markot w-[300px]">
          <ul className="">
            {tabs.map((tab) => (
              <li
                key={tab.name}
                onClick={() => setSelectedTab(tab.name)}
                className={`flex flex-col justify-center items-start px-[36px] py-[12px] cursor-pointer p-2 text-desktop/body/1 text-grey/grey/3 h-[64px] font-markot ${
                  selectedTab === tab.name ? ' bg-grey/grey/5 border-l-[6px] border-[#FF0037]  bg-fullSpecificationsActiveTabgradient' : 'border-l-[6px] border-transparent bg-[#202020]'
                }`}
              >
                {tab.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content */}
        <div className="font-markot w-full bg-grey/grey/5 text-white pl-8">
          {tabs.find((tab) => tab.name === selectedTab)?.content || (
            <div className="text-center">No content available</div>
          )}
        </div>

      </div>

    </div>
  );
}

export default FullSpecifications;