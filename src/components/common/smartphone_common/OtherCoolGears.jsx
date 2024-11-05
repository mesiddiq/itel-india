/* eslint-disable react/prop-types */
const OtherCoolGears = ({ theme = 'light' }) => {
  const isDarkTheme = theme === 'dark';

  return (
    <div className={`content font-markot ${isDarkTheme ? 'bg-[#0A0C08]' : 'bg-white'}`}>
      <div className='flex px-[16px] md:px-0 pt-[40px] pb-[20px]' style={{ marginTop: '0px' }}>
        <h3 className={`text-mobile/h4 md:text-desktop/h3 font-markot ${isDarkTheme ? 'text-[#FFFFFF]' : 'text-black'}`}>
          Take a quick Peep on our other cool gears!
        </h3>
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 px-[16px] md:px-0 pb-[40px] ${isDarkTheme ? 'text-[#F8F6F3]' : 'text-black'}`} style={{ marginTop: '0px' }}>
        <div className={`group col-span-1 md:col-span-2 bg-[#232322] p-[20px] rounded-[16px] h-[258px] relative overflow-hidden ${isDarkTheme ? 'bg-[#232322]' : 'bg-bg/primary/1'}`}>
          <div className='grid grid-cols-2'>
            <div className='col-span-1 w-[200%]'>
              <h3 className={`text-mobile/h5/medium md:text-desktop/h4 font-markot ${isDarkTheme ? 'text-[#FFFFFF]' : 'text-black'} pb-[10px]`}>
                Smart Gadgets, Exquisite Design
              </h3>
              <p className='flex items-center text-mobile/button md:text-desktop/button font-markot'>
                READ MORE <img src='/static_page/homepage/Arrow_right.svg' alt='arrow' className='ml-2 mt-1' />
              </p>
            </div>
            <div className='col-span-1 flex justify-center items-center h-full'>
              <img
                src='/static_page/homepage/EnjoyBetterLifeCol2Bg.png'
                alt="EnjoyBetterLifeCol2Bg"
                className={`max-w-full h-auto absolute bottom-0 right-0 transition-transform duration-300 transform scale-100 group-hover:scale-110 ${isDarkTheme ? 'filter brightness-50' : ''}`}
              />
              <img
                src='/static_page/homepage/OtherCoolGearsCardOne.svg'
                alt="OtherCoolGearsColOne"
                className={`max-w-[50%] md:max-w-auto h-auto absolute bottom-[-15px] right-0 transition-transform duration-300 transform scale-100 group-hover:scale-105`}
              />
              <img
                src='/static_page/homepage/OtherCoolGearsCardOneTwo.svg'
                alt="OtherCoolGearsColOneTwo"
                className={`max-w-[50%] md:max-w-auto h-auto absolute bottom-0 right-32 md:right-44 transition-transform duration-300 transform scale-100 group-hover:scale-105`}
              />
            </div>
          </div>
        </div>

        <div className={`group col-span-1 bg-[#232322] p-[20px] rounded-[16px] h-[258px] relative overflow-hidden ${isDarkTheme ? 'bg-[#232322]' : 'bg-bg/primary/1'}`}>
          <div className='grid grid-cols-2'>
            <div className='col-span-1 w-[200%]'>
              <h3 className={`text-mobile/h5/medium md:text-desktop/h4 font-markot ${isDarkTheme ? 'text-[#FFFFFF]' : 'text-black'} pb-[10px]`}>
                Smart TV, Non-Stop Entertainment
              </h3>
              <p className='flex items-center text-mobile/button md:text-desktop/button font-markot'>
                READ MORE <img src='/static_page/homepage/Arrow_right.svg' alt='arrow' className='ml-2 mt-1' />
              </p>
            </div>
            <div className='col-span-1 flex justify-center items-center h-full'>
              <img
                src='/static_page/homepage/EnjoyBetterLifeCol3Bg.png'
                alt="EnjoyBetterLifeCol3Bg"
                className={`max-w-full h-auto absolute bottom-0 right-0 transition-transform duration-300 transform scale-100 group-hover:scale-110 ${isDarkTheme ? 'filter brightness-50' : ''}`}
              />
              <img
                src='/static_page/homepage/EnjoyBetterLifeCol3.png'
                alt="EnjoyBetterLifeCol3"
                className={`max-w-full h-auto absolute bottom-0 right-5 transition-transform duration-300 transform scale-100 group-hover:scale-105`}
              />
            </div>
          </div>
        </div>

        <div className={`group col-span-1 p-[20px] rounded-[16px] h-[258px] relative overflow-hidden ${isDarkTheme ? 'bg-[#232322]' : 'bg-bg/primary/1'}`}>
          <div className='grid grid-cols-2'>
            <div className='col-span-1 w-[200%]'>
              <h3 className={`text-mobile/h5/medium md:text-desktop/h4 font-markot ${isDarkTheme ? 'text-[#FFFFFF]' : 'text-black'} pb-[10px]`}>
                Feature Phones - <span className='text-mobile/h6 md:text-desktop/h6'>Stay Connected All Day Long</span>
              </h3>
              <p className='flex items-center text-mobile/button md:text-desktop/button font-markot'>
                READ MORE <img src='/static_page/homepage/Arrow_right.svg' alt='arrow' className='ml-2 mt-1' />
              </p>
            </div>
            <div className='col-span-1 flex justify-center items-center h-full'>
              <img
                src='/static_page/homepage/EnjoyBetterLifeCol3Bg.png'
                alt="EnjoyBetterLifeCol3Bg"
                className={`max-w-full h-auto absolute bottom-0 right-0 transition-transform duration-300 transform scale-100 group-hover:scale-110 ${isDarkTheme ? 'filter brightness-50' : ''}`}
              />
              <img
                src='/static_page/homepage/OtherCoolGearsCardThree.svg'
                alt="OtherCoolGearsCardThree"
                className={`max-w-full h-auto absolute bottom-0 transition-transform duration-300 transform scale-100 group-hover:scale-105`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherCoolGears;
