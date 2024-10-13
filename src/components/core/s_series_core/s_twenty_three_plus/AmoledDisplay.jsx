import React, { useState, useEffect } from 'react';

const AmoledDisplay = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [startVideoAnimation, setStartVideoAnimation] = useState(false);

  const handleScroll = () => {
    const sectionOneHeight = 1600; // Adjust this value as needed
    setStartAnimation(window.scrollY >= sectionOneHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log("startAmoledAnimation", startAnimation);
    if (startAnimation) {
      const startVideo = setTimeout(() => {
        setStartVideoAnimation(true);
      }, 500); // Delay before showing the paragraph

      return () => clearTimeout(startVideo);
    }
  }, [startAnimation]);

  return (
    <div className='amoled-display-section'>
      {startVideoAnimation && (
        <>
        	<div className='amoled-display-section-phone animate-slide-down'>
        		<img src='/s_twenty_three_plus/AmoledDisplayPhone.svg' width={840} height={425} />
        	</div>
        	<div className='amoled-display-section-text animate-slide-up'>
        		<img src='/s_twenty_three_plus/AmoledDisplayText.svg' width={872} height={401} />
        	</div>
        </>
      )}
    </div>
  );
};

export default AmoledDisplay;
