import React from 'react';

import Marquee from "react-fast-marquee";
import ReactPlayer from 'react-player'

import AmoledDisplayText from '../../../../images/s_series/s_twenty_three_plus/AmoledDisplayText.svg';
import AmoledDisplayPhone from '../../../../images/s_series/s_twenty_three_plus/AmoledDisplayPhone.svg';

import '../../../../pages/s_series/style.css';

const AmoledDisplay = () => {
  return (
    <div className='amoled-display-section'>
    	<div className='amoled-display-section-phone'>
    		<img src={AmoledDisplayPhone} width={840} height={425} />
    	</div>
    	<div className='amoled-display-section-text'>
    		<img src={AmoledDisplayText} width={872} height={401} />
    	</div>
    </div>
  );
};

export default AmoledDisplay;
