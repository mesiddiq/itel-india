import React, { useRef } from 'react';
import ReactPlayer from 'react-player';

const VideoComponent = () => {

	return (
		<div className="relative">
			<ReactPlayer
				url={["/videos/s23specials.webm"]}
				className="w-full h-auto"
				playing
				muted
				loop
				width="100%"
				height="100%"
				on
			/>
		</div>
	);
};


export default VideoComponent;
