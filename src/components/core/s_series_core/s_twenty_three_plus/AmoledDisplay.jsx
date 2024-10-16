import React, { useState, useEffect } from 'react';

const AmoledDisplay = (props) => {
  const { scrollY } = props;
  const [startAnimation, setStartAnimation] = useState(false);
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    if (screen.width > 1000) {
      setStartAnimation(scrollY >= 2700);
    } else {
      setStartAnimation(scrollY >= 1900);
    }
  }, [scrollY]);

  useEffect(() => {
    console.log("startAmoledAnimation", startAnimation);
    if (startAnimation) {
      const startVideo = setTimeout(() => {
        setShowImages(true);
      }, 500); // Delay before showing the paragraph

      return () => clearTimeout(startVideo);
    }
  }, [startAnimation]);

  return (
    <div className='amoled-display-section'>
      {showImages && (
        <>
        	<div className='amoled-display-section-phone'>
        		<img src='/s_twenty_three_plus/AmoledDisplayPhone.svg' width={840} height={425} />
        	</div>
        	<div className='amoled-display-section-text'>
        		<img src='/s_twenty_three_plus/AmoledDisplayText.svg' width={872} height={401} />
        	</div>
        </>
      )}
    </div>
  );
};

export default AmoledDisplay;
