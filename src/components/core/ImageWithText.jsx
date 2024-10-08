import React from 'react';
import Button from '../common/Button';
import image1 from '../../assets/image1.png';
const ImageWithText = () => {
    return (
        <div className='grid grid-cols-2 items-center justify-center max-w-7xl mx-auto'>
            <div className='px-4 lg:px-12'>
                <p className='text-3xl font-bold mb-4'>
                    Transform Every Moment with itel's Family-Friendly Smart TVs!
                </p>
                <p className='text-lg mb-4'>Experience high-quality entertainment for every generation
                    — all at a budget-friendly price.</p>
                <Button btnLabel="Explore TV" />
            </div>
            <div className='flex justify-center items-center'>
                <img src={image1} alt="kjgn" className='w-full h-full object-cover' />
            </div>
        </div>
    );
};

export default ImageWithText;
