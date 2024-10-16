import React, { useState } from 'react';

const Camera = () => {
  // State to handle the active mode
  const [activeMode, setActiveMode] = useState('super-night-mode');

  // List of camera modes, each with unique background and camera image
  const modes = [
    { id: 'super-night-mode', icon: '🌙', label: 'Super Night Mode', bgImage: '/P_Series/camera2.png', cameraImage: '/P_Series/camera2.png' },
    { id: 'storage-mode', icon: '📦', label: 'Storage Mode', bgImage: '/P_Series/storage.png', cameraImage: '/P_Series/storage.png' },
    { id: 'time-lapse-mode', icon: '⏳', label: 'Time-Lapse Mode', bgImage: '/P_Series/battery.png', cameraImage: '/P_Series/battery.png' },
   
  ];

  const currentMode = modes.find(mode => mode.id === activeMode);

  return (
    <div className="relative w-full h-[749px] flex ">
      
      {/* Background Image that changes */}
      <div 
        className="absolute w-full h-full bg-cover bg-center transition-all duration-300" 
        style={{ backgroundImage: `url(${currentMode?.bgImage})` }}
      />
<div className='content w-full '>
      {/* Static Content - Text and Info */}
      <div className="w-1/2 h-full flex justify-center items-center z-20 text-white"> {/* Increased z-index to ensure visibility */}
        <div className="flex flex-col gap-[48px]">
          <div className="flex flex-col gap-[12px]">
            <h2 className="text-desktop/h2">Mega Storage: <br />
              Multi-task at Ease
            </h2>
            <p className="text-desktop/body/large">
              Unlock endless possibilities with the itel P55 5G's<br /> impressive storage capacity. 
              Store, game, and <br /> multitask without limits.
            </p>
          </div>
          <div className="flex gap-[24px]">
            <div className="flex flex-col border-r-white gap-[8px]">
              <h4 className="text-desktop/h4">12 GB* 6GB + 6GB*</h4>
              <h4 className="text-desktop/h4">Desktop</h4>
              <p className="text-desktop/caption">*With Memory Fusion</p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <h4 className="text-desktop/h4">128 GB</h4>
              <p className="text-desktop/body/large">ROM Storage</p>
            </div>
          </div>
        </div>
      </div>

      {/* Static Hand Image */}
      <div className="absolute right-0 bottom-0 z-10">
        <img 
          src="/P_Series/camera-hand.png" 
          alt="Hand holding the camera" 
          className="w-[400px] md:w-[500px]"
        />
      </div>

      {/* Changing Camera Image inside the hand */}
      <div className="absolute right-[16%] bottom-[26%] z-20">
        <img 
          src={currentMode?.cameraImage} 
          alt={currentMode?.label} 
          className="w-[100px] md:w-[150px] transition-all duration-300"
        />
      </div>

      {/* Icon buttons for selecting modes */}
      <div className="absolute bottom-10 left-10 flex space-x-4 z-30">
        {modes.map((mode) => (
          <div 
            key={mode.id} 
            onMouseEnter={() => setActiveMode(mode.id)} 
            onMouseLeave={() => setActiveMode('super-night-mode')}
            className="flex flex-col items-center cursor-pointer text-white"
          >
            <div className="text-4xl">{mode.icon}</div>
            <span>{mode.label}</span>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Camera;
