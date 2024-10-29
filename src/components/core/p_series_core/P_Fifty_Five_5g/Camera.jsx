import react, {useState} from 'react';
const Camera = () => {
  const [activeMode, setActiveMode] = useState('super-night-mode');

  const modes = [
    { id: 'super-night-mode', icon: '/SmartPhone/P55fiveg/Backgrounds/icon1.png', label: 'Super Night Mode', bgImage: '/SmartPhone/P55fiveg/Backgrounds/CameraBG1.png', cameraImage: '/SmartPhone/P55fiveg/Backgrounds/supernight.png' ,mobileImage:'/SmartPhone/P55fiveg/Backgrounds/camerabg_hori.png'},
    { id: 'storage-mode', icon: '/SmartPhone/P55fiveg/Backgrounds/icon2.png', label: 'Storage Mode', bgImage: '/SmartPhone/P55fiveg/Backgrounds/CameraBG2.png', cameraImage: '/SmartPhone/P55fiveg/Backgrounds/timelapse.png' ,mobileImage:'/SmartPhone/P55fiveg/Backgrounds/camerabg2_hori.png'},
    { id: 'time-lapse-mode', icon: '/SmartPhone/P55fiveg/Backgrounds/icon3.png', label: 'Time-Lapse Mode', bgImage: '/SmartPhone/P55fiveg/Backgrounds/CameraBG3.png', cameraImage: '/SmartPhone/P55fiveg/Backgrounds/panorama.png',mobileImage:'/SmartPhone/P55fiveg/Backgrounds/camerabg3_hori.png' },
    { id: 'time-mode', icon: '/SmartPhone/P55fiveg/Backgrounds/icon4.png', label: 'Time Mode', bgImage: '/SmartPhone/P55fiveg/Backgrounds/CameraBG4.png', cameraImage: '/SmartPhone/P55fiveg/Backgrounds/pro.png',mobileImage:'/SmartPhone/P55fiveg/Backgrounds/camerabg4_hori.png' },
  ];

  const currentMode = modes.find(mode => mode.id === activeMode);

  return (
    <div className="relative w-full h-[749px] flex bg-cover bg-center" style={{ backgroundImage: `url(${currentMode?.bgImage})` }}>
      <div className='content w-full h-full  flex-col md:flex-row hidden lg:flex'>

        {/* Left Side: Text Content */}
        <div className="w-1/2 h-full flex justify-center items-center text-white">
          <div className="flex flex-col gap-8 items-start justify-center px-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-5xl font-bold">Next-Level Camera Experience</h2>
              <p className="font-markot text-base md:text-lg leading-relaxed">
              Capture epic moments and stunning selfies with the itel P55 5G's cutting-edge camera setup. With a 50MP+AI dual rear camera and an 8MP front camera, every shot is Instagram-worthy.
              </p>
            </div>

            {/* Mode Selection Icons */}
            <div className="flex space-x-4 mt-6">
              {modes.map((mode) => (
                <div 
                  key={mode.id} 
                  onMouseEnter={() => setActiveMode(mode.id)} 
                  onMouseLeave={() => setActiveMode('super-night-mode')}
                  className="flex flex-col gap-[24px] cursor-pointer text-white"
                >
                  <img src={mode.icon} alt={mode.label} className="w-12 h-12" />
                  <h6 className='text-desktop/h6/medium'>{mode.label}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Hand and Camera Images */}
        <div className="w-1/2 h-full relative flex justify-end items-end">
        
  {/* Hand Image */}
  <div className="relative w-full h-full">
    <img 
      src="/SmartPhone/P55fiveg/Backgrounds/hand2.png" 
      alt="Hand holding the camera" 
      className="absolute right-0 top-0 h-full object-cover" // Use absolute positioning
    />
            {/* Camera Image Inside Hand */}
            <div className="absolute right-[38%] bottom-[26%] z-20">
              <img 
                src={currentMode?.cameraImage} 
                alt={currentMode?.label} 
                className="w-[180px] h-[374px] transition-all duration-300 rounded-[8px]"
              />
            </div>
          </div>
          </div>
      </div>
<div className='h-full w-full content bg-black flex flex-col items-center justify-center lg:hidden' >
<div className="flex flex-col gap-4 text-center items-center justify-center px-4">
              <h2 className="text-mobile/h4">Next-Level Camera <br/> Experience</h2>
              <p className="font-markot text-desktop/body/2/regular leading-relaxed">
              Capture epic moments and stunning selfies with the itel P55 5G's cutting-edge camera setup. With a 50MP+AI dual rear camera and an 8MP front camera, every shot is Instagram-worthy.
              </p>
            </div>
            <div className="w-full h-[254px] sm:h-[454px] flex bg-cover bg-center py-4" >
              <img src={currentMode?.mobileImage} className='w-full h-full bg-cover'></img>
</div>
<div className="flex flex-wrap items-center justify-center gap-[12px] mt-6">
              {modes.map((mode) => (
                <div 
                  key={mode.id} 
                  onMouseEnter={() => setActiveMode(mode.id)} 
                  onMouseLeave={() => setActiveMode('super-night-mode')}
                  className="flex flex-col items-center gap-[24px] py-4 cursor-pointer text-white"
                >
                  <img src={mode.icon} alt={mode.label} className="w-12 h-12" />
                  <h7 className='text-desktop/h7'>{mode.label}</h7>
                </div>
              ))}
            </div>
</div>
    </div>
  );
};

export default Camera;
