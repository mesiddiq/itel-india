import React, { useState } from 'react';

const Camera = () => {
  const [activeImage, setActiveImage] = useState('super-night-mode');

  const modes = [
    { id: 'super-night-mode', icon: '🌙', label: 'Super Night Mode', bgImage: '/P_Series/camera2.png', cameraImage: '/P_Series/camera-hand.png' },
    { id: 'time-lapse-mode', icon: '⏳', label: 'Time-Lapse Mode', bgImage: 'bg-timelapse.png', cameraImage: 'camera-timelapse.png' },
    { id: 'panorama-mode', icon: '📸', label: 'Panorama Mode', bgImage: 'bg-panorama.png', cameraImage: 'camera-panorama.png' },
    { id: 'pro-mode', icon: '📷', label: 'Pro Mode', bgImage: 'bg-pro.png', cameraImage: 'camera-pro.png' }
  ];

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
     
      <div 
        className="absolute w-full h-full bg-cover bg-center transition-all duration-300" 
        style={{ backgroundImage: `url(/P_Series/${activeImage}.png)` }}
      />
      
    
      <div className="relative z-10">
        <img 
          src={`/P_Series/${activeImage}-camera.png`} 
          alt="Camera" 
          className="w-[300px] md:w-[400px] transition-all duration-300"
        />
      </div>

   
      <div className="absolute bottom-10 left-10 flex space-x-4 z-20">
        {modes.map((mode) => (
          <div 
            key={mode.id} 
            onMouseEnter={() => setActiveImage(mode.id)} 
            onMouseLeave={() => setActiveImage('super-night-mode')}
            className="flex flex-col items-center cursor-pointer text-white"
          >
            <div className="text-4xl">{mode.icon}</div>
            <span>{mode.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Camera;
