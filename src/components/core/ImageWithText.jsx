import React from 'react';
import Button from '../common/Button';
import image1 from '../../assets/image1.png';
const ImageWithText = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto'>
            <div className='px-8 lg:px-12'>
                <p className='text-3xl font-bold mb-4'>
                    Transform Every Moment with itel's Family-Friendly Smart TVs!
                </p>
                <p className='text-lg mb-4'>Experience high-quality entertainment for every generation
                    — all at a budget-friendly price.</p>
                <Button btnLabel="Explore TV" />
            </div>
            <div className='flex justify-center items-center'>
                <img src={image1} alt="image1" className='w-full h-full object-cover' />
            </div>
        </div>
    );
};

export default ImageWithText;
