import React, { useState } from 'react';

function LazyImage({ mainSrc, alternateSrc, alt = 'Image' }) {
    const [isMainLoaded, setIsMainLoaded] = useState(false);

    // Handler for when the main image loads
    const handleMainImageLoad = () => {
        setIsMainLoaded(true);
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
            {/* Alternate image (shown until main image is loaded) */}
            {!isMainLoaded && (
                <img
                    src={alternateSrc}
                    alt={`${alt} placeholder`}
                    style={{ width: '100%', height: 'auto', position: 'absolute', top: 0, left: 0 }}
                />
            )}

            {/* Main image (visible once loaded) */}
            <img
                src={mainSrc}
                alt={alt}
                onLoad={handleMainImageLoad}
                style={{
                    width: '100%',
                    height: 'auto',
                    opacity: isMainLoaded ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out',
                }}
            />
        </div>
    );
}

export default LazyImage;
