import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const HlsPlayer = ({ src, width = '100%', height = 'auto', isMuted }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (!videoRef.current) return; // Ensure videoRef is available

        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(src);
            hls.attachMedia(videoRef.current);

            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                videoRef.current?.play().catch(error => {
                    console.error('Error attempting to play video:', error);
                });
            });

            return () => {
                hls.destroy();
            };
        } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
            // For Safari browsers which support HLS natively
            videoRef.current.src = src;
            videoRef.current.addEventListener('loadedmetadata', () => {
                videoRef.current?.play().catch(error => {
                    console.error('Error attempting to play video:', error);
                });
            });

            return () => {
                videoRef.current.removeEventListener('loadedmetadata', () => {
                    videoRef.current?.play();
                });
            };
        }
    }, [src]);

    return (
        <video
            ref={videoRef}
            controls
            width={width}
            height={height}
            muted={isMuted}
            playsInline={!isMuted}
        />
    );
};

export default HlsPlayer;
