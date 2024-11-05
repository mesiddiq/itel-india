import react, {useState} from 'react';
const Camera = () => {
  const [activeMode, setActiveMode] = useState('super-night-mode');

  const modes = [
    { id: 'super-night-mode', 
      svgPath: (<svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
        <path d="M23.5226 45.8636C11.1514 45.8636 1.09082 35.8031 1.09082 23.4318C1.09082 11.0605 11.157 1 23.5226 1C35.8882 1 45.9545 11.0605 45.9545 23.4318C45.9545 35.8031 35.8939 45.8636 23.5226 45.8636ZM23.5226 1.70969C11.5431 1.70969 1.80051 11.4523 1.80051 23.4318C1.80051 35.4114 11.5431 45.154 23.5226 45.154C35.5022 45.154 45.2448 35.4114 45.2448 23.4318C45.2448 11.4523 35.5022 1.70969 23.5226 1.70969Z" fill="#CECCD5" stroke="#CECCD5" stroke-width="0.534091"/>
        <path d="M23.4318 45.8636C11.0605 45.8636 1 35.8031 1 23.4318C1 11.0605 11.0662 1 23.4318 1C35.7974 1 45.8636 11.0605 45.8636 23.4318C45.8636 35.8031 35.8031 45.8636 23.4318 45.8636Z" fill={activeMode === 'super-night-mode' ? "white" : "none"}/>
        <path d="M23.5208 33.3462C18.0534 33.3462 13.6079 28.9007 13.6079 23.4332C13.6079 18.965 16.6227 15.0362 20.9376 13.8723L21.9198 13.6055L21.3123 14.423C20.1711 15.9673 19.5636 17.7898 19.5636 19.6918C19.5636 24.5858 23.5435 28.56 28.4319 28.56C29.5049 28.56 30.5723 28.3613 31.5999 27.9639L32.5537 27.6005L32.0314 28.4805C30.2487 31.4783 26.9841 33.3405 23.5095 33.3405L23.5208 33.3462ZM20.1711 14.8716C16.6794 16.2342 14.3176 19.6236 14.3176 23.4332C14.3176 28.5089 18.4451 32.6365 23.5208 32.6365C26.4107 32.6365 29.1416 31.2455 30.8732 28.9574C30.0783 29.1675 29.2608 29.2754 28.4432 29.2754C23.1631 29.2754 18.8596 24.9775 18.8596 19.6974C18.8596 17.9885 19.3081 16.3363 20.1711 14.8716Z" fill={activeMode === 'super-night-mode' ? "black" : "white"}/>
        <path d="M29.812 15.9152C30.1016 16.3354 30.4649 16.7044 30.8907 16.994C30.4706 17.2835 30.1016 17.6469 29.812 18.0727C29.5225 17.6525 29.1591 17.2835 28.7333 16.994C29.1534 16.7044 29.5225 16.341 29.812 15.9152ZM29.812 13.9395L29.795 13.9565C29.636 15.5462 28.3699 16.8123 26.7802 16.9712L26.7632 16.9883L26.7802 17.0053C28.3699 17.1643 29.636 18.4304 29.795 20.0201L29.812 20.0371L29.829 20.0201C29.988 18.4304 31.2541 17.1643 32.8438 17.0053L32.8608 16.9883L32.8438 16.9712C31.2541 16.8123 29.988 15.5462 29.829 13.9565L29.812 13.9395Z" fill="#050036"/>
        <path d="M24.2085 19.8461C24.4356 20.1754 24.7195 20.4593 25.0488 20.6864C24.7195 20.9135 24.4356 21.1974 24.2085 21.5266C23.9814 21.1974 23.6976 20.9135 23.3683 20.6864C23.6976 20.4593 23.9814 20.1754 24.2085 19.8461ZM24.2085 18.2734L24.1972 18.2848C24.0723 19.5452 23.0674 20.5444 21.8126 20.6693L21.8013 20.6807L21.8126 20.6921C23.073 20.817 24.0723 21.8219 24.1972 23.0766L24.2085 23.088L24.2199 23.0766C24.3448 21.8162 25.3497 20.817 26.6044 20.6921L26.6158 20.6807L26.6044 20.6693C25.344 20.5444 24.3448 19.5395 24.2199 18.2848L24.2085 18.2734Z" fill="#050036"/>
        <path d="M28.3222 24.4268C28.4982 24.6823 28.7197 24.9094 28.9808 25.0854C28.7253 25.2614 28.4982 25.4829 28.3222 25.744C28.1462 25.4885 27.9248 25.2614 27.6637 25.0854C27.9191 24.9094 28.1462 24.688 28.3222 24.4268ZM28.3222 23.2402L28.3109 23.2516C28.2144 24.2168 27.4479 24.9776 26.4884 25.0741L26.4771 25.0854L26.4884 25.0968C27.4536 25.1933 28.2144 25.9598 28.3109 26.9193L28.3222 26.9306L28.3336 26.9193C28.4301 25.9541 29.1966 25.1933 30.1561 25.0968L30.1674 25.0854L30.1561 25.0741C29.1909 24.9776 28.4301 24.2111 28.3336 23.2516L28.3222 23.2402Z" fill="#050036"/>
        </svg>),
       label: 'Super Night Mode', 
       bgImage: '/smartphone/P55fiveg/Backgrounds/CameraBG1.png', 
       cameraImage: '/smartphone/P55fiveg/Backgrounds/supernight.png' ,
       mobileImage:'/smartphone/P55fiveg/Backgrounds/camerabg_hori.png'},
    { 
      id: 'storage-mode', 
      svgPath: (
<svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill={activeMode === 'storage-mode' ? "white" : "none"}>
<path d="M23.341 45.8636C10.9697 45.8636 0.90918 35.8031 0.90918 23.4318C0.90918 11.0605 10.9754 1 23.341 1C35.7066 1 45.7728 11.0605 45.7728 23.4318C45.7728 35.8031 35.7123 45.8636 23.341 45.8636ZM23.341 1.70969C11.3615 1.70969 1.61887 11.4523 1.61887 23.4318C1.61887 35.4114 11.3615 45.154 23.341 45.154C35.3205 45.154 45.0631 35.4114 45.0631 23.4318C45.0631 11.4523 35.3205 1.70969 23.341 1.70969Z" fill={activeMode === 'storage-mode' ? "white" : "none"} stroke={activeMode === 'super-night-mode' ? "white" : "white"} stroke-width="0.534091"/>
<path d="M33.161 24.6445C33.161 29.9856 28.8264 34.3203 23.4855 34.3203C18.1447 34.3203 13.8101 29.9856 13.8101 24.6445C13.8101 19.3035 18.1447 14.9688 23.4855 14.9688C28.8264 14.9688 33.161 19.3035 33.161 24.6445Z" stroke="#CECCD5" stroke-width="1.28182" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.4868 18.8398V24.3689" stroke="#CECCD5" stroke-width="1.28182" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.1699 12.2051H26.8045" stroke="#CECCD5" stroke-width="1.28182" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


      ),
       label: 'Storage Mode', 
       bgImage: '/smartphone/P55fiveg/Backgrounds/CameraBG2.png',
        cameraImage: '/smartphone/P55fiveg/Backgrounds/timelapse.png' ,
        mobileImage:'/smartphone/P55fiveg/Backgrounds/camerabg2_hori.png'},
    { id: 'time-lapse-mode',
       svgPath: (<svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill={activeMode === 'time-lapse-mode' ? "white" : "none"}>
        <path d="M23.2184 45.8C10.8646 45.8 0.818359 35.7537 0.818359 23.4C0.818359 11.0463 10.8703 1 23.2184 1C35.5664 1 45.6184 11.0463 45.6184 23.4C45.6184 35.7537 35.5721 45.8 23.2184 45.8ZM23.2184 1.70868C11.2558 1.70868 1.52704 11.4375 1.52704 23.4C1.52704 35.3625 11.2558 45.0913 23.2184 45.0913C35.1809 45.0913 44.9097 35.3625 44.9097 23.4C44.9097 11.4375 35.1809 1.70868 23.2184 1.70868Z" fill={activeMode === 'time-lapse-mode' ? "white" : "none"}/>
        <path d="M23.4318 45.8636C11.0605 45.8636 1 35.8031 1 23.4318C1 11.0605 11.0662 1 23.4318 1C35.7974 1 45.8636 11.0605 45.8636 23.4318C45.8636 35.8031 35.8031 45.8636 23.4318 45.8636ZM23.4318 1.70969C11.4523 1.70969 1.70969 11.4523 1.70969 23.4318C1.70969 35.4114 11.4523 45.154 23.4318 45.154C35.4114 45.154 45.154 35.4114 45.154 23.4318C45.154 11.4523 35.4114 1.70969 23.4318 1.70969Z" fill={activeMode === 'time-lapse-mode' ? "white" : "none"} stroke="#CECCD5" stroke-width="0.534091"/>
        <path d="M35.0233 15.7251C27.4115 12.8781 19.0285 12.8781 11.4167 15.7251L11.1465 15.824V30.9818L11.4167 31.0806C15.2193 32.5041 19.2197 33.2159 23.22 33.2159C27.2203 33.2159 31.2141 32.5041 35.0233 31.0806L35.2935 30.9818V15.824L35.0233 15.7251ZM34.4697 16.3973V26.3158L27.8333 21.5773L21.1309 26.5201L16.8603 23.449L11.9769 26.7376V16.3973C19.2394 13.7546 27.2072 13.7546 34.4697 16.3973ZM11.9769 30.4084V27.7327L16.8471 24.4573L21.1441 27.5416L27.8464 22.5988L34.4763 27.3307V30.4084C27.2137 33.0511 19.246 33.0511 11.9835 30.4084H11.9769Z" fill={activeMode === 'time-lapse-mode' ? "white" : "none"} stroke="#CECCD5" stroke-width="0.5"/>
        <path d="M20.141 22.493C21.6107 22.493 22.8035 21.3001 22.8035 19.8305C22.8035 18.3608 21.6107 17.168 20.141 17.168C18.6714 17.168 17.4785 18.3608 17.4785 19.8305C17.4785 21.3001 18.6714 22.493 20.141 22.493ZM20.141 17.9918C21.1559 17.9918 21.9797 18.8156 21.9797 19.8305C21.9797 20.8454 21.1559 21.6692 20.141 21.6692C19.1261 21.6692 18.3023 20.8454 18.3023 19.8305C18.3023 18.8156 19.1261 17.9918 20.141 17.9918Z" fill={activeMode === 'time-lapse-mode' ? "white" : "none"} stroke="#CECCD5"/>
        </svg>),
        label: 'Time-Lapse Mode',
         bgImage: '/smartphone/P55fiveg/Backgrounds/CameraBG3.png',
          cameraImage: '/smartphone/P55fiveg/Backgrounds/panorama.png',
          mobileImage:'/smartphone/P55fiveg/Backgrounds/camerabg3_hori.png' },
    { id: 'time-mode',
       svgPath: (<svg key={activeMode === 'time-mode' ? 'active' : 'inactive'} xmlns="http://www.w3.org/2000/svg" width="46" height="47" viewBox="0 0 46 47" fill={activeMode === 'time-mode' ? "white" : "none"}>
        <path d="M0.727051 23.4015C0.727051 11.0469 10.774 1 23.1285 1C35.4831 1 45.53 11.0469 45.53 23.4015C45.53 35.756 35.4831 45.803 23.1285 45.803C10.774 45.803 0.727051 35.756 0.727051 23.4015ZM44.8213 23.4015C44.8213 11.4382 35.0919 1.70873 23.1285 1.70873C11.1652 1.70873 1.43578 11.4382 1.43578 23.4015C1.43578 35.3648 11.1652 45.0942 23.1285 45.0942C35.0919 45.0942 44.8213 35.3648 44.8213 23.4015Z" fill={activeMode === 'time-mode' ? "white" : "none"} stroke="#CECCD5" stroke-width="0.62574"/>
        <path d="M13.8853 19.0008C15.5352 15.5478 19.0505 13.1552 23.1271 13.1552C27.2037 13.1552 30.719 15.5535 32.3689 19.0008H33.1117C31.4164 15.168 27.5779 12.4805 23.1271 12.4805C18.6763 12.4805 14.8379 15.168 13.1426 19.0008H13.8853Z" fill={activeMode === 'time-mode' ? "white" : "none"} stroke="#CECCD5" stroke-width="0.876035"/>
        <path d="M31.7162 28.9688C29.8849 31.781 26.7211 33.652 23.1264 33.652C19.5318 33.652 16.3623 31.7867 14.5366 28.9688H13.7485C15.6536 32.1665 19.1405 34.321 23.1264 34.321C27.1123 34.321 30.5992 32.1665 32.5043 28.9688H31.7162Z" fill={activeMode === 'time-mode' ? "white" : "none"} stroke="#CECCD5" stroke-width="0.876035"/>
        <path d="M8.59496 16.7498C8.47023 16.7498 8.36816 16.6477 8.36816 16.523V13.5236C8.36816 13.3989 8.47023 13.2969 8.59496 13.2969H11.5943C11.719 13.2969 11.8211 13.3989 11.8211 13.5236C11.8211 13.6483 11.719 13.7504 11.5943 13.7504H8.81608V16.5286C8.81608 16.6534 8.71402 16.7555 8.58929 16.7555L8.59496 16.7498Z" fill={activeMode === 'time-mode' ? "#CECCD5" : "none"} stroke="#CECCD5" stroke-width="0.876035"/>
        <path d="M37.6529 16.7498C37.7776 16.7498 37.8797 16.6477 37.8797 16.523V13.5236C37.8797 13.3989 37.7776 13.2969 37.6529 13.2969H34.6535C34.5288 13.2969 34.4268 13.3989 34.4268 13.5236C34.4268 13.6483 34.5288 13.7504 34.6535 13.7504H37.4318V16.5286C37.4318 16.6534 37.5338 16.7555 37.6586 16.7555L37.6529 16.7498Z" fill={activeMode === 'time-mode' ? "white" : "none"} stroke="#CECCD5" stroke-width="0.876035"/>
        <path d="M8.59496 30.0565C8.47023 30.0565 8.36816 30.1585 8.36816 30.2833V33.2826C8.36816 33.4074 8.47023 33.5094 8.59496 33.5094H11.5943C11.719 33.5094 11.8211 33.4074 11.8211 33.2826C11.8211 33.1579 11.719 33.0558 11.5943 33.0558H8.81608V30.2776C8.81608 30.1529 8.71402 30.0508 8.58929 30.0508L8.59496 30.0565Z" fill={activeMode === 'time-mode' ? "white" : "none"} stroke="#CECCD5" stroke-width="0.876035"/>
        <path d="M37.6529 30.0565C37.7776 30.0565 37.8797 30.1585 37.8797 30.2833V33.2826C37.8797 33.4074 37.7776 33.5094 37.6529 33.5094H34.6535C34.5288 33.5094 34.4268 33.4074 34.4268 33.2826C34.4268 33.1579 34.5288 33.0558 34.6535 33.0558H37.4318V30.2776C37.4318 30.1529 37.5338 30.0508 37.6586 30.0508L37.6529 30.0565Z" fill={activeMode === 'time-mode' ? "white" : "none"} stroke="#CECCD5" stroke-width="0.876035"/>
        </svg>), 
       label: 'Time Mode',
        bgImage: '/smartphone/P55fiveg/Backgrounds/CameraBG4.png', 
        cameraImage: '/smartphone/P55fiveg/Backgrounds/pro.png',
        mobileImage:'/smartphone/P55fiveg/Backgrounds/camerabg4_hori.png' },
        
  ];

  const currentMode = modes.find(mode => mode.id === activeMode);

  return (
    <div className="relative overflow-hidden w-full h-[900px] md:h-[770px] font-markot flex bg-cover bg-center" style={{ backgroundImage: `url(${currentMode?.bgImage})` }}>
      <div className='content w-full h-full  flex-col md:flex-row hidden lg:flex'>

        {/* Left Side: Text Content */}
        <div className="w-1/2 h-full flex justify-center items-center text-white">
          <div className="flex flex-col gap-8 justify-around h-full">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-5xl font-bold">Next-Level Camera Experience</h2>
              <p className="font-markot text-base leading-relaxed lg:w-[500px]">
              Capture epic moments and stunning selfies with the itel P55 5G's cutting-edge camera setup. With a 50MP+AI dual rear camera and an 8MP front camera, every shot is Instagram-worthy.
              </p>
            </div>

            {/* Mode Selection Icons */}
            <div className='flex flex-col gap-[42px]'>
            <div className="flex space-x-4 mt-6 lg:w-[525px]">
              {modes.map((mode) => (
                <div 
                  key={mode.id} 
                  onMouseEnter={() => setActiveMode(mode.id)} 
                  onMouseLeave={() => setActiveMode('super-night-mode')}
                  className="flex flex-col gap-[24px] cursor-pointer text-white"
                >
                      <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            className="mode-icon"
           fill= {activeMode === 'time-mode' ? "white" : "none"}
          >{mode.svgPath}</svg>
                  <h6 className='text-desktop/h6/medium'>{mode.label}</h6>
                </div>
              ))}
            </div>
            <div className=''>
              <p className='md:text-desktop/caption text-center md:text-left text-mobile/body/large'>Dual Video Mode | Document | 2K Video Recording | Slow Motion Mode | Film Mode | AR Shots  </p>
            </div>
          </div>
    </div></div>

        {/* Right Side: Hand and Camera Images */}
        <div className="w-1/2 h-full relative flex justify-end items-end">
        
  {/* Hand Image */}
  <div className="relative h-full w-full ">
    <img 
      src="/smartphone/P55fiveg/Backgrounds/camera-hand.png" 
      alt="Hand holding the camera" 
      className="absolute -right-20 bottom-0 object-contain" // Use absolute positioning
    />
            {/* Camera Image Inside Hand */}
            <div className="absolute right-[45%] bottom-[27%] z-20">
              <img 
                src={currentMode?.cameraImage} 
                alt={currentMode?.label} 
                className="w-[200px] h-[424px] transition-all duration-300 rounded-[18px]"
              />
            </div>
          </div>
          </div>
      </div>
<div className='h-full py-4 w-full bg-black flex flex-col items-center gap-8 justify-center lg:hidden' >
<div className="flex flex-col gap-4 text-center items-center justify-center px-4">
              <h2 className="text-white text-mobile/h4 ">Next-Level Camera <br/> Experience</h2>
              <p className="text-white font-markot text-desktop/body/2/regular leading-relaxed">
              Capture epic moments and stunning selfies with the itel P55 5G's cutting-edge camera setup. With a 50MP+AI dual rear camera and an 8MP front camera, every shot is Instagram-worthy.
              </p>
            </div>
            <div className="w-full h-[254px] sm:h-[454px] flex bg-cover bg-center py-4" >
              <img src={currentMode?.mobileImage} className='w-full h-full object-cover'></img>
</div>
<div className="flex flex-wrap items-center justify-center gap-[12px] mt-6">
              {modes.map((mode) => (
                <div 
                  key={mode.id} 
                  onMouseEnter={() => setActiveMode(mode.id)} 
                  onMouseLeave={() => setActiveMode('super-night-mode')}
                  className="flex flex-col items-center gap-[24px] py-4 cursor-pointer text-white"
                >
                   <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            className="mode-icon"
          >{mode.svgPath}</svg>
                  <h7 className='text-desktop/h7'>{mode.label}</h7>
                </div>
              ))}
              <p className='text-white text-center px-4 opacity-70 text-mobile/body/large'>Dual Video Mode | Document | 2K Video Recording | Slow Motion Mode | Film Mode | AR Shots  </p>
            </div>
</div>
    </div>
  );
};

export default Camera;
